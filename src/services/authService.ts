import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a type for the user object
export interface User {
  id: string;
  email: string;
  password: string; // In a real app, passwords should be hashed and not stored directly
  name: string;
}

const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

// Function to register a new user
export async function register(email: string, password: string, name: string): Promise<User> {
  const newUser: User = { id: Date.now().toString(), email, password, name };

  // Get existing users
  const existingUsersRaw = await AsyncStorage.getItem(USERS_KEY);
  const existingUsers: User[] = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];

  // Check if user already exists
  const userExists = existingUsers.some((u) => u.email === email);
  if (userExists) {
    throw new Error('User already exists');
  }

  // Add the new user
  existingUsers.push(newUser);

  // Save updated users back to storage
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(existingUsers));

  // Set the new user as the current user
  await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

  return newUser;
}

// Function to login a user
export async function login(email: string, password: string): Promise<User> {
  const usersRaw = await AsyncStorage.getItem(USERS_KEY);
  const users: User[] = usersRaw ? JSON.parse(usersRaw) : [];

  // Find the user
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Set the user as the current user
  await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  return user;
}

// Function to fetch the profile of the currently logged-in user
export async function fetchProfile(): Promise<User | null> {
  const currentUserRaw = await AsyncStorage.getItem(CURRENT_USER_KEY);
  return currentUserRaw ? JSON.parse(currentUserRaw) : null;
}
