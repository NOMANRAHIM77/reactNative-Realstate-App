import { ScrollView, Text, Image, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useProperties } from "../../hooks/useProperties";

export default function PropertyDetails() {
  const { id } = useLocalSearchParams();
  const { properties } = useProperties();

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <Text style={{ padding: 20 }}>Property not found</Text>;
  }

  return (
    <ScrollView>
      <ScrollView horizontal pagingEnabled>
        {property.images.map((img: string, index: number) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={{ width: 360, height: 250 }}
          />
        ))}
      </ScrollView>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>
          {property.title}
        </Text>
        <Text>{property.location}</Text>
        <Text style={{ fontWeight: "bold" }}>{property.price}</Text>

        <Text style={{ marginVertical: 10 }}>
          {property.description}
        </Text>

        <Text>🏊 Pool: {property.features.pool ? "✔" : "✖"}</Text>
        <Text>🌿 Garden: {property.features.garden ? "✔" : "✖"}</Text>
        <Text>🚗 Garage: {property.features.garage ? "✔" : "✖"}</Text>
        <Text>🌅 Balcony: {property.features.balcony ? "✔" : "✖"}</Text>
      </View>

<View style={{ marginTop: 24 }}>
  <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}>
    Contact Agent
  </Text>

  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={{ uri: property.contact.avatar }}
      style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }}
    />
    <View>
      <Text style={{ fontWeight: "600" }}>
        {property.contact.name}
      </Text>
      <Text>{property.contact.email}</Text>
      <Text>{property.contact.phone}</Text>
    </View>
  </View>
</View>


    </ScrollView>
  );
}
