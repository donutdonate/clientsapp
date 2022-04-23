import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Bio() {
  return <Text style={styles.bio}>Биография</Text>;
}

const styles = StyleSheet.create({
  bio: {
    // fontWeight: '600',
    fontSize: 16,
    textAlign: 'left',
    // fontHeight: 24,
    fontStyle: 'normal',
    marginLeft: 24,
    marginRight: 24,
  },
});
