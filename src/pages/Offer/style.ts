import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    imgContainer:{
        width: '100%',
        height: 300
    },
    img: {
        width: '100%',
        height: '100%',
    },
    content:{
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex'
    },
    title: {
        fontWeight: '400',
        fontSize: 24,
    },
    description: {
        fontSize: 18
    },
    offerLimit: {
        color: theme.colors.red,
        alignSelf: 'flex-end'
    },
    price: {
        marginTop: 5,
        fontSize: 24
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})