import { TextInput, View } from "react-native";
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

type SearchProps = {
    placeholder: string
}
export function SearchBar({ placeholder } : SearchProps){
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder}  />
            <Ionicons name="search" size={20} />
        </View>
    )
}