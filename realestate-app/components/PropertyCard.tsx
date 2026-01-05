import { View, Text, Image, TouchableOpacity } from "react-native";

export default function PropertyCard({ item, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ marginBottom: 24 }}>
        <Image
          source={{ uri: item.image }}
          style={{ height: 180, borderRadius: 16 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 6 }}>
          {item.title}
        </Text>
        <Text>
          {item.price} • {item.location}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
