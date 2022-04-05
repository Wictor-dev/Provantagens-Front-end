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
    nota: string,
}

type ProductsProps = {
    inCart?: boolean
}

export function Products({inCart = false} : ProductsProps){
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
        <View style={{paddingLeft: 5,paddingRight: 10}}>
            {products?.length > 0 && (
                    <FlatList
                        data={products}
                        horizontal={!inCart}
                        renderItem={ ({item})  => {
                            return (
                                <Product
                                    name="Fone de ouvido"
                                    price={Number(item?.preco)}
                                    description={item?.descricao}
                                    cover={logo}
                                    inCart={inCart}
                                />
                            )
                        }}
                    />

            )}
        </View>
    )
}