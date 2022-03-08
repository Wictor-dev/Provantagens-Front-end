import { Image, Text, View } from "react-native";
import { cutString } from "../../functions/cutString";
import { styles } from "./styles";

type ProductProps = {
  name: string
  price: number
  category: string
  description: string
  cover: any
};

export function Product({ name, price, category, description, cover }: ProductProps) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}
