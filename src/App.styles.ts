import styled from "styled-components/native";

import { baseText } from "./components/common/global.styles";

export const MainContainer = styled.View`
  align-items: center;
  background-color: #030303;
  flex: 1;
  justify-content: center;
`;

export const CalendarTitle = styled.Text`
  ${baseText}
  font-size: 32px;
  margin-bottom: 8px;
  width: 346px;
`;
