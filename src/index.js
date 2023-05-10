import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/HomeScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RMGameScreen from "../src/screens/RMGameScreen";
import SplashScreen from "./screens/SplashScreen";
import { View } from "react-native-web";
import { styles } from "./utils/style";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator initialRouteName="LoginScreen" style={styles.menuzin} barStyle={{ backgroundColor: "#415A77" }} activeColor="#000000" inactiveColor="#FFFFFF">
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="RMGame"
        component={RMGameScreen}
        options={{
          tabBarLabel: "Jogo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="gamepad-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          tabBarLabel: "Registro",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}