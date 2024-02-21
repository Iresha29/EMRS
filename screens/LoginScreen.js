// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   Pressable,
//   TouchableOpacity,
// } from "react-native";
// import React, { useEffect } from "react";
// import Colors from "../utils/Colors";
// import * as AuthApp from "expo-auth-session";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   useEffect(() => {
//     const checkTokenValidity = async () => {
//       const accessToken = await AsyncStorage.getItem("token");
//       const expirationDate = await AsyncStorage.getItem("expirationDate");
//       console.log("access token", accessToken);
//       console.log("expirationDate", expirationDate);

//       if (accessToken && expirationDate) {
//         const currentTime = Date.now();
//         if (currentTime < parseInt(expirationDate)) {
//           //here the token is still valid
//           navigation.replace("Main");
//         } else {
//           //token whould be expired so we need to remove it from the asyncStorage
//           AsyncStorage.removeItem("token");
//           AsyncStorage.removeItem("expirationDate");
//         }
//       }
//     };

//     checkTokenValidity();
//   }, []);
//   async function authenticate() {
//     const config = {
//       issuer: "https://accounts.spotify.com",
//       clientId: "5ecc3369ae194f4591c136e67f4f22ea",
//       scopes: [
//         "user-read-email",
//         "user-library-read",
//         "user-read-recently-played",
//         "user-top-read",
//         "playlist-read-private",
//         "playlist-read-collaborative",
//         "playlist-modify-public", // or "playlist-modify-private"
//       ],
//       redirectUrl: "exp://192.168.25.16:8081/--/spotify-auth-callback",
//     };

//     const result = await AuthApp.authAsync(config);
//     console.log(result);
//     if (result.accessToken) {
//       const expirationDate = new Date(
//         result.accessTokenExpirationDate
//       ).getTime();
//       AsyncStorage.setItem("token", result.accessToken);
//       AsyncStorage.setItem("expirationDate", expirationDate.toString());
//       navigation.navigate("Main");
//     }
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <SafeAreaView>
//         <View style={{ height: 80 }} />
//         <View style={styles.imageContainer}>
//           <Image
//             source={require("./../assets/images/login.png")}
//             style={styles.image}
//           />
//         </View>
//         <View>
//           <Text
//             style={{
//               fontSize: 50,
//               fontWeight: "bold",
//               color: Colors.PRIMARY,
//               textAlign: "center",
//             }}
//           >
//             SoulSync
//           </Text>
//           <Text
//             style={{
//               fontSize: 16,
//               marginTop: 6,
//               textAlign: "center",
//               color: Colors.GRAY,
//             }}
//           >
//             Review your spirit with uplifting tunes on-the-go
//           </Text>
//         </View>

//         <View style={{ height: 80 }} />
//         {/* signin button */}
//         <TouchableOpacity
//           onPress={authenticate}
//           style={{
//             padding: 10,
//             marginLeft: "auto",
//             marginRight: "auto",
//             width: 300,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 25,
//             alignItems: "center",
//             justifyContent: "center",
//             marginVertical: 10,
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               color: Colors.WHITE,
//               fontSize: 18,
//               fontWeight: "bold",
//             }}
//           >
//             Sign in
//           </Text>
//         </TouchableOpacity>

//         {/* signin button */}
//         <TouchableOpacity
//           style={{
//             padding: 10,
//             marginLeft: "auto",
//             marginRight: "auto",
//             width: 300,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 25,
//             alignItems: "center",
//             justifyContent: "center",
//             marginVertical: 10,
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               color: Colors.WHITE,
//               fontSize: 18,
//               fontWeight: "bold",
//             }}
//           >
//             Sign up
//           </Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   imageContainer: {
//     alignItems: "center",
//     padding: 10,
//   },
//   image: {
//     width: 300, // Adjust the width as needed
//     height: 300, // Adjust the height as needed
//     borderRadius: 10,
//     resizeMode: "cover",
//     alignItems: "center",
//   },
// });

// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   Pressable,
//   TouchableOpacity,
// } from "react-native";
// import React, { useEffect } from "react";
// import Colors from "../utils/Colors";
// import * as AuthApp from "expo-app-auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   useEffect(() => {
//     const checkTokenValidity = async () => {
//       const accessToken = await AsyncStorage.getItem("token");
//       const expirationDate = await AsyncStorage.getItem("expirationDate");
//       // console.log("access token", accessToken);
//       // console.log("expirationDate", expirationDate);

//       if (accessToken && expirationDate) {
//         const currentTime = Date.now();
//         if (currentTime < parseInt(expirationDate)) {
//           //here the token is still valid
//           navigation.replace("Main");
//         } else {
//           //token whould be expired so we need to remove it from the asyncStorage
//           AsyncStorage.removeItem("token");
//           AsyncStorage.removeItem("expirationDate");
//         }
//       }
//     };

//     checkTokenValidity();
//   }, []);
//   async function authenticate() {
//     const config = {
//       issuer: "https://accounts.spotify.com",
//       clientId: "5ecc3369ae194f4591c136e67f4f22ea",
//       scopes: [
//         "user-read-email",
//         "user-library-read",
//         "user-read-recently-played",
//         "user-top-read",
//         "playlist-read-private",
//         "playlist-read-collaborative",
//         "playlist-modify-public", // or "playlist-modify-private"
//       ],
//       redirectUrl: "exp://192.168.25.16:8081/--/spotify-auth-callback",
//     };

//     const result = await AuthApp.authAsync(config);
//     console.log(result);
//     if (result.accessToken) {
//       const expirationDate = new Date(
//         result.accessTokenExpirationDate
//       ).getTime();
//       AsyncStorage.setItem("token", result.accessToken);
//       AsyncStorage.setItem("expirationDate", expirationDate.toString());
//       navigation.navigate("Main");
//     }
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <SafeAreaView>
//         <View style={{ height: 80 }} />
//         <View style={styles.imageContainer}>
//           <Image
//             source={require("./../assets/images/login.png")}
//             style={styles.image}
//           />
//         </View>
//         <View>
//           <Text
//             style={{
//               fontSize: 50,
//               fontWeight: "bold",
//               color: Colors.PRIMARY,
//               textAlign: "center",
//             }}
//           >
//             SoulSync
//           </Text>
//           <Text
//             style={{
//               fontSize: 16,
//               marginTop: 6,
//               textAlign: "center",
//               color: Colors.GRAY,
//             }}
//           >
//             Review your spirit with uplifting tunes on-the-go
//           </Text>
//         </View>

//         <View style={{ height: 80 }} />
//         {/* signin button */}
//         <TouchableOpacity
//           onPress={authenticate}
//           style={{
//             padding: 10,
//             marginLeft: "auto",
//             marginRight: "auto",
//             width: 300,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 25,
//             alignItems: "center",
//             justifyContent: "center",
//             marginVertical: 10,
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               color: Colors.WHITE,
//               fontSize: 18,
//               fontWeight: "bold",
//             }}
//           >
//             Sign in
//           </Text>
//         </TouchableOpacity>

//         {/* signin button */}
//         <TouchableOpacity
//           style={{
//             padding: 10,
//             marginLeft: "auto",
//             marginRight: "auto",
//             width: 300,
//             backgroundColor: Colors.PRIMARY,
//             borderRadius: 25,
//             alignItems: "center",
//             justifyContent: "center",
//             marginVertical: 10,
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               color: Colors.WHITE,
//               fontSize: 18,
//               fontWeight: "bold",
//             }}
//           >
//             Sign up
//           </Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   imageContainer: {
//     alignItems: "center",
//     padding: 10,
//   },
//   image: {
//     width: 300, // Adjust the width as needed
//     height: 300, // Adjust the height as needed
//     borderRadius: 10,
//     resizeMode: "cover",
//     alignItems: "center",
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "../utils/Colors";
import * as AuthApp from "expo-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkTokenValidity = async () => {
      const accessToken = await AsyncStorage.getItem("token");
      const expirationDate = await AsyncStorage.getItem("expirationDate");
      // console.log("access token", accessToken);
      // console.log("expirationDate", expirationDate);

      if (accessToken && expirationDate) {
        const currentTime = Date.now();
        if (currentTime < parseInt(expirationDate)) {
          //here the token is still valid
          navigation.replace("Main");
        } else {
          //token whould be expired so we need to remove it from the asyncStorage
          AsyncStorage.removeItem("token");
          AsyncStorage.removeItem("expirationDate");
        }
      }
    };

    checkTokenValidity();
  }, []);
  async function authenticate() {
    const config = {
      issuer: "https://accounts.spotify.com",
      clientId: "5ecc3369ae194f4591c136e67f4f22ea",
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public", // or "playlist-modify-private"
      ],
      redirectUrl: "exp://192.168.25.16:8081/--/spotify-auth-callback",
    };

    const result = await AuthApp.authAsync(config);
    console.log(result, "THIS IS resault.....");
    if (result?.accessToken) {
      const expirationDate = new Date(
        result?.accessTokenExpirationDate
      ).getTime();
      AsyncStorage.setItem("token", result.accessToken);
      AsyncStorage.setItem("expirationDate", expirationDate.toString());
      navigation.navigate("Main");
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <View style={styles.imageContainer}>
          <Image
            source={require("./../assets/images/login.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
              color: Colors.PRIMARY,
              textAlign: "center",
            }}
          >
            SoulSync
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 6,
              textAlign: "center",
              color: Colors.GRAY,
            }}
          >
            Review your spirit with uplifting tunes on-the-go
          </Text>
        </View>

        <View style={{ height: 80 }} />
        {/* signin button */}
        <TouchableOpacity
          onPress={authenticate}
          style={{
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        {/* signin button */}
        <TouchableOpacity
          style={{
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    borderRadius: 10,
    resizeMode: "cover",
    alignItems: "center",
  },
});
