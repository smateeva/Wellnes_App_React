import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

// Define the expected route parameters
type RouteParams = {
  activityId: string;
};

const ActivityDetailScreen = () => {
  // Use the route hook with the appropriate type
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { activityId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activity Details for ID: {activityId}</Text>
      {/* Display more details about the activity here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default ActivityDetailScreen;
