import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { saveUser, saveToken } from "../services/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import API from "../services/api";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const navigation = useNavigation();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!loginData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(loginData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
    } else if (loginData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const res = await API.post("/auth/login", loginData);

      await saveUser(res.data.user);
      await saveToken(res.data.token);
      console.log(res.data);

      setLoading(false);

      navigation.replace("Tabs");
    } catch (error) {
      setLoading(false);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server error");
      }
    }
    await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* TOP EMERGENCY IMAGE */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/login.jpg")}
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.appName}>🚨 Emergency Alert System</Text>

            <Text style={styles.tagline}>
              Fast SOS • Live Location • Instant Medical Help
            </Text>
          </View>

          {/* LOGIN CARD */}
          <View style={styles.card}>
            <Text style={styles.title}>Login to Continue</Text>

            <Text style={styles.subtitle}>
              Stay connected with emergency services
            </Text>

            {/* EMAIL */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>

              <TextInput
                placeholder="enter email"
                style={[styles.input, errors.email && styles.errorInput]}
                value={loginData.email}
                onChangeText={(text) =>
                  setLoginData({ ...loginData, email: text })
                }
                autoCapitalize="none"
                keyboardType="email-address"
              />

              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            {/* PASSWORD */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                placeholder="enter password"
                secureTextEntry
                style={[styles.input, errors.password && styles.errorInput]}
                value={loginData.password}
                onChangeText={(text) =>
                  setLoginData({ ...loginData, password: text })
                }
              />

              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            {/* LOGIN BUTTON */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>

            {/* SIGNUP */}
            <View style={styles.signupRow}>
              <Text>Don't have account?</Text>

              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.signupText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* FOOTER */}
          <Text style={styles.footer}>Your safety is our priority</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: width * 0.5,
    height: width * 0.5,
  },

  appName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  tagline: {
    color: "#94a3b8",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 20,
    elevation: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: 20,
  },

  inputGroup: {
    marginBottom: 15,
  },

  label: {
    marginBottom: 5,
    color: "#334155",
  },

  input: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 10,
    padding: 12,
  },

  errorInput: {
    borderColor: "red",
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 3,
  },

  button: {
    backgroundColor: "#ef4444",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },

  signupText: {
    color: "#ef4444",
    marginLeft: 5,
    fontWeight: "600",
  },

  footer: {
    textAlign: "center",
    color: "#cbd5f5",
    marginTop: 20,
  },
});
