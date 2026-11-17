/* Curso de Milhas na Alemanha: módulos 0 a 4 */
window.CURSO = window.CURSO || { modules: [] };

window.CURSO.modules.push(
{
  id: 0, code: "M00", gate: "A1",
  title: "Ponto de partida",
  tagline: "Quanto você gasta em euro e pra onde quer ir",
  lessons: [
    { id: "0.1", title: "O que milhas são (e o que não são)", min: 10, html: `
      <p class="lead">Milhas são, na prática, um <strong>desconto em viagem</strong> que você ganha por gastar de um jeito específico. Não são dinheiro grátis e não são investimento.</p>
      <h3>As três regras do curso</h3>
      <ol>
        <li><strong>Nunca gaste mais pra ganhar milhas.</strong> Milha só compensa em cima de um gasto que você já faria.</li>
        <li><strong>Pague sempre a fatura inteira.</strong> Na Alemanha, muitos cartões de crédito oferecem pagar em parcelas (Teilzahlung), com juros altos. Os juros anulam qualquer ganho com milhas.</li>
        <li><strong>Milha parada perde valor.</strong> Programas mudam regras e milhas vencem. Acumule com objetivo e use.</li>
      </ol>
      <h3>O piso de 1 centavo</h3>
      <p>Na Alemanha existe uma referência muito útil: no Payback, o maior programa de pontos do dia a dia, 1 ponto pode ser resgatado como 1 centavo de euro direto na conta bancária (<a href="https://reisetopia.de/?p=747795" target="_blank" rel="noopener">fonte</a>).</p>
      <div class="callout">Por isso, a pergunta do curso inteiro é: <strong>esse resgate em milhas vale mais que 1 centavo por ponto?</strong> Se não valer, é melhor pegar o dinheiro.</div>
    `},
    { id: "0.2", title: "Diagnóstico de gastos", min: 20, html: `
      <p class="lead">Seu volume de gastos define a estratégia. Quem gasta pouco ganha mais com cupons e parceiros. Quem gasta muito ganha mais escolhendo bem o cartão.</p>
      <p>Faça a média dos últimos 3 meses usando o extrato do banco (Kontoauszug). Separe o que é supermercado e drogaria, porque nesses lugares o Payback rende mais.</p>
      <div class="widget" data-widget="diagnostico"></div>
      <div class="example">
        <div class="example-label">Exemplo</div>
        <p>Gasto de € 1.500 por mês, todo no cartão Payback American Express (gratuito, 1 ponto a cada € 3):</p>
        <ul>
          <li>No cartão: 1.500 ÷ 3 = 500 pontos por mês</li>
          <li>Mostrando o cartão Payback no supermercado e na drogaria (€ 500 por mês, 1 ponto a cada € 2): mais 250 pontos</li>
          <li>Total: 750 pontos por mês, cerca de <strong>9.000 por ano</strong>, que viram 9.000 milhas Miles & More</li>
        </ul>
      </div>
      <div class="callout">O cartão sozinho rende pouco. O que multiplica são os cupons do Payback, as compras online pelos portais e as promoções de transferência (Módulos 3 e 4).</div>
    `},
    { id: "0.3", title: "Sua meta de viagem", min: 10, html: `
      <p class="lead">Milhas sem destino viram saldo esquecido. A meta decide em qual programa concentrar.</p>
      <p>Pra quem mora na Alemanha e tem família no Brasil, a meta mais comum é a viagem Alemanha–Brasil. Mas também valem viagens curtas pela Europa, que custam bem menos milhas.</p>
      <div class="widget" data-widget="meta"></div>
      <p>Não precisa saber ainda quantas milhas custa. No Módulo 5 você pesquisa o preço real da sua meta.</p>
    `}
  ],
  tasks: [
    "Preencher o diagnóstico com a média dos últimos 3 meses",
    "Ver se você já tem cartão Payback (ou baixar o app Payback)",
    "Escrever sua meta de viagem principal",
    "Anotar quais cartões você usa hoje e se algum junta pontos"
  ],
  quiz: [
    { q: "Quanto vale 1 ponto Payback se você resgatar em dinheiro?", o: ["1 centavo de euro", "10 centavos de euro", "Nada, só vale em milhas"], a: 0, e: "Esse é o piso: um resgate em milhas só compensa se render mais que 1 centavo por ponto." },
    { q: "Qual destas é uma regra de ouro do curso?", o: ["Pagar a fatura em parcelas (Teilzahlung) pra sobrar dinheiro", "Pagar sempre a fatura inteira", "Juntar milhas sem destino definido"], a: 1, e: "Os juros do parcelamento anulam qualquer ganho com milhas." },
    { q: "Com € 1.500/mês no Payback Amex (1 ponto a cada € 3), quantos pontos você faz por mês só com o cartão?", o: ["300", "500", "1.500"], a: 1, e: "1.500 ÷ 3 = 500 pontos." }
  ],
  sources: [
    { t: "Amex Punkte zu Miles & More über Payback (reisetopia)", u: "https://reisetopia.de/?p=747795" }
  ]
},
{
  id: 1, code: "M01", gate: "A2",
  title: "Fundamentos",
  tagline: "Miles & More, Payback, Amex e quanto vale cada milha",
  lessons: [
    { id: "1.1", title: "As duas camadas na Alemanha", min: 15, html: `
      <p class="lead">Como no Brasil, o sistema tem duas camadas: <strong>programas de pontos</strong>, onde você acumula no dia a dia, e <strong>programas de companhias aéreas</strong>, onde você emite passagens.</p>
      <h3>Programas de pontos</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Como junta</th><th>Pra onde vai</th></tr></thead>
        <tbody>
          <tr><td><strong>Payback</strong></td><td>Cerca de 700 parceiros, como EDEKA, dm, Aral e Amazon. Em geral 1 ponto a cada € 2 (<a href="https://reisetopia.de/?p=747795" target="_blank" rel="noopener">fonte</a>)</td><td>Miles & More na proporção 1:1, a partir de 200 pontos</td></tr>
          <tr><td><strong>American Express Membership Rewards</strong></td><td>Cartões Amex Gold e Platinum: 1 ponto por euro</td><td>Flying Blue, Iberia, British Airways e outros. Miles & More só indiretamente, via Payback (<a href="https://meilenoptimieren.com/membership-rewards-punkte-in-meilen-umwandeln/" target="_blank" rel="noopener">fonte</a>)</td></tr>
        </tbody>
      </table></div>
      <p>Atenção: REWE e Penny não são mais parceiros do Payback. A EDEKA entrou no lugar (<a href="https://reisetopia.de/payback/" target="_blank" rel="noopener">fonte</a>).</p>
      <h3>Programas de companhias aéreas</h3>
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Companhias</th><th>Pro Brasil</th></tr></thead>
        <tbody>
          <tr><td><strong>Miles & More</strong></td><td>Lufthansa, Swiss, Austrian, Brussels e parceiras da Star Alliance (TAP, Turkish, United...)</td><td>Lufthansa direto de Frankfurt e Munique; TAP via Lisboa</td></tr>
          <tr><td><strong>Flying Blue</strong></td><td>Air France, KLM e parceiras da SkyTeam</td><td>Via Paris ou Amsterdã</td></tr>
          <tr><td><strong>Avios</strong> (Iberia Club e British Airways Club)</td><td>Iberia, British Airways, Qatar e parceiras da oneworld</td><td>Iberia via Madri</td></tr>
        </tbody>
      </table></div>
      <h3>O caminho típico</h3>
      <div class="flow">
        <div class="flow-step"><span>1</span>Compra com cartão e Payback</div>
        <div class="flow-step"><span>2</span>Pontos acumulam no Payback ou na Amex</div>
        <div class="flow-step"><span>3</span>Transfere pro programa aéreo</div>
        <div class="flow-step"><span>4</span>Emite a passagem</div>
      </div>
      <div class="callout"><strong>Transferência é de mão única.</strong> Depois que o ponto Payback vira milha Miles & More, não dá pra voltar (<a href="https://www.wandernundmehr.at/faq/wann-verfallt-miles-and-more" target="_blank" rel="noopener">fonte</a>). Transfira só quando tiver uma emissão em vista.</div>
    `},
    { id: "1.2", title: "Alianças e rotas pro Brasil", min: 10, html: `
      <p class="lead">As companhias se agrupam em três alianças. Milhas de um programa podem emitir voos das outras companhias do mesmo grupo.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Aliança</th><th>Programa que você usa da Alemanha</th><th>Exemplos de voo pro Brasil</th></tr></thead>
        <tbody>
          <tr><td>Star Alliance</td><td>Miles & More</td><td>Lufthansa FRA/MUC–São Paulo; TAP via Lisboa; Swiss via Zurique; Turkish via Istambul</td></tr>
          <tr><td>SkyTeam</td><td>Flying Blue</td><td>Air France via Paris; KLM via Amsterdã</td></tr>
          <tr><td>oneworld</td><td>Iberia Club ou British Airways Club</td><td>Iberia via Madri; British Airways via Londres</td></tr>
        </tbody>
      </table></div>
      <p>Saindo da Alemanha, quase todas as rotas pro Brasil passam por um desses programas. Por isso o curso foca nos três: Miles & More, Flying Blue e Avios.</p>
    `},
    { id: "1.3", title: "Validade dos pontos e milhas", min: 10, html: `
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Quando vence</th><th>Como proteger</th></tr></thead>
        <tbody>
          <tr><td>Miles & More</td><td>36 meses depois de ganhar, no fim do trimestre (<a href="https://reisetopia.de/guides/miles-and-more-meilen-verfall/" target="_blank" rel="noopener">fonte</a>)</td><td>Ter status ou o cartão Miles & More Blue ou Gold, que protegem as milhas enquanto você tiver o cartão (<a href="https://reisetopia.de/kreditkarten/miles-and-more-kreditkarte/" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>Payback</td><td>Pelo menos 36 meses; vencem sempre em 30 de setembro (<a href="https://meilenoptimieren.com/?p=31743" target="_blank" rel="noopener">fonte</a>)</td><td>Resgatar, transferir ou ter um cartão Payback</td></tr>
          <tr><td>Flying Blue</td><td>Pra contas da Alemanha, o saldo vale por mais de 3 anos a partir da última atividade que conta: uma atividade em junho de 2026 mantém tudo até dezembro de 2029 (<a href="https://skystatus.pro/guide/md/de/flying-blue-meilen-verfall.md" target="_blank" rel="noopener">fonte</a>)</td><td>Ter alguma atividade qualificada no período</td></tr>
          <tr><td>Avios (Iberia)</td><td>36 meses sem atividade (<a href="https://www.theflightclub.it/de/?p=29869" target="_blank" rel="noopener">fonte</a>)</td><td>Qualquer movimento na conta</td></tr>
        </tbody>
      </table></div>
      <div class="callout">Regra prática: o Miles & More avisa no extrato, pelo menos um trimestre antes, quais milhas vão vencer (<a href="https://meilenoptimieren.com/?p=2346" target="_blank" rel="noopener">fonte</a>). Olhe o extrato a cada 3 meses.</div>
    `},
    { id: "1.4", title: "Quanto vale uma milha", min: 20, html: `
      <p class="lead">Na Alemanha se fala em <strong>centavos por milha</strong> (Cent pro Meile). A conta é a mesma do Brasil, só que em euro.</p>
      <div class="formula">valor da milha (centavos) = (preço em dinheiro − taxas) ÷ milhas × 100</div>
      <p>O piso é 1 centavo, porque é quanto 1 ponto Payback vale em dinheiro. Como os pontos Payback viram milhas Miles & More 1:1, <strong>um resgate no Miles & More só compensa acima de 1 centavo por milha.</strong></p>
      <h3>O detalhe das taxas</h3>
      <p>A Lufthansa cobra sobretaxas altas (Zuschläge) nas passagens com milhas, e elas não podem mais ser pagas com milhas: só em dinheiro (<a href="https://www.businesstraveller.com/mobil/fliegen/alles-neu-bei-miles-more-so-lohnt-sich-meilensammeln-trotzdem-noch/" target="_blank" rel="noopener">fonte</a>). Isso derruba o valor da milha em voos baratos.</p>
      <div class="example">
        <div class="example-label">Exemplo com números reais</div>
        <p>Um voo da Lufthansa em executiva de Munique a São Paulo, só ida, custou 71.000 milhas + € 394 de taxas (<a href="https://meilenoptimieren.com/mit-meilen-nach-brasilien/" target="_blank" rel="noopener">fonte</a>). Supondo que a mesma passagem em dinheiro custe € 3.500:</p>
        <p>(3.500 − 394) ÷ 71.000 × 100 = <strong>4,4 centavos por milha</strong>. Mais de 4 vezes o piso: ótimo resgate.</p>
        <p>Já uma econômica de € 900 que custasse 40.000 milhas + € 400 de taxas daria só (900 − 400) ÷ 40.000 × 100 = 1,25 centavo. Quase nada acima do piso.</p>
      </div>
      <div class="callout"><strong>Lição:</strong> com milhas Miles & More, a executiva costuma render muito mais que a econômica. E voos <em>saindo do Brasil</em> têm taxas bem menores, porque o Brasil restringe essas sobretaxas de combustível (<a href="https://meilenoptimieren.com/mit-meilen-nach-brasilien/" target="_blank" rel="noopener">fonte</a>).</div>
      <div class="widget" data-widget="milheiro"></div>
    `}
  ],
  tasks: [
    "Criar conta gratuita no Miles & More e no Flying Blue",
    "Ligar sua conta Payback ao Miles & More (no site do Payback, em Miles & More)",
    "Pesquisar um voo Alemanha–Brasil em dinheiro e em milhas no Miles & More, na mesma data",
    "Calcular o valor da milha em centavos e comparar com o piso de 1 centavo"
  ],
  quiz: [
    { q: "Por que um resgate no Miles & More precisa render mais de 1 centavo por milha?", o: ["Porque é o preço de comprar milhas", "Porque o ponto Payback que virou essa milha valeria 1 centavo em dinheiro", "Porque a Lufthansa exige"], a: 1, e: "Se o resgate render menos, era melhor ter pegado o dinheiro no Payback." },
    { q: "Qual programa você usa pra voar Air France ou KLM?", o: ["Miles & More", "Flying Blue", "Payback"], a: 1, e: "Flying Blue é o programa da Air France-KLM, da aliança SkyTeam." },
    { q: "Executiva de € 3.500, ou 71.000 milhas + € 394. Quanto vale cada milha?", o: ["Cerca de 1 centavo", "Cerca de 4,4 centavos", "Cerca de 10 centavos"], a: 1, e: "(3.500 − 394) ÷ 71.000 × 100 ≈ 4,4 centavos." }
  ],
  sources: [
    { t: "Amex Punkte zu Miles & More (reisetopia)", u: "https://reisetopia.de/?p=747795" },
    { t: "Payback Partner (reisetopia)", u: "https://reisetopia.de/payback/" },
    { t: "Membership Rewards in Meilen umwandeln (meilenoptimieren)", u: "https://meilenoptimieren.com/membership-rewards-punkte-in-meilen-umwandeln/" },
    { t: "Miles & More Meilenverfall (reisetopia)", u: "https://reisetopia.de/guides/miles-and-more-meilen-verfall/" },
    { t: "Miles & More Kreditkarten (reisetopia)", u: "https://reisetopia.de/kreditkarten/miles-and-more-kreditkarte/" },
    { t: "Payback Punkte vor dem Verfall schützen (meilenoptimieren)", u: "https://meilenoptimieren.com/?p=31743" },
    { t: "Flying Blue Meilenverfall (skystatus, out/2026)", u: "https://skystatus.pro/guide/md/de/flying-blue-meilen-verfall.md" },
    { t: "Alles neu bei Miles & More (Business Traveller)", u: "https://www.businesstraveller.com/mobil/fliegen/alles-neu-bei-miles-more-so-lohnt-sich-meilensammeln-trotzdem-noch/" },
    { t: "Mit Meilen nach Brasilien (meilenoptimieren)", u: "https://meilenoptimieren.com/mit-meilen-nach-brasilien/" }
  ]
},
{
  id: 2, code: "M02", gate: "B3",
  title: "Cartão de crédito na Alemanha",
  tagline: "Payback Amex, Miles & More ou Amex Gold?",
  lessons: [
    { id: "2.1", title: "Como o cartão funciona na Alemanha", min: 15, html: `
      <p class="lead">Na Alemanha, o dia a dia é pago com a <strong>Girocard</strong> (o cartão de débito do banco) ou em dinheiro. Ela não junta pontos. Pra juntar, é preciso um cartão de crédito (Kreditkarte).</p>
      <ul>
        <li><strong>Pedido e SCHUFA:</strong> ao pedir um cartão, o banco consulta a SCHUFA, o cadastro de crédito alemão. Por isso não vale pedir vários cartões ao mesmo tempo.</li>
        <li><strong>Pagamento da fatura:</strong> escolha sempre o débito automático de 100% da fatura (Lastschrift 100%). Evite a opção de parcelar (Teilzahlung ou Revolving), que cobra juros altos.</li>
        <li><strong>Aceitação:</strong> a American Express é aceita em cerca de 85% a 90% dos lugares que aceitam cartão na Alemanha (<a href="https://kreditkartenheld.com/american-express-kreditkarte/" target="_blank" rel="noopener">fonte</a>). Vale ter um Visa ou Mastercard de reserva.</li>
        <li><strong>Gastos fora do euro:</strong> cartões como a Amex Gold cobram 2% de taxa em compras em outra moeda (<a href="https://finanzwissen.de/anbieter/american-express/test/gold-card/" target="_blank" rel="noopener">fonte</a>). No Brasil, em reais, prefira um cartão sem essa taxa.</li>
      </ul>
    `},
    { id: "2.2", title: "As opções de cartão", min: 20, html: `
      <div class="table-wrap"><table>
        <thead><tr><th>Cartão</th><th>Anuidade</th><th>Quanto junta</th><th>Destaque</th></tr></thead>
        <tbody>
          <tr><td><strong>Payback American Express</strong></td><td>€ 0</td><td>1 ponto Payback a cada € 3 (<a href="https://meilenoptimieren.com/?p=28982" target="_blank" rel="noopener">fonte</a>)</td><td>Grátis; pontos viram Miles & More 1:1</td></tr>
          <tr><td>Payback Visa</td><td>€ 29 (<a href="https://www.capitalo.de/anbieter/amex/produkte/gold-card" target="_blank" rel="noopener">fonte</a>)</td><td>Pontos Payback</td><td>Alternativa Visa, aceita em mais lugares</td></tr>
          <tr><td>Miles & More MyFlex</td><td>€ 0</td><td>Milhas Miles & More</td><td>Entrada gratuita do Miles & More</td></tr>
          <tr><td><strong>Miles & More Blue</strong></td><td>€ 66 (€ 5,50/mês)</td><td>1 milha a cada € 2</td><td>Milhas não vencem enquanto você tiver o cartão (<a href="https://reisetopia.de/kreditkarten/miles-and-more-kreditkarte/" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>Miles & More Gold</td><td>€ 138 (€ 11,50/mês)</td><td>1 milha a cada € 2</td><td>Mesma proteção, mais seguros de viagem (<a href="https://www.finanztip.de/kreditkarten/miles-more/" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td><strong>American Express Gold</strong></td><td>€ 240 (€ 20/mês)</td><td>1 ponto Membership Rewards por euro</td><td>Transfere pra Flying Blue e Avios; bônus de boas-vindas de até 50.000 pontos (<a href="https://reisetopia.de/guides/amex-gold-oder-platinum-kreditkarte/" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>American Express Platinum</td><td>€ 720</td><td>1 ponto por euro</td><td>Salas VIP e créditos de viagem; bônus de até 85.000 pontos</td></tr>
        </tbody>
      </table></div>
      <p class="note">Os cartões Miles & More são emitidos pelo Deutsche Bank desde outubro de 2025 (<a href="https://www.deutsche-bank.de/ms/mitarbeiterfiliale/mm-credit-cards-fuer-db-mitarbeiter.html" target="_blank" rel="noopener">fonte</a>). Valores de 2026: confira no site antes de pedir.</p>
      <h3>O bônus de boas-vindas</h3>
      <p>Na Amex Gold, o bônus de 50.000 pontos exige gastar € 5.000 nos primeiros 6 meses: 20.000 pontos aos € 3.000 e mais 30.000 aos € 5.000 (<a href="https://meilenoptimieren.com/american-express-aktionen/" target="_blank" rel="noopener">fonte</a>). Esse bônus sozinho vale mais que anos de gastos. Mas só peça se o gasto couber no seu orçamento normal.</p>
    `},
    { id: "2.3", title: "A conta que decide", min: 15, html: `
      <p class="lead">Compare o valor das milhas de um ano com a anuidade, usando um valor de milha realista.</p>
      <div class="example">
        <div class="example-label">Exemplo: € 1.000 por mês no cartão</div>
        <ul>
          <li><strong>Payback Amex:</strong> 4.000 milhas por ano, anuidade zero.</li>
          <li><strong>Miles & More Blue:</strong> 6.000 milhas por ano. A 1,5 centavo, valem € 90, menos € 66 de anuidade: sobram € 24.</li>
          <li><strong>Amex Gold:</strong> 12.000 pontos, que viram 9.600 milhas Flying Blue (5:4). A 2 centavos, valem € 192, menos € 240 de anuidade: prejuízo, a não ser que você use os créditos do cartão ou o bônus de boas-vindas.</li>
        </ul>
      </div>
      <div class="widget" data-widget="cartao"></div>
    `},
    { id: "2.4", title: "A estratégia recomendada", min: 10, html: `
      <div class="stack">
        <div class="stack-row"><b>Base</b> Payback American Express como cartão principal (grátis) e o cartão Payback em todos os parceiros</div>
        <div class="stack-row"><b>Se precisar</b> Miles & More Blue quando tiver milhas que podem vencer e quiser protegê-las</div>
        <div class="stack-row"><b>Avançado</b> Amex Gold só com gasto alto, uso dos créditos ou um bônus de boas-vindas grande</div>
      </div>
      <p>Pra começar, a Payback Amex gratuita resolve. Os pontos dela também valem 1 centavo em dinheiro, então você nunca sai perdendo.</p>
    `},
    { id: "2.5", title: "Táticas pra tirar mais do cartão", min: 10, html: `
      <ol>
        <li><strong>Concentre</strong> os gastos num só cartão de pontos.</li>
        <li><strong>Passe no cartão</strong> o que hoje vai na Girocard, quando não houver taxa.</li>
        <li><strong>Peça cartão adicional</strong> (Zusatzkarte) gratuito pra família: os gastos pontuam pra você.</li>
        <li><strong>Ative as ofertas da Amex</strong> (Amex Offers) no app: dão pontos extras ou descontos em lojas.</li>
        <li><strong>Na viagem ao Brasil,</strong> pague com um cartão sem taxa de moeda estrangeira.</li>
      </ol>
      <div class="callout warn"><strong>Regra de ouro:</strong> débito automático de 100% da fatura. Sempre.</div>
    `}
  ],
  tasks: [
    "Ver se o seu banco já oferece algum cartão de crédito e se ele junta pontos",
    "Fazer a conta da Aula 2.3 com o seu gasto real",
    "Decidir qual cartão faz sentido pra você agora",
    "Se pedir um cartão, configurar o débito automático de 100% da fatura"
  ],
  quiz: [
    { q: "Qual cartão é a base recomendada pra quem está começando?", o: ["Amex Platinum", "Payback American Express (gratuito)", "Nenhum cartão"], a: 1, e: "É grátis, junta pontos Payback e eles viram Miles & More 1:1." },
    { q: "O que a Miles & More Blue faz de especial?", o: ["Dá salas VIP", "Protege as milhas de vencer enquanto você tiver o cartão", "Não tem anuidade"], a: 1, e: "Por € 66 por ano, as milhas Miles & More param de vencer." },
    { q: "Como pagar a fatura do cartão na Alemanha?", o: ["Parcelado (Teilzahlung)", "Débito automático de 100% (Lastschrift 100%)", "Só o mínimo"], a: 1, e: "Assim você nunca paga juros." }
  ],
  sources: [
    { t: "American Express Kreditkarte (kreditkartenheld)", u: "https://kreditkartenheld.com/american-express-kreditkarte/" },
    { t: "Amex Gold Card Test (finanzwissen)", u: "https://finanzwissen.de/anbieter/american-express/test/gold-card/" },
    { t: "Payback Punkte vervielfachen (meilenoptimieren)", u: "https://meilenoptimieren.com/?p=28982" },
    { t: "Miles & More Kreditkarten (reisetopia)", u: "https://reisetopia.de/kreditkarten/miles-and-more-kreditkarte/" },
    { t: "Miles & More Kreditkarte (Finanztip)", u: "https://www.finanztip.de/kreditkarten/miles-more/" },
    { t: "Amex Gold oder Platinum (reisetopia)", u: "https://reisetopia.de/guides/amex-gold-oder-platinum-kreditkarte/" },
    { t: "American Express Aktionen 2026 (meilenoptimieren)", u: "https://meilenoptimieren.com/american-express-aktionen/" }
  ]
},
{
  id: 3, code: "M03", gate: "B4",
  title: "Acumulando no dia a dia",
  tagline: "Payback, cupons, posto e compras online",
  lessons: [
    { id: "3.1", title: "Payback: o motor do dia a dia", min: 20, html: `
      <p class="lead">O Payback é o programa de pontos dos supermercados, drogarias e postos. Você mostra o cartão ou o app no caixa e ganha pontos, normalmente 1 a cada € 2.</p>
      <h3>Onde juntar</h3>
      <p>Entre os maiores parceiros estão EDEKA, Netto, Aral, dm, Decathlon, Fressnapf e Sixt (<a href="https://reisetopia.de/?p=405696" target="_blank" rel="noopener">fonte</a>). No posto Aral a conta é diferente: conta por litro, não por euro (<a href="https://www.mydealz.de/magazin/?p=30166" target="_blank" rel="noopener">fonte</a>).</p>
      <h3>O segredo: os cupons (eCoupons)</h3>
      <p>Toda semana o app do Payback oferece cupons que multiplicam os pontos: 5 vezes, 10 vezes, 20 vezes. É preciso <strong>ativar o cupom no app antes de pagar</strong>.</p>
      <div class="example">
        <div class="example-label">Exemplo</div>
        <p>Abastecer 50 litros na Aral (1 ponto a cada 2 litros) com um cupom de 7 vezes dá 175 pontos, em vez de 25 (<a href="https://meilenoptimieren.com/?p=1631" target="_blank" rel="noopener">fonte</a>).</p>
      </div>
      <h3>Payback Pay</h3>
      <p>Com o Payback Pay, você paga pelo próprio app e junta os pontos no mesmo passo. Funciona na EDEKA, dm, Thalia e Alnatura, entre outros (<a href="https://reisetopia.de/payback/" target="_blank" rel="noopener">fonte</a>).</p>
    `},
    { id: "3.2", title: "Ganhando duas ou três vezes", min: 10, html: `
      <p class="lead">Numa mesma compra num parceiro Payback, você pode ganhar várias vezes:</p>
      <ol>
        <li>Os pontos Payback por mostrar o cartão ou app (1 a cada € 2)</li>
        <li>Os pontos extras do cupom ativado (5, 10 ou 20 vezes)</li>
        <li>Os pontos do cartão de crédito Payback Amex (1 a cada € 3)</li>
      </ol>
      <p>Somando a Payback Amex com os parceiros, a taxa efetiva pode chegar a cerca de 1 milha Miles & More por euro gasto (<a href="https://meilenoptimieren.com/?p=29214" target="_blank" rel="noopener">fonte</a>).</p>
    `},
    { id: "3.3", title: "Compras online", min: 10, html: `
      <p class="lead">O Payback tem centenas de lojas online parceiras. Basta informar o número Payback na compra ou entrar pela página do Payback (<a href="https://reisetopia.de/guides/payback-punkte-sammeln/" target="_blank" rel="noopener">fonte</a>).</p>
      <ul>
        <li>Antes de comprar online, procure a loja no app do Payback e veja se há um cupom.</li>
        <li>Compare o preço com outras lojas. Ponto não justifica pagar mais caro.</li>
        <li>Os pontos de compras online podem demorar algumas semanas pra cair.</li>
      </ul>
    `},
    { id: "3.4", title: "Miles & More direto e em família", min: 10, html: `
      <h3>Parceiros do Miles & More</h3>
      <p>Além dos voos, o Miles & More dá milhas em aluguel de carro, hotéis e outros parceiros. Os cartões Miles & More dão vantagens extras, como 25% de desconto na Avis com o cartão Blue (<a href="https://reisetopia.de/kreditkarten/miles-more-kreditkarte-blue/" target="_blank" rel="noopener">fonte</a>).</p>
      <h3>Em família</h3>
      <ul>
        <li><strong>Flying Blue Family:</strong> até 8 pessoas juntam milhas numa conta; o líder pode transferir as milhas, que ficam válidas por 2 anos após cada transferência (<a href="https://www.wandernundmehr.at/faq/wann-verfallen-meilen-bei-flying-blue" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Emitir pra outra pessoa:</strong> na maioria dos programas, dá pra emitir passagem com as suas milhas pra outra pessoa, como pra sua filha no Brasil.</li>
      </ul>
      <h3>Checklist antes de qualquer compra</h3>
      <ul class="plain-check">
        <li>É parceiro Payback? Mostrei o cartão ou app?</li>
        <li>Tem cupom ativado no app pra essa loja?</li>
        <li>Estou pagando com a Payback Amex?</li>
        <li>O preço está igual ou melhor que em outras lojas?</li>
      </ul>
    `}
  ],
  tasks: [
    "Baixar o app Payback e ativar os cupons da semana",
    "Na próxima ida ao supermercado ou à drogaria, mostrar o Payback e anotar os pontos",
    "Procurar no app Payback 3 lojas online onde você já compra"
  ],
  quiz: [
    { q: "O que é preciso fazer com um cupom Payback antes de comprar?", o: ["Imprimir", "Ativar no app", "Nada"], a: 1, e: "Cupom não ativado não conta." },
    { q: "No posto Aral, como os pontos Payback são calculados?", o: ["Por euro gasto", "Por litro abastecido", "Por visita"], a: 1, e: "Na Aral conta o litro, não o valor." },
    { q: "Somando parceiros Payback e a Payback Amex, a taxa efetiva pode chegar a quanto?", o: ["Cerca de 1 milha por euro", "10 milhas por euro", "1 milha a cada € 10"], a: 0, e: "Ganhando no parceiro e no cartão ao mesmo tempo." }
  ],
  sources: [
    { t: "Payback Punkte Wert (reisetopia)", u: "https://reisetopia.de/?p=405696" },
    { t: "Payback erklärt (mydealz)", u: "https://www.mydealz.de/magazin/?p=30166" },
    { t: "Payback Coupons e Aral (meilenoptimieren)", u: "https://meilenoptimieren.com/?p=1631" },
    { t: "Payback Partner e Payback Pay (reisetopia)", u: "https://reisetopia.de/payback/" },
    { t: "Payback und Miles & More (meilenoptimieren)", u: "https://meilenoptimieren.com/?p=29214" },
    { t: "Miles & More Kreditkarte Blue (reisetopia)", u: "https://reisetopia.de/kreditkarten/miles-more-kreditkarte-blue/" }
  ]
},
{
  id: 4, code: "M04", gate: "C5",
  title: "Transferências e compra de milhas",
  tagline: "Transformar pontos em milhas do jeito certo",
  lessons: [
    { id: "4.1", title: "Payback para Miles & More", min: 15, html: `
      <p class="lead">Os pontos Payback viram milhas Miles & More na proporção 1:1, a partir de 200 pontos (<a href="https://reisetopia.de/?p=747795" target="_blank" rel="noopener">fonte</a>).</p>
      <ul>
        <li><strong>Promoções de bônus:</strong> de vez em quando há bônus na transferência. Em julho de 2026, quem transferiu pelo menos 4.000 pontos de uma vez ganhou 10% a mais (<a href="https://meilenoptimieren.com/transferbonus-payback-miles-and-more/" target="_blank" rel="noopener">fonte</a>). Já houve campanhas de até 25% (<a href="https://reisetopia.de/?p=747795" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Sem volta:</strong> milha Miles & More não volta a ser ponto Payback.</li>
        <li><strong>Atenção à validade:</strong> no Miles & More, a milha vence em 36 meses (a não ser que você tenha o cartão Blue ou Gold). No Payback, o ponto também dura 36 meses. Transferir não ganha tempo, só muda de lugar.</li>
      </ul>
      <div class="callout">Estratégia: deixe os pontos no Payback e transfira de uma vez, quando houver uma emissão em vista, de preferência numa promoção de bônus.</div>
    `},
    { id: "4.2", title: "Amex para as companhias", min: 15, html: `
      <p class="lead">Os pontos Membership Rewards da Amex vão pra vários programas, cada um com uma proporção.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Pontos Amex → milhas</th></tr></thead>
        <tbody>
          <tr><td>Flying Blue (Air France-KLM)</td><td>5 → 4</td></tr>
          <tr><td>Iberia Club (Avios)</td><td>5 → 4</td></tr>
          <tr><td>British Airways Club (Avios)</td><td>5 → 4</td></tr>
          <tr><td>Qatar Airways (Avios)</td><td>3 → 2</td></tr>
          <tr><td>Delta SkyMiles</td><td>3 → 2</td></tr>
          <tr><td>Emirates Skywards</td><td>2 → 1</td></tr>
          <tr><td>Miles & More (via Payback)</td><td>3 → 1</td></tr>
        </tbody>
      </table></div>
      <p class="note">Proporções de 2026 (<a href="https://frankfurtflyer.de/punkte-desaster-bei-amex-membership-rewards-diese-umrechnungskurse-fuer-vielfliegermeilen-gelten-ab-august/" target="_blank" rel="noopener">fonte</a>, <a href="https://meilenoptimieren.com/membership-rewards-punkte-in-meilen-umwandeln/" target="_blank" rel="noopener">fonte</a>).</p>
      <div class="callout warn">Mandar pontos Amex pro Miles & More via Payback (3 pontos por milha) quase nunca compensa. Pra Flying Blue ou Iberia, você recebe quase 2,5 vezes mais milhas pelo mesmo ponto.</div>
      <p>Na Flying Blue, a transferência costuma cair em até 1 dia útil (<a href="https://reisetopia.de/vielfliegerprogramme/amex-transferpartner-deutschland/" target="_blank" rel="noopener">fonte</a>).</p>
    `},
    { id: "4.3", title: "A conta do valor do ponto", min: 15, html: `
      <p class="lead">Antes de transferir, converta tudo pra centavos por <em>ponto de origem</em>.</p>
      <div class="formula">valor por ponto = valor da milha no resgate × milhas recebidas por ponto</div>
      <div class="example">
        <div class="example-label">Exemplo</div>
        <p>Um ponto Amex vira 0,8 milha Flying Blue. Se você usar essas milhas numa executiva que rende 3 centavos por milha, cada ponto Amex valeu 0,8 × 3 = <strong>2,4 centavos</strong>.</p>
        <p>O mesmo ponto via Payback vira 1/3 de milha Miles & More. Mesmo numa executiva de 4,4 centavos, ele vale só 1,5 centavo.</p>
      </div>
      <div class="widget" data-widget="transferencia"></div>
    `},
    { id: "4.4", title: "Comprar milhas", min: 10, html: `
      <p class="lead">Os programas vendem milhas, mas pelo preço normal quase nunca compensa.</p>
      <ul>
        <li><strong>Vale comprar</strong> quando faltam poucas milhas pra uma emissão que você já calculou e que rende bem.</li>
        <li><strong>Não vale</strong> comprar pra guardar, sem viagem definida.</li>
        <li>Iberia e Flying Blue fazem promoções frequentes. A Iberia já chegou a dar até 60% de desconto em milhas nas passagens pra América do Sul (<a href="https://www.theflightclub.it/de/?p=106561" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
    `},
    { id: "4.5", title: "O calendário das oportunidades", min: 10, html: `
      <div class="calendar">
        <div class="cal-month"><b>Todo mês</b><span>Flying Blue publica as Promo Rewards perto do dia 1: passagens com até 25% menos milhas (<a href="https://skystatus.pro/guide/de/flying-blue-promo-rewards" target="_blank" rel="noopener">fonte</a>).</span></div>
        <div class="cal-month"><b>Várias vezes ao ano</b><span>Bônus na transferência Payback → Miles & More, de 10% a 25%.</span></div>
        <div class="cal-month"><b>Ao pedir um cartão</b><span>Bônus de boas-vindas da Amex: o maior ganho de pontos de uma vez.</span></div>
        <div class="cal-month hot"><b>Promoções da Iberia</b><span>Descontos grandes em milhas pra América do Sul, que aparecem algumas vezes por ano.</span></div>
      </div>
      <h3>Erros que custam caro</h3>
      <ol>
        <li>Transferir sem ter uma passagem em vista.</li>
        <li>Mandar pontos Amex pro Miles & More via Payback.</li>
        <li>Comparar porcentagens em vez de centavos por ponto.</li>
        <li>Comprar milhas por impulso.</li>
      </ol>
    `}
  ],
  tasks: [
    "Ver quantos pontos Payback você já tem",
    "Assinar a newsletter de um site de milhas alemão (reisetopia, meilenoptimieren ou Frankfurtflyer)",
    "Calcular o valor por ponto de uma transferência hipotética com a calculadora"
  ],
  quiz: [
    { q: "Qual a proporção de Payback para Miles & More?", o: ["1:1", "3:1", "5:4"], a: 0, e: "1 ponto Payback vira 1 milha Miles & More, a partir de 200 pontos." },
    { q: "Pontos Amex rendem mais milhas indo pra onde?", o: ["Miles & More via Payback", "Flying Blue ou Iberia (5 → 4)", "Emirates (2 → 1)"], a: 1, e: "5 pontos viram 4 milhas, contra 3 pontos por 1 milha no Miles & More." },
    { q: "Quando faz sentido comprar milhas?", o: ["Sempre que houver promoção", "Quando faltam poucas milhas pra uma emissão já calculada", "Pra guardar pro futuro"], a: 1, e: "Compra de milhas só faz sentido com uma emissão concreta." }
  ],
  sources: [
    { t: "Amex Punkte zu Miles & More (reisetopia)", u: "https://reisetopia.de/?p=747795" },
    { t: "Transferbonus Payback → Miles & More (meilenoptimieren, jul/2026)", u: "https://meilenoptimieren.com/transferbonus-payback-miles-and-more/" },
    { t: "Amex Umrechnungskurse (Frankfurtflyer)", u: "https://frankfurtflyer.de/punkte-desaster-bei-amex-membership-rewards-diese-umrechnungskurse-fuer-vielfliegermeilen-gelten-ab-august/" },
    { t: "Amex Transferpartner Deutschland (reisetopia)", u: "https://reisetopia.de/vielfliegerprogramme/amex-transferpartner-deutschland/" },
    { t: "Iberia Avios Aktion Südamerika (The Flight Club)", u: "https://www.theflightclub.it/de/?p=106561" },
    { t: "Flying Blue Promo Rewards (skystatus)", u: "https://skystatus.pro/guide/de/flying-blue-promo-rewards" }
  ]
}
);
