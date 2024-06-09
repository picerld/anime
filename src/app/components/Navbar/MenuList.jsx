import Link from "next/link";

const MenuList = ({linkHref, linkTitle}) => {
  return (
    <li>
      <Link href={linkHref}>{linkTitle}</Link>
    </li>
  );
};

export default MenuList;
