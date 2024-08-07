const accentColor = "#007bff";
const lightColor = "rgba(225, 225, 235, 1)";
const backgroundColor = "rgba(245, 245, 250, 1)";

export interface ColorType {
  primary: ColorObject;
  secondary: ColorObject;
  success: ColorObject;
  warning: ColorObject;
  danger: ColorObject;
  complementary: { [key: string]: ColorObject };
  grayscale: { [key: string]: string };
}

export interface ColorObject {
  fill: string;
  tint: string;
}

//  Primary: "#4169E1",
export const Color: ColorType = {
  primary: {
    fill: "#3D62D1",
    tint: "#e7eafb",
  },
  secondary: {
    fill: "#e7eafb",
    tint: "#3D62D1",
  },
  success: {
    fill: "#33F567",
    tint: "#e6f9e8",
  },
  warning: {
    fill: "#FFD100",
    tint: "#fff7df",
  },
  danger: {
    fill: "#FE644A",
    tint: "#ffebee",
  },
  complementary: {
    1: {
      fill: "#6E4624",
      tint: "#fcd9bb",
    },
    2: {
      fill: "#205E4D",
      tint: "#caefe4",
    },
    3: {
      fill: "#4D4B6B",
      tint: "#dddffb",
    },
    4: {
      fill: "#784162",
      tint: "#fdd9e0",
    },
    5: {
      fill: "#7B4624",
      tint: "#ffddb1",
    },
    6: {
      fill: "#2E4D60",
      tint: "#b1e4ef",
    },
    7: {
      fill: "#6B4B4D",
      tint: "#ffb8b8",
    },
    8: {
      fill: "#624162",
      tint: "#e0d9fd",
    },
  },
  grayscale: {
    0: "#ffffff",
    50: "#fafafc",
    100: "#f5f5f7",
    200: "#eeeef0",
    300: "#e0e0e2",
    400: "#bdbdbf",
    500: "#9e9ea0",
    600: "#757577",
    700: "#616163",
    800: "#424244",
    900: "#212123",
  },
};
