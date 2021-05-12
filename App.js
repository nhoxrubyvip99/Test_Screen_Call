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
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>PHAM THANH HAI</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AcceptOrRejectCall")}
        >
          <Image
            source={require("./assets/download.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <Button
        title="SIGN UP"
        color="#00ced1"
        onPress={() => navigation.navigate("SignUp")}
      />
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

function makeID() {
  var text = "";
  var possibleChar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  for (var i = 0; i < 12; i++)
    text += possibleChar.charAt(
      Math.floor(Math.random() * possibleChar.length)
    );
  return text;
}

function ProfileScreen({ navigation }) {
  const [firstName, onChangeFirstName] = React.useState(null);
  const [lastName, onChangeLastName] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [input, setInput] = React.useState(makeID);
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        marginVertical: 10,
        marginHorizontal: 10,
      }}
    >
      <Text style={styles.title}>FIRST NAME</Text>
      <TextInput
        style={styles.boxItem}
        placeholder="Enter Your First Name"
        underlineColorAndroid="transparent"
        onChangeText={(text) => onChangeFirstName(text)}
        value={firstName}
      />

      <Text style={styles.title}>LAST NAME</Text>
      <TextInput
        style={styles.boxItem}
        placeholder="Enter Your Last Name"
        underlineColorAndroid="transparent"
        onChangeText={onChangeLastName}
        value={lastName}
      />

      <Text style={styles.title}>TELEPHONE NUMBER</Text>
      <TextInput
        style={styles.boxItem}
        placeholder="Enter Your Telephone Number"
        underlineColorAndroid="transparent"
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />

      <Text style={styles.title}>EMAIL</Text>
      <TextInput
        style={styles.boxItem}
        placeholder="Enter Your Email Address"
        underlineColorAndroid="transparent"
        onChangeText={onChangeEmail}
        value={email}
        keyboardType="email-address"
      />

      <Text style={styles.title}>INVITE ID</Text>
      <TextInput
        style={styles.boxItem}
        editable={false}
        onChangeText={(text) => setInput(text)}
        value={input}
      />
    </SafeAreaView>
  );
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AcceptOrRejectCall" component={WaitScreen} />
      <Stack.Screen name="AcceptCall" component={CallScreen} />
      <Stack.Screen name="SignUp" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: 15,
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
  boxItem: {
    marginHorizontal: 10,
    marginVertical: 10,
    height: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "darkturquoise",
    borderRadius: 30,
    fontSize: 18,
    paddingLeft: 10,
  },
  item: {
    padding: 15,
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
