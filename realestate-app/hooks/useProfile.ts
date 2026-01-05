import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const PROFILE_KEY = "USER_PROFILE";

export const useProfile = (email: string) => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const raw = await AsyncStorage.getItem(PROFILE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      setProfile(data);
    } else {
      setProfile({
        email,
        name: "",
        address: "",
        avatar: "https://i.pravatar.cc/300",
      });
    }
    setLoading(false);
  };

  const saveProfile = async (updatedProfile: any) => {
    await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(updatedProfile));
    setProfile(updatedProfile);
  };

  return { profile, saveProfile, loading };
};
