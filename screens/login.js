import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from '../styles/global';
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';
import FlatButton from '../shared/button';
import { fetchUser } from '../components/actions/actions';


const reviewSchema = yup.object({
  email: yup.string().required().min(5),
  password: yup.string().required().min(6),
})

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const addUser = user => dispatch(fetchUser(user));
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addUser(values);
          actions.resetForm();
          navigation.navigate('Home')
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              minHeight={60}
              style={globalStyles.TextInput}
              placeholder="email"
              onChangeText={formikProps.handleChange("email")}
              value={formikProps.values.email}
              onBlur={formikProps.handleBlur('email')}
            />

            <Text style={globalStyles.errorText}>{formikProps.touched.email && formikProps.errors.email}</Text>

            <TextInput
              style={globalStyles.TextInput}
              placeholder="password 6 chars min"
              onChangeText={formikProps.handleChange("password")}
              value={formikProps.values.password}
              onBlur={formikProps.handleBlur('password')}

            />
            <Text style={globalStyles.errorText}>{formikProps.touched.password && formikProps.errors.password}</Text>

            <FlatButton text='submit' onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
