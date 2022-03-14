import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react";
type InputProps = {
    label: string;
    placeholder: string;
    icon: any;
    password?: boolean;
    maxLength: number;
};

export function Input({ label, placeholder, icon, password = false, maxLength }: InputProps) {
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
                    maxLength={maxLength} />
                {textVisible ? (
                    <Ionicons name="ios-eye" size={20} onPress={handleVisibility} />
                ) : (
                    <Ionicons name="ios-eye-off" size={20} onPress={handleVisibility} />
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
