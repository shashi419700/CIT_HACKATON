import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const data = [
  { id: "1", group: "A+", units: 5 },
  { id: "2", group: "B+", units: 3 },
  { id: "3", group: "O+", units: 7 },
];

export default function BloodScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blood Stock</Text>

      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name="water" size={35} color="#fff" />

            <Text style={styles.title}>{item.group}</Text>
            <Text style={styles.units}>{item.units} Units Available</Text>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Request Blood</Text>
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

  title: { color: "#fff", fontSize: 20 },
  units: { color: "#FCA5A5", marginVertical: 5 },

  btn: {
    backgroundColor: "#EF4444",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  btnText: { color: "#fff" },
});``