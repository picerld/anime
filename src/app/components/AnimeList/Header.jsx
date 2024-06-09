import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-xl text-slate-100">{title}</h1>
      {linkTitle && linkHref ? (
        <Link
          href={linkHref}
          className="underline transition-all text-md lg:text-sm md:text-md text-slate-300 opacity-90 hover:opacity-100 hover:scale-105 hover:text-indigo-500"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
