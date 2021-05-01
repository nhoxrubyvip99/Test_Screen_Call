import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const DATA = [
  {
    title: "Full name",
    data: ["Pham Thanh Hai", "Nguyen Son Hai", "Nguyen Ngoc Duy"],
  },
];

function Item({ title, navigation }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Call")}>
        <Image source={require("./assets/download.png")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} navigation={navigation} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

function CallScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Call this user</Text>
    </View>
  );
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Call" component={CallScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    //backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    textAlign: "left",
    fontSize: 24,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
    alignItems: "center",
    marginLeft: 50,
  },
});

export default App;
