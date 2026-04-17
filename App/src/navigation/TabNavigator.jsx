import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HomeScreen from "../app/home";
import EmergencyScreen from "../app/EmergencyScreen";
import ProfileScreen from "../app/profile";
import AvailableServiceScreen from "../app/AvalibleService";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarActiveTintColor: "#EF4444",
        tabBarInactiveTintColor: "#FCA5A5",

        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 65 + insets.bottom,
          backgroundColor: "#450A0A",
          paddingTop: 6,
          paddingBottom: insets.bottom,
          borderTopWidth: 0,
          elevation: 20,

          shadowColor: "#EF4444",
          shadowOpacity: 0.4,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
        },

        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 2,
          fontWeight: "600",
          color: "#fff",
        },

        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          if (route.name === "Emergency") {
            iconName = focused
              ? "alert-circle"
              : "alert-circle-outline";
          }

          if (route.name === "Services") {
            iconName = focused ? "medkit" : "medkit-outline";
          }

          if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <View
              style={[
                styles.iconWrapper,
                focused && styles.activeIconWrapper,
              ]}
            >
              <Ionicons
                name={iconName}
                size={22}
                color={focused ? "#EF4444" : color}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Emergency" component={EmergencyScreen} />
      <Tab.Screen name="Services" component={AvailableServiceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 6,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 40,
    minHeight: 40,
  },

  activeIconWrapper: {
    backgroundColor: "#7F1D1D",
    transform: [{ scale: 1.1 }],

    shadowColor: "#EF4444",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
});