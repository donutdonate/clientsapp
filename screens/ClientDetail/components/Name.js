import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Name(props) {
  return <Text style={styles.name}>{props?.name}</Text>;
}

const styles = StyleSheet.create({
  name: {
    marginTop: 12.75,
    // fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    // fontHeight: 36,
    fontStyle: 'normal',
  },
});
