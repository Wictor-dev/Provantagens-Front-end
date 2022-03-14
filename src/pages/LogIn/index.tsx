import { Text, View } from "react-native";
import { Input } from "../../components/Input";
import { Ionicons } from '@expo/vector-icons'
import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
export function LogIn() {
    return (
        <Container>
            <TitleText>Login</TitleText>
          
            <View>
                <View style={{ marginBottom: 20 }}>
                    <Input label="Email" icon={<Ionicons name='mail' size={20} />} placeholder="Digite o email" maxLength={50} />
                </View>
                <Input label="Senha" icon={<Ionicons name="key" size={20} />} placeholder="********" password maxLength={8} />
            </View>
            <View style={{marginTop: 50, alignItems: 'center'}}>
                <Button title="Entrar" color={theme.colors.primary} />
            </View>
            <View>
                <Text style={{alignSelf: 'center', marginTop: 33}}>Ainda não possui conta? cadastre-se agora</Text>
            </View>
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    height: 80%;
    justify-content: center;
    padding: 0 15px;
`

const TitleText = styled.Text`
    font-size: 38px;
    align-self: center;
    margin-bottom: 50px;
`