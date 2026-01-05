import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "600" }}>Create Account</Text>

      <TextInput placeholder="Email" style={input} />
      <TextInput placeholder="Password" secureTextEntry style={input} />

      <TouchableOpacity style={btn} onPress={() => router.replace("/")}>
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
