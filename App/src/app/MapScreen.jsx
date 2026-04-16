import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

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
    {
      id: 1,
      name: "City Hospital",
      latitude: 25.596,
      longitude: 85.142,
    },
    {
      id: 2,
      name: "Emergency Care Center",
      latitude: 25.592,
      longitude: 85.135,
    },
    {
      id: 3,
      name: "LifeLine Hospital",
      latitude: 25.599,
      longitude: 85.13,
    },
  ];

  // locate user
  const locateUser = () => {
    mapRef.current.animateToRegion({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  // show ambulance
  const showAmbulance = () => {
    mapRef.current.animateToRegion({
      latitude: ambulance.latitude,
      longitude: ambulance.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  // show hospitals
  const showHospitals = () => {
    mapRef.current.animateToRegion({
      latitude: hospitals[0].latitude,
      longitude: hospitals[0].longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    });
  };

  // call
  const callDriver = () => {
    Linking.openURL(`tel:${phone}`);
  };

  // track
  const trackRoute = () => {
    Alert.alert("Tracking", "Ambulance route tracking started 🚑");
  };

  // sos
  const sosPress = () => {
    Alert.alert("SOS", "Emergency Alert Sent 🚨");
  };

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
        {/* User */}
        <Marker
          coordinate={userLocation}
          title="You"
          description="Your Location"
        >
          <Ionicons name="person-circle" size={40} color="#007bff" />
        </Marker>

        {/* Ambulance */}
        <Marker
          coordinate={ambulance}
          title={ambulanceName}
          description="Ambulance is on the way"
          onPress={() => Alert.alert(ambulanceName, "Ambulance Selected")}
        >
          <MaterialIcons name="local-shipping" size={35} color="#ff3b3b" />
        </Marker>

        {/* Hospitals */}
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            coordinate={{
              latitude: hospital.latitude,
              longitude: hospital.longitude,
            }}
            title={hospital.name}
            onPress={() => Alert.alert("Hospital", hospital.name)}
          >
            <Ionicons name="medkit" size={30} color="green" />
          </Marker>
        ))}

        {/* Route */}
        <Polyline
          coordinates={[userLocation, ambulance]}
          strokeColor="#ff3b3b"
          strokeWidth={4}
        />
      </MapView>

      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="location" size={20} color="#fff" />
        <Text style={styles.headerText}> Live Emergency Tracking</Text>
      </View>

      {/* MAP CONTROLS */}
      <View style={styles.mapControls}>
        <TouchableOpacity style={styles.controlBtn} onPress={locateUser}>
          <Ionicons name="locate" size={22} color="#ff3b3b" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn} onPress={showHospitals}>
          <Ionicons name="medkit" size={22} color="#ff3b3b" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn} onPress={showAmbulance}>
          <Ionicons name="car" size={22} color="#ff3b3b" />
        </TouchableOpacity>
      </View>

      {/* SOS */}
      <TouchableOpacity style={styles.sosButton} onPress={sosPress}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>

      {/* BOTTOM CARD */}
      <View style={styles.bottomCard}>
        <View style={styles.row}>
          <Ionicons name="car" size={22} color="#ff3b3b" />
          <Text style={styles.title}> Ambulance Arriving</Text>
        </View>

        <Text style={styles.info}>Driver: Rajesh Kumar</Text>
        <Text style={styles.info}>ETA: 5 minutes</Text>
        <Text style={styles.info}>Hospital: City Hospital</Text>
        <Text style={styles.info}>Phone: {phone}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.callButton} onPress={callDriver}>
            <Ionicons name="call" size={18} color="#fff" />
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.trackButton} onPress={trackRoute}>
            <Ionicons name="navigate" size={18} color="#fff" />
            <Text style={styles.callText}>Track</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: width,
    height: height,
  },

  header: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ff3b3b",
    padding: 14,
    borderRadius: 15,
    elevation: 10,
  },

  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  mapControls: {
    position: "absolute",
    right: 15,
    top: 120,
  },

  controlBtn: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 5,
  },

  sosButton: {
    position: "absolute",
    bottom: 180,
    right: 20,
    backgroundColor: "#ff3b3b",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },

  sosText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  bottomCard: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    marginBottom: 40,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff3b3b",
  },

  info: {
    fontSize: 14,
    marginBottom: 5,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },

  callButton: {
    flexDirection: "row",
    backgroundColor: "#ff3b3b",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    justifyContent: "center",
  },

  trackButton: {
    flexDirection: "row",
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    justifyContent: "center",
  },

  callText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "bold",
  },
});
