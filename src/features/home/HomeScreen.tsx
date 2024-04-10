import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(1000)}>
        <Text style={styles.welcomeText}>Welcome to Wellness Tracker!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
  },
});

export default HomeScreen;
