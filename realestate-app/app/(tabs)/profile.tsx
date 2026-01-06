import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  FlatList,
} from "react-native";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "expo-router";

import { useAuth } from "../../context/AuthContext";
import { useProfile } from "../../hooks/useProfile";
import { useProperties } from "../../hooks/useProperties";

export default function Profile() {
  const router = useRouter();
  const { user, logout } = useAuth();

  // ❗ If user is null, just render nothing
  // ❗ NO redirect here (fixes crash)
  if (!user) return null;

  const { profile, saveProfile, loading } = useProfile(user.email);
  const { properties } = useProperties();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // Load profile data
  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setAddress(profile.address || "");
    }
  }, [profile]);

  // User properties (memoized)
  const userProperties = useMemo(() => {
    return properties.filter(
      (p) => p.ownerEmail === user.email
    );
  }, [properties, user.email]);

  const handleSave = async () => {
    await saveProfile({
      ...profile,
      name,
      address,
    });
    Alert.alert("Success", "Profile updated successfully");
  };

  const handleLogout = async () => {
    await logout();
    // ❗ DO NOT navigate here
    // Root layout will redirect safely
  };

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 40 }} />;
  }

  return (
    <View style={{ padding: 20 }}>
      {/* ================= PROFILE HEADER ================= */}
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

        <Text style={{ color: "#555", marginTop: 4 }}>
          {address || "No address added"}
        </Text>

        <Text style={{ color: "#777", marginTop: 2 }}>
          {profile.email}
        </Text>
      </View>

      {/* ================= EDIT PROFILE ================= */}
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

      {/* ================= YOUR PROPERTIES ================= */}
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 12 }}>
          Your Properties
        </Text>

        {userProperties.length === 0 ? (
          <Text style={{ color: "#777" }}>
            You haven’t added any properties yet.
          </Text>
        ) : (
          <FlatList
            data={userProperties}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => router.push(`/property/${item.id}`)}
                style={{
                  marginBottom: 14,
                  borderRadius: 14,
                  overflow: "hidden",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <Image
                  source={{ uri: item.images[0] }}
                  style={{ height: 140, width: "100%" }}
                />
                <View style={{ padding: 10 }}>
                  <Text style={{ fontWeight: "600", fontSize: 16 }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: "#555" }}>{item.location}</Text>
                  <Text style={{ fontWeight: "bold", marginTop: 4 }}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      {/* ================= LOGOUT ================= */}
      <TouchableOpacity style={{ marginTop: 40 }} onPress={handleLogout}>
        <Text style={{ color: "red", textAlign: "center", fontSize: 16 }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

/* ================= STYLES ================= */

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
