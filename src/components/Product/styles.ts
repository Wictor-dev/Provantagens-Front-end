import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 180,
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 5,
      paddingRight: 5,
      marginTop: 5
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  categoryContainer: {
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: "center"
  },
  circle: {
      borderRadius: 5,
      width:5,
      height: 5,
      backgroundColor: theme.colors.black
  },
  category: {
      fontWeight: '200',
      marginLeft: 2
  },
  descriptionContainer: {
      paddingLeft: 5,
      paddingRight: 5,
  }, 
  description: {
  }
});
