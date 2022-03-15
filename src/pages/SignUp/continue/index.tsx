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

export function ContinueSignUp() {
    const [registration, setRegistration] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [organ, setOrgan] = useState('')
    const [birthday, setBirthday] = useState(new Date())
    const [isDateOpen, setIsDateOpen] = useState(false)

    const showDatePicker = () => {
        setIsDateOpen(true);
    };

    const hideDatePicker = () => {
        setIsDateOpen(false);
    };

    const handleConfirm = (date: Date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

      
    const {signUp} = useAuth()

    return (
        <Container>
            <TitleText>Cadastro</TitleText>
          
            <View>
                <View style={{ marginBottom: 20 }}>
                    <Input 
                    label="Matrícula" 
                    icon={<FontAwesome5 name='id-card' size={20} />} 
                    placeholder="Digite a matrícula" 
                    maxLength={50} 
                    state={registration}
                    handleState={setRegistration}
                />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Input 
                    label="CPF" 
                    icon={<FontAwesome5 name='id-card' size={20} />} 
                    placeholder="Digite o cpf" 
                    maxLength={11} 
                    state={cpf}
                    handleState={setCpf}
                />
                </View>
                <Input 
                    label="RG" 
                    icon={<FontAwesome5 name='id-card' size={20} />}  
                    placeholder="Digite o rg" 
                    maxLength={7} 
                    state={rg}
                    handleState={setRg}
                />
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{width: '50%', paddingRight: 5}}>
                        <Input 
                            label="Órgão" 
                            icon={<FontAwesome5 name='id-card' size={20} />}  
                            placeholder="Digite o órgão" 
                            maxLength={10} 
                            state={organ}
                            handleState={setOrgan}
                        />
                    </View>
                    <View style={{width: '50%', paddingLeft: 5}}>
                        <TouchableOpacity onPress={showDatePicker} style={{paddingBottom: 5, width: '100%'}}>
                            <Input 
                                label="Nascimento" 
                                icon={<Ionicons name='calendar' size={20} />}  
                                placeholder="" 
                                maxLength={10} 
                                disabled
                            />
                        </TouchableOpacity>
                        {/* <Button title="Data" color={theme.colors.primary} onPress={showDatePicker} /> */}
                        <DateTimePickerModal
                            isVisible={isDateOpen}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                </View>
            </View>
            <View style={{marginTop: 50, alignItems: 'center'}}>
                <Button title="CADASTRAR" color={theme.colors.primary} onPress={() => {}} />
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