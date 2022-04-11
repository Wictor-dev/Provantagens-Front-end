import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    imgContainer:{
        width: '100%',
        height: 300,
        marginBottom: 24
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
        fontWeight: '600',
        fontSize: 32,
        lineHeight: 32,
    },
    description: {
        fontSize: 18,
        marginBottom: 8
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: theme.colors.g02,
        marginTop: 4,
        marginBottom: 16
    },
    offerLimit: {
        color: theme.colors.main09,
        fontSize: 16,
        alignSelf: 'flex-end',
        marginBottom: 12
    },
    price: {
        marginTop: 5,
        fontSize: 24,
        fontWeight: '600',
        color: theme.colors.main09
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