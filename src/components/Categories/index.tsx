import { View, ScrollView, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles";
import { Category } from "../Category";
import { theme } from "../../global/styles/theme";

export function Categories(){
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Categorias</Text>
        <ScrollView horizontal style={styles.categoriesContainer}>
            <Category title="Saúde" icon={<Ionicons size={46} color={theme.colors.g09} name="medical" />} />
            <Category title="Nutrição" icon={<Ionicons size={46} color={theme.colors.g09} name="nutrition" />} />
            <Category title="Nutrição" icon={<Ionicons size={46} color={theme.colors.g09} name="nutrition" />} />
            <Category title="Nutrição" icon={<Ionicons size={46} color={theme.colors.g09} name="nutrition" />} />
            <Category title="Nutrição" icon={<Ionicons size={46} color={theme.colors.g09} name="nutrition" />} />
            <Category title="Nutrição" icon={<Ionicons size={46} color={theme.colors.g09} name="nutrition" />} />
            <Category title="Nutrição" icon={<Ionicons size={46} color={theme.colors.g09} name="nutrition" />} />
            <Category title="Nutrição" icon={<Ionicons size={46} color={theme.colors.g09} name="nutrition" />} />
        </ScrollView>
        </View>
    )
}