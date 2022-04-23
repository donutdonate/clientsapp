import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import TopBar from './components/TopBar';
import TxtIn from './components/TxtIn';
import LstBut from './components/LstBut';

export default function AddClient({ route }) {
  const client = route.params?.client

  const [photo, setPhoto] = useState(client?.photo);
  const [name, setName] = useState(client?.name);
  const [telNum, setTelNum] = useState(client?.tel);
  const [city, setCity] = useState(client?.city);
  const [bio, setBio] = useState(client?.bio);
  const id = client?.id
    ? client?.id
    : route.params.id + 1;

  const onAddClient = route.params?.addClient;
  const changeClient = route.params?.changeClient;

  const addClient = () => {
    const newClient = {
      name: name,
      city: city,
      online: false,
      tel: telNum,
      bio: bio,
      photo: photo,
      id: id,
    };
    if (client?.id)
      changeClient(client, newClient)
    else
      onAddClient(newClient);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
      <TopBar />
      <TxtIn
        text="Фото"
        phld="Вставьте ссылку на фото"
        value={photo}
        onChangeItem={setPhoto}
      />
      <TxtIn
        text="ФИО"
        phld="Введите фамилию и имя"
        onChangeItem={setName}
        value={name}
      />
      <TxtIn
        text="Номер телефона"
        phld="+7 (000) 000 00 00"
        value={telNum}
        onChangeItem={setTelNum}
      />
      <TxtIn
        text="Город"
        phld="Выберете город"
        onChangeItem={setCity}
        value={city}
      />
      <TxtIn
        text="Био"
        phld={'Укажите хобби, интересы, образование и стаж работы'}
        height={3}
        value={bio}
        onChangeItem={setBio}
      />
      <LstBut text="Добавить" addClient={addClient} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
});
