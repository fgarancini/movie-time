import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import DoubleClick from "react-native-double-tap";
import { useDispatch } from "react-redux";
import { newFavorite } from "../../slices/favoriteSlice";
import MoviePoster from "./MoviePoster";

const MovieImage = ({ imdbID, Title, Poster }) => {
  const dispatch = useDispatch();
  const [Faved, setFaved] = useState(false);

  const onMoviePress = () => {
    Alert.alert("Faved!");
    setFaved(true);
    dispatch(newFavorite({ imdbID, faved: true }));
  };

  return (
    <View key={imdbID} style={style.container}>
      <Text style={style.title}>{Title}</Text>
      <TouchableOpacity>
        <DoubleClick doubleTap={() => onMoviePress()}>
          <MoviePoster Poster={Poster} />
        </DoubleClick>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 35,
    paddingBottom: 5,
    paddingTop: 5,
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    margin:10,
    textAlign:"center"
  
  },
});
export default MovieImage;
