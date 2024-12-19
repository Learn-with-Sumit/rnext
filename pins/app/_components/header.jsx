import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white p-2 flex justify-between">
      <h1 className="text-3xl">Pins</h1>
      <nav className="my-1 mx-1">
        <Link className="underline" href="https://github.com/Learn-with-Sumit">GitHub</Link>
      </nav>
    </header>
  )
}

export default Header