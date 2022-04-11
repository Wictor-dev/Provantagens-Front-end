import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "../../components/SearchBar";
import { Stars } from "../../components/Stars";
import { theme } from "../../global/styles/theme";
import { OfferScreenProps, Product } from "../../components/Product"; // Tipagem para usar o navigation.navigate()
import { useNavigation } from "@react-navigation/native";
import { Products } from "../../components/Products";
const products = [
  {
    key: "1",
    title: "BMW 800km 50 Cilindradas",
    image: require("../../assets/public/images/product.jpg"),
    backgroundColor: theme.colors.black,
    price: 33.9,
    category: "Tecnologia",
    description: "descrição",
  },
  {
    key: "2",
    title: "BMW 800km 50 Cilindradas",
    image: require("../../assets/public/images/product.jpg"),
    backgroundColor: theme.colors.black,
    price: 33.9,
    category: "Tecnologia",
    description: "descrição",
  },
  {
    key: "3",
    title: "TBMW 800km 50 Cilindradas",
    image: require("../../assets/public/images/product.jpg"),
    backgroundColor: theme.colors.black,
    price: 33.9,
    category: "Tecnologia",
    description: "descrição",
  },
];

export function Favorites() {

  return (
    <Container>
      <SearchBar placeholder="Pesquisar serviço" />
      <Products
        inFavorites
      />
    </Container>
  );
}

export const Container = styled.View`
  background-color: ${theme.colors.white};
  height: 100%;
  padding: 10px 10px;
  align-items: center;
`;

export const Image = styled.Image`
  border-radius: 5px;
  width: 170px;
  height: 100%;
`;

export const EndText = styled.Text`
  align-self: flex-end;
`;
