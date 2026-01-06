import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useProperties } from "../../hooks/useProperties";

export default function Home() {
  const router = useRouter();
  const { properties, loading } = useProperties();

  if (loading) return null;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/property/${item.id}`)}
            style={{
              marginBottom: 20,
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={{ uri: item.images[0] }}
              style={{ width: "100%", height: 200 }}
            />

            <View style={{ padding: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.title}
              </Text>
              <Text style={{ color: "#555" }}>{item.location}</Text>
              <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
