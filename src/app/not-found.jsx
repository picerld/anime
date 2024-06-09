import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-xl min-h-screen mx-auto">
      <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        🔍 NOT FOUND
      </h1>
      <div className="p-5">
        <Link
          href={"/"}
          className="transition-all btn btn-primary hover:opacity-90 hover:scale-105"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
