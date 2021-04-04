import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { getCars } from "../components/actions/actions";

export default function Navbar(){
    return (
        <View>
            <Text>Navbar</Text>
        </View>
    )
}