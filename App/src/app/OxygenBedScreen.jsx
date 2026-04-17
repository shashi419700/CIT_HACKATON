import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { id: "1", name: "Oxygen Bed 1", oxygen: "Available" },
  { id: "2", name: "Oxygen Bed 2", oxygen: "Available" },
];

export default function OxygenBedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Oxygen Beds</Text>

      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialCommunityIcons name="lungs" size={35} color="#fff" />

            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.status}>{item.oxygen}</Text>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Request Bed</Text>
            </TouchableOpacity>
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
    backgroundColor: "#B91C1C",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: "center",
    elevation: 5,
  },

  title: { color: "#fff", fontSize: 18, marginTop: 5 },
  status: { color: "#FCA5A5", marginVertical: 5 },

  btn: {
    backgroundColor: "#EF4444",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  btnText: { color: "#fff" },
});