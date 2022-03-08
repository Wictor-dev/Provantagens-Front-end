import { SearchBar } from "../../components/SearchBar";
import React from 'react'
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Banner } from "../../components/Banner";
import { Categories } from "../../components/Categories";
import { Products } from "../../components/Products";


export function Home(){
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topSide}>
                <SearchBar placeholder='Pesquisar serviços' />
                <Banner />
            </View>
            <View>
                <Categories />
            </View>
            <View style={styles.promotion}>
                <Text style={styles.titlePromotion}>Promoções do dia</Text>
                <Products />
            </View>
            <View style={styles.promotion}>
                <Text style={styles.titlePromotion}>Serviços mais adquiridos</Text>
                <Products />
            </View>
            <View style={styles.promotion}>
                <Text style={styles.titlePromotion}>Promoções do dia</Text>
                <Products />
            </View>

        </ScrollView>
    )
}