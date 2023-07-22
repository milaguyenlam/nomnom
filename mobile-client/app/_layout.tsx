import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayoutNav() {
  return (
    // <ThemeProvider value={DarkTheme}>
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ 
          headerShown: false,
        }} />
      </Stack>
    </QueryClientProvider>
    // </ThemeProvider>
  );
}
