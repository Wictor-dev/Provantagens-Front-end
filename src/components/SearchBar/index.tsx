import { TextInput, View } from "react-native";
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
export function SearchBar(props:any){
    return (
        <View style={styles.container}>
            <TextInput placeholder={props.placeholder} />
            <Ionicons name="search" size={20} />
        </View>
    )
}