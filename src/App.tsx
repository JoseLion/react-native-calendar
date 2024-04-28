import { useFonts } from "expo-font";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ReactElement, memo, useCallback } from "react";
import isEqual from "react-fast-compare";

import Poppins from "../assets/fonts/Poppins-Medium.ttf";

import { CalendarTitle, MainContainer } from "./App.styles";
import { Calendar } from "./components/calendar/Calendar.component";

preventAutoHideAsync();

export const App = memo((): Nullable<ReactElement> => {
  const [fontsReady, fontsError] = useFonts({ Poppins });

  const loadStyles = useCallback((): void => {
    if (fontsReady || fontsError) {
      hideAsync();
    }
  }, [fontsReady, fontsError]);

  if (!fontsReady && !fontsError) {
    return null;
  }

  return (
    <MainContainer onLayout={loadStyles}>
      <StatusBar style="auto" />

      <CalendarTitle>{"Calendar"}</CalendarTitle>
      <Calendar />
    </MainContainer>
  );
}, isEqual);
