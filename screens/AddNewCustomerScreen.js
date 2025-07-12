import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";

const CustomerPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [customers, setCustomers] = useState([
    { id: "1", name: "John Smith" },
    { id: "2", name: "Emily Johnson" },
    { id: "3", name: "Michael Brown" },
  ]);

  const handleEdit = (customer) => {
    navigation.navigate("EditCustomer", { customer });
  };
  const handleDelete = (id) => {
    setCustomers(customers.filter((cust) => cust.id !== id));
  };

  const handleCSVUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "text/csv",
        copyToCacheDirectory: true,
      });

      if (result.type === "cancel") return;

      const fileUri = result.assets?.[0]?.uri;
      if (!fileUri) return Alert.alert("No file selected.");

      const fileContent = await fetch(fileUri).then((res) => res.text());

      // Simple CSV parsing (assumes 1st column = name)
      const lines = fileContent.split("\n");
      const parsed = lines
        .map((line, idx) => {
          const [name] = line.trim().split(",");
          if (name && name.length > 1) {
            return { id: `${Date.now()}-${idx}`, name };
          }
          return null;
        })
        .filter(Boolean);

      if (parsed.length === 0) {
        return Alert.alert("Invalid CSV file or no valid rows.");
      }

      setCustomers((prev) => [...prev, ...parsed]);
      Alert.alert("Customers imported successfully!");
    } catch (err) {
      console.error("Upload error:", err);
      Alert.alert("Failed to read file");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🎂 Birthday Manager Pro</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>⚙️</Text>
          <Text style={styles.icon}>👤</Text>
        </View>
      </View>

      {/* Search */}
      <TextInput
        style={styles.input}
        placeholder="Search Customers"
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {/* Filter Label */}
      <Text style={styles.filterLabel}>Filter: {filter}</Text>

      {/* Customer List */}
      <View style={styles.customerList}>
        <FlatList
          data={customers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.customerItem}>
              <Text style={styles.customerName}>{item.name}</Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleEdit(item)}
                >
                  <Text style={styles.actionText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleDelete(item.id)}
                >
                  <Text style={styles.actionText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {/* Add New */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add New Customer</Text>
      </TouchableOpacity>

      {/* Upload CSV */}
      <Text style={styles.uploadLabel}>Import via CSV:</Text>
      <TouchableOpacity style={styles.button} onPress={handleCSVUpload}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomerPanel;

// same styles from earlier
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2d2d2d",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    fontSize: 18,
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    borderRadius: 6,
    marginTop: 16,
  },
  button: {
    backgroundColor: "#7c3d3d",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  filterLabel: {
    marginTop: 16,
    color: "#ccc",
  },
  customerList: {
    backgroundColor: "#d3d3d3",
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
  },
  customerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  customerName: {
    color: "#000",
    fontWeight: "600",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    backgroundColor: "#7c3d3d",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
  },
  uploadLabel: {
    marginTop: 20,
    color: "#ccc",
  },
});
