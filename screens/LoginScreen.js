import { ScrollView, Text, View, Button, TouchableOpacity } from "react-native";
import InputField from "../components/Inputs/InputField";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword;

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = () => {
    if (!email || !password || (!isLogin && !confirmPassword)) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!isLogin && !passwordsMatch) {
      alert("Passwords do not match.");
      return;
    }

    // Simulate successful login/signup
    navigation.navigate("Dashboard"); // replaces Login screen in stack
  };

  return (
    <ScrollView contentContainerStyle={{ paddingTop: 100 }}>
      <View>
        <Text style={{ fontSize: 24, paddingBottom: 20, textAlign: "center" }}>
          {isLogin ? "Login" : "Sign Up"} to Birthday Manager Pro
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          //   alignItems: "flex-end",
          padding: 20,
          backgroundColor: "#ffdbe5" / 2,
          marginTop: 100,
        }}
      >
        <InputField
          label="Enter email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          required
        />
        <InputField
          label="Enter password"
          value={password}
          onChangeText={setPassword}
          placeholder="Min 8 characters"
          secureTextEntry
          required
        />
        {!isLogin && (
          <InputField
            label="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Re-enter password"
            secureTextEntry
            required
            errorMessage={
              confirmPassword.length > 0 && !passwordsMatch
                ? "Passwords do not match"
                : null
            }
          />
        )}

        <Text style={{ marginBottom: 10 }}>Forgot password?</Text>

        <View style={{ backgroundColor: "#fff0f5" }}>
          <Button
            title={isLogin ? "Login" : "Sign Up"}
            onPress={handleSubmit}
            color="#000"
          />
        </View>

        <TouchableOpacity onPress={toggleMode} style={{ marginTop: 20 }}>
          <Text style={{ textAlign: "center", color: "blue" }}>
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
