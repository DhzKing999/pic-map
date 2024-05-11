import { Link, Tabs } from 'expo-router';


import { TabBarIcon } from '../../components/TabBarIcon';
import { Image, View } from 'react-native';
import { Text } from 'react-native';

const TabIcon = ({ icon, color, name, focused }: any) =>
{
  return <View className={`items-center justify-center gap-2 ${focused ? "opacity-100" : "opacity-40"}`}>
    <TabBarIcon name={icon} color={"orange"} />
  </View>
}

export default function TabLayout()
{
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon
            icon={"camera"}
            focused={focused}
          />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={"map"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
