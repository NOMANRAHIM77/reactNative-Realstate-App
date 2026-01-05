import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { useState } from "react";
import { useProperties } from "../../hooks/useProperties";
import { useRouter } from "expo-router";

export default function Add() {
  const router = useRouter();
  const { addProperty } = useProperties();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = async () => {
    if (!title || !price || !location || !image) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    const newProperty = {
      id: Date.now().toString(),
      title,
      price,
      location,
      images: [image],
      features: {
        pool: false,
        garden: false,
        parking: false,
      },
      description: "User added property",
    };

    await addProperty(newProperty);
    Alert.alert("Success", "Property added");
    router.replace("/home");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Title" style={input} onChangeText={setTitle} />
      <TextInput placeholder="Price" style={input} onChangeText={setPrice} />
      <TextInput
        placeholder="Location"
        style={input}
        onChangeText={setLocation}
      />
      <TextInput
        placeholder="Image URL"
        style={input}
        onChangeText={setImage}
      />

      <TouchableOpacity style={btn} onPress={handleAdd}>
        <Text style={{ color: "#fff" }}>Add Property</Text>
      </TouchableOpacity>
    </View>
  );
}

const input = {
  borderWidth: 1,
  borderColor: "#ddd",
  padding: 14,
  borderRadius: 12,
  marginBottom: 12,
};

const btn = {
  backgroundColor: "#000",
  padding: 16,
  borderRadius: 12,
  alignItems: "center",
};
