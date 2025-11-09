import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaProvider>
      {/* Use ScrollView for content that might exceed screen height */}
      <ScrollView className="flex-1 bg-gray-50">
        <SafeAreaView className="p-4 pt-10">
          <Text className="text-black text-4xl font-normal mb-6">Profile</Text>
          
          {/* User Info Card */}
          <View className="bg-[#34967C] h-[90px] mb-10 flex-row items-center rounded-xl justify-between px-7 shadow-lg shadow-gray-500/50">
            <View className="flex-row items-center gap-4">
              {/* NOTE: Ensure user-image.png is available in assets/images */}
              <Image 
                source={require("@/assets/images/user-image.png")} 
                className="w-16 h-16 rounded-full"
              />
              <View>
                <Text className="font-semibold text-xl text-white">
                  Cole Baidoo
                </Text>
                <Text className="text-sm font-thin text-white">@block_cs</Text>
              </View>
            </View>
            <Feather name="edit-3" size={24} color="white" />
          </View>

          {/* Account Settings Group */}
          <View className="gap-1 bg-white rounded-xl p-4 mb-8 shadow-md shadow-gray-300/50">
            {/* My Account */}
            <Pressable className="flex-row items-center justify-between py-2 border-b border-gray-100">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                  <FontAwesome6 name="user" size={24} color="#0601B4" />
                </View>
                <View>
                  <Text className="text-lg font-semibold mb-1">My Account</Text>
                  <Text className="font-thin text-gray-500 text-sm">
                    Make Changes to your account
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </Pressable>
            
            {/* Saved Beneficiary */}
            <Pressable className="flex-row items-center justify-between py-2 border-b border-gray-100">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                  {/* Using a more appropriate icon for beneficiary/saved accounts */}
                  <FontAwesome6 name="credit-card" size={24} color="#0601B4" /> 
                </View>
                <View>
                  <Text className="text-lg font-normal mb-1">
                    Saved Beneficiary
                  </Text>
                  <Text className="font-thin text-gray-500 text-sm">
                    Manage your saved accounts
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </Pressable>
            
            {/* Face ID / Touch ID */}
            <Pressable className="flex-row items-center justify-between py-2 border-b border-gray-100">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                  <Ionicons
                    name="lock-closed-outline"
                    size={24}
                    color="#0601B4"
                  />
                </View>
                <View>
                  <Text className="text-lg font-normal mb-1">
                    Face ID / Touch ID
                  </Text>
                  <Text className="font-thin text-gray-500 text-sm">
                    Manage your biometric settings
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </Pressable>
            
            {/* Two-Factor Authentication */}
            <Pressable className="flex-row items-center justify-between py-2 border-b border-gray-100">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={24}
                    color="#0601B4"
                  />
                </View>
                <View>
                  <Text className="text-lg font-normal mb-1">
                    Two-Factor Authentication
                  </Text>
                  <Text className="font-thin text-gray-500 text-sm">
                    Further secure your account for safety
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </Pressable>
            
            {/* Log out */}
            <Pressable className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                  <MaterialIcons name="logout" size={24} color="#0601B4" />
                </View>
                <View>
                  <Text className="text-lg font-normal mb-1">Log out</Text>
                  <Text className="font-thin text-gray-500 text-sm">
                    Securely sign out of your account
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </Pressable>
          </View>

          <Text className="text-black text-xl font-normal mb-6">More</Text>

          {/* More Settings Group */}
          <View className="gap-1 bg-white rounded-xl p-4 mb-4 shadow-md shadow-gray-300/50">
            {/* Help & Support */}
            <Pressable className="flex-row items-center justify-between py-2 border-b border-gray-100">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                  <Ionicons name="help-buoy" size={24} color="#0601B4" />
                </View>
                <View>
                  <Text className="text-lg font-semibold mb-1">Help & Support</Text>
                  <Text className="font-thin text-gray-500 text-sm">
                    Get assistance when you need it
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </Pressable>
            {/* Settings */}
            <Pressable className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-[#0601B4]/10 items-center justify-center rounded-full ">
                  <Ionicons name="settings" size={24} color="#0601B4" />
                </View>
                <View>
                  <Text className="text-lg font-normal mb-1">Settings</Text>
                  <Text className="font-thin text-gray-500 text-sm">
                    Customize app behavior and preferences
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Profile;