import Logo from "./Logo";
import NavMenu from "./navbar/NavMenu";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full max-w-[1500px] mx-auto h-[15vh] bg-purple-800/80">
      <div className="w-[95%] h-full mx-auto px-3 py-4 flex flex-row justify-between items-center">
          <Logo />
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
