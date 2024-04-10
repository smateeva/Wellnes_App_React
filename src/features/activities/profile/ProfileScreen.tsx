import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.profilePic}
        source={{
          uri: 'https://example.com/user/profile-pic.jpg',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.userName}>User Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    marginTop: 10,
  },
});

export default ProfileScreen;
