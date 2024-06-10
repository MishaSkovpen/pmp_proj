import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddScheduleScreen = ({ navigation }) => {
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [time, setTime] = useState('');
  const [room, setRoom] = useState('');

  const addSchedule = async () => {
    if (!subject || !teacher || !time || !room) {
      Alert.alert('Помилка', 'Будь ласка, заповніть всі поля.');
      return;
    }

    const newSchedule = {
      id: Date.now(),
      subject,
      teacher,
      time,
      room,
    };

    let storedSchedule = await AsyncStorage.getItem('schedule');
    storedSchedule = storedSchedule ? JSON.parse(storedSchedule) : [];
    storedSchedule.push(newSchedule);
    await AsyncStorage.setItem('schedule', JSON.stringify(storedSchedule));
    Alert.alert('Успіх', 'Розклад додано.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Додати Розклад</Text>
      <TextInput
        style={styles.input}
        placeholder="Предмет"
        placeholderTextColor="#aaa"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={styles.input}
        placeholder="Викладач"
        placeholderTextColor="#aaa"
        value={teacher}
        onChangeText={setTeacher}
      />
      <TextInput
        style={styles.input}
        placeholder="Час"
        placeholderTextColor="#aaa"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Аудиторія"
        placeholderTextColor="#aaa"
        value={room}
        onChangeText={setRoom}
      />
      <Button title="Додати" onPress={addSchedule} color="#00a046" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1c1c1e',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#2c2c2e',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: '#2c2c2e',
  },
});

export default AddScheduleScreen;
