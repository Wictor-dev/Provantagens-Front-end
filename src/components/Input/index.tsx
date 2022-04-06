import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from "react";
type InputProps = {
    label: string;
    placeholder: string;
    icon: any;
    password?: boolean;
    maxLength: number;
    state?: string;
    handleState?: React.Dispatch<React.SetStateAction<string>>;
    disabled?: boolean
};

export function Input({ label, placeholder, icon, password = false, maxLength, state, handleState, disabled = false}: InputProps) {
    const [textVisible, setTextVisible] = useState(password)
    const [count, setCount] = useState(1)
    const handleVisibility = () => {
        setTextVisible(!textVisible)
    }

    function handleCount(){
        setCount(count + 1)
    }

    return (
        <Container style={{borderBottomColor: '#2b2b2b', borderBottomWidth: 2}} onPress={handleCount} count={count}>
            <Text style={{color: theme.colors.g06, fontWeight: 'bold', fontSize: 16}}>{label}</Text>

            <InputArea>

                <TextInput
                    secureTextEntry={textVisible}
                    style={password ? { marginLeft: 10, fontSize: 18, width: '85%' } : { marginLeft: 10, fontSize: 18, width: '100%' }}
                    maxLength={maxLength}
                    value={state}
                    onChangeText={handleState}
                    editable={!disabled}
                />
                {textVisible ? (
                    <Ionicons name="ios-eye" size={20} onPress={handleVisibility} style={password ? undefined : {display: 'none'}} />
                ) : (
                    <Ionicons name="ios-eye-off" size={20} onPress={handleVisibility} style={password ? undefined : {display: 'none'}} />
                )}
            </InputArea>
        </Container>
    );
}

type ContainerProps = {
    count: number
}
const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  ${props => props.count%2 == 0 && 'flex-direction: column;'}
  ${props => props.count%2 == 0 && 'align-items: flex-start;'}
`;

const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    border-radius: 10px;
    padding: 10px;
`;
