import { useState } from "react";
import Button from "react-bootstrap/Button";
import DisplaySurah_Index from "./display-index";
import Al_fatiha_Bangla from "../components/surah/al_fatiha_bangla";
import Al_fatiha from "../components/surah/al_fatiha";
import Al_fatiha_Spell from "../components/surah/English_Spell";


const HomePage = () => {
    const [tools, setTools] = useState(true);
    const [tafsir, setTafsir] = useState(true);
    const [surah, setSurah] = useState(true);
    const [translate, setTranslate] = useState(true);
    const [index, setIndex] = useState(false);
    const toolsControlMinus = () => {
      setTools(false);
    };
    const toolsControlPlus = () => {
      setTools(true);
    };

    const tafsirControlMinus = () => {
      setTafsir(false);
    };
    const tafsirControlPlus = () => {
      setTafsir(true);
    };
    const surahControlMinus = () => {
      setSurah(false);
    };
    const surahControlPlus = () => {
      setSurah(true);
    };

    const translateControlMinus = () => {
      setTranslate(false);
    };
    const translateControlPlus = () => {
      setTranslate(true);
    };

    return (
      <div className="bg-teal-900">
        {surah || tafsir || tools || translate ? (
          <div className="flex">
            {surah ? (
              <div className="grow h-screen mr-4 ml-2 bg-slate-400 hover:bg-slate-600">
                <button onClick={surahControlMinus}>-</button>
                <div>
                  <Al_fatiha />
                </div>
              </div>
            ) : (
              ""
            )}
            {translate ? (
              <div className="grow h-screen mr-4 bg-slate-400 hover:bg-slate-600">
                <button onClick={translateControlMinus}>-</button>
           
                  <Al_fatiha_Bangla />
               
              </div>
            ) : (
              ""
            )}
            {tafsir ? (
              <div className="grow h-screen mr-4 bg-slate-400 hover:bg-slate-600">
                <button onClick={tafsirControlMinus}>-</button>
      
                  <Al_fatiha_Spell />
       
              </div>
            ) : (
              ""
            )}
            {tools ? (
              <div className="grow h-screen mr-4 bg-slate-400 hover:bg-slate-600">
                <button onClick={toolsControlMinus}>-</button>
              
                  <Al_fatiha_Spell />
                
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <DisplaySurah_Index />
        )}
      </div>
    );
    
}
export default HomePage;