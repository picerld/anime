import AnimeList from "./components/AnimeList";
import PeopleList from "./components/PeopleList";
import Header from "./components/AnimeList/Header";
import {
  getDataResponse,
  reproduce,
  getNestedAnimeRespone,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getDataResponse("top/anime", "limit=8");

  const topPeople = await getDataResponse("top/people", "limit=8");

  let recommendedAnime = await getNestedAnimeRespone(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 8);

  return (
    <>
      {/* POPULER SECTION */}
      <section className="">
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
      <section className="pb-10 mt-10">
        <Header title="All Star" />
        <PeopleList api={topPeople} />
      </section>
      {/* RECOMMENDED SECTION */}
      <section className="mt-10">
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
