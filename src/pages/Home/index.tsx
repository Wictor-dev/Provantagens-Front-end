import { SearchBar } from "../../components/SearchBar";
import React from 'react'
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Banner } from "../../components/Banner";
import { Categories } from "../../components/Categories";


export function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.topSide}>
                <SearchBar placeholder='Pesquisar serviços' />
                <Banner />
            </View>
            <View>
                <Categories />
            </View>

        </View>
    )
}