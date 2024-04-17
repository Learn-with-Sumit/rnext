import Search from "./Search";
const Header = () => {
    return (
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Discover Events</h1>
        <Search />

      </div>
    );
  };

  export default Header;
