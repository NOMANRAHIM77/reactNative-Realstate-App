import { View, TextInput, TouchableOpacity, Text } from "react-native";

export default function Add() {
  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Title" style={input} />
      <TextInput placeholder="Price" style={input} />
      <TextInput placeholder="Location" style={input} />
      <TextInput placeholder="Image URL" style={input} />

      <TouchableOpacity style={btn}>
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
