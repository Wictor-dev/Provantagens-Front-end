import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../global/styles/theme';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';
import { Perfil } from '../pages/Perfil';
import { Entypo, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Offer } from '../pages/Offer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
export default function Tabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Offer" component={Offer} />
      </Stack.Navigator>
      <Tab.Navigator
          screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                  if (route.name === 'Home') {
                      return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={theme.colors.white} />
                  } else if (route.name === 'Favoritos') {
                      return <AntDesign name={focused ? 'heart' : 'hearto'} size={size} color={theme.colors.white} />
                  } else if (route.name === 'Perfil') {
                      return <FontAwesome5 name={focused ? 'user-alt' : 'user'} size={size} color={theme.colors.white} /> 
                  }
              },
              tabBarStyle: {backgroundColor: theme.colors.primary},
              tabBarLabelStyle: {color: theme.colors.white},
          })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Favoritos" component={Favorites} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}