import Socials from "./socials";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
      <h1 className="text-lg font-bold"><a href="/">RemixNode's Blog</a></h1>
      <nav className="flex space-x-6">
        <a href="/">Home</a>
        <a href="/posts">Blog</a>
        <a href="/about">About</a>
      </nav>
      <div className="flex items-center space-x-4">
        <Socials />
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-black text-white">
          Sign Up
        </button>
      </div>
    </header>
  );
}