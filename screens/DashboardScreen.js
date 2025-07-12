import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
  Image,
} from "react-native";
import profile from "../assets/images/profile.jpg";

const upcomingBirthdays = [
  { id: "1", name: "Alice Johnson", date: "October 23" },
  { id: "2", name: "Michael Smith", date: "October 25" },
];

const recentCampaigns = [
  { id: "1", title: "October Promo", progress: 60 },
  { id: "2", title: "Halloween Special", progress: 30 },
];

const DashboardScreen = () => {
  const handleLogout = () => {
    // Clear any auth state here if needed
    navigation.navigate("Login"); // or "Login" if you prefer
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Birthdays</Text>
          {upcomingBirthdays.map((item) => (
            <View key={item.id} style={styles.item}>
              <View style={styles.birthdayImage}>
                <Image
                  source={profile}
                  style={{ height: 50, width: 50, borderRadius: "100%" }}
                />
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.date}</Text>
                </View>
              </View>
              <Text>🎁</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Campaigns</Text>
          {recentCampaigns.map((item) => (
            <View
              key={item.id}
              style={{
                flex: 1,
                gap: 10,
                marginBottom: 10,
                backgroundColor: "#ffdbe5",
                padding: 20,
              }}
            >
              <Text>{item.title}</Text>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { width: `${item.progress}%` }]}
                />
              </View>
              <Text style={{ paddingBottom: 10 }}>{item.progress}%</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Stats</Text>
          <View style={styles.statSection}>
            <View style={styles.statItem}>
              <Text>Messages Sent</Text>
              <Text style={styles.statText}>120</Text>
            </View>
            <View style={styles.statItem}>
              <Text>Open Rate</Text>
              <Text style={styles.statText}>45%</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Button title="Logout" color="red" onPress={handleLogout} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff0f5",
  },
  birthdayImage: {
    flexDirection: "row",
    gap: 30,
  },
  section: {
    marginBottom: 30,
  },
  statSection: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: "#ffdbe5",
    padding: 20,
  },
  statItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    fontSize: 16,
    minWidth: 180,
    marginBottom: 5,
    backgroundColor: "#ffdbe5",
    padding: 26,
  },
  statText: {
    fontSize: 24,
    textAlign: "center",
  },

  progressBar: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#6200ee",
  },
});
