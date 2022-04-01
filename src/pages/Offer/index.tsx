import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {ProductProps} from '../../components/Product/index';
import { styles } from "./style";
import { FontAwesome } from '@expo/vector-icons'
import { cutString } from "../../functions/cutString";
import { RouteProp, useRoute } from "@react-navigation/native";
import { theme } from "../../global/styles/theme";
import { Button } from "../../components/Button";
import { Slider } from "../../components/Slider";

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
                {/* <Image source={route.params.cover} style={styles.img} /> */}
                <Slider />
            </View>
            <View style={styles.content}>
                <Text style={styles.offerLimit}>Essa oferta acaba em 13:25:59</Text>
                <Text style={styles.title}>{route.params.name}</Text>
                <Text style={styles.description}>{cutString(route.params.description, 100)}</Text>
                <Text style={styles.price}>R$ {route.params.price.toFixed(2)}</Text>
                <View style={styles.starsContainer}>
                    <View style={styles.starsContainer}>
                        <FontAwesome name="star"  color={theme.colors.yellow}/>
                        <FontAwesome name="star"  color={theme.colors.yellow}/>
                        <FontAwesome name="star"  color={theme.colors.yellow}/>
                        <FontAwesome name="star"  color={theme.colors.yellow}/>
                        <FontAwesome name="star"  color={theme.colors.yellow}/>
                    </View>
                    <Text style={{marginLeft: 5}}>(55)</Text>
                </View>
                <View style={{marginTop: 20, alignItems: 'center'}}>
                    <Button color={theme.colors.red} title="ADERIR" onPress={() => {}} />

                </View>
            </View>
        </ScrollView>
    )
}

