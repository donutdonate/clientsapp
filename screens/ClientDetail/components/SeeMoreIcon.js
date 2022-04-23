import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function SeeMoreeIcon() {
  return (
    <Image source={require('../../../assets/Icon.png')} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 9,
    marginTop: 4,
  },
});
