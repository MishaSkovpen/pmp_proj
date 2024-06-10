import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Header } from 'react-native-elements';
import schedules from '../data/schedules.json';

const HomeScreen = ({ navigation }) => {
  const [selectedCourse, setSelectedCourse] = useState(Object.keys(schedules)[0]);
  const [selectedGroup, setSelectedGroup] = useState(schedules[selectedCourse][0].group);

  const onCourseChange = (course) => {
    setSelectedCourse(course);
    setSelectedGroup(schedules[course][0].group);
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <Header
        centerComponent={{ text: 'Розклад Університету', style: styles.headerText }}
        containerStyle={styles.header}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Оберіть курс:</Text>
        <Picker
          selectedValue={selectedCourse}
          onValueChange={(itemValue) => onCourseChange(itemValue)}
          style={styles.picker}
        >
          {Object.keys(schedules).map((course) => (
            <Picker.Item key={course} label={course} value={course} />
          ))}
        </Picker>
        <Text style={styles.label}>Оберіть групу:</Text>
        <Picker
          selectedValue={selectedGroup}
          onValueChange={(itemValue) => setSelectedGroup(itemValue)}
          style={styles.picker}
        >
          {schedules[selectedCourse].map((group) => (
            <Picker.Item key={group.group} label={group.group} value={group.group} />
          ))}
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Переглянути Розклад"
          onPress={() => navigation.navigate('Розклад', { selectedCourse, selectedGroup })}
          color="#00a046"
        />
      </View>
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
  pickerContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#fff',
    backgroundColor: '#2c2c2e',
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});

export default HomeScreen;
