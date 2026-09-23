// ============================================================================
// GUIA DEFINITIVO: FUNÇÕES E PARÂMETROS NO TYPESCRIPT
// ============================================================================

// ----------------------------------------------------------------------------
// 1. MODELO SIMPLES: Parâmetros Primitivos e Retorno Explícito
// ----------------------------------------------------------------------------

/**
 * Esta função recebe dois números simples e devolve um número.
 * (distancia: number, tempo: number): number
 *   │                 │               │
 *   │                 │               └─► O que a função DEVOLVE (return)
 *   └─────────────────┴─────────────────► O que a função PRECISA RECEBER
 */
function calcularVelocidadeSimples(distancia: number, tempo: number): number {
  // Lógica de cálculo
  const velocidade = distancia / tempo;

  // Como declaramos ': number' acima, o TypeScript exige um return de número!
  return velocidade;
}

// Como chamamos:
const vel1 = calcularVelocidadeSimples(200, 2); // Retorna 100

// ----------------------------------------------------------------------------
// 2. MODELO INTERMEDIÁRIO: Recebendo Tuplas / Tipos Customizados
// ----------------------------------------------------------------------------

// Passo A: Sempre que um tipo for grande, criamos um 'type' separado para organizar!
type DadosViagem = [motorista: string, distancia: number, tempo: number];

/**
 * Aqui não poluímos os parênteses da função.
 * Dizemos apenas que 'viagem' precisa seguir o molde de 'DadosViagem'.
 */
function processarViagem(viagem: DadosViagem): string {
  const [nome, dist, horas] = viagem; // Dica Pro: Desestruturação (pega os itens por ordem)
  const velocidade = dist / horas;

  // Devolve uma string formatada
  return `O motorista ${nome} viajou a ${velocidade.toFixed(1)} km/h.`;
}

const viagemSP: DadosViagem = ["Mauro", 500, 5];
const resumoTexto = processarViagem(viagemSP);

// ----------------------------------------------------------------------------
// 3. MODELO REAL / COMPLEXO: Objetos, Banco de Dados e React/Node
// ----------------------------------------------------------------------------

// No mundo real (Node, React e Bancos), raramente usamos tuplas para cadastros.
// Usamos INTERFACES com objetos, pois os campos têm nomes em vez de índices numéricos (0, 1, 2).

// O "Contrato" de um Usuário no sistema:
interface UsuarioViagem {
  id: number;
  nome: string;
  distanciaKm: number;
  tempoHoras: number;
  ativo?: boolean; // O '?' indica que este campo é opcional!
}

// O "Contrato" do Resultado que a função entrega:
interface RelatorioViagem {
  idUsuario: number;
  velocidadeMedia: number;
  mensagemStatus: "Lento" | "Normal" | "Rápido"; // Union Type: só aceita esses 3 valores exatos
}

/**
 * Função Completa com Validação e Tipagem Rigorosa:
 * - Entrada: 'dados' do tipo UsuarioViagem
 * - Saída: objeto no formato RelatorioViagem
 */
function gerarRelatorioCompleto(dados: UsuarioViagem): RelatorioViagem {
  // Validação de segurança (evitar divisão por zero)
  if (dados.tempoHoras <= 0) {
    throw new Error("O tempo da viagem não pode ser zero ou negativo!");
  }

  const velocidade = dados.distanciaKm / dados.tempoHoras;

  // Definindo a categoria com base no cálculo
  let status: "Lento" | "Normal" | "Rápido" = "Normal";
  if (velocidade < 60) {
    status = "Lento";
  } else if (velocidade > 100) {
    status = "Rápido";
  }

  // Devolvendo exatamente a estrutura combinada na interface 'RelatorioViagem'
  return {
    idUsuario: dados.id,
    velocidadeMedia: velocidade,
    mensagemStatus: status,
  };
}

// Como utilizamos na prática (como se viesse do banco ou do formulário React):
const novoMotorista: UsuarioViagem = {
  id: 101,
  nome: "Gustavo",
  distanciaKm: 420,
  tempoHoras: 3.5,
};

const relatorioFinal = gerarRelatorioCompleto(novoMotorista);
// console.log(relatorioFinal.velocidadeMedia); // TypeScript já sabe que esse campo existe!
