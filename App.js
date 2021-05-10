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
  TouchableNativeFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.item}>
      <Text style={styles.title}>PHAM THANH HAI</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("AcceptOrRejectCall")}
      >
        <Image source={require("./assets/download.png")} style={styles.image} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function WaitScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.newstyle}>
      <Text style={styles.newtext}>Call this user</Text>
      <Text style={styles.newtext2}>Mobile 8008</Text>
      <View>
        <TouchableNativeFeedback onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("./assets/reject.png")}
            style={{
              height: 60,
              width: 60,
              borderRadius: 40,
              left: 310,
              top: 472,
            }}
          />
        </TouchableNativeFeedback>
      </View>
      <View>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("AcceptCall")}
        >
          <Image
            source={require("./assets/call-icon.png")}
            style={{
              height: 60,
              width: 60,
              borderRadius: 40,
              top: 412,
              left: 30,
            }}
          />
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}

function CallScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.newstyle2}>
      <Text style={styles.newtext3}>This user accept call</Text>
      <View>
        <TouchableNativeFeedback onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("./assets/images.png")}
            style={{
              height: 60,
              width: 60,
              borderRadius: 40,
              left: 173,
              top: 500,
            }}
          />
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AcceptOrRejectCall" component={WaitScreen} />
      <Stack.Screen name="AcceptCall" component={CallScreen} />
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
  newstyle: {
    flex: 1,
    backgroundColor: "#5f9ea0",
    paddingTop: StatusBar.currentHeight,
  },
  newstyle2: {
    flex: 1,
    backgroundColor: "#f0ffff",
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    //backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
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
  newtext: {
    fontSize: 32,
    color: "white",
    top: 250,
    left: 105,
  },
  newtext2: {
    fontSize: 24,
    color: "white",
    top: 250,
    left: 130,
  },
  newtext3: {
    fontSize: 32,
    color: "black",
    top: 230,
    left: 50,
  },
});

export default App;
