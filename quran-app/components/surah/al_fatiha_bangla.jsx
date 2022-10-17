import React from "react";
import data from "../Data/Al_fatiha.json";

export default function Al_fatiha_Bangla() {
  return (
    <div>
      <h3 >সূরা নাম্বার : {data.id}</h3>
      <h4>অনুবাদ : {data.translation}</h4>
      {data.verses.map((ayat, indx) => (
        <h6 key={indx}>
          {ayat.translation.split(" ").map((word, idx) => (
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
