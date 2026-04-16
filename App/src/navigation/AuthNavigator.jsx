import { createStackNavigator } from "@react-navigation/stack";
import AIChatScreen from "../app/AIChatScreen";
import EmergencyScreen from "../app/EmergencyScreen";
import Login from "../app/Login";
import TabNavigator from "./TabNavigator";
import SOSScreen from "../app/SOSScreen";
import AccidentAlertScreen from "../app/Accentalert";
import AccidentAlertDetectionScreen from "../app/AccidentDetectedScreen";
import InstantAmbulanceScreen from "../app/InstantAmbulanceStack";
import MapScreen from "../app/MapScreen";
import NearbyHospitalScreen from "../app/Nearhospital";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />

      <Stack.Screen
        name="EmergencyContactsScreen"
        component={AccidentAlertScreen}
      />

      <Stack.Screen
        name="InstantAmbulance"
        component={InstantAmbulanceScreen}
      />

      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
      />

      <Stack.Screen name="SOSScreen" component={SOSScreen} />

      <Stack.Screen
        name="AccidentAlertDetection"
        component={AccidentAlertDetectionScreen}
      />
       <Stack.Screen
        name="NearbyHospitalScreen"
        component={NearbyHospitalScreen}
      />

      <Stack.Screen name="AIChat" component={AIChatScreen} />
    </Stack.Navigator>
  );
}