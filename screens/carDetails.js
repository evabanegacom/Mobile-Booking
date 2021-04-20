import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

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
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
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

  const onChange = (selectedDate, event) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setValues((values) => ({
      ...values,
      date: currentDate
    }));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const submitHandler = () => {
    console.log(values)
    }

  const changeHandler = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      description: event.nativeEvent.text
    }))
  }

  const handleDate = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      date: event.nativeEvent.text
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
          />
            <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={submitHandler} title='make booking' color='coral'/>
          </View>
        </View>
      </Modal>
            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
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
