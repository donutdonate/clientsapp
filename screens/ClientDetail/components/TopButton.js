import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TopButton() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../../assets/arrow.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 20,
    marginTop: 26,
  },
});
