function NavItems({ menu, activeTab, handleClick }) {
  return (
    <div className="flex gap-x-8">
      {menu.map((item, index) => (
        <a
          onClick={() => handleClick(item.name)}
          className={
            activeTab === item.name ? "text[#19918F] fontBold" : "text-black"
          }
          key={index}
          href={item.link}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default NavItems;
