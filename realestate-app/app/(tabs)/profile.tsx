import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";

export default function Profile() {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Profile</Text>

      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => {
          logout();
          router.replace("/");
        }}
      >
        <Text style={{ color: "red" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
