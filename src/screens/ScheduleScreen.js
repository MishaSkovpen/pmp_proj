import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import schedules from '../data/schedules.json';

const ScheduleScreen = ({ route }) => {
  const { selectedCourse, selectedGroup } = route.params;
  const schedule = schedules[selectedCourse].find(group => group.group === selectedGroup).schedule;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        centerComponent={{ text: 'Розклад', style: styles.headerText }}
        containerStyle={styles.header}
      />
      <FlatList
        data={Object.entries(schedule)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={styles.daySchedule}>
            <Text style={styles.day}>{item[0]}</Text>
            {item[1].map((subject, index) => (
              <View key={index} style={styles.subjectItem}>
                <Text style={styles.subjectText}>{subject.subject}</Text>
                <Text style={styles.subjectText}>{subject.teacher}</Text>
                <Text style={styles.subjectText}>{subject.time}</Text>
                <Text style={styles.subjectText}>{subject.room}</Text>
              </View>
            ))}
          </View>
        )}
        contentContainerStyle={styles.scheduleList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  header: {
    backgroundColor: '#000',
    justifyContent: 'space-around',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scheduleList: {
    padding: 20,
  },
  daySchedule: {
    marginBottom: 20,
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subjectItem: {
    backgroundColor: '#2c2c2e',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  subjectText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ScheduleScreen;
