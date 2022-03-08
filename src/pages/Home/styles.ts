import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
    },
    topSide: {
        display: 'flex' ,
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        paddingTop: 50
    }

})
