import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RightButton({changeClient, client}) {
const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('AddClient', {changeClient, client})
      }>
      <Image
        source={require('../../../assets/EditSquare.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    marginRight: 23,
    marginTop: 26,
  },
});
