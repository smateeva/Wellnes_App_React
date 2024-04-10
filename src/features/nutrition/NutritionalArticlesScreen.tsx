import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Article = {
  id: string;
  title: string;
};

// Static data for demonstration purposes
const articles: Article[] = [
  { id: '1', title: 'The Importance of a Balanced Diet' },
  { id: '2', title: '5 Foods That Boost Immunity' },
  { id: '3', title: 'Understanding Macros and Micros' },
  // ...add more articles as needed
];

export const NutritionalArticlesScreen = () => {
  // Directly use static articles data for FlatList
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
