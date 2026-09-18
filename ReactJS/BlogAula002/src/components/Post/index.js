import "./style.css";

function Post(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.children} {/*PEGA TODO CONTEÚDO COLOCADO DENTRO DO POST*/}
      <small>
        Leia em {props.time}{" "}
        {/*USADO PARA DAR ESPAÇO NO TEXTO (MINUTO E MINUTOS)*/}
        {props.time === 1 ? "Minuto" : "Minutos"}
        {/*
        Ele é chamado de "ternário" justamente porque exige três elementos:
        1. A condição antes do ? 
        2. O resultado verdadeiro entre o ? e o :
        3. O resultado falso depois do :
        */}
      </small>
    </article>
  );
}

export default Post;
