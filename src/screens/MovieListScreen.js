import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/omdbapi";
import Container from "../components/Container";
import MovieImage from "../components/MovieImage";

const MovieListScreen = () => {
  const { search } = useSelector((state) => state.searchSlice);

  const { data: movies, isFetching } = useGetMoviesQuery({
    title: search,
    page: 1,
  });

  const [MoviesData, setMoviesData] = useState([]);

  useEffect(() => {
    setMoviesData(movies?.Search);
    console.log(MoviesData);
  }, [movies]);

  return (
    <Container>
      <View style={{marginTop:35}}>
        {isFetching ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={MoviesData}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: movie }) => <MovieImage {...movie} />}
            keyExtractor={(item) => item.imdbID}
          />
        )}
      </View>
    </Container>
  );
};
export default MovieListScreen;
