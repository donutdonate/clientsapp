import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Button from './components/Button';
import PersonImage from './components/PersonImage';
import Name from './components/Name';
import City from './components/City';
import TopButton from './components/TopButton';
import RightButton from './components/RightButton';
import Bio from './components/Bio';
import Disctibe from './components/Disctibe';
import SeeMore from './components/SeeMore';
import SeeMoreeIcon from './components/SeeMoreIcon';

export default function ClientDetail({ route }) {
  const client = route.params?.client
  const changeClient = route.params?.changeClient
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topButtons}>
          <TopButton />
          <RightButton changeClient={changeClient} client={client}/>
        </View>
      </View>
      <View style={styles.middle}>
        <View style={{ alignItems: 'center', marginTop: -81.25 }}>
          <PersonImage photo={client?.photo} />
        </View>
        <Name name={client?.name} />
        <City city={client?.city} />
        <View style={styles.buttonBar}>
          <Button text="Чат" client={client} />
          <Button text="Звонок" accent client={client} />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{ marginTop: 40 }}>
          <Bio />
          <Disctibe bio={client?.bio} />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 40 }}>
          <View style={styles.dontknow}>
            <TouchableOpacity style={styles.lastbutton}>
              <SeeMore />
              <SeeMoreeIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FDFDFD',
  },
  lastbutton: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#FB7360',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dontknow: {
    height: 52,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 44,
  },
  top: {
    flex: 1,
    marginBottom: 16,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  middle: {
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    paddingBottom: 32,
  },
  buttonBar: {
    flexDirection: 'row',
    paddingTop: 32,
  },
  bottom: {
    flex: 3,
  },
});
