import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { id: "1", name: "ICU - 1", status: "Critical Care Available" },
  { id: "2", name: "ICU - 2", status: "Limited Availability" },
];

export default function ICUBedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ICU Beds</Text>

      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialCommunityIcons name="medical-bag" size={35} color="#fff" />

            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#450A0A", padding: 15 },
  header: { color: "#fff", fontSize: 22, fontWeight: "bold", marginBottom: 15 },

  card: {
    backgroundColor: "#7F1D1D",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: "center",
    elevation: 5,
  },

  title: { color: "#fff", fontSize: 18, marginTop: 5 },
  status: { color: "#FCA5A5", marginVertical: 5 },
});