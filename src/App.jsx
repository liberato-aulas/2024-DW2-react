import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export function App() {
  return (
    <>
      <Header />
      <Main> 
        <h3>Conteúdo</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, accusamus magni! Blanditiis ea eum, maiores dignissimos nobis voluptate facere sint nostrum magnam et doloribus ducimus eaque nihil corrupti tenetur culpa.</p>
      </Main>
      <Footer autor="Rafael" />
    </>
  );
}
