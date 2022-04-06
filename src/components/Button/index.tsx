import { StyleSheet, Text, View } from "react-native"
import styled from 'styled-components/native'
import {theme} from '../../global/styles/theme'
type ButtonProps = {
    color: string,
    title: string,
    onPress: () => void,
    colorText: string
}
export function Button({color, title, onPress, colorText = 'white'}: ButtonProps){
    return (
        <Container color={color} onPress={onPress}>
            <Title color={colorText}>{title}</Title>
        </Container>
    )
}

type ContainerProps = {
    color: string
}
const Container = styled.TouchableOpacity<ContainerProps>`
    width: 60%;
    background-color: ${props => props.color};
    align-items: center;
    padding: 10px 10px;
    border-radius: 10px;
`

type TitleProps = {
    color: string
}

const Title = styled.Text<TitleProps>`
    /* color: ${props => props.color}; */
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.color};
`