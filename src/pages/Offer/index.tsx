import { StyleSheet, Text, View } from "react-native";
import {ProductProps} from '../../components/Product/index';


export function Offer({name} : ProductProps){
    return (
        <View style={styles.container}>
            <Text>Oferta</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})