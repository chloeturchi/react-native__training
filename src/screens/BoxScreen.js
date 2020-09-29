import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text>
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOneStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'red',
  },
  textTwoStyle: {
    width: 50,
    height: 50,
    top: 50,
    borderWidth: 1,
    backgroundColor: 'green',
  },
  textThreeStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'violet',
  },
});

export default BoxScreen;
