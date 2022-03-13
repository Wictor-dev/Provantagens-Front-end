import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";

import { Offer } from "../pages/Offer";
import { Perfil } from "../pages/Perfil";

export type RootStackParamList = {
    HomeScreen: undefined;
    Oferta: {
        name: string
        price: number
        category: string
        description: string
        cover: any
    };
    MenuBottom: undefined;
};


const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator();

export default function Tabs(){
    return (
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
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: theme.colors.primary}
            })}
        >
          <Tab.Screen name="Home" component={Routes} options={{headerShown: false}}/>
          <Tab.Screen name="Favoritos" component={Favorites} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    )
}

function Routes(){
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {backgroundColor: theme.colors.background}
        }}>
            {/* <Stack.Screen name="MenuBottom" component={Tabs} options={{headerShown: false}} /> */}
            <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Oferta" component={Offer} options={{
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: theme.colors.primary},
            }} />
        </Stack.Navigator>
    )
}