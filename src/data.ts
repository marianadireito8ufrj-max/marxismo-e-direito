export type Bloco = { tipo: "secao" | "subsecao" | "paragrafo"; texto: string };
export type Aula = { numero: number; titulo: string; meta: string; publicada: boolean; blocos: Bloco[] };

// A URL definitiva do caderno de Direito Ambiental no Google Docs será vinculada
// assim que a fonte compartilhada estiver acessível pela integração.
export const fonteGoogleDocs = "";

export const aulas: Aula[] = [
  {
    numero: 1,
    titulo: "Teoria Geral do Direito Ambiental — Introdução e Regulação Ambiental",
    meta: "Prof. Daniel Braga Lourenço • Data: 12 / 08 / 2026",
    publicada: true,
    blocos: [
      { tipo: "secao", texto: "Visão geral da aula" },
      { tipo: "paragrafo", texto: "A aula inaugural apresentou a organização da disciplina, seus critérios de avaliação e o recorte temático que será adotado ao longo do semestre. Em seguida, a discussão avançou para os fundamentos do Direito Ambiental, sua função regulatória e sua relevância prática e interdisciplinar." },

      { tipo: "secao", texto: "1. Organização da disciplina" },
      { tipo: "paragrafo", texto: "O professor se apresentou e contextualizou sua trajetória acadêmica e profissional, situando sua atuação na área de Direito Ambiental." },
      { tipo: "paragrafo", texto: "Foram combinadas regras de funcionamento da disciplina, como pontualidade, participação ativa, possibilidade de interrupções durante a exposição e circulação em sala sem prejuízo aos colegas." },
      { tipo: "paragrafo", texto: "O material de apoio será disponibilizado em uma pasta compartilhada no Google Drive, com conteúdos complementares organizados por aula." },
      { tipo: "paragrafo", texto: "O contato preferencial ficará concentrado no e-mail pessoal do professor, e a presença será acompanhada para fins pedagógicos." },

      { tipo: "secao", texto: "2. Estrutura do curso e avaliação" },
      { tipo: "paragrafo", texto: "O programa da disciplina é amplo demais para ser integralmente coberto em um único semestre. Por isso, o curso trabalhará com recortes temáticos e com uma abordagem próxima de uma teoria geral do Direito Ambiental." },
      { tipo: "paragrafo", texto: "Não haverá um livro obrigatório único, embora exista uma bibliografia recomendada para estudo complementar." },
      { tipo: "subsecao", texto: "2.1 Avaliação" },
      { tipo: "paragrafo", texto: "A avaliação principal será uma prova escrita ao final do período, complementada por um debate em sala com pontuação própria. A prova deverá reunir questões objetivas, discursivas e ao menos uma questão com caso prático ou tema mais abrangente." },
      { tipo: "subsecao", texto: "2.2 Bibliografia indicada" },
      { tipo: "paragrafo", texto: "Entre as referências indicadas, foram citados autores como Paulo Afonso Leme Machado, Paulo de Bessa Antunes, Ingo Sarlet e Tiago Fensterseifer, Marcelo Abelha e Fiorillo." },

      { tipo: "secao", texto: "3. Conteúdo programático e temas previstos" },
      { tipo: "paragrafo", texto: "As primeiras aulas tratarão da introdução à regulação ambiental, da evolução histórica das normas até a Constituição de 1988, de conceitos centrais, da natureza jurídica do meio ambiente e das fontes do Direito Ambiental." },
      { tipo: "paragrafo", texto: "Na sequência, o curso abordará princípios jurídico-ambientais, repartição de competências, poder de polícia, licenciamento e fiscalização." },
      { tipo: "paragrafo", texto: "Haverá um debate avaliado em sala, com base em texto disponibilizado previamente. Não será exigida entrega escrita, mas a leitura será obrigatória." },
      { tipo: "paragrafo", texto: "Na parte final, entrarão temas como responsabilidade civil, penal e administrativa, o Decreto nº 6.514/2008 e o licenciamento ambiental, incluindo a nova Lei Geral do Licenciamento e sua discussão no STF." },
      { tipo: "paragrafo", texto: "Assuntos como Código Florestal, resíduos sólidos, recursos hídricos, direito climático e mercado de carbono ficarão fora do recorte principal por limitação de tempo." },

      { tipo: "secao", texto: "4. Relevância prática do Direito Ambiental" },
      { tipo: "paragrafo", texto: "O Direito Ambiental tem presença crescente em concursos públicos e também é relevante nas provas da OAB." },
      { tipo: "paragrafo", texto: "A disciplina foi apresentada como interdisciplinar, dialogando com economia, filosofia, biologia e outras áreas do conhecimento." },
      { tipo: "paragrafo", texto: "A atuação jurídica exige uma visão ampla, já que problemas concretos costumam reunir dimensões diversas ao mesmo tempo. Compreender Direito Ambiental também ajuda a perceber repercussões ambientais em casos de outros ramos do Direito." },

      { tipo: "secao", texto: "5. Fundamentos do Direito Ambiental: regulação e bens comuns" },
      { tipo: "paragrafo", texto: "A aula iniciou com a pergunta sobre por que o Direito Ambiental existe, tomando como referência a ideia da tragédia dos comuns." },
      { tipo: "paragrafo", texto: "Bens de uso compartilhado tendem à sobreexploração porque cada indivíduo busca seu interesse imediato. Essa dinâmica leva à escassez de recursos naturais, com impactos sociais, econômicos e jurídicos." },
      { tipo: "paragrafo", texto: "Os efeitos ambientais recaem de forma mais intensa sobre grupos vulneráveis, especialmente em cenários de aquecimento global, enchentes e elevação do nível do mar." },

      { tipo: "secao", texto: "6. Papel do Estado e limites da atividade econômica" },
      { tipo: "paragrafo", texto: "Foi defendida a necessidade de intervenção estatal para conter os efeitos da exploração privada de recursos coletivos." },
      { tipo: "paragrafo", texto: "O exemplo da atividade empresarial foi usado para mostrar a lógica de privatização dos ganhos e socialização dos prejuízos ambientais: a empresa obtém lucro a partir do uso de bens ambientais comuns, enquanto os danos negativos acabam distribuídos socialmente." },
      { tipo: "paragrafo", texto: "O Direito Ambiental foi descrito como instrumento de regulação, muito próximo do Direito Administrativo e da lógica de comando e controle. A livre iniciativa e a propriedade não são absolutas, pois estão limitadas pela função socioambiental." },

      { tipo: "secao", texto: "7. Crise ambiental, tecnologia e convivência social" },
      { tipo: "paragrafo", texto: "A discussão baseada em textos de referência indicou que nem o Direito nem a tecnologia, isoladamente, resolvem a crise ecológica." },
      { tipo: "paragrafo", texto: "Os avanços técnicos aumentam a eficiência de equipamentos e processos, mas não eliminam o aumento estrutural do consumo de energia e recursos." },
      { tipo: "paragrafo", texto: "O exemplo da energia elétrica foi usado para ilustrar a dependência social de grandes infraestruturas e os efeitos de falhas sistêmicas." },
      { tipo: "paragrafo", texto: "Também se discutiu o impacto da tecnologia sobre as relações humanas, com redução da convivência presencial e crescimento do uso individualizado de dispositivos eletrônicos." },
      { tipo: "paragrafo", texto: "A conclusão apontada foi que, sem enfrentar as causas estruturais dos problemas ambientais, o Direito Ambiental tende a atuar apenas sobre os efeitos, sem resolver completamente a origem das crises." }
    ]
  },
  { numero: 2, titulo: "Teoria Geral do Direito Ambiental — Parte 2", meta: "Prof. Daniel Braga Lourenço • Data prevista: 19 / 08 / 2026", publicada: false, blocos: [] },
  { numero: 3, titulo: "Teoria Geral do Direito Ambiental — Parte 3", meta: "Prof. Daniel Braga Lourenço • Data prevista: 26 / 08 / 2026", publicada: false, blocos: [] },
  { numero: 4, titulo: "Princípios Setoriais Ambientais", meta: "Prof. Daniel Braga Lourenço • Data prevista: 02 / 09 / 2026", publicada: false, blocos: [] },
  { numero: 5, titulo: "Repartição de Competências em Matéria Ambiental", meta: "Prof. Daniel Braga Lourenço • Data prevista: 09 / 09 / 2026", publicada: false, blocos: [] },
  { numero: 6, titulo: "Debate — Elizabeth Costello", meta: "Prof. Daniel Braga Lourenço • Data prevista: 16 / 09 / 2026", publicada: false, blocos: [] },
  { numero: 7, titulo: "Direito Animal", meta: "Prof. Daniel Braga Lourenço • Data prevista: 23 / 09 / 2026", publicada: false, blocos: [] },
  { numero: 8, titulo: "Competências Ambientais e Responsabilidade Civil", meta: "Prof. Daniel Braga Lourenço • Data prevista: 30 / 09 / 2026", publicada: false, blocos: [] },
  { numero: 9, titulo: "Responsabilidade Civil e Direito Processual Ambiental", meta: "Prof. Daniel Braga Lourenço • Data prevista: 07 / 10 / 2026", publicada: false, blocos: [] },
  { numero: 10, titulo: "ECADIA — Encontro Carioca de Direito dos Animais", meta: "Data prevista: 14 / 10 / 2026", publicada: false, blocos: [] },
  { numero: 11, titulo: "Responsabilidade Penal Ambiental — Parte 1", meta: "Prof. Daniel Braga Lourenço • Data prevista: 21 / 10 / 2026", publicada: false, blocos: [] },
  { numero: 12, titulo: "Responsabilidade Penal Ambiental — Parte 2", meta: "Prof. Daniel Braga Lourenço • Data prevista: 28 / 10 / 2026", publicada: false, blocos: [] },
  { numero: 13, titulo: "Responsabilidade Administrativa e Licenciamento Ambiental", meta: "Prof. Daniel Braga Lourenço • Data prevista: 04 / 11 / 2026", publicada: false, blocos: [] },
  { numero: 14, titulo: "Prova Única", meta: "Data prevista: 11 / 11 / 2026", publicada: false, blocos: [] },
  { numero: 15, titulo: "Segunda Chamada e Vista da Prova", meta: "Data prevista: 18 / 11 / 2026", publicada: false, blocos: [] },
  { numero: 16, titulo: "Prova Final", meta: "Data prevista: 25 / 11 / 2026", publicada: false, blocos: [] }
];
