import { Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle"; // FIX: Import external styles
import { Link } from "expo-router"; // Import Link for navigation

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.backgroundImageContainer} // FIX: Used style from _mainstyle
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Find your favorite place here</Text>
              <View style={styles.titleSubTextContainer}>
                  <Text style={styles.titleSubText}>The best prices for over 2 </Text>
                  <Text style={styles.titleSubText}>million properties worldwide</Text>
              </View>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                {/* Join Button */}
                <Link href="/join" asChild>
                  <TouchableOpacity style={styles.buttonPrimary}>
                    <Text style={styles.buttonPrimaryText}>Join here</Text>
                  </TouchableOpacity>
                </Link>

                {/* Sign In Button */}
                <Link href="/signin" asChild>
                  <TouchableOpacity style={styles.buttonSecondary}>
                    <Text style={styles.buttonSecondaryText}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
              <View style={styles.buttonGroupSubText}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}