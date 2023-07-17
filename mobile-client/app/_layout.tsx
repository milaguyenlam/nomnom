import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

export default function RootLayoutNav() {
  return (
    // <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ 
          headerShown: false,
        }} />
      </Stack>
    // </ThemeProvider>
  );
}
