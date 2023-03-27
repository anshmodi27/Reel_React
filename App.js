import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
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
          <View>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=1380&t=st=1679938718~exp=1679939318~hmac=c7f0bdf7da06d383d0e7a121304547174f972ccf37b472735e4f4299b9c804d0",
              }}
              style={{ height: 50, width: 50, borderRadius: 10 }}
            />
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
