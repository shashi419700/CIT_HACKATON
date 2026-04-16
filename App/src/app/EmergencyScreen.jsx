import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const EmergencyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>🚨 Emergency Center</Text>
          <Text style={styles.subHeader}>Stay safe and get help instantly</Text>
        </View>

        {/* SOS Button */}
        <View style={styles.sosContainer}>
          <TouchableOpacity
            style={styles.sosButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SOSScreen")}
          >
            <Ionicons name="warning" size={40} color="#fff" />
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>

          <Text style={styles.sosDesc}>
            Tap to send emergency alert to hospitals, ambulances and contacts
          </Text>
        </View>
        {/* Ambulance Actions */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("InstantAmbulance")}
        >
          <View style={styles.iconBox}>
            <Ionicons name="medkit" size={26} color="#fff" />
          </View>

          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Instant Ambulance</Text>
            <Text style={styles.cardDesc}>
              Request nearby ambulance instantly in emergency
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={22} color="#FCA5A5" />
        </TouchableOpacity>

        {/* Emergency Actions */}
        <View style={styles.cardContainer}>
          {/* Accident Alert */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("AccidentAlertDetection")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="car-sport" size={26} color="#fff" />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Accident Alert</Text>
              <Text style={styles.cardDesc}>
                Automatic accident detection using sensors
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#FCA5A5" />
          </TouchableOpacity>

          {/* near  */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("NearbyHospitalScreen")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="business" size={26} color="#fff" />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Near Hospital</Text>
              <Text style={styles.cardDesc}>
                Find nearby hospitals and medical centers instantly
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#FCA5A5" />
          </TouchableOpacity>
          {/* Emergency Contacts */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("EmergencyContactsScreen")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="people" size={26} color="#fff" />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Emergency Contacts</Text>
              <Text style={styles.cardDesc}>
                Notify family and friends instantly
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#FCA5A5" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B0000",
  },

  headerContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  subHeader: {
    color: "#FCA5A5",
    marginTop: 6,
    fontSize: 14,
  },

  sosContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },

  sosButton: {
    width: width * 0.48,
    height: width * 0.48,
    borderRadius: width * 0.24,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#FF4D6D",
    shadowOpacity: 0.8,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 10 },

    elevation: 15,
  },

  sosText: {
    fontSize: 38,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
  },

  sosDesc: {
    color: "#FCA5A5",
    marginTop: 15,
    textAlign: "center",
    paddingHorizontal: 25,
    fontSize: 14,
    lineHeight: 20,
  },

  cardContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#7F1D1D",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#EF4444",
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },

    elevation: 8,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
  },

  cardText: {
    flex: 1,
    marginLeft: 15,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  cardDesc: {
    color: "#FCA5A5",
    marginTop: 4,
    fontSize: 13,
  },
});
