function NavItems({ menu }) {
  return (
    <div className="flex gap-x-8">
      {menu.map((item, index) => (
        <a key={index} href={item.link}>
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default NavItems;
