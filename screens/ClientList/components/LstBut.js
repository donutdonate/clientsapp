import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LstBut(props) {
  const addClient = props?.addClient;
  const id = props?.id;
  const navigation = useNavigation()
  return (
    <View style={styles.but}>
      <TouchableOpacity
        style={styles.opa}
        onPress={() =>
          navigation.navigate('AddClient', { addClient, id })
        }>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  opa: {
    backgroundColor: '#FB7360',
    borderRadius: 16,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 24,
    paddingLeft: 24,
  },
  but: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 44,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 81,
  },
});