import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {ProductProps} from '../../components/Product/index';
import { styles } from "./style";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
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
        <View style={{height: '100%'}}>
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
                </View>
            </ScrollView>
            <View style={styles.menuBottom}>
                <View style={styles.iconsArea}>
                    <FontAwesome5 name="cart-plus" size={35} color="black" />
                    <Ionicons name="heart" size={40} color="black" />
                </View>
                <View style={{width: '60%'}}>
                    <Button color={theme.colors.main} colorText={theme.colors.main11} title="ADERIR" onPress={()=>{}}/>
                </View>
            </View>
        </View>
    )
}

