import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator'; // Adjust the path to where your RootStackParamList is defined

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(1000)}>
        <Text style={styles.welcomeText}>Welcome to Wellness Tracker!</Text>
      </Animated.View>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Registration"
        onPress={() => navigation.navigate('Registration')}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Use padding instead of margins as per your guidelines
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20, // Spacing for the button, adjust as needed
  },
});
