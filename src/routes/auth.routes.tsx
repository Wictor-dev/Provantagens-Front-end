import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";
import { ContinueSignUp } from "../pages/SignUp/continue";
import { FinishSignUp } from "../pages/SignUp/finish";

export type AuthRootStackParamList = {
    LogIn: undefined,
    SignIn: undefined,
    ContinueSignUp: {name: string, mail: string, password: string},
    FinishSignUp: undefined
}
const Stack = createStackNavigator<AuthRootStackParamList>()

export default function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: {display: 'none'},
            cardStyle: {backgroundColor: theme.colors.white}
        }}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignIn" component={SignUp} />
            <Stack.Screen name="ContinueSignUp" component={ContinueSignUp} />
            <Stack.Screen name="FinishSignUp" component={FinishSignUp} />
        </Stack.Navigator>

    )
}