import Link from "next/link";

const Header = () => {
  return (
    <header className="p-6 flex justify-around items-center">
      <h1>Car Dealer</h1>
      <nav>
        <ul className="flex space-x-4 ">
          <li>
            <Link href="/" className=" hover:text-blue-500">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
