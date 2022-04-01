import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingLeft: 14,
        paddingRight: 14
    },
    categoryIcon: {
        backgroundColor: theme.colors.g01,
        width: 80,
        height: 94,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})