import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Video } from "expo-av";
import { Entypo } from "@expo/vector-icons";

const App = () => {
  const videoRef = React.useRef(null);
  return (
    <>
      <View style={styles.container}>
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
        <SafeAreaView>
          <View style={[styles.flexBox, { paddingHorizontal: 20 }]}>
            <Text style={styles.textStyle}>Reels</Text>
            <Entypo name="camera" size={24} color="#fff" />
          </View>
        </SafeAreaView>
        <View style={styles.bottomView}>
          <View style={[styles.flexBox, { justifyContent: "flex-start" }]}>
            <Image
              source={{
                uri: "https://img.icons8.com/plasticine/100/null/name.png",
              }}
              style={{
                height: 45,
                width: 45,
              }}
            />
            <Text
              style={[
                styles.textStyle,
                { color: "#000", marginHorizontal: 10 },
              ]}
            >
              Ansh Modi
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: "#fff", borderRadius: 10, padding: 5 }}
            >
              <Text style={[styles.textStyle, { color: "#000" }]}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.flexBox, { justifyContent: "center" }]}>
            <Text
              style={[
                styles.textStyle,
                {
                  color: "#000",
                  marginLeft: 10,
                  fontSize: 14,
                  fontWeight: "400",
                  flex: 1,
                },
              ]}
              numberOfLines={1}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quo doloribus inventore modi repudiandae accusamus fugiat
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textStyle,
                  {
                    color: "#000",
                    fontSize: 15,
                    fontWeight: "500",
                  },
                ]}
              >
                More
              </Text>
            </TouchableOpacity>
          </View>
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
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
});
