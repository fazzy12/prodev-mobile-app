import { Stack } from "expo-router";
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      {/* Authentication Screens (Default Stack) */}
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />


      {/* Main Application (Tabs Group) */}
      <Stack.Screen name="(home)" options={{
        headerShown: false, 
      }}/>
    </Stack>
  );
}