import { useMemo, useState } from "react";
import { BookOpen, ExternalLink, Leaf } from "lucide-react";
import { aulas, fonteGoogleDocs, type Bloco } from "./data";

type Secao = { titulo: string; itens: Bloco[] };

function agruparSecoes(blocos: Bloco[]): Secao[] {
  const secoes: Secao[] = [];
  let atual: Secao | null = null;
  for (const bloco of blocos) {
    if (bloco.tipo === "secao") {
      atual = { titulo: bloco.texto, itens: [] };
      secoes.push(atual);
    } else {
      if (!atual) {
        atual = { titulo: "Notas da aula", itens: [] };
        secoes.push(atual);
      }
      atual.itens.push(bloco);
    }
  }
  return secoes;
}

export default function App() {
  const [aulaSelecionada, setAulaSelecionada] = useState(1);
  const aula = aulas.find((item) => item.numero === aulaSelecionada && item.publicada) ?? aulas[0];
  const secoes = useMemo(() => agruparSecoes(aula.blocos), [aula]);

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-top">
          <div>
            <strong>Faculdade Nacional de Direito</strong>
            <span>FND · UFRJ · 8º período · 2026.2</span>
          </div>
          <span className="edition">1ª edição</span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow light">Caderno digital · Caderno 08</p>
            <h1>Marxismo e <span>Direito</span></h1>
            <p>Conteúdo organizado a partir do caderno-base da disciplina.</p>
          </div>
          <div className="meta-box">
            <div><span>Professor</span><strong>Prof. Ivan Simões</strong></div>
            <div><span>Semestre</span><strong>2026.2</strong></div>
          </div>
        </div>
      </header>

      <section className="source-bar">
        <div>
          <span className="badge"><Leaf size={13}/> Caderno-base</span>
          <span>Conteúdo conferido no Google Docs</span>
        </div>
        <a className="secondary" href={fonteGoogleDocs} target="_blank" rel="noreferrer">
          <ExternalLink size={16}/> Abrir fonte
        </a>
      </section>

      <main className="content-grid">
        <aside>
          <div className="toc">
            <div className="toc-title"><span>Sumário</span><strong>Aulas</strong></div>
            <nav>
              {aulas.map((item) => (
                <button
                  key={item.numero}
                  disabled={!item.publicada}
                  className={aula.numero === item.numero ? "active" : ""}
                  onClick={() => setAulaSelecionada(item.numero)}
                >
                  <small>Aula {String(item.numero).padStart(2, "0")}</small>
                  <span>{item.publicada ? item.titulo : "Em preparação"}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <section className="lesson-column">
          <div className="lesson-head">
            <div>
              <p className="eyebrow">Aula {String(aula.numero).padStart(2, "0")} · Marxismo e Direito</p>
              <h2>{aula.titulo}</h2>
              <p>{aula.meta}</p>
            </div>
            <BookOpen size={42}/>
          </div>

          <div className="sections">
            {secoes.map((secao, indice) => (
              <article key={`${aula.numero}-${secao.titulo}`}>
                <span className="number">{String(indice + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{secao.titulo}</h3>
                  <div className="section-body">
                    {secao.itens.map((item, i) =>
                      item.tipo === "subsecao"
                        ? <h4 key={i}>{item.texto}</h4>
                        : <p key={i}>{item.texto}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <footer>
            <span>Marxismo e Direito · Caderno 08</span>
            <span>Transcrito, organizado e diagramado por Mariana Monteiro</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
