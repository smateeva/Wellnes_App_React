import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  id: string;
  email: string;
  password: string; 
  name: string;
}

const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

export async function register(email: string, password: string, name: string): Promise<User> {
  const newUser: User = { id: Date.now().toString(), email, password, name };
  const existingUsersRaw = await AsyncStorage.getItem(USERS_KEY);
  const existingUsers: User[] = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];

  const userExists = existingUsers.some((u) => u.email === email);
  if (userExists) {
    throw new Error('User already exists');
  }

  existingUsers.push(newUser);


  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(existingUsers));


  await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

  return newUser;
}


export async function login(email: string, password: string): Promise<User> {
  const usersRaw = await AsyncStorage.getItem(USERS_KEY);
  const users: User[] = usersRaw ? JSON.parse(usersRaw) : [];


  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error('Invalid email or password');
  }


  await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

  return user;
}

export async function fetchProfile(): Promise<User | null> {
  const currentUserRaw = await AsyncStorage.getItem(CURRENT_USER_KEY);
  return currentUserRaw ? JSON.parse(currentUserRaw) : null;
}
