import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";

const App = () => {
  const videoRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        // source={{
        //   uri: "https://youtu.be/cEvsnYt3FIk?t=3207",
        // }}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        style={styles.backgroundVideo}
        rate={1}
        shouldPlay={true}
        useNativeControls={true}
        volume={1}
        muted={false}
        resizeMode="cover"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
});
