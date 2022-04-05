import { Image, Text, View, TouchableOpacity } from "react-native";
import { cutString } from "../../functions/cutString";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/app.routes";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export type ProductProps = {
  name: string;
  price: number;
  description: string;
  cover: any;
  inCart?: boolean;
};

export type OfferScreenProps = StackNavigationProp<RootStackParamList, "Oferta">;

export function Product({
  name,
  price,
  description,
  cover,
  inCart = false
}: ProductProps) {
  const navigation = useNavigation<OfferScreenProps>();
  return (
    <Container
      onPress={() =>
        navigation.navigate("Oferta", {
          name,
          price,
          description,
          cover,
        })
      }
      inCart={inCart}
    >
      <View style={styles.imageContainer}>
        <Image source={cover} style={styles.img} />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View>
          <Text style={styles.description}>{cutString(description, 45)}</Text>
        </View>
        <View>
          <Text style={styles.title}>R$ {price.toFixed(2)}</Text>
        </View>
      </View>
      
    </Container>
  );
}

type ContainerProps = {
  inCart: boolean
}
const Container = styled.TouchableOpacity<ContainerProps>`
  width: 170px;
  ${(props) => props.inCart && 'width: 100%;'}
  height: 240px;
  border-radius: 10px;
  border-width: 0.5px;
  margin: 5px;
  background-color: ${theme.colors.white};
`
