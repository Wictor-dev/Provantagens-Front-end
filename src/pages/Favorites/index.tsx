import { FlatList, Text, View } from "react-native"
import styled from 'styled-components/native'
import { SearchBar } from "../../components/SearchBar"
import { Stars } from "../../components/Stars"
import { theme } from "../../global/styles/theme"

const products = [
    {
        key: '1',
        title: 'BMW 800km 50 Cilindradas',
        image: require('../../assets/public/images/product.jpg'),
        backgroundColor: theme.colors.black,
        price: 33.90
    },
    {
        key: '2',
        title: 'BMW 800km 50 Cilindradas',
        image: require('../../assets/public/images/product.jpg'),
        backgroundColor: theme.colors.black,
        price: 33.90
    },
    {
        key: '3',
        title: 'TBMW 800km 50 Cilindradas',
        image: require('../../assets/public/images/product.jpg'),
        backgroundColor: theme.colors.black,
        price: 500.55
    },
]

export function Favorites(){
    return (
        <Container>
            <SearchBar placeholder="Pesquisar serviço" />
            <FlatList
                data={products}
                renderItem={({item}) => (
                    <Product>
                        <Image source={item.image} resizeMode='contain' />
                        <View style={{justifyContent: 'space-between'}}>
                            <View>
                                <Text>{item.title}</Text>
                                <Stars count={5} />
                            </View>
                            <EndText>R$ {item.price}</EndText>
                        </View>
                    </Product>
                )}
                style={{marginTop: 10}}
            />
        </Container>
    )
}

export const Container = styled.View`
    background-color: ${theme.colors.background};
    height: 100%;
    padding: 10px 10px;
    align-items: center;
`

export const Product = styled.View`
    background-color: ${theme.colors.white};
    border-radius: 5px;
    height: 145px;
    padding: 10px 8px;
    margin-bottom: 18px;
    flex-direction: row;
    font-size: 18px;
`

export const Image = styled.Image`
    border-radius: 5px;
    width: 170px;
    height: 100%;
`

export const EndText = styled.Text`
    align-self: flex-end;
`
