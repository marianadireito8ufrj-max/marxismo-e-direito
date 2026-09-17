import { useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Eye,
  EyeOff,
  FileText,
  KeyRound,
  Mail,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { aulas, type Bloco } from "./data";

type Secao = { titulo: string; itens: Bloco[] };

function agruparSecoes(blocos: Bloco[]): Secao[] {
  const secoes: Secao[] = [];
  let atual: Secao | null = null;

  for (const bloco of blocos) {
    if (bloco.tipo === "secao") {
      atual = { titulo: bloco.texto, itens: [] };
      secoes.push(atual);
      continue;
    }

    if (!atual) {
      atual = { titulo: "Notas da aula", itens: [] };
      secoes.push(atual);
    }
    atual.itens.push(bloco);
  }

  return secoes;
}

export default function App() {
  const [aulaSelecionada, setAulaSelecionada] = useState(1);
  const [loginAberto, setLoginAberto] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(true);
  const [avisoLogin, setAvisoLogin] = useState("");

  const aula = aulas.find((item) => item.numero === aulaSelecionada && item.publicada) ?? aulas[0];
  const secoes = useMemo(() => agruparSecoes(aula.blocos), [aula]);
  const publicadas = aulas.filter((item) => item.publicada).length;

  if (loginAberto) {
    return (
      <main className="login-page">
        <section className="login-brand">
          <div className="login-brand-top">
            <strong>Faculdade Nacional de Direito</strong>
            <span>FND · UFRJ · 8º período · 2026.2</span>
          </div>

          <div className="login-brand-main">
            <p>Caderno digital · Caderno 08</p>
            <h1>Ética Profissional <span>e Estatuto da Advocacia</span></h1>
            <p className="login-brand-copy">
              Caderno digital da disciplina, organizado a partir do caderno-base de Ética Profissional e Estatuto da Advocacia.
            </p>
          </div>

          <div className="login-brand-footer">
            <span><ShieldCheck size={16} /> Ambiente acadêmico</span>
            <span>FND · UFRJ</span>
          </div>
        </section>

        <section className="login-access">
          <div className="login-geometry" aria-hidden="true" />
          <section className="login-card">
            <p className="login-eyebrow">Ética Profissional e Estatuto da Advocacia</p>
            <h2>Acesse o caderno</h2>
            <p className="login-copy">Entre com sua conta para acessar futuras funções de sincronização e edição.</p>
            <div className="login-rule" />

            <form onSubmit={(e) => { e.preventDefault(); setAvisoLogin("A autenticação ainda não está conectada nesta versão do caderno."); }}>
              <label>
                E-mail
                <div className="input-with-icon">
                  <Mail size={18} />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seuemail@ufrj.br" />
                </div>
              </label>

              <label>
                Senha
                <div className="input-with-icon password-field">
                  <KeyRound size={18} />
                  <input type={mostrarSenha ? "text" : "password"} required value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />
                  <button type="button" className="password-toggle" onClick={() => setMostrarSenha((v) => !v)} aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}>
                    {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>

              <div className="login-row">
                <label className="remember"><input type="checkbox" checked={lembrar} onChange={(e) => setLembrar(e.target.checked)} /> Continuar conectado</label>
                <button className="text-link" type="button">Esqueci minha senha</button>
              </div>

              {avisoLogin && <p className="login-note">{avisoLogin}</p>}
              <button className="login-primary" type="submit"><KeyRound size={18} /> Entrar no caderno</button>
            </form>

            <div className="login-divider"><span>ou</span></div>
            <button className="guest-button" type="button" onClick={() => { setLoginAberto(false); setAvisoLogin(""); }}><BookOpen size={18} /> Entrar sem login · somente leitura</button>
            <p className="guest-note">O conteúdo acadêmico está disponível em modo de leitura. A autenticação poderá ser conectada em uma etapa futura.</p>
          </section>
        </section>
      </main>
    );
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-top">
          <button className="account-link" onClick={() => setLoginAberto(true)}><ArrowLeft size={19} /> <span>Entrar na conta</span></button>
          <div className="institution">
            <strong>Faculdade Nacional de Direito</strong>
            <span>FND · UFRJ · 8º período · 2026.2</span>
          </div>
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow light">Caderno digital · Caderno 08</p>
            <h1>Ética Profissional <span>e Estatuto da Advocacia</span></h1>
            <p>Conteúdo organizado a partir do caderno-base da disciplina.</p>
          </div>

          <div className="hero-side">
            <div className="meta-box">
              <div><span>Professora</span><strong>Prof.ª Thaís Freire de Vasconcellos</strong></div>
              <div><span>Semestre</span><strong>2026.2</strong></div>
            </div>
          </div>
        </div>
      </header>

      <section className="source-bar">
        <div>
          <span className="badge"><FileText size={13} /> Caderno-base</span>
          <span>Conteúdo transcrito e organizado a partir do material da disciplina</span>
        </div>
        <span className="source-count"><Scale size={16} /> {publicadas} aulas publicadas</span>
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
              <p className="eyebrow">Aula {String(aula.numero).padStart(2, "0")} · Ética Profissional e Estatuto da Advocacia</p>
              <h2>{aula.titulo}</h2>
              <p>{aula.meta}</p>
            </div>
            <Scale size={44} />
          </div>

          <div className="sections">
            {secoes.map((secao, indice) => (
              <article key={`${aula.numero}-${secao.titulo}`}>
                <span className="number">{String(indice + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{secao.titulo}</h3>
                  <div className="section-body">
                    {secao.itens.map((item, i) => {
                      if (item.tipo === "subsecao") return <h4 key={i}>{item.texto}</h4>;
                      if (item.tipo === "lista") {
                        return (
                          <ul key={i}>
                            {item.itens.map((texto, j) => <li key={j}>{texto}</li>)}
                          </ul>
                        );
                      }
                      return <p key={i}>{item.texto}</p>;
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <footer>
            <span>Ética Profissional e Estatuto da Advocacia · Caderno 08</span>
            <span>Transcrito, organizado e diagramado por Mariana Monteiro</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
