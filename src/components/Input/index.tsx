import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from "react";
type InputProps = {
    label: string;
    placeholder?: string;
    icon?: any;
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

            <InputArea count={count}>
                <TextInput
                    secureTextEntry={textVisible}
                    style={password ? {fontSize: 18, width: '90%', marginRight: 'auto' } : {fontSize: 18, width: '100%',}}
                    maxLength={maxLength}
                    value={state}
                    onChangeText={handleState}
                    editable={!disabled}
                    onPressIn={handleCount}
                />
                {count%2 == 0 && (textVisible ? (
                    <Ionicons name="ios-eye" size={20} onPress={handleVisibility} style={password ? undefined : {display: 'none'}} />
                ) : (
                    <Ionicons name="ios-eye-off" size={20} onPress={handleVisibility} style={password ? undefined : {display: 'none'}} />
                ))}
            </InputArea>
        </Container>
    );
}

type ContainerProps = {
    count: number
}
const Container = styled.TouchableOpacity<ContainerProps>`
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  ${props => props.count%2 == 0 && 'flex-direction: column;'}
  ${props => props.count%2 == 0 && 'align-items: flex-start;'}
`;

type InputAreaProps = {
    count: number
}

const InputArea = styled.View<InputAreaProps>`
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    padding: 10px 10px 10px 0;
    ${props => props.count%2 == 0 && 'padding: 10px 0;'}
    max-width: 100%;
`;
