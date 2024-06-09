import { authUserSession } from "../../../libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h3 className="text-2xl font-semibold">
        <span className="font-bold text-primary">Welcome</span>, {user.name}
      </h3>
      <h3>Email {user.email}</h3>
      <div className="w-fit">
        <Image src={user.image} alt="" width={250} height={300} />
      </div>
      <div className="flex flex-wrap gap-4 py-8">
        <Link className="btn btn-primary" href={"/users/dashboard/collection"}>
          My Collection
        </Link>
        <Link className="btn btn-primary" href={"/users/dashboard/comment"}>
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;