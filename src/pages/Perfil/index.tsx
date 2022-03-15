import { Text } from "react-native";
import { Button } from "../../components/Button";
import { useAuth } from "../../contexts/authContexts";
import { theme } from "../../global/styles/theme";

export function Perfil(){
    const { logOut } = useAuth()
    return (
        <Button title="Sair" color={theme.colors.primary} onPress={logOut} />
    )
}