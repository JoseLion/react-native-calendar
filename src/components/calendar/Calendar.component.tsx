import Icon from "@expo/vector-icons/Ionicons";
import { DateTime } from "luxon";
import { ReactElement, memo, useCallback, useMemo, useState } from "react";
import isEqual from "react-fast-compare";

import {
  CalendarBox,
  CalendarHeader,
  Day,
  DayButton,
  DayGrid,
  LabelsView,
  MonthLabel,
  NavButton,
  NavView,
  YearLabel,
} from "./Calendar.styles";

export const Calendar = memo((): ReactElement => {
  const [selected, setSelected] = useState(DateTime.now);
  const [current, setCurrent] = useState(() => selected.startOf("month"));

  const monthGrid = useMemo((): DateTime[] => {
    return Array.from({ length: 36 })
      .map((_, i) => i - 2)
      .map(i => current.plus({ days: i }));
  }, [current]);

  const previous = useCallback((): void => {
    setCurrent(prev => prev.minus({ month: 1 }));
  }, []);

  const next = useCallback((): void => {
    setCurrent(prev => prev.plus({ month: 1 }));
  }, []);

  const select = useCallback((date: DateTime) => (): void => {
    setSelected(date);
  }, []);

  return (
    <CalendarBox>
      <CalendarHeader>
        <LabelsView>
          <MonthLabel>{current.toFormat("MMMM")}</MonthLabel>
          <YearLabel>{current.year}</YearLabel>
        </LabelsView>

        <NavView>
          <NavButton onPress={previous} hitSlop={10}>
            <Icon name="chevron-back" color="white" size={15} />
          </NavButton>

          <NavButton onPress={next} hitSlop={10}>
            <Icon name="chevron-forward" color="white" size={15} />
          </NavButton>
        </NavView>
      </CalendarHeader>

      <DayGrid>
        {monthGrid.map(date => (
          <DayButton
            key={date.toISODate()}
            hitSlop={10}
            selected={date.toISODate() === selected.toISODate()}
            disabled={date.month !== current.month}
            onPress={select(date)}
          >
            <Day disabled={date.month !== current.month}>
              {date.day}
            </Day>
          </DayButton>
        ))}
      </DayGrid>
    </CalendarBox>
  );
}, isEqual);
