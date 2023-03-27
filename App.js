import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { height, width } = Dimensions.get("window");

const App = () => {
  const videoRef = React.useRef(null);
  const [data, setData] = React.useState([]);
  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  React.useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <SwiperFlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <Video
                ref={videoRef}
                source={{
                  uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                posterSource={{
                  uri: "https://wallpapers.com/images/featured/cartoon-iphone-dubzue0ncd7tr0m7.jpg",
                }}
                posterStyle={{ resizeMode: "cover" }}
                style={styles.backgroundVideo}
                rate={1}
                shouldPlay={true}
                volume={1}
                muted={false}
                resizeMode="cover"
              />
            </View>
          )}
        />
        <View style={{ position: "absolute", top: 40, left: 16 }}>
          <Text style={styles.textStyle}>Reels</Text>
        </View>
        <View style={{ position: "absolute", top: 40, right: 16 }}>
          <Entypo name="camera" size={24} color="#fff" />
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundVideo: {
    height: height,
    width: width,
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
});
