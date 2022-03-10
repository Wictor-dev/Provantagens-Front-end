import { StyleSheet, Text, View } from "react-native"
import styled from 'styled-components/native'
import {theme} from '../../global/styles/theme'
type ButtonProps = {
    color: string,
    title: string
}
export function Button({color, title}: ButtonProps){
    return (
        <Container color={color}>
            <Title>{title}</Title>
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
    border-radius: 20px;
`

const Title = styled.Text`
    color: ${theme.colors.white};
    font-size: 24px;
`