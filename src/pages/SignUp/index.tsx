import { Text, View } from "react-native";
import { Input } from "../../components/Input";
import { Ionicons } from '@expo/vector-icons'
import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { useState } from "react";
import { useAuth } from "../../contexts/authContexts";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthRootStackParamList } from "../../routes/auth.routes";

type ContinueSignUpScreenProps = StackNavigationProp<AuthRootStackParamList, 'ContinueSignUp'>

export function SignUp() {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const {signUp} = useAuth()


    const navigation = useNavigation<ContinueSignUpScreenProps>()
    return (
        <Container>
            <TitleText>Cadastro</TitleText>
          
            <View>
                <View style={{ marginBottom: 20 }}>
                    <Input 
                    label="CPF" 
                    icon={<Ionicons name='person' size={20} />} 
                    placeholder="Digite o nome" 
                    maxLength={50} 
                    state={name}
                    handleState={setName}
                />
                </View>
                {/* <View style={{ marginBottom: 20 }}>
                    <Input 
                    label="Email" 
                    icon={<Ionicons name="mail" size={20} />} 
                    placeholder="Digite o email" 
                    maxLength={50} 
                    state={mail}
                    handleState={setMail}
                />
                </View>
                <Input 
                    label="Senha" 
                    icon={<Ionicons name='key' size={20} />} 
                    placeholder="********" 
                    password 
                    maxLength={8} 
                    state={password}
                    handleState={setPassword}
                /> */}
            </View>
            <View style={{marginTop: 50, alignItems: 'center'}}>
                <Button title="CONTINUE" color={theme.colors.main} colorText={theme.colors.main11} onPress={() => navigation.navigate('ContinueSignUp', {name, password, mail})} />
            </View>
            <View style={{justifyContent: 'center', marginTop: 33, flexDirection: 'row'}}>
                <Text>J?? possui conta?</Text>
                <Text style={{fontWeight: 'bold'}}> Fa??a login</Text>
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
    font-size: 36px;
    align-self: center;
    margin-bottom: 50px;
    color: ${theme.colors.g01};
`