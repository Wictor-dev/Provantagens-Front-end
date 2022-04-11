import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        backgroundColor: theme.colors.white
    },
    topSide: {
        display: 'flex' ,
        alignItems: 'center',
        backgroundColor: theme.colors.main,
        paddingTop: 50,
        paddingBottom: 20
    },
    promotion:{
        marginTop: 28,
        marginLeft: 10,
    },
    titlePromotion: {
        fontSize: 18
    },
    information: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        marginBottom: 10
    },
    expiration: {
        color: theme.colors.main07
    }

})
