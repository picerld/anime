import Link from "next/link";
import InputSearch from "./InputSearch";
import AuthButton from "../AuthButton";
import Image from "next/image";
import MenuList from "./MenuList";
import { authUserSession } from "../../../libs/auth-libs";

const Navbar = async () => {
  const user = await authUserSession();
  const avatar = user
    ? user.image
    : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

  return (
    <header className="bg-dark">
      <div className="flex flex-col p-4 lg:flex-row navbar nav-fixed">
        <div className="flex-1 py-4 lg:py-0">
          <Link
            href="/"
            className="px-4 text-3xl font-bold hover:scale-105 hover:text-primary"
          >
            🚀AnimeList
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <label className="flex items-center gap-2 py-[23px] input input-bordered input-primary input-sm">
              <InputSearch />
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar online"
            >
              <div className="w-10 rounded-full">
                <Image
                  src={avatar}
                  width={100}
                  height={100}
                  alt=""
                  className=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {user ? (
                <>
                  <MenuList linkHref={"/users/dashboard"} linkTitle={"Dashboard"}/>
                  <MenuList linkHref={""} linkTitle={"Setting"}/>
                </>
              ) : null}
              <li>
                <AuthButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
