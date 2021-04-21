import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { userBooking } from "../components/actions/actions";

function AllBookings({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userBooking());
  }, []);

  const user = useSelector((state) => state.user.user);

  return (
    <View>
      <Text>what</Text>
      <View>
        <Text>hey</Text>
      </View>
      {/* <Button title="book" onPress={() => navigation.navigate("Book")} /> */}
      {JSON.stringify(user) != '{}' ? (<Text>{user.name} {user.email} {user.token}</Text>) : (<Text>You are not logged in</Text>)}
    </View>
  );
}

export default AllBookings;