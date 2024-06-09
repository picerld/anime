import Image from "next/image";
import Link from "next/link";

const Page = ({ api }) => {
  return (
    <div className="grid grid-cols-4 gap-4 px-4 md:grid-cols-8 sm:grid-cols-4">
      {api.data?.map((people, i) => {
        return (
          <div key={i} className="text-center hover:text-slate-100">
            <div className="avatar">
              <div className="object-cover w-full transition-all rounded-full hover:scale-105 hover:ring hover:ring-offset-transparent hover:ring-primary hover:ring-offset-2">
                <Link href={`/people/${people.mal_id}`}>
                  <Image
                    src={people.images.jpg.image_url}
                    width={200}
                    height={200}
                    alt=""
                    className=""
                  />
                </Link>
              </div>
            </div>
            <h3 className="py-2 text-lg font-semibold ">{people.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
