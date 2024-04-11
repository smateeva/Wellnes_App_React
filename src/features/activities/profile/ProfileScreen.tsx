import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchProfile } from '../../../services/authService';

// Assuming User has been properly typed in your authService
import { User } from '../../../services/authService';

const ProfileScreen = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile: User | null = await fetchProfile();
        setUser(profile);
      } catch (error: any) { // Note: using 'any' is not recommended, type the error properly if possible
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
      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      {/* Other profile information */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  // Add styles for profile information
});

export default ProfileScreen;
