import React from "react";
import data from "../Data/Al_fatiha.json";

export default function Al_fatiha_Spell() {
  return (
    <div>
      <h4 className="text-center">Surah ID: {data.id}</h4>
      <h4 className="text-center">Transliteration : {data.transliteration}</h4>
      {data.verses.map((ayat, indx) => (
        <h6 key={indx}>
          {ayat.transliteration.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="mr-1 hover:bg-green-500
            hover:text-slate-800"
            >
              {word}
            </span>
          ))}
        </h6>
      ))}
    </div>
  );
}
