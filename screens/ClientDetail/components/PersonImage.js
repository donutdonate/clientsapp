import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function PersonImage(props) {
  return (
    <Image
      source={props?.photo}
      style={styles.person}
    />
  );
}

const styles = StyleSheet.create({
  person: {
    width: 162.5,
    height: 162.5,
    borderRadius: 81.25,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
