import LinkButton from "./atoms/link-button";
import PageTitle from "./atoms/page-title";
import Header from "./organisms/header";

function App() {
  return (
    <div>
      <Header />
      <PageTitle title="Homepage of Video Games and Esports" />
      <LinkButton href="/about" label="Meet the Team" />
      <LinkButton href="/help" label="The Link to the Video" />
    </div>
  );
}

export default App;
