import data from "../../components/Data/quran.json";
import { useRouter } from "next/router";
const Surah_Index = () => {
  const router = useRouter();
  let { surah_number } = router.query;
  console.log(surah_number);

  return (
    <div className="bg-slate-200">
      <div className="bg-cyan-900"></div>
      <div className="text-center">
        <div></div>
        {console.log(data[surah_number])}
        {data[surah_number] ? (
          <div>
            <h4>{data[surah_number].id}</h4>
            <h4>{data[surah_number].name}</h4>
            <h4>{data[surah_number].transliteration}</h4>
            <h4>{data[surah_number].total_verses}</h4>
            <h4>{data[surah_number].type}</h4>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Surah_Index;
