import { View, Image} from 'react-native'

export function Banner(){
    return (
        <View>
            <Image source={require('../../assets/public/images/banner.png')} />
        </View>
    )
}