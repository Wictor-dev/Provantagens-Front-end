import { Image, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import { theme } from "../../../global/styles/theme";

export function FinishSignUp(){
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize:36, marginBottom: 50}}>Cadastro concluído</Text>
            <Image source={require('../../../assets/public/images/finishAuth.png')} style={{marginBottom: 100}} />
            <Button title="CONTINUAR" color={theme.colors.primary} onPress={() => {}} />
        </View>
    )
}