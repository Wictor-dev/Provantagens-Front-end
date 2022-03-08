import { Image, ScrollView } from "react-native";
import { Product } from "../Product";
import { styles } from "./style";

export function Products(){
    return (
        <ScrollView horizontal>
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
            />
            <Product 
                name="Fone de ouvido" 
                price={38.99} 
                category="Tecnologia" 
                description="Fones de ouvido da Razer, super mega impactantes top demais meu parceiro"
                cover={require('../../assets/public/images/product.jpg')}
            />

        </ScrollView>
    )
}