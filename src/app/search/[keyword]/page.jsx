import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";
import { getDataResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
  const toUpper = decodeKeyword.toUpperCase();

  const searchAnime = await getDataResponse('anime', `q=${decodeKeyword}`)

  return (
    <>
      <section className="min-h-screen">
        <Header
          title={ `Pencarian untuk ${toUpper}...` }
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
