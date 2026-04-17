import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const AvailableServiceScreen = ({ route, navigation }) => {
  const hospital = route?.params?.hospital || {
    name: "Nearby Hospital",
  };

  //  FIX: each card animation alag hona chahiye
  const scaleAnims = useRef({}).current;

  const getScaleAnim = (id) => {
    if (!scaleAnims[id]) {
      scaleAnims[id] = new Animated.Value(1);
    }
    return scaleAnims[id];
  };

  const handlePress = (screen, id) => {
    const scaleAnim = getScaleAnim(id);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate(screen, { hospital });
    });
  };

  const services = [
    {
      id: 1,
      title: "Normal Beds",
      count: 25,
      icon: "bed",
      color: "#EF4444",
      screen: "NormalBedScreen",
    },
    {
      id: 2,
      title: "Oxygen Beds",
      count: 12,
      icon: "lungs",
      color: "#DC2626",
      screen: "OxygenBedScreen",
    },
    {
      id: 3,
      title: "ICU Beds",
      count: 5,
      icon: "medical-bag",
      color: "#B91C1C",
      screen: "ICUBedScreen",
    },
    {
      id: 4,
      title: "Blood Stock",
      count: "18 Units",
      icon: "water",
      color: "#7F1D1D",
      screen: "BloodScreen",
    },
  ];

  const renderCard = (item) => {
    const scaleAnim = getScaleAnim(item.id);

    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.85}
        onPress={() => handlePress(item.screen, item.id)}
        style={styles.cardWrapper}
      >
        <Animated.View
          style={[styles.card, { transform: [{ scale: scaleAnim }] }]}
        >
          <View style={[styles.iconBox, { backgroundColor: item.color }]}>
            {item.icon === "lungs" ? (
              <MaterialCommunityIcons name="lungs" size={28} color="#fff" />
            ) : item.icon === "medical-bag" ? (
              <MaterialCommunityIcons
                name="medical-bag"
                size={28}
                color="#fff"
              />
            ) : (
              <Ionicons name={item.icon} size={28} color="#fff" />
            )}
          </View>

          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.count}>{item.count}</Text>

          <View style={styles.statusBox}>
            <Text style={styles.available}>● Available</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🏥 {hospital.name}</Text>

      <Text style={styles.subHeader}>Available Services</Text>

      <ScrollView contentContainerStyle={styles.grid}>
        {services.map((item) => renderCard(item))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AvailableServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#450A0A",
    padding: 15,
  },

  header: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
    paddingTop: 30,

  },

  subHeader: {
    color: "#FCA5A5",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  cardWrapper: {
    width: "48%",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#7F1D1D",
    borderRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: "center",

    //  3D Shadow
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },

    // subtle border glow
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  iconBox: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,

    elevation: 4,
  },

  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  count: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 6,
  },

  statusBox: {
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
  },

  available: {
    color: "#FCA5A5",
    fontSize: 12,
  },
});