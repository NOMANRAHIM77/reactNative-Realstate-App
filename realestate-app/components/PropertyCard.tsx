import { View, Text, Image, TouchableOpacity } from "react-native";

export default function PropertyCard({ item, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ marginBottom: 26 }}>
        {/* Main Image */}
        <Image
          source={{ uri: item.images[0] }}
          style={{
            height: 190,
            borderRadius: 18,
          }}
        />

        {/* Info */}
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 8 }}>
          {item.title}
        </Text>

        <Text style={{ color: "#555" }}>
          {item.price} • {item.location}
        </Text>

        {/* Features */}
        <View style={{ flexDirection: "row", marginTop: 6 }}>
          {item.features.pool && <Feature text="Pool" />}
          {item.features.garden && <Feature text="Garden" />}
          {item.features.parking && <Feature text="Parking" />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const Feature = ({ text }: { text: string }) => (
  <View
    style={{
      backgroundColor: "#f1f1f1",
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 8,
      marginRight: 6,
    }}
  >
    <Text style={{ fontSize: 12 }}>✔ {text}</Text>
  </View>
);
