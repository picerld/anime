import Link from "next/link";
import { authUserSession } from "../../../libs/auth-libs";

const SigninBtn = async() => {
  const user = await authUserSession()
  
  const userLabel = user ? 'Sign Out' : 'Sign In'
  const userAction = user ? '/api/auth/signout' : '/api/auth/signin'

  return (
    <Link href={userAction} className="">
      {userLabel}
    </Link>
  );
};

export default SigninBtn;
