import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen() {
  return (
    <LinearGradient
      colors={["#7F1D1D", "#DC2626", "#EF4444"]}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Profile Header */} 
        <View style={styles.profileHeader}>
          <Image
            source={require("../../assets/profile.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>Shashi Kumar</Text>
          <Text style={styles.email}>codewithshashi@email.com</Text>

          <View style={styles.statusBadge}>
            <Ionicons name="shield-checkmark" size={16} color="white" />
            <Text style={styles.statusText}> Emergency Ready</Text>
          </View>
        </View>

        {/* Medical Info */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Medical Information</Text>

          <InfoRow icon="water-drop" label="Blood Group" value="B+" />
          <InfoRow icon="healing" label="Allergies" value="None" />
          <InfoRow icon="monitor-heart" label="Disease History" value="No" />
          <InfoRow icon="note-alt" label="Medical Notes" value="Healthy" />
        </View>

        {/* Emergency Contacts */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Emergency Contacts</Text>

          <ContactRow name="Father" phone="9876543210" />
          <ContactRow name="Friend" phone="9876500000" />

          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={18} color="white" />
            <Text style={styles.addText}> Add Contact</Text>
          </TouchableOpacity>
        </View>

        {/* Emergency Stats */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Emergency Stats</Text>

          <View style={styles.statsRow}>
            <StatBox number="3" label="SOS Used" />
            <StatBox number="2" label="Hospitals Saved" />
            <StatBox number="5" label="Contacts" />
          </View>
        </View>

        {/* Account */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account</Text>

          <MenuItem icon="settings-outline" text="Settings" />
          <MenuItem icon="shield-checkmark-outline" text="Privacy Policy" />
          <MenuItem icon="help-circle-outline" text="Help & Support" />
          <MenuItem icon="log-out-outline" text="Logout" />
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </LinearGradient>
  );
}

/* ---------- Components ---------- */

function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.infoRow}>
      <MaterialIcons name={icon} size={20} color="#FCA5A5" />
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function ContactRow({ name, phone }) {
  return (
    <View style={styles.contactRow}>
      <Ionicons name="person-circle" size={30} color="#FCA5A5" />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.contactName}>{name}</Text>
        <Text style={styles.contactPhone}>{phone}</Text>
      </View>

      <TouchableOpacity style={styles.callBtn}>
        <Ionicons name="call" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}

function StatBox({ number, label }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function MenuItem({ icon, text }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Ionicons name={icon} size={22} color="#FCA5A5" />
      <Text style={styles.menuText}>{text}</Text>
      <Ionicons name="chevron-forward" size={20} color="#FECACA" />
    </TouchableOpacity>
  );
}

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "white",
  },

  name: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },

  email: {
    color: "#FFE4E6",
    marginTop: 4,
  },

  statusBadge: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
  },

  statusText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "rgba(0,0,0,0.35)",
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 18,
    padding: 16,
    backdropFilter: "blur(10px)",
  },

  cardTitle: {
    color: "#FCA5A5",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  infoLabel: {
    flex: 1,
    color: "white",
    marginLeft: 10,
  },

  infoValue: {
    color: "#FECACA",
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  contactName: {
    color: "white",
    fontWeight: "600",
  },

  contactPhone: {
    color: "#FECACA",
  },

  callBtn: {
    backgroundColor: "#DC2626",
    padding: 8,
    borderRadius: 10,
  },

  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC2626",
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
  },

  addText: {
    color: "white",
    fontWeight: "600",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#FECACA",
    fontSize: 12,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  menuText: {
    flex: 1,
    marginLeft: 12,
    color: "white",
    fontSize: 15,
  },
})