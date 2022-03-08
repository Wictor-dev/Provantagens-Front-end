import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 5
    },
    categoryIcon: {
        backgroundColor: theme.colors.primaryLight,
        width: 80,
        height: 70,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})