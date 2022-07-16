import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import ClientItem from './components/ClientItem';
import LstBut from './components/LstBut';
import clientsData from '../../data/data';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ClientList() {
  const [clients, setClients] = useState(clientsData);
  const [filteredClients, setFilteredClients] = useState();
  const [search, setSearch] = useState('');

  const isStringContain = (text, containedText) => {
    return text.toUpperCase().includes(containedText.toUpperCase());
  };

  const storeData = async (value) => {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem('clientеs', jsonValue);
  };

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('clientеs');
    const ourClients = jsonValue ? JSON.parse(jsonValue) : clientsData;
    return ourClients;
  };

  const onLoad = async () => {
    const clientsFromStorage = await getData();
    setClients(clientsFromStorage);
  };

  const filterArray = () => {
    const newClients = clients?.filter(
      (client) =>
        !search ||
        isStringContain(client?.name, search) ||
        isStringContain(client?.city, search)
    );
    setFilteredClients(newClients);
  };

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    filterArray(search);
  }, [search, clients]);

  const addClient = (client) => {
    if (client.name != null) {
      const newClients = [...clients, client];
      storeData(newClients);
      setClients(newClients);
    }
  };
  // const delIt = () => {
  //   clients?.splice(3, 2);
  //   const newClients = [...clients];
  //   storeData(newClients);
  //   setClients(newClients);
  // };
  // delIt()
  const changeClient = (curClient, client) => {
    let index = clients.indexOf(curClient);
    clients[index].name = client.name;
    clients[index].city = client.city;
    clients[index].tel = client.tel;
    clients[index].bio = client.bio;
    clients[index].photo = client.photo;
    const newClients = [...clients];
    storeData(newClients);
    setClients(newClients);
  };

  const renderItem = ({ item }) => (
    <ClientItem
      client={item}
      addClient={addClient}
      changeClient={changeClient}
    />
  );

  const [text, setText] = useState('Поиск');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Клиенты</Text>
      </View>
      
      <View style={styles.txtIn}>
        <Image
          style={styles.icon}
          source={require('../../assets/Search.png')}
        />
        <TextInput
          style={styles.input}
          placeholder={text}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      
      <FlatList data={filteredClients} renderItem={renderItem} />
      
      <LstBut
        text="Добавить нового"
        addClient={addClient}
        id={clients?.length}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    zIndex: 1,
    left: 39.6,
    top: 15.6,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  title: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 16,
  },
  text: {
    // fontWeight: '700',
    fontSize: 34,
    fontStyle: 'normal',
    lineHeight: 51,
  },
  input: {
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
    paddingLeft: 44,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    // fontWeight: '400',
    // lineHeight: 24,
    fontStyle: 'normal',
    //placeholderTextColor: '#A3A3A3',
  },
  txtIn: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
});
