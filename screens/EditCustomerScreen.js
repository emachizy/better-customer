import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const EditCustomerScreen = ({ route, navigation }) => {
  const { customer } = route.params;
  const [name, setName] = useState(customer.name);

  const handleSave = () => {
    Alert.alert("Saved!", `Updated name: ${name}`);
    navigation.goBack(); // Simulate save and go back
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditCustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  label: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#7c3d3d",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
