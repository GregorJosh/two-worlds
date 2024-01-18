import { CSSProperties } from "react";

import { Article } from "@/components";

export const metadata = {
  title: "Two Worlds: Home",
};

export default function HomePage() {
  const styledP: CSSProperties = {
    textAlign: "left",
  };

  return (
    <Article title="Two Worlds">
      <p style={styledP}>
        Welcome to my website. This website is the official home of my projects,
        portfolios and posts dedicated to my two passions: music and
        programming.
      </p>
      <p style={styledP}>
        My name is Grzegorz Jóźwiak and creating, mixing electronic music and
        programming are my two favorite activities.
      </p>
    </Article>
  );
}
