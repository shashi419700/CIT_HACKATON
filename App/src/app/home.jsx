import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

const { width } = Dimensions.get("window");

const ITEM_HEIGHT = 260;

const data = [
  {
    title: "SOS Emergency Alert",
    desc: "Send instant SOS alerts with live location to nearby hospitals, ambulances, and emergency contacts during critical situations.",
    img: require("../../assets/sos.jpg"),
  },
  {
    title: "Accident Detection",
    desc: "Automatically detect road accidents using phone sensors and trigger emergency alerts instantly.",
    img: require("../../assets/accident.jpg"),
  },
  {
    title: "Live Location Tracking",
    desc: "Share real-time location with emergency responders and track ambulance movement on the map for faster rescue.",
    img: require("../../assets/live.jpg"),
  },
  {
    title: "Nearby Hospital Finder",
    desc: "Find nearby hospitals with distance, contact details, and navigation support for quick medical assistance.",
    img: require("../../assets/hospital.jpg"),
  },
  {
    title: "Ambulance Tracking",
    desc: "Track ambulance location in real time and view estimated arrival time to ensure quick response.",
    img: require("../../assets/ambulance.jpg"),
  },
  {
    title: "Emergency Contacts",
    desc: "Automatically notify family and friends with SMS and live location during emergency situations.",
    img: require("../../assets/contact.jpg"),
  },
  {
    title: "Medical Information",
    desc: "Store blood group, allergies, disease history, and medical notes to help hospitals provide faster treatment.",
    img: require("../../assets/medical.jpg"),
  },

  {
    title: "Real-Time Emergency Response",
    desc: "Connect hospitals, ambulances, and emergency contacts in a real-time network to reduce response time.",
    img: require("../../assets/emergency.jpg"),
  },
];

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7F1D1D" />

      <Text style={styles.header}>🚑 Digital Emergency System</Text>

      <Animated.FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_HEIGHT * index,
            ITEM_HEIGHT * (index + 2),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0.95],
            extrapolate: "clamp",
          });

          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0.5],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={[styles.card, { transform: [{ scale }], opacity }]}
            >
              <Image source={item.img} style={styles.image} />

              <View style={styles.textBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#450A0A",
  },

  header: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#7F1D1D",
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 20,
    elevation: 6,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 190,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  textBox: {
    padding: 15,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  desc: {
    color: "#FECACA",
    marginTop: 5,
    lineHeight: 20,
    fontSize: 14,
  },
});
