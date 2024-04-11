import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { login } from '../../../services/authService';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your navigation stack's params list if it's not already defined
type RootStackParamList = {
  Profile: undefined; // Replace with actual parameters if necessary
  // ... other screens in the stack
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
      // If login is successful, navigate to the Profile screen
      navigation.navigate('Profile');
    } catch (error) {
      // Error handling with type checking
      if (error instanceof Error) {
        Alert.alert('Login Failed', error.message);
      } else {
        // Fallback error message if the error object doesn't have a message property
        Alert.alert('Login Failed', 'An unexpected error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
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
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});

export default LoginScreen;
