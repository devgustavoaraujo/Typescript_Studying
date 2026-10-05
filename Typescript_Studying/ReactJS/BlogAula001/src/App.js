import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Post from "./components/Post";
function App() {
  return (
    <>
      <Header />
      <main>
        <Post title="Meu Primeiro Post" time={1}>
          <p>Introdução...</p>
          <p>Desenvolvimento da Ideia...</p>
          <p>Conclusão...</p>
        </Post>
        <Post title="Meu Segundo Post" time={2}>
          <p>
            <em>Meu Segundo Post em Italico</em>
          </p>
        </Post>
      </main>
      <Footer />
    </>
  );
}

export default App;
