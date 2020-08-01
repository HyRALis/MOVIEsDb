import React from "react";
import CaroselSlide from "./Carousel/CaroselSlide";
import { useEffect } from "react";

export default function ItemInfo({
  Content,
  ImageBuilder,
  CardTitle,
  GenreToString,
}) {
  useEffect(() => {}, []);
  return (
    <div>
      <CaroselSlide
        Content={Content}
        ImageBuilder={ImageBuilder}
        CardTitle={CardTitle}
        GenreToString={GenreToString}
      />
    </div>
  );
}
