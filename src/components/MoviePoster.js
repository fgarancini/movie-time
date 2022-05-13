import React from "react";
import {StyleSheet, Image } from "react-native";
const MoviePoster = ({ Poster }) => {
  return <Image style={style.poster} source={{ uri: Poster }} />;
};

const style = StyleSheet.create({
  poster: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.7,
    resizeMode: "cover",
    overflow:"hidden",
    borderRadius:10
  },
});
export default MoviePoster;
