import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function New() {
  return (
    <View style={styles.container}>
      <Text>NewPost</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  }
})