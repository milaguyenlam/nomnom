import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import colorConstants from '../../constants/Colors';

export default function TabLayout() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Tabs
        screenOptions={{ 
          headerShown: false, 
          tabBarStyle: styles.tabScreen,
          tabBarActiveTintColor: colorConstants.mainOrange,
          tabBarInactiveTintColor: colorConstants.shadowBlack,
        }}>
        <Tabs.Screen name="favourite"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="hearto" size={24} color={color} />
            ),
            tabBarLabel: '',
          }}
        />
        <Tabs.Screen name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
            tabBarLabel: '',
          }}
        />
        <Tabs.Screen 
          name='profile'
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color={color} />
            ),
            tabBarLabel: '',
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabScreen: {
    borderRadius: 1000,
    marginBottom: 40,
    marginHorizontal: 15,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
    borderTopWidth: 0,
    paddingHorizontal: 60,
  }
});