import type { Aula, Bloco } from "./data";

const PLACEHOLDER = /^(?:\[.*\]|Título da Aula|Título da aula|Tópico principal|Anotações da aula)$/i;
const CABECALHO_AULA = /^MARXISMO E DIREITO\s*[•·-]\s*2026\.2$/i;
const SECAO_NOMEADA = /^(Visão geral da aula|Referências|Jurisprudência|Legislação|Bibliografia|Complementações?|Notas? acadêmicas?)$/i;

function limparLinha(linha: string) {
  return linha.replace(/\u00a0/g, " ").trim();
}

function ehPlaceholder(linha: string) {
  return PLACEHOLDER.test(limparLinha(linha));
}

function classificarLinha(linha: string): Bloco {
  const texto = limparLinha(linha);

  if (SECAO_NOMEADA.test(texto)) {
    return { tipo: "secao", texto };
  }

  const numeracao = texto.match(/^(\d+(?:\.*\d+)*)\.?\s+/);
  if (numeracao) {
    const niveis = numeracao[1].split(/\.+/).filter(Boolean).length;
    return { tipo: niveis <= 1 ? "secao" : "subsecao", texto };
  }

  return { tipo: "paragrafo", texto };
}

function parsearAula(numero: number, trecho: string): Aula | null {
  const linhas = trecho
    .split(/\r?\n/)
    .map(limparLinha)
    .filter(Boolean)
    .filter((linha) => !CABECALHO_AULA.test(linha));

  if (!linhas.length) return null;

  const indiceMeta = linhas.findIndex((linha) => /^Prof\.?\s/i.test(linha) || /\bData:\s*/i.test(linha));
  const titulo = limparLinha(linhas[0] ?? "");
  const meta = indiceMeta >= 0 ? linhas[indiceMeta] : "";
  const corpo = (indiceMeta >= 0 ? linhas.slice(indiceMeta + 1) : linhas.slice(1))
    .filter((linha) => !ehPlaceholder(linha));

  const blocos = corpo.map(classificarLinha);
  const temConteudoReal = blocos.some((bloco) => bloco.tipo === "paragrafo" && bloco.texto.length > 0);
  const publicada = Boolean(titulo && !ehPlaceholder(titulo) && temConteudoReal);

  return {
    numero,
    titulo: publicada ? titulo : "Em preparação",
    meta: publicada ? meta : "",
    publicada,
    blocos: publicada ? blocos : [],
  };
}

export function extrairAulasDoGoogleDocs(texto: string, fallback: Aula[]): Aula[] {
  const regex = /(?:^|\n)\s*AULA\s+(\d{1,2})\s*(?:\r?\n|$)/gim;
  const marcadores = [...texto.matchAll(regex)];

  if (!marcadores.length) {
    throw new Error("O Google Docs não contém marcadores de aula reconhecíveis.");
  }

  const encontradas: Aula[] = [];

  marcadores.forEach((marcador, indice) => {
    const numero = Number(marcador[1]);
    const inicio = (marcador.index ?? 0) + marcador[0].length;
    const fim = indice + 1 < marcadores.length ? (marcadores[indice + 1].index ?? texto.length) : texto.length;
    const aula = parsearAula(numero, texto.slice(inicio, fim));
    if (aula) encontradas.push(aula);
  });

  const porNumero = new Map<number, Aula>(fallback.map((aula) => [aula.numero, aula]));
  encontradas.forEach((aula) => porNumero.set(aula.numero, aula));

  return [...porNumero.values()].sort((a, b) => a.numero - b.numero);
}
