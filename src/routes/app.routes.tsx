import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";

import { Offer } from "../pages/Offer";
import { Perfil } from "../pages/Perfil";
import { View } from "react-native";
import { Cart } from "../pages/Cart";

export type RootStackParamList = {
    HomeScreen: undefined;
    Oferta: {
        name: string
        price: number
        description: string
        cover: any
    };
    MenuBottom: undefined;
};


const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator();
function Tabs(){
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    if (route.name === 'Home') {
                        return <View style={focused ? {opacity: 1} : {opacity: 0.5}}><Ionicons name={'home-sharp'} size={28} color={theme.colors.main11} /></View>
                    } else if (route.name === 'Favoritos') {
                        return <View style={focused ? {opacity: 1} : {opacity: 0.5}}><Ionicons name='heart' size={32} color={theme.colors.main11} /></View>
                    } else if (route.name === 'Perfil') {
                        return <View style={focused ? {opacity: 1} : {opacity: 0.5}}><Ionicons name='person-circle' size={32} color={theme.colors.main11} /></View>
                    } else {
                        return <View style={focused ? {opacity: 1} : {opacity: 0.5}}><Ionicons name='cart' size={32} color={theme.colors.main11} /></View>
                    }
                },
                tabBarStyle: {backgroundColor: theme.colors.main},
                tabBarLabelStyle: {color: theme.colors.main12},
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: theme.colors.main}
            })}
        >
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Tab.Screen name="Carrinho" component={Cart} />
          <Tab.Screen name="Favoritos" component={Favorites} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    )
}

export default function AppRoutes(){
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {backgroundColor: theme.colors.white}
        }}>
            {/* <Stack.Screen name="MenuBottom" component={Tabs} options={{headerShown: false}} /> */}
            <Stack.Screen name="HomeScreen" component={Tabs} options={{headerShown: false}} />
            <Stack.Screen name="Oferta" component={Offer} options={{
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: theme.colors.main},
                
            }} />
        </Stack.Navigator>
    )
}