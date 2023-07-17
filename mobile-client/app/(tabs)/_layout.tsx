import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{ 
          headerShown: false, 
          tabBarStyle: {
            borderRadius: 1000,
            marginHorizontal: 10,
            marginVertical: 10,
          }
        }}
      >
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="two" />
    </Tabs>
  );
}
