import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Linking,
  Image,
  TouchableOpacity
} from "react-native";
import { getCars } from "../components/actions/actions";

export default function BookCar({ navigation }) {
  const cars = useSelector((state) => state.cars.cars);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
    console.log(cars)
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      {JSON.stringify(user) != '{}' ? (<FlatList
        data={cars}
        renderItem={({ item }) => (
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('CarDetails', {image: item.avatar.url, name: item.name, speed: item.speed, id: item.id})}>
            <Text>{item.name}</Text>
            <Image style={styles.rating} source={{ uri: item.avatar.url}} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />) : (<Text>nothing here</Text>)}
      
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    width: 100,
    height: 100,
  },

  container: {
    flex: 1,
    flexDirection: "column",
  }
});
