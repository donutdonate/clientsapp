import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CallButton({ text }) {
  return (
    <TouchableOpacity style={styles.buttonRight}>
      <Text style={styles.call}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  call: {
    color: '#FFFFFF',
    // fontWeight: '600',
    fontSize: 16,
    // fontHeight: 24,
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 14,
  },
  buttonRight: {
    flex: 1,
    height: 52,
    backgroundColor: '#FB7360',
    borderRadius: 16,
    alignItems: 'center',
    marginRight: 24,
    marginLeft: 4,
  },
});
