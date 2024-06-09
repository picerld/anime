import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-3">
      {api.data?.map((anime, i) => {
        return (
          <div key={i} className="transition-all rounded-lg shadow-lg hover:scale-95 hover:text-slate-100">
            <Link href={`/anime/${anime.mal_id}`} className="">
              <Image
                alt="..."
                width={350}
                height={350}
                src={anime.images.webp.image_url}
                className="rounded-md"
              />
              <h3 className="p-4 font-bold text-md">{anime.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
