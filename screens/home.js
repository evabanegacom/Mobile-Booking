import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { autoLogin, logout } from "../components/actions/actions";

function Home({ navigation }) {
  useEffect(() => {
    console.log('hi')
    // autoLogin();
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleLogout = () =>{
    dispatch(logout())
  }

  return (
    <View>
      <Text>what</Text>
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      <View>
        <Text>hey</Text>
      </View>
      <Button title="book" onPress={() => navigation.navigate("book")} />
      <Text>For login</Text>
      <Button title="login" onPress={() => navigation.navigate("login")} />
      <Text>Logout</Text>
      <Button title="logout" onPress={handleLogout} />
      {JSON.stringify(user) != '{}' ? (<Text>{user.name} {user.email} {user.token}</Text>) : (<Text>nobody is here</Text>)}
    </View>
  );
}

export default Home;
