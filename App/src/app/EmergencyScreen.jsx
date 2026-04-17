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
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

// Responsive helpers
const scale = (size) => (width / 375) * size;

const EmergencyScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>🚨 Emergency Center</Text>
          <Text style={styles.subHeader}>Stay safe and get help instantly</Text>
        </View>

        {/* SOS Button */}
        <View style={styles.sosContainer}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.navigate("SOSScreen")}
            style={styles.sosWrapper}
          >
            <View style={styles.sosButton}>
              <Ionicons name="warning" size={scale(40)} color="#fff" />
              <Text style={styles.sosText}>SOS</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.sosDesc}>
            Tap to send emergency alert to hospitals, ambulances and contacts
          </Text>
        </View>

        {/* Other Cards */}
        <View style={styles.cardContainer}>
          {/* Add Number  */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("EmergencyContactScreen")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="call" size={scale(24)} color="#fff" />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Add Emergency Contact</Text>
              <Text style={styles.cardDesc}>
                Add & manage emergency contact numbers
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#FCA5A5" />
          </TouchableOpacity>

          {/* Instant Ambulance */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("InstantAmbulance")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="medkit" size={scale(24)} color="#fff" />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Instant Ambulance</Text>
              <Text style={styles.cardDesc}>
                Request nearby ambulance instantly
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#FCA5A5" />
          </TouchableOpacity>
          {/* Accident Alert */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("AccidentAlertDetection")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="car-sport" size={scale(24)} color="#fff" />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Accident Alert</Text>
              <Text style={styles.cardDesc}>Automatic accident detection</Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#FCA5A5" />
          </TouchableOpacity>

          {/* Nearby Hospital */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("NearbyHospitalScreen")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="business" size={scale(24)} color="#fff" />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Nearby Hospital</Text>
              <Text style={styles.cardDesc}>
                Find hospitals & medical centers
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#FCA5A5" />
          </TouchableOpacity>

          {/* Emergency Contacts */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("EmergencyContactsScreen")}
          >
            <View style={styles.iconBox}>
              <Ionicons name="people" size={scale(24)} color="#fff" />
            </View>

            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Emergency Contacts</Text>
              <Text style={styles.cardDesc}>
                Notify family & friends instantly
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
    marginTop: Platform.OS === "android" ? 20 : 10,
    paddingHorizontal: 20,
  },

  header: {
    color: "#fff",
    fontSize: scale(26),
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 25,
  },

  subHeader: {
    color: "#FCA5A5",
    marginTop: 6,
    fontSize: scale(13),
    textAlign: "center",
  },

  sosContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 25,
  },

  sosWrapper: {
    borderRadius: 999,
    padding: 8,
    backgroundColor: "rgba(239,68,68,0.15)",
  },

  sosButton: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: width * 0.225,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#FF4D6D",
    shadowOpacity: 0.9,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 12 },
    elevation: 20,
  },

  sosText: {
    fontSize: scale(34),
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
  },

  sosDesc: {
    color: "#FCA5A5",
    marginTop: 15,
    textAlign: "center",
    paddingHorizontal: 30,
    fontSize: scale(13),
    lineHeight: 20,
  },

  cardContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#7F1D1D",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#EF4444",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
  },

  cardText: {
    flex: 1,
    marginLeft: 12,
  },

  cardTitle: {
    color: "#fff",
    fontSize: scale(16),
    fontWeight: "bold",
  },

  cardDesc: {
    color: "#FCA5A5",
    marginTop: 3,
    fontSize: scale(12),
  },
});
