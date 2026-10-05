import "./style.css";
import mainImage from "./imgs/1.jpg";

function Header() {
  return (
    <header>
      <h1>Meu Blog!</h1>
      <img src={mainImage} alt="imagem de folhas"></img>
    </header>
  );
}
export default Header;
