import React, { useState } from "react";
import logo from "./assets/logo.png";
import NavItems from "./components/NavItems";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
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

  // const handleClick = (activeTab) => {
  //   setActiveTab(activeTab);
  // };

  return (
    <>
      <nav className="flex items-center w-screen justify-between bg-white py-4 px-4">
        <img src={logo} />
        <div className="flex gap-x-8">
          {/* <Container>
            <NavItems menu={menu} />
          </Container> */}
          <NavItems
            menu={menu}
            activeTab={activeTab}
            handleClick={setActiveTab}
          />
        </div>
      </nav>
    </>
  );
}

export default App;
