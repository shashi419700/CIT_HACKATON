import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Linking,
  Dimensions,
  Alert,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const EmergencyCallScreen = () => {

  const [search, setSearch] = useState("");

  const emergencyNumbers = [
    { name: "National Emergency", number: "112", icon: "call" },
    { name: "Ambulance", number: "108", icon: "medkit" },
    { name: "Police", number: "100", icon: "shield" },
    { name: "Fire Brigade", number: "101", icon: "flame" },
    { name: "Medical Help", number: "102", icon: "heart" },
    { name: "Women Helpline", number: "1091", icon: "woman" },
    { name: "Child Helpline", number: "1098", icon: "happy" },
    { name: "Disaster Management", number: "1078", icon: "alert" }
  ];

  const callEmergency = (number) => {
    Alert.alert(
      "Confirm Call",
      `Do you want to call ${number}?`,
      [
        { text: "Cancel" },
        {
          text: "Call",
          onPress: () => Linking.openURL(`tel:${number}`)
        }
      ]
    );
  };

  const filteredNumbers = emergencyNumbers.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Title */}
        <Text style={styles.title}>Emergency Call</Text>

        {/* Big SOS Button */}
        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => callEmergency("112")}
        >
          <Ionicons name="call" size={34} color="#fff" />
          <Text style={styles.bigText}>CALL 112</Text>
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.quickRow}>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => callEmergency("108")}
          >
            <Ionicons name="medkit" size={24} color="#fff" />
            <Text style={styles.quickText}>Ambulance</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => callEmergency("100")}
          >
            <Ionicons name="shield" size={24} color="#fff" />
            <Text style={styles.quickText}>Police</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => callEmergency("101")}
          >
            <Ionicons name="flame" size={24} color="#fff" />
            <Text style={styles.quickText}>Fire</Text>
          </TouchableOpacity>

        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#aaa" />
          <TextInput
            placeholder="Search emergency service..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Emergency Grid */}
        <View style={styles.grid}>
          {filteredNumbers.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => callEmergency(item.number)}
            >
              <Ionicons name={item.icon} size={26} color="#FF1E1E" />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardNumber}>{item.number}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default EmergencyCallScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#1A0000",
    paddingHorizontal: 16
  },

  title: {
    color: "#fff",
    fontSize: width * 0.065,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20
  },

  bigButton: {
    backgroundColor: "#FF1E1E",
    height: height * 0.1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20
  },

  bigText: {
    color: "#fff",
    fontSize: width * 0.055,
    fontWeight: "bold",
    marginLeft: 10
  },

  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  quickCard: {
    backgroundColor: "#FF1E1E",
    width: "31%",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center"
  },

  quickText: {
    color: "#fff",
    marginTop: 5,
    fontSize: 13,
    fontWeight: "600"
  },

  searchBox: {
    flexDirection: "row",
    backgroundColor: "#2A0000",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20
  },

  searchInput: {
    color: "#fff",
    marginLeft: 10,
    flex: 1
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  card: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 14
  },

  cardTitle: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center"
  },

  cardNumber: {
    color: "#FF1E1E",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 4
  }

});