import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { properties } from "../../data/properties";

export default function PropertyDetails() {
  const { id } = useLocalSearchParams();
  const property = properties.find((p) => p.id === id);

  if (!property) return null;

  return (
    <ScrollView style={{ padding: 20 }}>
      {/* Image Slider (Horizontal) */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 16 }}
      >
        {property.images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={{
              width: 300,
              height: 220,
              borderRadius: 18,
              marginRight: 12,
            }}
          />
        ))}
      </ScrollView>

      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: "700" }}>
        {property.title}
      </Text>

      <Text style={{ fontSize: 16, color: "#555" }}>
        {property.price} • {property.location}
      </Text>

      {/* Features */}
      <Text style={{ marginTop: 14, fontSize: 18, fontWeight: "600" }}>
        Features
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 8 }}>
        {Object.entries(property.features).map(
          ([key, value]) =>
            value && <Feature key={key} text={key} />
        )}
      </View>

      {/* Description */}
      <Text style={{ marginTop: 16, fontSize: 15, lineHeight: 22 }}>
        {property.description}
      </Text>
    </ScrollView>
  );
}

const Feature = ({ text }: { text: string }) => (
  <View
    style={{
      backgroundColor: "#000",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 10,
      marginRight: 8,
      marginBottom: 8,
    }}
  >
    <Text style={{ color: "#fff", fontSize: 13 }}>
      ✔ {text.charAt(0).toUpperCase() + text.slice(1)}
    </Text>
  </View>
);
