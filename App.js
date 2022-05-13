import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import { Provider } from "react-redux";

import { store } from "./store";
import MovieListScreen from "./src/screens/MovieListScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import MovieFullSpec from "./src/components/MovieFullSpec";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="App_to_Home"
            screenOptions={{
              headerTransparent:true
            }}
          >
            <Stack.Screen
              name="App_to_Home"
              component={HomeScreen}
              options={{
                title: "Movie Time",
                headerTransparent:true
              }}
            />
            <Stack.Screen
              name="MovieListView"
              component={MovieListScreen}
              options={{ title: "Results...",headerTransparent:true }}
            />
            <Stack.Screen
              name="FavoritesView"
              component={FavoritesScreen}
              options={{ title: "Favorites!", headerTransparent:true }}
            />
            <Stack.Screen
              name="MovieFullSpecView"
              component={MovieFullSpec}
              options={{ title: "Description",headerTransparent:true }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});
