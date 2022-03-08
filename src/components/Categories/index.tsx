import { View, ScrollView, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles";
import { Category } from "../Category";

export function Categories(){
    return (
        <View style={styles.container}>
        <Text>Categorias</Text>
        <ScrollView horizontal style={styles.categoriesContainer}>
            <Category title="Saúde" icon={<Ionicons size={60} color="#fff" name="medical" />} />
            <Category title="Nutrição" icon={<Ionicons size={60} color="#fff" name="nutrition" />} />
        </ScrollView>
        </View>
    )
}