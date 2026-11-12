import Header from "./components/Header";
import MenuItem from "./components/MenuItem";

function App() {
  return (
    <main>
      <Header name="Kaffi Kóði" slogan="Gott kaffi og góður kóði" />

      <MenuItem name="Haframjólkurlatte" description="Espresso með haframjólk" price={740} isVegan />

      <MenuItem name="Cappuccino" description="Espresso með mjólkurfroðu" price={650} emoji="🥐" />

      <MenuItem name="Heitt súkkulaði" description="Heitt súkkulaði með rjóma" price={750} />
    </main>
  );
}

export default App;
