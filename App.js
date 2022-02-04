// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Button, Provider as PaperProvider } from "react-native-paper";
// import { AppRegistry } from "react-native-paper";
// import { name as appName } from "./app.json";
// import { Navigation } from "react-native-navigation";

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: "tomato",
//     accent: "yellow",
//   },
// };
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainheading}>Grocery Inventory Management</Text>
//       <Button style={styles.button} onPress={() => alert("You pressed it")}>
//         LOGIN
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mainheading: {
//     fontSize: 50,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   button: {
//     borderWidth: 1,
//   },
// });

// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
