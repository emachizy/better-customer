import { ScrollView, Text, TextInput, View, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffdbe5" / 2,
        padding: 20,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 38,
            marginBottom: 20,
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Welcome to Birthday Manager Pro
        </Text>
        <Text>Easily manage customer relationships</Text>
      </View>
      <View
        style={{
          backgroundColor: "#6d9f71",
          width: "100%",
          marginBottom: 34,
          borderRadius: 10,
          paddingBlock: 6,
        }}
      >
        <Button
          title="Get Started"
          color="#fff"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
