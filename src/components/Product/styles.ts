import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 240,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 5,
    backgroundColor: theme.colors.white
  },
  imageContainer: {
    height: 150,
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  titleContainer: {
      marginTop: 5
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.main09
  },
  categoryContainer: {
      flexDirection: 'row',
      alignItems: "center"
  },
  category: {
      fontWeight: '200',
      marginLeft: 2
  },
  description: {
    fontSize: 14
  },
  informationContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'space-around'
  }
});
