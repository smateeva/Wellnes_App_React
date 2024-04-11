import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { register } from '../../../services/authService';
import { useUserStore } from '../../../state/useUserStore';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/AppNavigator'; // Import useNavigation hook


const RegistrationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // Hook to get navigation object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { setUser } = useUserStore();
  
  const handleRegister = async () => {
    try {
      const user = await register(email, password, name);
      // If registration is successful, navigate to the Profile screen
      navigation.navigate('Profile');
    } catch (error) {
      if (error instanceof Error && error.message === "User already exists") {
        Alert.alert('Registration Failed', 'User with this email already exists. Please use a different email.');
      } else if (error instanceof Error) {
        // Display other errors as usual
        Alert.alert('Registration Failed', error.message);
      } else {
        // Fallback error message if the error object doesn't have a message property
        Alert.alert('Registration Failed', 'An unexpected error occurred.');
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} keyboardType="email-address"
        autoCapitalize="none"/>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address"
        autoCapitalize="none"/>
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry keyboardType="email-address"
        autoCapitalize="none"/>
      <Button title="Register" onPress={handleRegister} />
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

export default RegistrationScreen;