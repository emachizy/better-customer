import { useState } from "react";
import { ScrollView, Text, TextInput, View, Button } from "react-native";

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  required,
  secureTextEntry,
  errorMessage,
}) => {
  const [touched, setTouched] = useState(false);
  const showError =
    (required && touched && value.trim() === "") || !!errorMessage;

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ marginBottom: 5 }}>{label}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: showError ? "red" : "#ccc",
          padding: 10,
          borderRadius: 5,
          backgroundColor: "#fff",
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onBlur={() => setTouched(true)}
      />
      {showError && (
        <Text style={{ color: "red", marginTop: 5 }}>
          {errorMessage || "This field is required"}
        </Text>
      )}
    </View>
  );
};

export default InputField;
