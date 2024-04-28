import styled from "styled-components/native";

import { baseText } from "../common/global.styles";

interface DayButtonProps {
  selected?: boolean;
}

export const CalendarBox = styled.View`
  background-color: #131313;
  border: 1px solid rgba(183 183 183 / 0.37);
  border-radius: 7px;
  height: 288px;
  padding: 18px 8px;
  width: 346px;
`;

export const CalendarHeader = styled.View`
  flex-direction: row;
  height: fit-content;
  justify-content: space-between;
  margin-bottom: 14px;
  padding: 0 8px;
  width: 100%;
`;

export const LabelsView = styled.View`
  align-items: baseline;
  flex-direction: row;
  gap: 4px;
`;

export const MonthLabel = styled.Text`
  ${baseText}
`;

export const YearLabel = styled.Text`
  ${baseText}
  font-size: 25px;
`;

export const NavView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const NavButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 7px;
`;

export const DayGrid = styled.View`
  align-content: center;
  column-gap: 30px;
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  row-gap: 6px;
`;

export const DayButton = styled.TouchableHighlight<DayButtonProps>`
  background-color: ${({ selected }) => selected ? "#00a19b" : "transparent"};
  border-radius: 28px;
  height: 28px;
  width: 28px;
`;

export const Day = styled.Text`
  ${baseText}
  color: ${({ disabled }) => disabled ? "#424242" : "#fff"};
  line-height: 28px;
  padding-left: 1.5px;
  text-align: center;
`;
