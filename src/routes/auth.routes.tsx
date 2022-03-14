import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import { LogIn } from "../pages/LogIn";
const Stack = createStackNavigator()

export default function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: theme.colors.white}
        }}>
            <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>

    )
}