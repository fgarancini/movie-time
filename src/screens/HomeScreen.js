import React, { useState, useEffect } from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { setSearch } from "../../slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.searchSlice);
  const [Criteria, setCriteria] = useState("");

  useEffect(() => {
    dispatch(setSearch(Criteria));
  }, [Criteria]);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.mainView}>
          <Text>Start searching!</Text>
          <TextInput
            placeholder="Search"
            style={styles.input}
            value={Criteria}
            onChangeText={(text) => {
              setCriteria(text);
            }}
            onSubmitEditing={() => {
              navigation.navigate("MovieListView");
            }}
          />
          <TouchableOpacity
            style={styles.touchableView}
            onPress={() => {
              navigation.navigate("MovieListView");
            }}
          >
            <View>
              <Text style={styles.touchableText}>Search</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableView}
            onPress={() => {
              navigation.navigate("FavoritesView");
            }}
          >
            <View>
              <Text style={styles.touchableText}>Favorites</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableView}
            onPress={() => {
              Alert.alert("Not yet!");
            }}
          >
            <View>
              <Text style={styles.touchableText}>Subscribe!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-end"
  },
  mainView: {
    alignItems: "center",
    marginBottom: 40,
  },
  touchableView: {
    marginBottom: 30,
    width: Dimensions.get("screen").width - 30,
    height: 50,
    alignItems: "center",
    backgroundColor: "rgba(233, 228, 240,.6)",
    borderWidth: .3,
    borderRadius: 10,
    borderColor:"rgba(0,0,0,.3)"
  },
  touchableText: {
    textAlign: "center",
    paddingTop: 13,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    width: 280,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    textAlign: "center",
    marginBottom: 100,
    borderColor:"rgba(0,0,0,.6)",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
});

export default HomeScreen;
