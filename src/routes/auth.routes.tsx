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
            headerStyle: {backgroundColor: theme.colors.g11} ,
            headerShadowVisible: false,
            cardStyle: {backgroundColor: theme.colors.g11}
        }}>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignIn" component={SignUp} />
            <Stack.Screen name="ContinueSignUp" component={ContinueSignUp} options={{
                headerTitle: 'Cadastro',
                headerTitleStyle: {display: 'flex', fontSize: 36, color: theme.colors.g01},
            }} />
            <Stack.Screen name="FinishSignUp" component={FinishSignUp} />
        </Stack.Navigator>

    )
}