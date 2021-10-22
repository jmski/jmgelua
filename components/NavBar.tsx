import Link from 'next/link';

const navigation = [
  {name: "ABOUT", link: "#about"},
  {name: "PROJECTS", link: "#projects"},
  {name: "CONTACT", link: "#contact"},
]

const NavBar = () => {
  return (
    <nav className="flex justify-between h-20 z-10 sticky top-0 px-10 bg-gray-200">
      <Link href="/">
        <a className="flex items-center bg-growing-underline hover:bg-growing-underline hover:text-blue-500">
          JM GELUA
        </a>
      </Link>
      <div className="hidden md:flex gap-6 items-center">
        {navigation.map((item, index) => (
          <Link href={item.link} key={index}>
            <a target="_blank" className="transition duration-200 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-800">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavBar;