import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useGetFullPlotQuery } from "../../services/omdbapi";
import Container from "../components/Container";
import MoviePoster from "../components/MoviePoster";

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useSelector((state) => state.favoriteSlice);
  const FavoriteList = [];

  favorites.forEach((favorite) => {
    const { data: movie } = useGetFullPlotQuery({ imdbID: favorite.imdbID });
    FavoriteList.push({ ...movie, faved: favorite.faved });
  });
  if (FavoriteList >= 0) {
    return (
      <Container>
        <View style={{marginTop:50}}>
            <Text>No favorites yet!</Text>
        </View>
      </Container>
    )
  }
  return (
    <Container>
      <View  style={{marginTop:50}}>
        <FlatList
          data={FavoriteList}
          ItemSeparatorComponent={() => <Text> </Text>}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item: movie }) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MovieFullSpecView", { ...movie })
                }
              >
                {/* <Text>{movie.Title}</Text> */}
                <MoviePoster Poster={movie.Poster} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Container>
  );
};

export default FavoritesScreen;
