import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useProfile } from "../../hooks/useProfile";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const { profile, saveProfile, loading } = useProfile(user.email);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setAddress(profile.address);
    }
  }, [profile]);

  if (loading) return null;

  const handleSave = async () => {
    await saveProfile({
      ...profile,
      name,
      address,
    });
    Alert.alert("Success", "Profile updated");
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

      {/* Editable Fields */}
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        style={input}
      />

      <Text>Address</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
        style={input}
      />

      {/* Save */}
      <TouchableOpacity style={btn} onPress={handleSave}>
        <Text style={{ color: "#fff" }}>Save Changes</Text>
      </TouchableOpacity>

      {/* Extra Features */}
      <View style={{ marginTop: 30 }}>
        <Stat label="Listed Properties" value="2" />
        <Stat label="Saved Homes" value="4" />
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={async () => {
          await logout();
          router.replace("/");
        }}
      >
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

const Stat = ({ label, value }: any) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderColor: "#eee",
    }}
  >
    <Text>{label}</Text>
    <Text style={{ fontWeight: "600" }}>{value}</Text>
  </View>
);
