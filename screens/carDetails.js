import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { makeBooking } from '../components/actions/actions';

import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Image,
  TextInput,
} from "react-native";

export default function CarDetails({ navigation }) {
  const dispatch = useDispatch();
  const doBooking = values => dispatch(makeBooking(values));
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('');
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [modalOPen, setModalOPen] = useState(false);
  const [values, setValues] = useState({
    user_id: user.id,
    car_id: navigation.getParam('id'),
    model: navigation.getParam('name'),
    description: '',
    date: '',
    username: user.name,
    city: '',
  });

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date.toDateString());
      hideDatePicker();
      setValues((values) => ({
        ...values,
        date: date.toDateString()
      }))
    };

  const submitHandler = () => {
    doBooking(values)
  }

  const changeHandler = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      description: event.nativeEvent.text
    }))
  }

  const handleCity = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      city: event.nativeEvent.text
    }))
  }
  
  return (
    <View>
      <Text>{navigation.getParam("name")}</Text>
      <Image
        style={styles.rating}
        source={{ uri: navigation.getParam("image") }}
      />
      <Text>{navigation.getParam("speed")}</Text>

      <Modal visible={modalOPen}>
        <View>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOPen(false)}
          />
          <Text>Hello open modal form</Text>
          <View>
          <TextInput 
            placeholder='description'
            id='description'
            onChange={changeHandler}
          />
          <TextInput 
            placeholder='city'
            id='city'
            onChange={handleCity}
          />
          <TextInput 
            placeholder='date'
            id='date'
            value={values.date}
            onChange={handleConfirm}
          />
            <Button onPress={showDatePicker} title="Show date picker!" />
            <Button onPress={submitHandler} title='make booking' color='coral'/>
          </View>
        </View>
      </Modal>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      
      <Text>make a booking</Text>
      <MaterialIcons name="add" size={24} onPress={() => setModalOPen(true)} />
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
  },
});
