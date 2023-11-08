import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ButtonNew({ size }) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
          source={require('./img/buttonCube.png')}
          style={{
            width: size,
            height: size,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  inner: {
    backgroundColor: "#000",
    padding: 7,
    paddingLeft: 6,
    paddingRight: 6,
  }
});
