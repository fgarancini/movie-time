import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Container = ({ children }) => {
  return (
    <LinearGradient
      colors={[
        "rgba(21, 101, 192,.3)","rgba(185, 43, 39,.4)"
      ]}
      start={{ x: .1, y: 0.2 }}
      style={styles.gardient}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gardient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
    paddingTop:35
  },
});

export default Container;
