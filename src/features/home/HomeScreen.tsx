import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator'; 

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')} 
        style={styles.logo}
      />
      <Animated.View entering={FadeIn.duration(1000)}>
        <Text style={styles.welcomeText}>Welcome to Wellness Tracker!</Text>
      </Animated.View>
      <View style={styles.new}>
        <Button 
        title="Login"
        onPress={() => navigation.navigate('Login')} 
      />
      </View>
      <View style={styles.new}>
      <Button
        title="Registration"
        onPress={() => navigation.navigate('Registration')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1E9F1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20, 
  },
  logo:{
    width: 250,
    height: 200
  },
  new:{
    margin:4,
  }
});
