import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function SeeMore() {
  return <Text style={styles.lasttxt}>Показать больше</Text>;
}

const styles = StyleSheet.create({
  lasttxt: {
    // fontWeight: '600',
    fontSize: 16,
    textAlign: 'left',
    fontStyle: 'normal',
    marginLeft: -5,
    color: '#FB7360',
  },
});
