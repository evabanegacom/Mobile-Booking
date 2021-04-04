import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { getCars } from "../components/actions/actions";

function Book({ navigation }) {
  const cars = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <View>
          <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Text>what</Text>
      <FlatList
        data={cars}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

export default Book;
