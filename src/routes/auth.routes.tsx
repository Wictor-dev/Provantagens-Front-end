import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import { LogIn } from "../pages/LogIn";
import { SignIn } from "../pages/SignIn";

export type AuthRootStackParamList = {
    LogIn: undefined,
    SignIn: undefined
}
const Stack = createStackNavigator<AuthRootStackParamList>()

export default function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: {display: 'none'},
            cardStyle: {backgroundColor: theme.colors.white}
        }}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>

    )
}