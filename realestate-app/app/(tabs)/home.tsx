import { View, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../hooks/useProperties";

export default function Home() {
  const router = useRouter();
  const { properties, loading } = useProperties();

  if (loading) return <ActivityIndicator style={{ marginTop: 40 }} />;

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PropertyCard
            item={item}
            onPress={() => router.push(`/property/${item.id}`)}
          />
        )}
      />
    </View>
  );
}
