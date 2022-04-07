import { Text, View } from "react-native";
import { Input } from "../../../components/Input";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import styled from "styled-components/native";
import { Button } from "../../../components/Button";
import { theme } from "../../../global/styles/theme";
import { useState } from "react";
import { useAuth } from "../../../contexts/authContexts";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AuthRootStackParamList } from "../../../routes/auth.routes";
import { StackNavigationProp } from "@react-navigation/stack";

type FinishScreenProp = StackNavigationProp<AuthRootStackParamList, 'FinishSignUp'>
export function ContinueSignUp() {
    const [registration, setRegistration] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [organ, setOrgan] = useState('')
    const [birthday, setBirthday] = useState('')    
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPaswordConfirmation] = useState('')

    const {signUp} = useAuth()
    const navigation = useNavigation<FinishScreenProp>()
    return (
        <Container>
            {/* <TitleText>Cadastro</TitleText> */}
          
            <View>
                <View style={{ marginBottom: 20 }}>
                    <Input 
                    label="Nome" 
                    maxLength={50} 
                    state={registration}
                    handleState={setRegistration}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Input 
                    label="Matrícula" 
                    maxLength={50} 
                    state={registration}
                    handleState={setRegistration}
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Input 
                        label="RG" 
                        icon={<FontAwesome5 name='id-card' size={20} />}  
                        placeholder="Digite o rg" 
                        maxLength={7} 
                        state={rg}
                        handleState={setRg}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <Input 
                        label="Órgão" 
                        maxLength={10} 
                        state={organ}
                        handleState={setOrgan}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <Input 
                        label="Data de nascimento" 
                        maxLength={10} 
                        handleState={setBirthday}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <Input
                        label="Telefone"
                        maxLength={11}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <Input
                        label="Email"
                        maxLength={50}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <Input
                        label="Email"
                        maxLength={50}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <Input 
                        label="Senha" 
                        icon={<Ionicons name='key' size={20} />} 
                        placeholder="********" 
                        password 
                        maxLength={8} 
                        state={password}
                        handleState={setPassword}
                    />
                </View>
                <View style={{}}>
                    <Input
                        label="Confirmação de senha"    
                        password
                        maxLength={8}
                        state={passwordConfirmation}
                        handleState={setPaswordConfirmation}
                    />
                </View>
            </View>
            <View style={{marginTop: 50, alignItems: 'center'}}>
                <Button title="CADASTRAR" color={theme.colors.main} colorText={theme.colors.main11} onPress={() => {navigation.navigate('FinishSignUp')}} />
            </View>
            <View style={{justifyContent: 'center', marginTop: 33, flexDirection: 'row'}}>
                <Text>Já possui conta?</Text>
                <Text style={{fontWeight: 'bold'}}> Faça login</Text>
            </View>
        </Container>
    )
}

const Container = styled.View`
    max-width: 100%;
    height: 80%;
    justify-content: center;
    padding: 0 15px;
`

const TitleText = styled.Text`
    font-size: 38px;
    align-self: center;
    margin-bottom: 50px;
`