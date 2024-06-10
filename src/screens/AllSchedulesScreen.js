import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllSchedulesScreen = ({ navigation }) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      let storedSchedule = await AsyncStorage.getItem('schedule');
      storedSchedule = storedSchedule ? JSON.parse(storedSchedule) : [];
      setSchedule(storedSchedule);
    };
    fetchSchedule();
  }, [schedule]);

  const deleteSchedule = async (id) => {
    let storedSchedule = await AsyncStorage.getItem('schedule');
    storedSchedule = storedSchedule ? JSON.parse(storedSchedule) : [];
    const updatedSchedule = storedSchedule.filter(item => item.id !== id);
    await AsyncStorage.setItem('schedule', JSON.stringify(updatedSchedule));
    Alert.alert('Успіх', 'Розклад видалено.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Усі Розклади</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleText}>{item.subject}</Text>
            <Text style={styles.scheduleText}>{item.teacher}</Text>
            <Text style={styles.scheduleText}>{item.time}</Text>
            <Text style={styles.scheduleText}>{item.room}</Text>
            <Button title="Видалити" onPress={() => deleteSchedule(item.id)} color="#e53935" />
          </View>
        )}
        contentContainerStyle={styles.scheduleList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  scheduleList: {
    padding: 20,
  },
  scheduleItem: {
    backgroundColor: '#2c2c2e',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  scheduleText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default AllSchedulesScreen;
