import { FlatList, Image, ScrollView, View } from "react-native";
import { Product } from "../Product";
import { styles } from "./style";

// let product = require('../../assets/public/images/product.jpg')
import logo from '../../assets/public/images/product.jpg'
import { api } from "../../services/api";
import { useEffect, useState } from "react";

type ProductProp = {
    descricao: string,
    preco: string,
    nota: string 
}

export function Products(){
    const [products, setProducts] = useState<ProductProp[]>([])

    async function loadProducts(){
        try {
            const {data} = await api.get('/ofertas')
            setProducts(data)

        } catch (e){
            console.log(e)
        }
    }

    useEffect(()=>{
        loadProducts()
    }, [])
    return (
        <View>
            {products?.length > 0 && (
                    <FlatList
                        data={products}
                        horizontal
                        renderItem={ ({item})  => {
                            return (
                                <Product
                                    name="Fone de ouvido"
                                    price={Number(item?.preco)}
                                    category="Tecnologia"
                                    description={item?.descricao}
                                    cover={logo}
                                />
                            )
                        }}
                    />

            )}
            {/* <Product 
                name="Fone de ouvido" 
                price={38.99} 
                category="Tecnologia" 
                description="Fones de ouvido da Razer, super mega impactantes top demais meu parceiro parceiro parceiro parceiro parceiro parceiro parceiro parceiro parceiro parceiro parceiro parceiro parceiro parceiro"
                cover={logo}
            />
            <Product 
                name="Fone de ouvido" 
                price={38.99} 
                category="Tecnologia" 
                description="Fones de ouvido da Razer, super mega impactantes top demais meu parceiro"
                cover={require('../../assets/public/images/product.jpg')}
            />
            <Product 
                name="Fone de ouvido" 
                price={38.99} 
                category="Tecnologia" 
                description="Fones de ouvido da Razer, super mega impactantes top demais meu parceiro"
                cover={require('../../assets/public/images/product.jpg')}
            />
            <Product 
                name="Fone de ouvido" 
                price={38.99} 
                category="Tecnologia" 
                description="Fones de ouvido da Razer, super mega impactantes top demais meu parceiro"
                cover={require('../../assets/public/images/product.jpg')}
            />
            <Product 
                name="Fone de ouvido" 
                price={38.99} 
                category="Tecnologia" 
                description="Fones de ouvido da Razer, super mega impactantes top demais meu parceiro"
                cover={require('../../assets/public/images/product.jpg')}
            /> */}

        </View>
    )
}