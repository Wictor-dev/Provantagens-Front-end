import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

type StarsProps = {
    count: number
}

export function Stars({count}: StarsProps) {

  return (
    <Container>
      <Container>
        <FontAwesome name="star" color={theme.colors.yellow} />
        <FontAwesome name="star" color={theme.colors.yellow} />
        <FontAwesome name="star" color={theme.colors.yellow} />
        <FontAwesome name="star" color={theme.colors.yellow} />
        <FontAwesome name="star" color={theme.colors.yellow} />
      </Container>
      <Text style={{ marginLeft: 5 }}>(55)</Text>
    </Container>
  );
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`
