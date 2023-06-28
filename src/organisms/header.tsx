import Logo from "../atoms/logo";
import PageTitle from "../atoms/page-title";
import NavItem from "../molecules/nav-item";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Gaming Platform",
    subItems: [
      {
        title: "General",
        url: "/gaming-platform/general",
      },
      {
        title: "PC",
        url: "/gaming-platform/pc",
      },
      {
        title: "XBOX",
        url: "/gaming-platform/xbox",
      },
      {
        title: "Nintendo Wii",
        url: "/gaming-platform/nintendo-wii",
      },
      {
        title: "Mobile Devices",
        url: "/gaming-platform/mobile-devices",
      },
      {
        title: "Playstation",
        url: "/gaming-platform/plastation",
      },
      {
        title: "Arcades",
        url: "/gaming-platform/arcades",
      },
    ],
  },
  {
    title: "Esports",
    subItems: [
      {
        title: "General",
        url: "/esports/general",
      },
      {
        title: "Growth of Esports",
        url: "/esports/growth-of-esports",
      },
      {
        title: "Technological Advancements",
        url: "/esports/technological-advancements",
      },
    ],
  },
  {
    title: "Game Engines",
    subItems: [
      {
        title: "General",
        url: "/game-engines/general",
      },
      {
        title: "Features",
        url: "/game-engines/features",
      },
      {
        title: "Future",
        url: "/game-engines/future",
      },
    ],
  },
  {
    title: "VR / AR Gaming",
    subItems: [
      {
        title: "General",
        url: "/vr-ar-gaming/general",
      },
      {
        title: "How does it work?",
        url: "/vr-ar-gaming/how-does-it-work",
      },
      {
        title: "Games Related to VR / AR",
        url: "/vr-ar-gaming/games-related-to-vr-ar",
      },
    ],
  },
  {
    title: "Other Pages",
    subItems: [
      {
        title: "Enhancements",
        url: "/other-pages/enhancments",
      },
      {
        title: "About",
        url: "/other-pages/about",
      },
      {
        title: "Bibliography",
        url: "/other-pages/bibliography",
      },
      {
        title: "Quiz",
        url: "/other-pages/quiz",
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
