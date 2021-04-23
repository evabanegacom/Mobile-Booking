import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { userBooking, deleteBooking } from "../components/actions/actions";

function AllBookings({ navigation }) {
  const dispatch = useDispatch();
  const [bookingState, setBooking] = useState(bookings)

  const user = useSelector((state) => state.user.user);
  const bookings = useSelector((state) => state.userBooking.userBooking);

  useEffect(() => {
    if(bookings){
    dispatch(userBooking());
    }
  }, [bookings]);

  const mappin = bookings && bookings.length ? (bookings.filter(
    booking => booking.user_id === parseInt(user.id, 10))
    ): (<Text>nothing here</Text>)

  console.log(mappin)
  const CheckCar = mappin && mappin.length ? (
    mappin.map((mapp) => (
      <View key={mapp.id.toString()} style={styles.container}>
      <Text>Your Name: {mapp.username}</Text>
      <Text>Booking Date: {mapp.date}</Text>
      <Text>Car Booked: {mapp.model}</Text>
      <Text>City to drive: {mapp.city}</Text>
      <Text>Description: {mapp.description}</Text>
      <Button onPress={() => dispatch(deleteBooking(mapp.id))} title='DELETE'></Button>
      </View>
    ))
  ) : (<Text>you have No bookings Make one</Text>)

  return (
    <View>
        <ScrollView>
      {CheckCar}
      </ScrollView>

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