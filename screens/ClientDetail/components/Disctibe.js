import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function Disctibe(props) {
  return (
    <Text style={styles.coverletter}>
      {props?.bio}
    </Text>
  );
}

const styles = StyleSheet.create({
  coverletter: {
    marginTop: 12,
    color: '#A3A3A3',
    // fontWeight: '400',
    fontSize: 16,
    textAlign: 'left',
    // fontHeight: 24,
    fontStyle: 'normal',
    marginLeft: 24,
    marginRight: 24,
    paddingBottom: 40,
  },
});
