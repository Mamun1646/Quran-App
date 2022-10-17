import data from "../Data/quran.json"
import { useRouter } from "next/dist/client/router";
const SurahIndex = (props) => {
 const router = useRouter();
  const { surah_number } = props;
  

  // surah_number ? surah_number = surah_number : surah_number = 10;
  return (
    <div>
      <div className="w-48 h-36 bg-lime-300 hover:bg-sky-100">
       
        <div className="text-center">
        <h6>Arabic Neme:{data[surah_number].name}</h6>
        <h6>English Name: {data[surah_number].transliteration}</h6>
        <h6>Total Ayat:{data[surah_number].total_verses}</h6>
        <h6>Type : {data[surah_number].type}</h6>
        </div>
      </div>
    </div>
  );
};
export default SurahIndex;
