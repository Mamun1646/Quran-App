import React from "react";
import data from "../Data/Al_fatiha.json";

export default function Al_fatiha() {
  return (
    <div >
      <h3>Surah Number : {data.id}</h3>
      <h3>{data.name}</h3>
      <h6 >{data.transliteration}</h6>
      {data.verses.map((ayat, indx) => (
        <h6 key={indx}>
          {ayat.text.split(" ").map((word, idx) => (
            <span
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
