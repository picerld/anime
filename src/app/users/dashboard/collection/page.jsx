import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="mt-4">
      <h3 className="mb-4 text-2xl text-slate-300">My Collection</h3>
      <div className="grid gap-3 lg:grid-cols-4 sm:grid-cols-2">
        <Link href={""} className="relative border border-primary">
          <Image src={""} alt="" width={350} height={350} className="w-full"/>
          <div className="absolute bottom-0 flex items-center justify-center w-full h-16 bg-primary">
            <h5 className="text-xl text-center text-slate-200">Judul anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
