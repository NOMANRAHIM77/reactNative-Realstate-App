import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.replace("/home");
    } catch (err: any) {
      Alert.alert("Login Failed", err.message);
    }
  };

  return (
    <View style={container}>
      <Text style={title}>Welcome Back</Text>

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

      <TouchableOpacity style={button} onPress={handleLogin}>
        <Text style={btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={link}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
}

const container = {
  flex: 1,
  justifyContent: "center",
  padding: 24,
};

const title = {
  fontSize: 28,
  fontWeight: "600",
  marginBottom: 20,
};

const input = {
  borderWidth: 1,
  borderColor: "#ddd",
  padding: 14,
  borderRadius: 12,
  marginBottom: 12,
};

const button = {
  backgroundColor: "#000",
  padding: 16,
  borderRadius: 12,
  alignItems: "center",
};

const btnText = { color: "#fff" };
const link = { marginTop: 20, textAlign: "center" };
