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
    const handleVisibility = () => {
        setTextVisible(!textVisible)
    }

    return (
        <Container>
            <Text>{label}</Text>

            <InputArea style={{ ...theme.shadow }}>
                {icon}
                <TextInput
                    placeholder={placeholder}
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

const Container = styled.View`
  width: 100%;
`;

const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    background-color: ${theme.colors.white};
    border-radius: 10px;
    padding: 10px;
`;
