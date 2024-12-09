import logo from "./assets/logo.png";
import NavItems from "./components/NavItems";

function App() {
  const menu = [
    {
      name: "Dashboard",
      href: "#",
    },
    {
      name: "Transfer",
      href: "#",
    },
    {
      name: "Topup",
      href: "#",
    },
    {
      name: "Sign Out",
      href: "#",
    },
  ];
  return (
    <>
      <nav className="flex items-center w-screen justify-between bg-white py-4 px-4">
        <img src={logo} />
        <div className="flex gap-x-8">
          <NavItems menu={menu} />
        </div>
      </nav>
    </>
  );
}

export default App;
