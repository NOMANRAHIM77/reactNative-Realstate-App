import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { properties } from "../../data/properties";

export default function PropertyDetails() {
  const { id } = useLocalSearchParams();
  const property = properties.find((p) => p.id === id);

  if (!property) return null;

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: property.image }}
        style={{ height: 250, borderRadius: 16 }}
      />
      <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 10 }}>
        {property.title}
      </Text>
      <Text>{property.price}</Text>
      <Text style={{ marginTop: 10 }}>{property.description}</Text>
    </View>
  );
}
