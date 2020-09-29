import React, { useReducer } from 'react';
import {
  Text, View, StyleSheet, Button,
} from 'react-native';

const COUNT_NUMBER = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const ComponentsScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment', payload: COUNT_NUMBER })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement', payload: COUNT_NUMBER })}

      />
      <Text>
        Current Count:
        {' '}
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ComponentsScreen;
