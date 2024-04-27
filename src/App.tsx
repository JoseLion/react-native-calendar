import { StatusBar } from "expo-status-bar";
import { ReactElement, memo } from "react";
import isEqual from "react-fast-compare";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  background-color: #030303;
  color: #fff;
  flex: 1;
  justify-content: center;
`;

const Message = styled.Text`
  color: white;
`;

export const App = memo((): ReactElement => {
  return (
    <Container>
      <Message>{"Open up App.js to start working on your app!"}</Message>
      <StatusBar style="auto" />
    </Container>
  );
}, isEqual);
