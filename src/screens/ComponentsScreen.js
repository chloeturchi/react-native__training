import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const myName = 'Chloé';

  return (
    <View>
      <Text style={styles.titleStyle}>Getting started with react native!</Text>
      <Text style={styles.textStyle}>
        My name is
        {myName}
        .
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
