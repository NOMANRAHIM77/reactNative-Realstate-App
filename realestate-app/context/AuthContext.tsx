import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext<any>(null);

const USERS_KEY = "REGISTERED_USERS";
const CURRENT_USER = "CURRENT_USER";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Load logged-in user on app start
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem(CURRENT_USER);
      if (storedUser) setUser(JSON.parse(storedUser));
      setLoading(false);
    };
    loadUser();
  }, []);

  // LOGIN
  const login = async (email: string, password: string) => {
    const usersRaw = await AsyncStorage.getItem(USERS_KEY);
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    await AsyncStorage.setItem(CURRENT_USER, JSON.stringify(foundUser));
    setUser(foundUser);
  };

  // SIGNUP
  const signup = async (email: string, password: string) => {
    const usersRaw = await AsyncStorage.getItem(USERS_KEY);
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    const alreadyExists = users.some((u: any) => u.email === email);
    if (alreadyExists) {
      throw new Error("User already exists");
    }

    const newUser = { email, password };
    users.push(newUser);

    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  // LOGOUT
  const logout = async () => {
    await AsyncStorage.removeItem(CURRENT_USER);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
