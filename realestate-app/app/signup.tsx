import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const { signup } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup(email, password);
      Alert.alert("Success", "Account created successfully");
      router.replace("/");
    } catch (err: any) {
      Alert.alert("Signup Failed", err.message);
    }
  };

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "600" }}>Create Account</Text>

      <TextInput
        placeholder="Email"
        style={input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={btn} onPress={handleSignup}>
        <Text style={{ color: "#fff" }}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const input = {
  borderWidth: 1,
  borderColor: "#ddd",
  padding: 14,
  borderRadius: 12,
  marginVertical: 10,
};

const btn = {
  backgroundColor: "#000",
  padding: 16,
  borderRadius: 12,
  alignItems: "center",
};
