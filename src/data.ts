export type Bloco = { tipo: "secao" | "subsecao" | "paragrafo"; texto: string };
export type Aula = { numero: number; titulo: string; meta: string; publicada: boolean; blocos: Bloco[] };

export const fonteGoogleDocs = "https://docs.google.com/document/d/1sLIdEpipDngoW0F_sNyjNZywLO4MqbrXUQSAw5m1FDI/edit";

export const aulas: Aula[] = [
  {
    numero: 1,
    titulo: "Método de Marx: Materialismo Histórico e Dialética",
    meta: "Prof. Ivan Simões • Data: 18 / 08 / 2026",
    publicada: true,
    blocos: [
      { tipo: "secao", texto: "Visão geral da aula" },
      { tipo: "paragrafo", texto: "A aula foi organizada em dois blocos: primeiro, as orientações sobre avaliação, organização do curso e horário; depois, a introdução ao método de Marx, com a retomada de antecedentes filosóficos em Aristóteles, Kant e Hegel. O fio condutor da parte teórica foi compreender o movimento da realidade e a formação do materialismo histórico, posteriormente qualificado pelos marxistas como dialético." },
      { tipo: "secao", texto: "1. Organização do curso" },
      { tipo: "subsecao", texto: "1.1 Avaliação" },
      { tipo: "paragrafo", texto: "A avaliação será realizada por meio de um trabalho ao final do curso, geralmente na última semana destinada ao lançamento das notas no sistema. O trabalho deverá utilizar necessariamente pelo menos dois textos estudados ao longo do semestre e não possui outros requisitos formais além da honestidade acadêmica, o que inclui a indicação e a citação das fontes utilizadas, inclusive de ferramentas de inteligência artificial." },
      { tipo: "paragrafo", texto: "O trabalho poderá assumir a forma de uma resenha de cada um dos dois textos escolhidos ou estabelecer uma correlação entre eles. Não há exigência de tamanho mínimo ou máximo." },
      { tipo: "paragrafo", texto: "Ao final do curso, haverá a leitura de um único autor, Evgeni Pachukanis." },
      { tipo: "subsecao", texto: "1.2 Horário" },
      { tipo: "paragrafo", texto: "As aulas devem começar por volta de 17h10 ou 17h15." },
      { tipo: "secao", texto: "2. Método de Marx — Materialismo Histórico (dialético)" },
      { tipo: "paragrafo", texto: "Os marxistas acrescentaram ao nome do método a qualificação “dialético”. Para compreender esse ponto, a aula retomou alguns antecedentes filosóficos relativos ao modo de conhecer a realidade." },
      { tipo: "subsecao", texto: "2.1 Aristóteles e a centralidade do objeto" },
      { tipo: "paragrafo", texto: "A partir do pensamento aristotélico, a análise da realidade já apresentava uma conjugação entre uma dimensão empirista e uma dimensão racional. A tônica do conhecimento está no objeto. Esse objeto possui uma dimensão sensível, sensorial ou empírica, apreensível pelos sentidos, e uma dimensão racional, associada ao logos, que permite conceber a essência dos objetos." },
      { tipo: "paragrafo", texto: "Na aparência, os objetos apresentam movimento. A ideia de um objeto vem antes, e os filósofos procuram compreender essa dimensão em um ramo denominado metafísica, que acompanha a história da humanidade até hoje." },
      { tipo: "subsecao", texto: "2.2 Kant e a centralidade do sujeito" },
      { tipo: "paragrafo", texto: "Immanuel Kant, cuja filosofia está presente em diversas áreas do curso de Direito, é importante para compreender o método de apreensão da realidade porque promove uma mudança de perspectiva: a tônica do processo passa a estar no sujeito." },
      { tipo: "paragrafo", texto: "Na Crítica da Razão Pura, o homem conhece as coisas porque é dotado, de maneira inata, de uma estrutura racional que se abre ou se conecta aos sentidos. Para conhecer o mundo externo, os sentidos funcionam como grandes “periféricos”, absorvendo os dados da realidade, que são articulados pelas estruturas racionais." },
      { tipo: "paragrafo", texto: "Kant também foi lembrado por sua trajetória intelectual: tornou-se amplamente conhecido após começar a publicar por volta dos 50 anos e tinha uma vida bastante sistemática. Sua influência no Direito decorre, entre outros aspectos, do modo como, a partir dessa estrutura racional, desenvolve uma filosofia acerca de como os homens se relacionam ou devem se relacionar." },
      { tipo: "subsecao", texto: "2.2.1 Imperativo categórico e lei moral" },
      { tipo: "paragrafo", texto: "Kant chega ao imperativo categórico e o distingue do imperativo hipotético, ligado à hipótese e à realização de determinado fim. A razão fornece uma estrutura formal da moral, justamente porque essa estrutura decorre da própria razão." },
      { tipo: "paragrafo", texto: "Para Kant, há uma lei moral dentro de nós. A questão seria reconhecer essa lei moral e a razão, a partir das quais poderiam ser enfrentados inclusive os problemas existentes nas relações humanas. É nesse contexto que formula suas máximas, expressas pelos imperativos categóricos." },
      { tipo: "subsecao", texto: "2.2.2 Rumo à Paz Perpétua e o Direito Internacional" },
      { tipo: "paragrafo", texto: "Em Rumo à Paz Perpétua, Kant trabalha com a ideia de um direito que tende a tornar-se progressivamente mais homogêneo no âmbito internacional. A aula relacionou essa construção ao Direito Internacional e à formação da concepção moderna dos direitos humanos, entendidos, nesse percurso, como desdobramentos das leis morais." },
      { tipo: "subsecao", texto: "2.3 Hegel, a dialética e o movimento" },
      { tipo: "paragrafo", texto: "Hegel se contrapõe a Kant e reverencia a tradição filosófica grega, especialmente a tradição socrática, platônica e aristotélica. Retoma de Parmênides a noção do absoluto, ao mesmo tempo em que desenvolve a possibilidade de conhecer a realidade por meio da dialética." },
      { tipo: "paragrafo", texto: "A chave explicativa passa a ser o movimento: entender a realidade significa entender o movimento da própria realidade. Em Hegel, porém, essa concepção permanece idealista, pois o movimento fundamental é o movimento da razão humana, denominado espírito." },
      { tipo: "subsecao", texto: "2.3.1 Fenomenologia do Espírito" },
      { tipo: "paragrafo", texto: "A Fenomenologia do Espírito foi mencionada como uma obra particularmente difícil. A orientação dada em aula foi simples: na primeira leitura, provavelmente não será possível compreender tudo; por isso, é necessário reler." },
      { tipo: "subsecao", texto: "2.4 Marx e a realidade como processo" },
      { tipo: "paragrafo", texto: "“Tudo é processo em movimento” é a frase-chave indicada em aula para compreender Marx. Essa formulação sintetiza a importância do movimento e do processo para a compreensão da realidade no método marxiano." },
      { tipo: "subsecao", texto: "2.4.1 Leitura mencionada" },
      { tipo: "paragrafo", texto: "Manuscritos Econômico-Filosóficos — capítulo sobre trabalho estranhado e propriedade privada." }
    ]
  },
  {
    numero: 2,
    titulo: "Método: Materialismo e Dialética",
    meta: "Prof. Ivan Simões • Data: 08 / 09 / 2026",
    publicada: true,
    blocos: [
      { tipo: "secao", texto: "Visão geral da aula" },
      { tipo: "paragrafo", texto: "A aula retomou o método a partir de dois elementos centrais: materialismo e dialética. Na dialética, tudo é processo; a realidade social é compreendida a partir de elementos em relação e da contradição." },
      { tipo: "secao", texto: "1. Método" },
      { tipo: "subsecao", texto: "1.1 Materialismo" },
      { tipo: "paragrafo", texto: "O materialismo foi indicado como um dos elementos centrais do método." },
      { tipo: "subsecao", texto: "1.2 Dialética" },
      { tipo: "paragrafo", texto: "Para Marx, tudo é um processo. A realidade social é compreendida a partir de elementos em relação e da contradição - “Aufhebung”" }
    ]
  },
  ...Array.from({ length: 14 }, (_, index) => ({
    numero: index + 3,
    titulo: "Em preparação",
    meta: "",
    publicada: false,
    blocos: [] as Bloco[]
  }))
];
