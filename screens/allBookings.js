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
  const bookings = useSelector((state) => state.userBooking.userBooking);
  const mappin = bookings.filter(
    booking => booking.user_id === parseInt(user.id, 10),
  );
  console.log(mappin)
  const CheckCar = mappin && mappin.length ? (
    mappin.map((mapp) => (
      <View style={styles.container}>
      <Text>Your Name: {mapp.username}</Text>
      <Text>Booking Date: {mapp.date}</Text>
      <Text>Car Booked: {mapp.model}</Text>
      <Text>City to drive: {mapp.city}</Text>
      <Text>Description: {mapp.description}</Text>
      <Button title='Delete'></Button>
      </View>
    ))
  ) : (<Text>No bookings</Text>)

  return (
    <View>
      <Text>what</Text>
      <View>
        <Text>hey</Text>
      </View>
      {CheckCar}
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    width: 100,
    height: 100,
  },

  container: {
    marginBottom: 20,
  },
});


export default AllBookings;