import { Image, Text, View, TouchableOpacity} from "react-native";
import { cutString } from "../../functions/cutString";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/routes";

export type ProductProps = {
  name: string
  price: number
  category: string
  description: string
  cover: any
};

type OfferScreenProps = StackNavigationProp<RootStackParamList, 'Oferta'>

export function Product({ name, price, category, description, cover }: ProductProps) {
  const navigation = useNavigation<OfferScreenProps>()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Oferta')} >
      <View style={styles.imageContainer}>
        <Image source={cover} style={styles.img} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>R$ {price.toFixed(2)}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.circle}></View>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{cutString(description, 45)}</Text>
      </View>
    </TouchableOpacity>
  );
}
