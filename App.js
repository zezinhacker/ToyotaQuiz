import RootNavigation from "./src";
import { DefaultTheme, Provider as NativeProvider } from "react-native-paper";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#fff",
      accent: "#000000",
      onSurfaceVariant: "#FFFFFF",
    },
  };
  return (
    <NativeProvider theme={theme}>
      <RootNavigation />
    </NativeProvider>
  );
}
