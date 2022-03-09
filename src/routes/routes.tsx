import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";

import { Offer } from "../pages/Offer";

const Stack = createStackNavigator()
export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Offer" component={Offer} />
        </Stack.Navigator>
    )
}