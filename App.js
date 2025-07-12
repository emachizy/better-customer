import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import AddNewCustomerScreen from "./screens/AddNewCustomerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditCustomerScreen from "./screens/EditCustomerScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Dashboard") iconName = "home";
            else if (route.name === "Login") iconName = "log-in";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6200ee",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{ tabBarStyle: { display: "none" }, headerShown: false }}
        />
        <Tab.Screen
          name="Add Customer"
          component={AddNewCustomerScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add" size={size} color={color} />
            ),
          }}
        />
        <Stack.Screen
          name="EditCustomer"
          component={EditCustomerScreen}
          options={{ title: "Edit Customer" }}
        />

        <Tab.Screen name="Dashboard" component={DashboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
