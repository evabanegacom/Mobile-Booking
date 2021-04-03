import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { getCars } from "../components/actions/actions";

function Home({ navigation }) {
  const cars = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <View>
      <Text>what</Text>
       <Button
        title="Signup"
        onPress={() => navigation.navigate("Signup")}
      />
      <FlatList
        data={cars}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

export default Home;
