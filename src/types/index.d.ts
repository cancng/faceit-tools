import { type Tuple, type DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors = "faceit" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
