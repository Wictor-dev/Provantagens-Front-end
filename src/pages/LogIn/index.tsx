import { Text, View } from "react-native";
import { Input } from "../../components/Input";
import { Ionicons } from '@expo/vector-icons'
import styled from "styled-components/native";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthRootStackParamList } from "../../routes/auth.routes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../../contexts/authContexts";
import { useState } from "react";

export type SignInScreenProps = StackNavigationProp<AuthRootStackParamList, "SignIn">;

export function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation<SignInScreenProps>()
    const {logIn} = useAuth()
    return (
        <Container>
            <TitleText>Login</TitleText>
          
            <View>
                <View style={{ marginBottom: 20 }}>
                    <Input 
                        label="Email" 
                        icon={<Ionicons name='mail' size={20} />} 
                        placeholder="Digite o email" 
                        maxLength={50} 
                        state={email}
                        handleState={setEmail}
                    />
                </View>
                <Input 
                    label="Senha" 
                    icon={<Ionicons name="key" size={20} />} 
                    placeholder="********" 
                    password 
                    maxLength={8} 
                    state={password}
                    handleState={setPassword}
                />
            </View>
            <View style={{marginTop: 50, alignItems: 'center'}}>
                <Button title="Entrar" color={theme.colors.primary} onPress={()=>{logIn(email)}} />
            </View>
            <View style={{justifyContent: 'center', marginTop: 33, flexDirection: 'row'}}>
                <Text>Ainda não possui conta?</Text>
                <Text onPress={() => navigation.navigate('SignIn')} style={{fontWeight: 'bold'}}> Cadastre-se agora</Text>
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