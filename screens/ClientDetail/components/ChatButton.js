import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChatButton(props) {
  return (
    <TouchableOpacity style={styles.buttonLeft}>
      <Text style={styles.chat}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonLeft: {
    flex: 1,
    //width: 160,
    height: 52,
    borderWidth: 1.5,
    borderColor: '#FB7360',
    borderRadius: 16,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: 4,
  },
  chat: {
    color: '#FB7360',
    // fontWeight: '600',
    fontSize: 16,
    // fontHeight: 24,
    textAlign: 'center',
  },
});
