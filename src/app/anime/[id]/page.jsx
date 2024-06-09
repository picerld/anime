import VideoPlayer from "@/app/components/Utilities/VideoPlayer";
import { getDataResponse } from "../../../libs/api-libs"
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const datas = await getDataResponse(`anime/${id}`);
  const anime = datas.data
  const genres = anime.genres

  return (
    <>
      <div className="px-4 pt-4">
        <h3 className="text-2xl font-bold text-slate-100">
          {anime.title} - {anime.year}
        </h3>
      </div>

      <div className="flex gap-2 px-4 pt-4 text-slate-100">
        <div className="flex gap-2 badge w-36">
          <h3>Peringkat</h3>
          <p>{anime.rank}</p>
        </div>
        <div className="flex gap-2 w-80 badge">
          {genres.map((genre, i) => {
            return <div key={i}>{genre.name + ","}</div>;
          })}
        </div>
      </div>

      <div className="flex gap-2 px-4 pt-2">
        <div className="flex gap-2 badge w-36">
          <h3>Skor</h3>
          <p>
            {anime.score} {anime.score > 8.5 && "⭐"}
          </p>
        </div>
        <div className="flex gap-2 badge w-36">
          <h3>Episode</h3>
          <p>{anime.episodes}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 px-4 pt-4 sm:flex-nowrap text-slate-50">
        <Image
          src={anime.images.webp.image_url}
          alt={anime.images.webp.image_url}
          width={250}
          height={250}
          priority={false}
          className="object-cover w-full rounded"
        />
        <p className="text-sm">{anime.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.trailer.youtube_id}/>
      </div>
    </>
  );
};

export default Page;
