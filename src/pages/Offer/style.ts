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
    menuBottom: {
        width: '100%',
        maxWidth: '100%',
        borderTopColor: theme.colors.g03, 
        borderTopWidth: 1, 
        flexDirection: 'row',
        padding: 15
    },
    iconsArea: {
        flexDirection: 'row',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginRight: 10,
    }
})