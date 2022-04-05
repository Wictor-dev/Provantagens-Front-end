import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "../../components/SearchBar";
import { Stars } from "../../components/Stars";
import { theme } from "../../global/styles/theme";
import { OfferScreenProps } from "../../components/Product"; // Tipagem para usar o navigation.navigate()
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'
import { CheckBox } from "../../components/CheckBox";
import { useState } from "react";
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

export function Cart() {
  const [isSelectAll, setIsSelectAll] = useState(false)
  const [checkSelected, setCheckSelected] = useState([false])

  function handleSelectAll(){
    setIsSelectAll(!isSelectAll)
  }


  const navigation = useNavigation<OfferScreenProps>();
  return (
    <Container>
        <View style={{width: '100%', paddingTop: 10, paddingBottom: 15, alignItems: "center", backgroundColor: theme.colors.main}}>
            <SearchBar  placeholder="Pesquisar serviço" />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingLeft: 10, paddingRight: 10, marginTop: 30, marginBottom: 35}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox state={isSelectAll} changeState={handleSelectAll} />
            <Text style={{color: theme.colors.blue09, fontSize: 18, marginLeft:3}}>Selecionar todos</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Text style={{color: theme.colors.main09, fontSize: 18, marginRight: 6}}>Limpar</Text>
            <Ionicons name="trash-bin" size={25} color={theme.colors.main05} />
          </View>
        </View>
    <Content>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
          <View style={{marginBottom: 18}}>
            <Product
              style={theme.shadow}
              onPress={() =>
                navigation.navigate("Oferta", {
                  name: item.title,
                  price: item.price,
                  description: item.description,
                  cover: item.image,
                })
              }
            >
              <Image source={item.image} resizeMode="contain" />
              <View style={{ justifyContent: "space-between"}}>
                <View style={{width: '100%'}}>
                  <Text style={{fontSize: 18, color: theme.colors.main09, maxWidth: 200 }}>{item.title}</Text>
                  <Stars count={5} />
                </View>
                <EndText>R$ {item.price}</EndText>
              </View>
            </Product>
            {/* <CheckBox /> */}
          </View>
        )}}
        style={{ marginBottom: 150 }}
      />
        
    </Content>
    </Container>
  );
}

export const Container = styled.View`
  background-color: ${theme.colors.white};
  height: 100%;
  align-items: center;
`;

export const Content = styled.View`
    padding: 0 10px 10px 10px;
    background-color: ${theme.colors.white};
`
export const Product = styled.TouchableOpacity`
  background-color: ${theme.colors.g01};
  border-radius: 5px;
  height: 145px;
  padding: 10px 6px;
  flex-direction: row;
  font-size: 18px;
  margin-bottom: 8px;
  width: 372px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  border-radius: 5px;
  width: 150px;
  height: 100%;
`;

export const EndText = styled.Text`
  align-self: flex-end;
  color: ${theme.colors.main09};
  font-size: 18px;
`;
