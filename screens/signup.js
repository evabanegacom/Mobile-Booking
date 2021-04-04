import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from '../styles/global';
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';
import FlatButton from '../shared/button';
import { signUserUp } from '../components/actions/actions';


const reviewSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().required().min(5),
  password: yup.string().required().min(6),
})

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const addUser = user => dispatch(signUserUp(user));
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addUser(values);
          console.log(values)
          actions.resetForm();
          navigation.navigate('book')
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.TextInput}
              placeholder="Your Name"
              onChangeText={formikProps.handleChange("name")}
              value={formikProps.values.name}
              onBlur={formikProps.handleBlur('name')}
            />

            <Text style={globalStyles.errorText}>{formikProps.touched.name && formikProps.errors.name}</Text>

            <TextInput
              minHeight={60}
              style={globalStyles.TextInput}
              placeholder="review email"
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

// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// import { StyleSheet, View, Text, Button, TextInput } from "react-native";
// import FlatButton from '../shared/button';


// import { connect } from 'react-redux';
// // import '../cssFiles/registration.css';
// // import 'react-notifications/lib/notifications.css';
// // import {
// //   NotificationContainer,
// //   NotificationManager,
// // } from 'react-notifications';
// import { signUserUp } from '../components/actions/actions';

// const initState = {
//   email: '',
//   name: '',
//   password: '',
// };

// class SignUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = initState;

//     this.handleSubmit = this.handleSubmit.bind(this);
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   validate = () => {
//     const { email, name, password } = this.state;
//     let nameError = '';
//     let emailError = '';
//     let passwordError = '';

//     if (!email.includes('@')) {
//       emailError = 'invalid email or already exists';
//     }

//     if (name.length < 5) {
//       nameError = 'characters must be at least five';
//     }

//     if (password.length < 6) {
//       passwordError = 'characters must be at least 6';
//     }

//     if (emailError || nameError || passwordError) {
//       this.setState({ emailError, nameError, passwordError });
//       return false;
//     }
//     return true;
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { signUserUp } = this.props;
//     // const isValid = this.validate();
//     // if (isValid) {
//       signUserUp(this.state);
//       console.log(this.state)
//       this.setState(initState);
//       // NotificationManager.success('Signed up successsfully', 'congrats', 4000);
    
//   };

//   handleChangename = InputText => {
//     this.setState({
//       name: InputText,

//     });
//   };

//   handleChangeemail = InputText => {
//     this.setState({
//       email: InputText,

//     });
//   };

//   handleChangepassword = InputText => {
//     this.setState({
//       password: InputText,

//     });
//   };

//   render() {
//     // const { history, userReducer } = this.props;
//     // if (JSON.stringify(userReducer.user) !== '{}') {
//     //   history.push(`/user/${userReducer.user.id}/bookings`);
//     // }
//     return (
//       <View className="reg">
//         <View className="white">
//           <Text className="reg-head">Register</Text>
//           <View className="TextInput-field">
            
//               <TextInput
//                 id="name"
//                 autoComplete="off"
//                 required
//                 type="text"
//                 onChangeText={this.handleChangename}
//                 placeholder='name'
//               />
//           </View>
//           <View className="TextInput-field">
            
//               <TextInput
//                 id="email"
//                 autoComplete="off"
//                 required
//                 placeholder="email"
//                 onChangeText={this.handleChangeemail}
//               />
//           </View>
//           <View className="TextInput-field">
            
//               <TextInput
//                 id="password"
//                 required
//                 autoComplete="off"
//                 onChangeText={this.handleChangepassword}
//                 placeholder='password'
//               />
//           </View>
//           <View className="button-field">
//             <FlatButton text='submit' onPress={this.handleSubmit} />

//             {/* <button type="submit" className="btn pink lighten-1 z-depth-0">
//               Register
//             </button> */}
//           </View>
//         </View>
//         {/* <NotificationContainer /> */}
//       </View>
//     );
//   }
// }
// const mapDispatchToProps = dispatch => ({
//   signUserUp: userInfo => dispatch(signUserUp(userInfo)),
// });

// // const mapStateToProps = state => ({
// //   userReducer: state.userReducer,
// // });

// // SignUp.propTypes = {
// //   signUserUp: PropTypes.func.isRequired,
// //   history: PropTypes.objectOf.isRequired,
// //   userReducer: PropTypes.func.isRequired,
// // };

// export default connect(null, mapDispatchToProps)(SignUp);