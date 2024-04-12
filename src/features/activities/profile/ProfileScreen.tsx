import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, Image } from 'react-native';
import { fetchProfile } from '../../../services/authService';
import { User } from '../../../services/authService';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Activities'>;

export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile: User | null = await fetchProfile();
        setUser(profile);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  if (!user) return <Text>No profile found.</Text>;

  return (
    <View style={styles.container}>
        <Image
        source={require('../../../../assets/profile.png')} 
        style={styles.profile}
      />
      <Text style={styles.text}> {user?.name}</Text>
      <Text style={styles.text}> {user?.email}</Text>
      <View style={styles.new}>
      <Button 
        title="Activities"
        onPress={() => navigation.navigate('Activities')} 
      />
      </View>
      <View style={styles.new}>
      <Button 
        title="Nutrition"
        onPress={() => navigation.navigate('Nutrition')} 
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
  new:{ 
    margin:10
  },
  text:{
    fontSize: 20,
    color: "#6D9270",
    margin:5
  },
  profile:{
    width: 220,
    height: 200,
    margin:10
  }
});

export default ProfileScreen;
