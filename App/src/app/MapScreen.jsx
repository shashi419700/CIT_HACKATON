import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

// Responsive scale
const scale = (size) => (width / 375) * size;

const MapScreen = ({ route }) => {
  const mapRef = useRef(null);

  const ambulanceName = route?.params?.ambulanceName || "City Ambulance";
  const phone = route?.params?.phone || "9876543210";

  const [userLocation] = useState({
    latitude: 25.5941,
    longitude: 85.1376,
  });

  const [ambulance] = useState({
    latitude: 25.5925,
    longitude: 85.1402,
  });

  const hospitals = [
    { id: 1, name: "City Hospital", latitude: 25.596, longitude: 85.142 },
    {
      id: 2,
      name: "Emergency Care Center",
      latitude: 25.592,
      longitude: 85.135,
    },
    { id: 3, name: "LifeLine Hospital", latitude: 25.599, longitude: 85.13 },
  ];

  const animateTo = (lat, lng, delta = 0.01) => {
    mapRef.current.animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: delta,
      longitudeDelta: delta,
    });
  };

  const callDriver = () => Linking.openURL(`tel:${phone}`);

  return (
    <View style={styles.container}>
      {/* MAP */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* USER */}
        <Marker coordinate={userLocation}>
          <Ionicons name="person-circle" size={40} color="#2563EB" />
        </Marker>

        {/* AMBULANCE */}
        <Marker coordinate={ambulance}>
          <MaterialIcons name="local-shipping" size={35} color="#EF4444" />
        </Marker>

        {/* HOSPITALS */}
        {hospitals.map((h) => (
          <Marker key={h.id} coordinate={h}>
            <Ionicons name="medkit" size={28} color="#22C55E" />
          </Marker>
        ))}

        {/* ROUTE */}
        <Polyline
          coordinates={[userLocation, ambulance]}
          strokeColor="#EF4444"
          strokeWidth={4}
        />
      </MapView>

      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="location" size={18} color="#fff" />
        <Text style={styles.headerText}> Live Tracking</Text>
      </View>

      {/* CONTROLS */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlBtn}
          onPress={() =>
            animateTo(userLocation.latitude, userLocation.longitude)
          }
        >
          <Ionicons name="locate" size={20} color="#EF4444" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlBtn}
          onPress={() =>
            animateTo(hospitals[0].latitude, hospitals[0].longitude, 0.02)
          }
        >
          <Ionicons name="medkit" size={20} color="#EF4444" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlBtn}
          onPress={() => animateTo(ambulance.latitude, ambulance.longitude)}
        >
          <Ionicons name="car" size={20} color="#EF4444" />
        </TouchableOpacity>
      </View>

      {/* BOTTOM CARD */}
      <View style={styles.bottomCard}>
        <View style={styles.row}>
          <Ionicons name="car" size={20} color="#EF4444" />
          <Text style={styles.title}> Ambulance Arriving</Text>
        </View>

        <Text style={styles.info}>Driver: Rajesh Kumar</Text>
        <Text style={styles.info}>ETA: 5 mins</Text>
        <Text style={styles.info}>Hospital: City Hospital</Text>
        <Text style={styles.info}>Phone: {phone}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.callBtn} onPress={callDriver}>
            <Ionicons name="call" size={16} color="#fff" />
            <Text style={styles.btnText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.trackBtn}
            onPress={() => Alert.alert("Tracking Started 🚑")}
          >
            <Ionicons name="navigate" size={16} color="#fff" />
            <Text style={styles.btnText}>Track</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },

  map: { width: "100%", height: "100%" },

  header: {
    position: "absolute",
    top: Platform.OS === "android" ? 40 : 60,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#EF4444",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 8,
  },

  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: scale(14),
  },

  controls: {
    position: "absolute",
    right: 15,
    top: height * 0.18,
  },

  controlBtn: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 6,
  },

  sosButton: {
    position: "absolute",
    right: 20,
    bottom: height * 0.28,
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#EF4444",
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 12,
  },

  sosText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: scale(16),
  },

  bottomCard: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    elevation: 10,
    paddingBottom: 75,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  title: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: "#EF4444",
  },

  info: {
    fontSize: scale(13),
    marginBottom: 4,
    color: "#333",
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
  },

  callBtn: {
    flexDirection: "row",
    backgroundColor: "#EF4444",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    justifyContent: "center",
  },

  trackBtn: {
    flexDirection: "row",
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    justifyContent: "center",
  },

  btnText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "bold",
  },
});
