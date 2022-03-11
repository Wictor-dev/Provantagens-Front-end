import { Image, View, FlatList, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const slides = [
    {
        key: '1',
        title: 'Title1',
        image: require('../../assets/public/images/product.jpg'),
        backgroundColor: theme.colors.black,
    },
    {
        key: '2',
        title: 'Title2',
        image: require('../../assets/public/images/product.jpg'),
        backgroundColor: theme.colors.black,
    },
    {
        key: '3',
        title: 'Title3',
        image: require('../../assets/public/images/product.jpg'),
        backgroundColor: theme.colors.black,
    },
]
export function Slider(){
    function renderSlide({item}: any){
        return (
            <View style={{flex: 1}}>
                <Image source={item.image} style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: 300
                }} />
            </View>
        )
    }

    return (
        <View>
            <FlatList
                horizontal
                pagingEnabled
                data={slides}
                renderItem={({item}) => (
                    <View style={{flex: 1, alignItems: 'center', borderWidth: 1, maxWidth: '85%'}}>
                        <Image source={item.image} resizeMode='cover' style={{height: 300}} />
                    </View>
                )}
            />
            <View style={styles.circle} />
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#ccc'
    }
})