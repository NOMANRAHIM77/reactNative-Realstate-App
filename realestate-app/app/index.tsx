import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();

  return (
    <View style={container}>
      <Text style={title}>Welcome Back</Text>

      <TextInput placeholder="Email" style={input} />
      <TextInput placeholder="Password" secureTextEntry style={input} />

      <TouchableOpacity
        style={button}
        onPress={() => {
          login("test@mail.com", "123");
          router.replace("/home");
        }}
      >
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
  marginTop: 10,
};

const btnText = { color: "#fff", fontSize: 16 };

const link = { marginTop: 20, textAlign: "center" };
