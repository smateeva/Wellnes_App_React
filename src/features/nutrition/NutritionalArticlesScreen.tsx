import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

type Article = {
  id: string;
  title: string;
  content: string;
  image: any; // You could also specify a more specific type if you wish
};

const articles: Article[] = [
  { id: '1', title: 'The Importance of a Balanced Diet', content: 'A balanced diet is one that gives your body the nutrients it needs to function correctly. To get the proper nutrition from your diet, you should consume the majority of your daily calories.', image: require('../../../assets/balanceddied.png') },
  { id: '2', title: '5 Foods That Boost Immunity', content: 'To boost your immune system, you should eat a variety of foods that provide vitamins, minerals, and antioxidants. These include citrus fruits, red bell peppers, broccoli, garlic, and ginger.', image: require('../../../assets/foodsboost.jpeg') },
  { id: '3', title: 'Understanding Macros and Micros', content:'Macronutrients are nutrients that our body needs in large amounts: protein, fat, and carbohydrates. Micronutrients are vitamins and minerals that are essential in smaller amounts', image: require('../../../assets/macros.png')}
]
export const NutritionalArticlesScreen = () => {
  return (
    <View style={styles.container}>
<FlatList
data={articles}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.articleContainer}>
<Image source={item.image} style={styles.articleImage} />
<Text style={styles.title}>{item.title}</Text>
<Text style={styles.content}>{item.content}</Text>
</View>
      )}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E9F1', 
  },
  articleContainer: {
    backgroundColor: "#C9DDC9",
    borderRadius: 5,
    margin: 10,
    overflow: 'hidden', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#535447', 
    padding: 10, 
  },
  content: {
    fontSize: 16,
    color: '#535447', 
    padding: 10, 
  },
  articleImage: {
    width: '100%', 
    height: 250, 
    alignSelf: 'center', 
  }
});

