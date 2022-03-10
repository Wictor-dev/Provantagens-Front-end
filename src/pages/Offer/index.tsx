import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {ProductProps} from '../../components/Product/index';
import { styles } from "./style";

import logo from '../../assets/public/images/product.jpg'
import { cutString } from "../../functions/cutString";
import { RouteProp, useRoute } from "@react-navigation/native";

type ParamList = {
    Oferta: {
        name: string
        cover: any
        description: string
        price: number
    }
}


export function Offer(){
    const route = useRoute<RouteProp<ParamList, 'Oferta'>>()
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imgContainer}> 
                <Image source={route.params.cover} style={styles.img} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{route.params.name}</Text>
                <Text>{cutString(route.params.description, 100)}</Text>
                <Text>R$ {route.params.price.toFixed(2)}</Text>
            </View>
        </ScrollView>
    )
}

