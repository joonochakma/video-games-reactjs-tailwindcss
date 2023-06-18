import Logo from "./logo";
import NavItem from "./nav-item";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Game Engines",
    subItems: [
      {
        title: "General",
        url: "/gameEngines/general",
      },
      {
        title: "Features",
        url: "/gameEngines/features",
      },
      {
        title: "Future",
        url: "/gameEngines/future",
      },
    ],
  },
];

function Header() {
    return (
      <header
        className="text-white-100 "
        style={{ backgroundImage: "url('/images/background.jpeg')" }}
      >
        <nav className="text-right p-[15px] flex flex-row">
          <Logo />
          <div className="flex-1"></div>
          {navItems.map((item) => (
            <NavItem key={item.title} data={item} />
          ))}
        </nav>
      </header>
    );
}

export default Header;