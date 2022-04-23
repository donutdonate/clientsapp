import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LstBut(props) {
  const navigation = useNavigation()
  const addAndReturn = () => {
    props.addClient();
    navigation.navigate('ClientList');
  };

  return (
    <View style={styles.but}>
      <TouchableOpacity style={styles.opa} onPress={addAndReturn}>
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
  marginRight: 24,
  marginLeft: 24,
  marginTop: 120
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
    // marginBottom: 44,
    // marginLeft: 24,
    // paddingRight: 24,
    // paddingTop: 81,
  },
});
