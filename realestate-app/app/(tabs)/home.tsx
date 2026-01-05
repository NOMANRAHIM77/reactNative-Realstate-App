import { View, FlatList } from "react-native";
import { useRouter } from "expo-router";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";

export default function Home() {
  const router = useRouter();

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
