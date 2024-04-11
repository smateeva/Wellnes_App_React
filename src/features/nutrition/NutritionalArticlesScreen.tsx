import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Article = {
  id: string;
  title: string;
};

const articles: Article[] = [
  { id: '1', title: 'The Importance of a Balanced Diet' },
  { id: '2', title: '5 Foods That Boost Immunity' },
  { id: '3', title: 'Understanding Macros and Micros' },
];

export const NutritionalArticlesScreen = () => {
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
