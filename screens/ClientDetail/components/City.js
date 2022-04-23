import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function City(props) {
  return <Text style={styles.city}>{props?.city}</Text>;
}

const styles = StyleSheet.create({
  city: {
    marginTop: 4,
    // fontWeight: '400',
    fontSize: 13,
    textAlign: 'center',
    // fontHeight: 36,
    fontStyle: 'normal',
    lineHeight: 16,
    color: '#A3A3A3',
  },
});
