import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Rubik } from "next/font/google";

export const rubik: NextFontWithVariable = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  preload: false,
});
