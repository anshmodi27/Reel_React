import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";

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
          useNativeControls={true}
          volume={1}
          muted={false}
          resizeMode="cover"
        />
        <View style={styles.flexBox}>
          <Text>Reels</Text>
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
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 16,
  },
});
