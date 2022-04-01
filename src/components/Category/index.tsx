import { Text, View } from "react-native";
import { styles } from "./styles";

type IconProps = {
    icon: any
    title: string
}

export function Category({icon, title}: IconProps) {
  return (
    <View style={styles.container}>
      <View style={styles.categoryIcon}>
        {icon}
        <Text style={{fontSize: 14}}>{title}</Text>
      </View>
    </View>
  );
}
