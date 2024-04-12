import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { login } from '../../../services/authService';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Profile: undefined; 
};

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};


const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      navigation.navigate('Profile');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Login Failed', error.message);
      } else {
        Alert.alert('Login Failed', 'An unexpected error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
       <Image
        source={require('../../../../assets/login.png')} 
        style={styles.login}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
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
  input: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    justifyContent: 'center'
  },
  login:{
    width: 220,
    height: 200,
    justifyContent:'center'
  }
});

export default LoginScreen;
