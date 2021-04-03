import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './components/reducers/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import SignUp from './screens/signup';
import thunk from 'redux-thunk';

export default function App() {
  const Stack = createStackNavigator();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
            />
            <Stack.Screen
              name="Signup"
              component={SignUp}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
