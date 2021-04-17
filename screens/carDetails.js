import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Linking,
  Image,
} from "react-native";

export default function CarDetails({ navigation }) {
  const [modalOPen, setModalOPen] = useState(false);
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
          <Text>Hello open modal</Text>
        </View>
      </Modal>
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
