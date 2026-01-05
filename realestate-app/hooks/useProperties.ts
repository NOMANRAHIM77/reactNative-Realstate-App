import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { DEFAULT_PROPERTIES } from "../data/properties";

const PROPERTIES_KEY = "APP_PROPERTIES";

export const useProperties = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    const stored = await AsyncStorage.getItem(PROPERTIES_KEY);

    if (stored) {
      setProperties(JSON.parse(stored));
    } else {
      await AsyncStorage.setItem(
        PROPERTIES_KEY,
        JSON.stringify(DEFAULT_PROPERTIES)
      );
      setProperties(DEFAULT_PROPERTIES);
    }

    setLoading(false);
  };

  const addProperty = async (property: any) => {
    const updated = [property, ...properties];
    setProperties(updated);
    await AsyncStorage.setItem(PROPERTIES_KEY, JSON.stringify(updated));
  };

  return { properties, addProperty, loading };
};
