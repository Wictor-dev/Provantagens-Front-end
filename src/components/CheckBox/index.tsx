import { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler";

type CheckBoxProps = {
    state: boolean
    changeState: () => void
}
export function CheckBox({state, changeState}:CheckBoxProps){
    return (
        <View>
            {state ? (
               <MaterialIcons name="check-box" size={18} onPress={changeState} color={theme.colors.blue10} />
            ):( 
                <MaterialIcons name="check-box-outline-blank" size={18} onPress={changeState} color={theme.colors.blue10} />
            )}
        </View>
    )
}

const Container = styled.TouchableOpacity`
    border: 1px solid ${theme.colors.blue10};
    width: 18px;
    height: 18px;
`