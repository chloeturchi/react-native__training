import React from 'react';
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: '10' },
    { name: 'Friend 2', age: '11' },
    { name: 'Friend 3', age: '14' },
    { name: 'Friend 4', age: '16' },
    { name: 'Friend 5', age: '20' },
    { name: 'Friend 6', age: '80' },
    { name: 'Friend 7', age: '56' },
    { name: 'Friend 8', age: '76' },
    { name: 'Friend 9', age: '17' },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.textStyle}>
            {item.name}
            {' '}
            - Age
            {item.age}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
