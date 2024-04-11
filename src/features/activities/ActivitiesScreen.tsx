import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useActivityStore } from '../../state/useActivityStore';
import { v4 as uuidv4 } from 'uuid';

const ActivitiesScreen = () => {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const { activities, addActivity } = useActivityStore();

  const handleAddActivity = () => {
    if (!type || !duration) return;
    addActivity({ id: uuidv4(), type, duration: parseInt(duration, 10), date: new Date().toISOString() });
    setType('');
    setDuration('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={type} onChangeText={setType} placeholder="Activity Type" />
      <TextInput style={styles.input} value={duration} onChangeText={setDuration} placeholder="Duration (minutes)" keyboardType="numeric" />
      <Button title="Add Activity" onPress={handleAddActivity} />
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.type}: {item.duration} minutes on {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 },
  item: { padding: 10, marginTop: 5, backgroundColor: '#f9f9f9', borderColor: '#ddd', borderWidth: 1 },
});

export default ActivitiesScreen;