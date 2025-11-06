import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}> 
          <Link href="/" asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={25} />
            </TouchableOpacity>
          </Link>
          <Image source={require('@/assets/images/logo-green.png')} />
        </View>
        <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Create a new Account</Text>
            <Text style={styles.subText}>
              Enter your information to join.
            </Text>
        </View>

        <View style={styles.formGroup}>
          {/* Name/Username field */}
          <View>
            <Text style={styles.formLabel}>Name</Text>
            <TextInput style={styles.formControl} />
          </View>
          {/* Email field */}
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.formControl} />
          </View>
          {/* Password field */}
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput style={styles.passwordControl} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          {/* No "Forgot password?" for join screen */}
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join now</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.secondaryButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.secondaryButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account?</Text>
          <Link href="/signin" asChild>
            <Text style={styles.signupSubTitleText}>Sign in</Text>
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}