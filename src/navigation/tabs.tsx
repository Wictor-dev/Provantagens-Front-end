import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../global/styles/theme';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';
import { Perfil } from '../pages/Perfil';
import { Entypo, FontAwesome } from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                if (route.name === 'Home') {
                    return <Entypo name='home' size={size} color={theme.colors.white} />
                } else if (route.name === 'Favoritos') {
                    return <Entypo name='heart' size={size} color={theme.colors.white} />
                } else if (route.name === 'Perfil') {
                    return <FontAwesome name='user-circle-o' size={size} color={theme.colors.white} />
                }
            },
            tabBarStyle: {backgroundColor: theme.colors.primary},
            tabBarLabelStyle: {color: theme.colors.white}
        })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favoritos" component={Favorites} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}