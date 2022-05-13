import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Container from "./Container";
import MoviePoster from "./MoviePoster";

const MovieFullSpec = ({ route }) => {
  const fullInfo = route.params;
  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    imdbID,
    Poster,
  } = { ...fullInfo };
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", marginTop:50 }}>
        <MoviePoster Poster={Poster} />
        <Text style={style.title}>
          {Title} ({Year})
        </Text>
        <Text style={style.plot}>{Plot}</Text>
        <Text style={style.misc}>Genre:</Text>
        <Text>{Genre}</Text>
        <Text style={style.misc}>Runtime:</Text>
        <Text>{Runtime}</Text>
        <Text style={style.misc}>Director:</Text>
        <Text>{Director}</Text>
        <Text style={style.misc}>Writer:</Text>
        <Text>{Writer}</Text>
        <Text style={style.misc}>Actors:</Text>
        <Text>{Actors}</Text>
        <Text style={style.misc}>Realeased:</Text>
        <Text>{Released}</Text>
      </ScrollView>
    </Container>
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
    marginTop: 15,
    fontWeight: "bold",
  },
  poster: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.7,
    resizeMode: "contain",
  },
  plot: {
    padding: 20,
    fontSize: 15,
  },
  misc: {
    fontWeight: "bold",
    margin: 5,
  },
});
export default MovieFullSpec;
