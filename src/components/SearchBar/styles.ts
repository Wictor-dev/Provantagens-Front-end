import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 38,
        borderRadius: 5,
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        // ...theme.shadow
        // elevation: 10,
        // shadowColor: '#00000054',
        // shadowRadius: 13.16,
        // shadowOpacity: 0.51,
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        
        // box-shadow: 0px 4px 12px 0px #00000054,
        

    }
})