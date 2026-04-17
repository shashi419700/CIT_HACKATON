import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const data = [
  { id: "1", name: "Bed A1", price: "₹500/day", contact: "9876543210" },
  { id: "2", name: "Bed A2", price: "₹500/day", contact: "9876543210" },
  { id: "3", name: "Bed B1", price: "₹600/day", contact: "9876543210" },
];

export default function NormalBedScreen() {
  const call = (num) => Linking.openURL(`tel:${num}`);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Ionicons name="bed" size={30} color="#fff" />

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.callBtn} onPress={() => call(item.contact)}>
          <Text style={styles.btnText}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.btnText}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Normal Beds</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(i) => i.id} />
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
  price: { color: "#FCA5A5", marginVertical: 5 },

  btnRow: { flexDirection: "row", marginTop: 10 },

  callBtn: {
    backgroundColor: "#EF4444",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  bookBtn: {
    backgroundColor: "#DC2626",
    padding: 10,
    borderRadius: 10,
  },

  btnText: { color: "#fff" },
});