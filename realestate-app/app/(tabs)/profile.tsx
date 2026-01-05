import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import { useAuth } from "../../context/AuthContext";
import { useProfile } from "../../hooks/useProfile";

export default function Profile() {
  const router = useRouter();
  const { user, logout } = useAuth();

  // ✅ ALWAYS call hooks
  const email = user?.email ?? "";
  const { profile, saveProfile, loading } = useProfile(email);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // 🔁 Redirect when logged out
  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);

  // 🔁 Load profile data
  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setAddress(profile.address);
    }
  }, [profile]);

  // ⛔ Render nothing while redirecting
  if (!user) return null;

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 40 }} />;
  }

  const handleSave = async () => {
    await saveProfile({
      ...profile,
      name,
      address,
    });
    Alert.alert("Success", "Profile updated");
  };

  const handleLogout = async () => {
    await logout();
    // redirect handled by effect
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Avatar */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: profile.avatar }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          {name || "Your Name"}
        </Text>
        <Text style={{ color: "#555" }}>{profile.email}</Text>
      </View>

      {/* Inputs */}
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={input}
        placeholder="Your name"
      />

      <Text>Address</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        style={input}
        placeholder="Your address"
      />

      <TouchableOpacity style={btn} onPress={handleSave}>
        <Text style={{ color: "#fff" }}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 30 }} onPress={handleLogout}>
        <Text style={{ color: "red", textAlign: "center" }}>Logout</Text>
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
  marginTop: 10,
};
