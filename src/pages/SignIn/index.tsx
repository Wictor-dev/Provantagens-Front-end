import { Text, View } from "react-native";
import { Input } from "../../components/Input";
import { Ionicons } from '@expo/vector-icons'
import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
export function SignIn() {
    return (
        <Container>
            <TitleText>Cadastro</TitleText>
          
            <View>
                <View style={{ marginBottom: 20 }}>
                    <Input label="Nome" icon={<Ionicons name='person' size={20} />} placeholder="Digite o nome" maxLength={50} />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Input label="Email" icon={<Ionicons name="mail" size={20} />} placeholder="Digite o email" maxLength={50} />
                </View>
                <Input label="Senha" icon={<Ionicons name='key' size={20} />} placeholder="********" password maxLength={8} />
            </View>
            <View style={{marginTop: 50, alignItems: 'center'}}>
                <Button title="Entrar" color={theme.colors.primary} />
            </View>
            <View style={{justifyContent: 'center', marginTop: 33, flexDirection: 'row'}}>
                <Text>Já possui conta?</Text>
                <Text style={{fontWeight: 'bold'}}> Faça login</Text>
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