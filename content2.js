/* Curso de Milhas na Alemanha: módulos 5 a 10, projeto final e glossário */
window.CURSO = window.CURSO || { modules: [] };

window.CURSO.modules.push(
{
  id: 5, code: "M05", gate: "C6",
  title: "Resgate básico",
  tagline: "Emitir uma passagem com milhas sem susto",
  lessons: [
    { id: "5.1", title: "Como o Miles & More cobra hoje", min: 15, html: `
      <p class="lead">O Miles & More acabou com a tabela fixa nos voos da Lufthansa, da Swiss e da Austrian. Agora o preço em milhas muda conforme a data e a procura, como uma passagem comum (<a href="https://www.businesstraveller.com/mobil/fliegen/alles-neu-bei-miles-more-so-lohnt-sich-meilensammeln-trotzdem-noch/" target="_blank" rel="noopener">fonte</a>).</p>
      <ul>
        <li><strong>Tarifas diferentes:</strong> em cada classe há várias tarifas. Na executiva intercontinental, desde maio de 2026, são Business Light, Saver, Base e Flex (<a href="https://meilenoptimieren.com/miles-and-more-business-light-tarif/" target="_blank" rel="noopener">fonte</a>). A mais barata em milhas costuma ter menos bagagem e menos flexibilidade.</li>
        <li><strong>Ainda dá pra achar barato:</strong> com o preço variável, aparecem voos por muito menos milhas do que antes. Um voo em executiva Frankfurt–Londres saiu por 6.984 milhas, contra 25.000 na tabela antiga (<a href="https://meilenoptimieren.com/preise-miles-and-more-business-class-praemienfluege-neues-system/" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Companhias parceiras</strong> (fora do grupo Lufthansa) ainda seguem uma tabela fixa por região.</li>
      </ul>
      <div class="callout">Por causa do preço variável, a flexibilidade de datas vale ouro. Antes de emitir, olhe as datas próximas.</div>
    `},
    { id: "5.2", title: "Passo a passo da emissão", min: 15, html: `
      <ol>
        <li>Entre em miles-and-more.com e faça login.</li>
        <li>Clique em reservar voo-prêmio (Prämienflug buchen) e informe a rota e a data.</li>
        <li>Compare as tarifas e veja o que cada uma inclui: bagagem, assento e regras de cancelamento.</li>
        <li>Olhe o valor das taxas (Steuern, Gebühren und Zuschläge). Na Lufthansa, elas podem passar de € 400 por trecho longo.</li>
        <li>Faça a conta do valor da milha (Módulo 1). Se ficar perto de 1 centavo, pague em dinheiro.</li>
        <li>Confirme, pague as taxas com cartão e guarde o localizador.</li>
      </ol>
      <h3>Truque das taxas: emita a volta saindo do Brasil</h3>
      <p>Como o Brasil restringe as sobretaxas de combustível, os voos-prêmio saindo do Brasil têm taxas muito menores. Uma primeira classe da Lufthansa de São Paulo a Frankfurt saiu por 111.000 milhas e apenas 55 reais de taxas (<a href="https://meilenoptimieren.com/mit-meilen-nach-brasilien/" target="_blank" rel="noopener">fonte</a>).</p>
      <div class="callout"><strong>Na prática:</strong> emita ida e volta como dois trechos separados. A volta (Brasil → Alemanha) costuma ser o melhor uso das milhas.</div>
    `},
    { id: "5.3", title: "Flying Blue e Avios", min: 10, html: `
      <ul>
        <li><strong>Flying Blue</strong> também tem preço variável. Desde setembro de 2026, os voos-prêmio da Air France e da KLM têm três tarifas: Light, Standard e Flex (<a href="https://www.theflightclub.it/de/?p=124335" target="_blank" rel="noopener">fonte</a>). Na Europa, a Light começa em 8.000 milhas na econômica (<a href="https://skystatus.pro/guide/md/de/flying-blue-praemienflug-verfuegbarkeit.md" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Iberia (Avios)</strong> usa uma tabela por distância, com preço de baixa temporada (off-peak) e alta (peak). Madri–Recife, por exemplo, custava 22.000 Avios na baixa e 28.000 na alta, só ida, em econômica, com taxas baixas (<a href="https://www.headforpoints.com/2025/03/29/iberia-launches-new-brazil-flights" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
    `},
    { id: "5.4", title: "Cancelar e remarcar", min: 10, html: `
      <ul>
        <li><strong>Arrependimento:</strong> no Miles & More, dá pra cancelar sem custo até 47 horas depois da emissão, com devolução das milhas e das taxas (<a href="https://reisetopia.de/guides/miles-and-more-praemienfluege-umbuchen-stornieren/" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Tarifa Flex:</strong> desde 3 de junho de 2026, o cancelamento voltou a ser gratuito na econômica, premium economy e executiva (<a href="https://pointsmag.com/miles-and-more-praemienfluege-stornierungsgebuehren/" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Companhias parceiras:</strong> em geral, cancelamento por € 50 (<a href="https://meilenoptimieren.com/?p=289916" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Online:</strong> desde maio de 2026, dá pra cancelar pelo próprio site (<a href="https://meilenoptimieren.com/miles-and-more-praemienfluege-online-stornieren/" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
      <div class="callout warn">As tarifas mais baratas (Light) podem não permitir cancelamento. Leia as regras da tarifa antes de confirmar.</div>
    `},
    { id: "5.5", title: "Emitir pra outra pessoa", min: 5, html: `
      <p>Dá pra usar suas milhas pra emitir passagem pra outra pessoa, por exemplo pra sua filha vir do Brasil. Os programas costumam pedir que você cadastre essa pessoa antes, como beneficiária. Confira as regras no seu programa antes de emitir.</p>
    `}
  ],
  tasks: [
    "Simular (sem confirmar) a sua meta no Miles & More, olhando as tarifas e as taxas",
    "Simular a volta saindo do Brasil e comparar as taxas",
    "Calcular o valor da milha das duas simulações"
  ],
  quiz: [
    { q: "Por que vale emitir a volta saindo do Brasil separadamente?", o: ["Porque é sempre mais rápido", "Porque o Brasil restringe sobretaxas, então as taxas são muito menores", "Porque não precisa de milhas"], a: 1, e: "Saindo do Brasil, as taxas de um voo-prêmio da Lufthansa caem drasticamente." },
    { q: "Em quanto tempo dá pra cancelar um voo-prêmio do Miles & More sem custo?", o: ["Até 47 horas depois da emissão", "Até 30 dias", "Nunca"], a: 0, e: "Nesse prazo, milhas e taxas voltam sem custo." },
    { q: "O que mudou no preço dos voos da Lufthansa com milhas?", o: ["Ficou fixo pra sempre", "Passou a variar conforme data e procura", "Acabou a possibilidade de usar milhas"], a: 1, e: "O preço dinâmico cria voos muito baratos e muito caros, dependendo da data." }
  ],
  sources: [
    { t: "Alles neu bei Miles & More (Business Traveller)", u: "https://www.businesstraveller.com/mobil/fliegen/alles-neu-bei-miles-more-so-lohnt-sich-meilensammeln-trotzdem-noch/" },
    { t: "Miles & More Business Light Tarif (meilenoptimieren, mai/2026)", u: "https://meilenoptimieren.com/miles-and-more-business-light-tarif/" },
    { t: "Business Class Prämienflüge im neuen System (meilenoptimieren)", u: "https://meilenoptimieren.com/preise-miles-and-more-business-class-praemienfluege-neues-system/" },
    { t: "Mit Meilen nach Brasilien (meilenoptimieren)", u: "https://meilenoptimieren.com/mit-meilen-nach-brasilien/" },
    { t: "Flying Blue: neue Tarife (The Flight Club)", u: "https://www.theflightclub.it/de/?p=124335" },
    { t: "Iberia launches new Brazil flights (Head for Points)", u: "https://www.headforpoints.com/2025/03/29/iberia-launches-new-brazil-flights" },
    { t: "Miles & More umbuchen und stornieren (reisetopia)", u: "https://reisetopia.de/guides/miles-and-more-praemienfluege-umbuchen-stornieren/" },
    { t: "Miles & More Stornogebühren (PointsMag)", u: "https://pointsmag.com/miles-and-more-praemienfluege-stornierungsgebuehren/" }
  ]
},
{
  id: 6, code: "M06", gate: "D7",
  title: "Caçando promoções",
  tagline: "Monitorar a rota pro Brasil o ano inteiro",
  lessons: [
    { id: "6.1", title: "Quanto custa voar pro Brasil", min: 10, html: `
      <p class="lead">Pra reconhecer uma promoção, você precisa saber o preço normal. A rota Alemanha–São Paulo, ida e volta em econômica, costuma ficar entre € 700 e € 1.100.</p>
      <ul>
        <li>Num levantamento de Frankfurt a São Paulo, setembro e outubro foram os meses mais baratos (a partir de cerca de € 765), e julho o mais caro (a partir de € 1.041) (<a href="https://flug.check24.de/fluege/sao-paulo/frankfurt-sao-paulo" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Outro levantamento aponta maio como o mês mais barato e terça-feira como o dia mais barato pra sair (<a href="https://www.momondo.de/fluege/deutschland/brasilien" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Saindo de Berlim, o preço médio pra São Paulo foi mais baixo que saindo de Frankfurt (<a href="https://www.wohin-und-wann.de/flights/brasilien/sao-paulo/" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
      <div class="callout"><strong>Regra prática:</strong> uma promoção real costuma ficar 25% ou mais abaixo do preço típico. Pra São Paulo, algo abaixo de uns € 650 ida e volta já merece atenção.</div>
    `},
    { id: "6.2", title: "As ferramentas", min: 15, html: `
      <div class="table-wrap"><table>
        <thead><tr><th>Ferramenta</th><th>Pra que serve</th></tr></thead>
        <tbody>
          <tr><td>Google Flights</td><td>"Acompanhar preços" manda e-mail quando o preço cai. Mostra se o preço está baixo, normal ou alto pra rota</td></tr>
          <tr><td>Skyscanner</td><td>A opção "Mês inteiro" (Ganzer Monat) mostra o dia mais barato do mês (<a href="https://www.skyscanner.de/fluge-nach/br/billigfluge-nach-brasilien.html" target="_blank" rel="noopener">fonte</a>)</td></tr>
          <tr><td>momondo / Kayak</td><td>Alerta de preço (Preisalarm)</td></tr>
          <tr><td>Sites alemães de promoções</td><td>Travel-Dealz, Urlaubspiraten, mydealz, reisetopia e Frankfurtflyer publicam promoções relâmpago, inclusive de executiva</td></tr>
          <tr><td>Flying Blue Promo Rewards</td><td>Lista nova todo mês, perto do dia 1 (<a href="https://skystatus.pro/guide/de/flying-blue-promo-rewards" target="_blank" rel="noopener">fonte</a>)</td></tr>
        </tbody>
      </table></div>
      <h3>Teste outros aeroportos</h3>
      <p>Além de Frankfurt e Munique, compare Berlim, Hamburgo e Düsseldorf. E também Amsterdã, Paris, Lisboa e Madri, que têm voos diretos pro Brasil. Às vezes um voo barato até lá mais o voo longo sai bem mais em conta.</p>
    `},
    { id: "6.3", title: "Seu sistema de monitoramento", min: 15, html: `
      <p class="lead">Monte uma lista de 3 a 5 rotas e defina um preço-alvo pra cada uma.</p>
      <div class="widget" data-widget="rotas"></div>
      <h3>Rotina semanal (15 minutos)</h3>
      <ol>
        <li>Ler os alertas da semana.</li>
        <li>Ver se alguma rota bateu o preço-alvo, em dinheiro ou em milhas.</li>
        <li>Conferir se há promoção de transferência ou Promo Rewards abertas.</li>
        <li>Atualizar o preço típico.</li>
      </ol>
      <h3>Quando o alerta disparar</h3>
      <ol>
        <li>Confira as datas e o preço total, com bagagem.</li>
        <li>Compare dinheiro x milhas pelo valor da milha.</li>
        <li>Decida rápido: promoções duram horas ou poucos dias.</li>
      </ol>
    `},
    { id: "6.4", title: "Datas boas pra ir ao Brasil", min: 5, html: `
      <ul>
        <li><strong>Mais caro:</strong> dezembro a fevereiro (Natal, férias de verão no Brasil e Carnaval) e julho.</li>
        <li><strong>Mais barato:</strong> maio, setembro, outubro e novembro, fora de feriados.</li>
        <li>No Brasil, as férias escolares são em janeiro e julho. Pra visitar família, os meses fora delas são os mais tranquilos e baratos.</li>
      </ul>
    `}
  ],
  tasks: [
    "Ativar \"Acompanhar preços\" no Google Flights pra sua rota pro Brasil",
    "Assinar um site alemão de promoções (Travel-Dealz, Urlaubspiraten ou mydealz)",
    "Montar sua lista de rotas com preço típico e preço-alvo"
  ],
  quiz: [
    { q: "Quais meses costumam ser mais baratos pra voar da Alemanha a São Paulo?", o: ["Julho e dezembro", "Maio, setembro e outubro", "Janeiro e fevereiro"], a: 1, e: "São os meses fora das férias e festas." },
    { q: "Preço típico de € 900. A partir de quanto é uma promoção real, pela regra do curso?", o: ["€ 850", "€ 675 ou menos", "€ 890"], a: 1, e: "25% abaixo de € 900 é € 675." },
    { q: "Quando a Flying Blue publica as Promo Rewards?", o: ["Uma vez por ano", "Todo mês, perto do dia 1", "Só no Natal"], a: 1, e: "Vale olhar a lista no começo de cada mês." }
  ],
  sources: [
    { t: "Frankfurt–São Paulo: preços por mês (CHECK24)", u: "https://flug.check24.de/fluege/sao-paulo/frankfurt-sao-paulo" },
    { t: "Flüge Deutschland–Brasilien (momondo)", u: "https://www.momondo.de/fluege/deutschland/brasilien" },
    { t: "Statistiken Frankfurt–São Paulo (wohin-und-wann)", u: "https://www.wohin-und-wann.de/flights/brasilien/sao-paulo/" },
    { t: "Billigflüge nach Brasilien (Skyscanner)", u: "https://www.skyscanner.de/fluge-nach/br/billigfluge-nach-brasilien.html" },
    { t: "Flying Blue Promo Rewards (skystatus)", u: "https://skystatus.pro/guide/de/flying-blue-promo-rewards" }
  ]
},
{
  id: 7, code: "M07", gate: "D8",
  title: "Programas parceiros",
  tagline: "Flying Blue, Iberia e TAP pra chegar ao Brasil",
  lessons: [
    { id: "7.1", title: "Por que olhar além do Miles & More", min: 10, html: `
      <p class="lead">O Miles & More é o programa mais fácil de juntar na Alemanha (por causa do Payback), mas nem sempre é o mais barato pra usar. As taxas da Lufthansa são altas. Outros programas podem levar ao Brasil com menos milhas ou menos taxas.</p>
      <p>Com a Amex, você chega a esses programas na proporção 5 → 4 (Flying Blue, Iberia, British Airways). Sem a Amex, dá pra juntar neles voando ou com parceiros.</p>
    `},
    { id: "7.2", title: "Flying Blue (Air France e KLM)", min: 15, html: `
      <ul>
        <li>Voos pro Brasil via Paris ou Amsterdã.</li>
        <li><strong>Promo Rewards:</strong> todo mês, destinos com até 25% menos milhas. Na executiva intercontinental, já chegaram a 45.000 milhas por trecho (<a href="https://skystatus.pro/guide/de/flying-blue-promo-rewards" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Air Europa</strong>, parceira do Flying Blue, cobra taxas muito baixas: cerca de € 39 na executiva (<a href="https://skystatus.pro/guide/md/de/flying-blue-sweet-spots.md" target="_blank" rel="noopener">fonte</a>). Ela voa de Madri pro Brasil.</li>
        <li>O preço muda conforme o aeroporto de saída. Vale comparar Frankfurt, Munique, Amsterdã e Paris (<a href="https://meilenoptimieren.com/?p=221582" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
    `},
    { id: "7.3", title: "Iberia (Avios)", min: 15, html: `
      <ul>
        <li>Voos diretos de Madri pra São Paulo e Rio de Janeiro (<a href="https://meilenoptimieren.com/?p=223174" target="_blank" rel="noopener">fonte</a>), e também pra Recife.</li>
        <li><strong>Baixa temporada (off-peak):</strong> o mesmo voo custa bem menos Avios. Madri–Recife saía por 22.000 Avios na baixa e 28.000 na alta, em econômica, com taxas baixas (<a href="https://www.headforpoints.com/2025/03/29/iberia-launches-new-brazil-flights" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Promoções:</strong> a Iberia já fez campanha com até 60% de desconto em Avios pra América do Sul (<a href="https://www.theflightclub.it/de/?p=106561" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Pra chegar a Madri, um voo barato da Alemanha em dinheiro costuma bastar.</li>
      </ul>
    `},
    { id: "7.4", title: "TAP e o stopover em Lisboa", min: 10, html: `
      <ul>
        <li>A TAP voa de Lisboa pra muitas cidades brasileiras: São Luís virou a 15ª, em outubro de 2026 (<a href="https://www.theflightclub.it/de/?p=111938" target="_blank" rel="noopener">fonte</a>).</li>
        <li>O programa TAP Miles&Go tem preço variável desde julho de 2026, e as milhas valem 3 anos (<a href="https://reisetopia.de/guides/hochziehen-artikel-251/" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Como a TAP é da Star Alliance, também dá pra emitir voos da TAP com milhas Miles & More.</li>
        <li><strong>Stopover:</strong> dá pra parar alguns dias em Lisboa ou no Porto no caminho pro Brasil, sem pagar a mais pelo voo. Duas viagens em uma.</li>
      </ul>
      <p class="note">Em outubro de 2026, o grupo Lufthansa ganhou a disputa pra comprar 44,9% da TAP, ainda sujeita à aprovação da União Europeia (<a href="https://reisetopia.de/guides/hochziehen-artikel-251/" target="_blank" rel="noopener">fonte</a>). As regras podem mudar.</p>
    `},
    { id: "7.5", title: "O truque do aeroporto de saída", min: 10, html: `
      <p class="lead">No Miles & More, o preço em milhas muda muito conforme a cidade de onde o voo sai.</p>
      <div class="example">
        <div class="example-label">Exemplo real</div>
        <p>Uma executiva da Lufthansa pra São Paulo saindo de Lisboa custou 32.210 milhas + € 424. Saindo de Munique, 70.003 milhas (<a href="https://meilenoptimieren.com/?p=292235" target="_blank" rel="noopener">fonte</a>).</p>
        <p>Um voo barato em dinheiro até Lisboa pode economizar quase 38.000 milhas.</p>
      </div>
      <div class="callout warn">Regra de ouro: <strong>nunca transfira pontos antes de achar o voo disponível.</strong> Transferência não volta.</div>
    `}
  ],
  tasks: [
    "Criar conta gratuita no Iberia Club e no TAP Miles&Go",
    "Buscar sua rota pro Brasil no Flying Blue e no Iberia e anotar milhas e taxas",
    "Testar no Miles & More a mesma viagem saindo de Lisboa ou Madri"
  ],
  quiz: [
    { q: "Por que testar outro aeroporto de saída no Miles & More?", o: ["Porque é obrigatório", "Porque o preço em milhas muda muito conforme a cidade de saída", "Porque o voo é mais curto"], a: 1, e: "Saindo de Lisboa, uma executiva pra São Paulo custou menos da metade das milhas de Munique." },
    { q: "Qual parceira do Flying Blue cobra taxas muito baixas?", o: ["Air Europa", "Lufthansa", "Turkish"], a: 0, e: "Cerca de € 39 na executiva." },
    { q: "Qual a regra antes de transferir pontos pra um programa parceiro?", o: ["Transferir tudo de uma vez", "Achar o voo disponível primeiro", "Esperar 1 ano"], a: 1, e: "Transferência não volta. Ache o voo antes." }
  ],
  sources: [
    { t: "Flying Blue Promo Rewards (skystatus)", u: "https://skystatus.pro/guide/de/flying-blue-promo-rewards" },
    { t: "Flying Blue Sweet Spots (skystatus)", u: "https://skystatus.pro/guide/md/de/flying-blue-sweet-spots.md" },
    { t: "Flying Blue Awardchart (meilenoptimieren)", u: "https://meilenoptimieren.com/?p=221582" },
    { t: "Rotas pro Brasil (meilenoptimieren)", u: "https://meilenoptimieren.com/?p=223174" },
    { t: "Iberia launches new Brazil flights (Head for Points)", u: "https://www.headforpoints.com/2025/03/29/iberia-launches-new-brazil-flights" },
    { t: "Iberia Avios Aktion (The Flight Club)", u: "https://www.theflightclub.it/de/?p=106561" },
    { t: "TAP: São Luís (The Flight Club)", u: "https://www.theflightclub.it/de/?p=111938" },
    { t: "TAP Miles&Go (reisetopia)", u: "https://reisetopia.de/guides/hochziehen-artikel-251/" },
    { t: "Lufthansa Business nach São Paulo (meilenoptimieren)", u: "https://meilenoptimieren.com/?p=292235" }
  ]
},
{
  id: 8, code: "M08", gate: "E9",
  title: "Avançado",
  tagline: "Executiva, status e salas VIP",
  lessons: [
    { id: "8.1", title: "Executiva pro Brasil com milhas", min: 15, html: `
      <p class="lead">Na rota Alemanha–Brasil, a executiva é onde as milhas mais rendem: a passagem em dinheiro custa milhares de euros, e em milhas custa só um pouco mais que a econômica.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Opção</th><th>Milhas (só ida)</th><th>Taxas</th></tr></thead>
        <tbody>
          <tr><td>Lufthansa, Munique → São Paulo (Miles & More)</td><td>71.000</td><td>€ 394</td></tr>
          <tr><td>Lufthansa, Lisboa → São Paulo (Miles & More)</td><td>32.210</td><td>€ 424</td></tr>
          <tr><td>Turkish, Istambul → São Paulo (Miles & More)</td><td>71.000</td><td>cerca de € 269</td></tr>
          <tr><td>Lufthansa, São Paulo → Frankfurt, primeira classe (Miles & More)</td><td>111.000</td><td>cerca de € 9</td></tr>
        </tbody>
      </table></div>
      <p class="note">Exemplos encontrados por sites especializados em 2026 (<a href="https://meilenoptimieren.com/mit-meilen-nach-brasilien/" target="_blank" rel="noopener">fonte</a>, <a href="https://meilenoptimieren.com/?p=292235" target="_blank" rel="noopener">fonte</a>). Os preços são variáveis e mudam com a data.</p>
    `},
    { id: "8.2", title: "Status no Miles & More", min: 10, html: `
      <ul>
        <li>Desde 2024, o status do Miles & More é calculado por pontos (Points), ganhos voando, e não mais por milhas (<a href="https://reisetopia.de/kolumne/miles-more-erfolg-neues-statusprogramm/" target="_blank" rel="noopener">fonte</a>).</li>
        <li>Os níveis são Frequent Traveller, Senator e HON Circle. Com status, as milhas param de vencer.</li>
        <li>Em 2026, quem tem o cartão Miles & More Gold pôde comprar o status Frequent Traveller por € 650 ou 80.000 milhas (<a href="https://reisetopia.de/kreditkarten/miles-and-more-kreditkarte/" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
      <div class="callout"><strong>Vale a pena?</strong> Só pra quem voa muito com o grupo Lufthansa. Pra uma ou duas viagens ao Brasil por ano, foque em juntar e usar bem as milhas.</div>
    `},
    { id: "8.3", title: "Salas VIP", min: 10, html: `
      <ul>
        <li><strong>Voando de executiva</strong> você já tem acesso à sala da companhia.</li>
        <li><strong>American Express Platinum:</strong> acesso gratuito, com acompanhante, a cerca de 1.550 salas no mundo (<a href="https://reisetopia.de/guides/amex-gold-oder-platinum-kreditkarte/" target="_blank" rel="noopener">fonte</a>). Faz sentido só pra quem viaja bastante, por causa da anuidade de € 720.</li>
        <li><strong>Cartão Miles & More Gold:</strong> algumas campanhas de boas-vindas incluíram vouchers de sala VIP (<a href="https://frankfurtflyer.de/lufthansa-milesmore-gold-credit-card/" target="_blank" rel="noopener">fonte</a>).</li>
      </ul>
    `},
    { id: "8.4", title: "A estrutura ideal", min: 5, html: `
      <div class="stack">
        <div class="stack-row"><b>Payback</b> Onde tudo acumula no dia a dia</div>
        <div class="stack-row"><b>Miles & More</b> Destino principal dos pontos Payback, pra Lufthansa, Swiss e TAP</div>
        <div class="stack-row"><b>Sob demanda</b> Flying Blue e Iberia, quando houver um bom voo (e se tiver Amex)</div>
      </div>
      <p>E uma planilha controlando saldos e vencimentos (Módulo 10).</p>
    `}
  ],
  tasks: [
    "Pesquisar a executiva da sua meta no Miles & More saindo de 2 cidades diferentes",
    "Pesquisar a volta em executiva saindo do Brasil e comparar as taxas",
    "Definir sua estrutura de programas"
  ],
  quiz: [
    { q: "Por que a executiva costuma ser o melhor uso das milhas na rota pro Brasil?", o: ["Porque é grátis", "Porque custa muito mais em dinheiro, mas só um pouco mais em milhas", "Porque não tem taxa nunca"], a: 1, e: "O valor da milha dispara quando a passagem em dinheiro é cara." },
    { q: "Desde 2024, como se conquista status no Miles & More?", o: ["Com milhas do Payback", "Com pontos (Points) ganhos voando", "Só comprando"], a: 1, e: "O status passou a ser calculado por Points." },
    { q: "Qual trecho costuma ter taxas mais baixas?", o: ["Alemanha → Brasil", "Brasil → Alemanha", "São iguais"], a: 1, e: "Saindo do Brasil, as sobretaxas são restritas." }
  ],
  sources: [
    { t: "Mit Meilen nach Brasilien (meilenoptimieren)", u: "https://meilenoptimieren.com/mit-meilen-nach-brasilien/" },
    { t: "Lufthansa Business nach São Paulo (meilenoptimieren)", u: "https://meilenoptimieren.com/?p=292235" },
    { t: "Neues Statusprogramm (reisetopia)", u: "https://reisetopia.de/kolumne/miles-more-erfolg-neues-statusprogramm/" },
    { t: "Miles & More Kreditkarten (reisetopia)", u: "https://reisetopia.de/kreditkarten/miles-and-more-kreditkarte/" },
    { t: "Amex Gold oder Platinum (reisetopia)", u: "https://reisetopia.de/guides/amex-gold-oder-platinum-kreditkarte/" },
    { t: "Miles & More Gold Card (Frankfurtflyer)", u: "https://frankfurtflyer.de/lufthansa-milesmore-gold-credit-card/" }
  ]
},
{
  id: 9, code: "M09", gate: "E10",
  title: "Riscos e direitos",
  tagline: "Golpes, armadilhas e até € 600 por voo atrasado",
  lessons: [
    { id: "9.1", title: "Seus direitos: até € 600 por atraso", min: 15, html: `
      <p class="lead">Morando na Europa, você tem uma proteção que no Brasil não existe nesse formato: a lei europeia de direitos dos passageiros (EU 261/2004, em alemão Fluggastrechte).</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Distância do voo</th><th>Indenização com atraso de 3 horas ou mais na chegada</th></tr></thead>
        <tbody>
          <tr><td>Até 1.500 km</td><td>€ 250</td></tr>
          <tr><td>1.500 a 3.500 km</td><td>€ 400</td></tr>
          <tr><td>Mais de 3.500 km (como Alemanha–Brasil)</td><td>€ 600</td></tr>
        </tbody>
      </table></div>
      <p class="note">Valores por pessoa (<a href="https://www.airhelp.de/flug-verspaetung/" target="_blank" rel="noopener">fonte</a>).</p>
      <ul>
        <li><strong>Vale também</strong> pra cancelamento com menos de 14 dias de aviso e pra quando a companhia não deixa você embarcar por excesso de reservas (<a href="https://www.airhelp.de/fluggastrechte/" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Quais voos:</strong> quase todos os voos saindo de um aeroporto da União Europeia, e voos chegando na UE por uma companhia europeia (<a href="https://airadvisor.com/de/flugverspaetung-entschaedigung" target="_blank" rel="noopener">fonte</a>). Ou seja: Lufthansa de São Paulo pra Frankfurt conta; uma companhia brasileira vindo do Brasil, não.</li>
        <li><strong>Exceções:</strong> casos extraordinários como tempestade ou fechamento do espaço aéreo (<a href="https://www.wandernundmehr.at/faq/wann-kann-ich-eine-flugentschadigung-beantragen" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Prazo:</strong> na Alemanha, você tem 3 anos pra pedir (<a href="https://airadvisor.com/de/flugverspaetung-entschaedigung" target="_blank" rel="noopener">fonte</a>).</li>
        <li><strong>Passagem com milhas também conta.</strong></li>
      </ul>
      <div class="callout"><strong>Como pedir:</strong> preencha o formulário no site da companhia aérea, com o localizador e o horário real de chegada. Se a companhia negar, existem serviços que cobram uma parte da indenização pra cobrar por você.</div>
    `},
    { id: "9.2", title: "Golpes comuns", min: 10, html: `
      <ul>
        <li><strong>E-mails e SMS falsos</strong> dizendo que seus pontos Payback ou milhas vão vencer, com um link. Nunca clique: abra o app oficial.</li>
        <li><strong>Pedido de senha ou código</strong> por telefone ou WhatsApp. Nenhum programa pede isso.</li>
        <li><strong>Venda de milhas</strong> pra terceiros: vai contra as regras dos programas e pode bloquear sua conta.</li>
      </ul>
      <div class="callout"><strong>Proteção básica:</strong> senha diferente em cada programa, verificação em duas etapas ligada e extrato conferido a cada 3 meses.</div>
    `},
    { id: "9.3", title: "Armadilhas de dinheiro", min: 10, html: `
      <ul>
        <li><strong>Parcelamento do cartão:</strong> evite sempre. Juros anulam milhas.</li>
        <li><strong>Pagamento em euro no Brasil:</strong> quando a maquininha ou o caixa eletrônico no Brasil perguntar se você quer pagar em euro ou em real, escolha <strong>real</strong>. Converter na hora (conversão dinâmica) costuma sair bem mais caro.</li>
        <li><strong>Taxa de moeda estrangeira:</strong> cartões como a Amex Gold cobram 2% fora do euro (<a href="https://finanzwissen.de/anbieter/american-express/test/gold-card/" target="_blank" rel="noopener">fonte</a>). Leve um cartão sem essa taxa pro Brasil.</li>
        <li><strong>Gastar pra ganhar bônus:</strong> só peça um cartão com bônus de boas-vindas se o gasto mínimo couber no seu orçamento normal.</li>
      </ul>
    `},
    { id: "9.4", title: "Erros que fazem perder milhas", min: 5, html: `
      <ol>
        <li><strong>Deixar vencer.</strong> Payback vence em 30 de setembro; Miles & More, no fim do trimestre.</li>
        <li><strong>Transferir sem plano.</strong></li>
        <li><strong>Guardar demais.</strong> Programas mudam regras e as milhas podem valer menos amanhã.</li>
        <li><strong>Trocar por produtos.</strong> Rende muito menos que passagens.</li>
        <li><strong>Não fazer a conta</strong> do valor da milha antes de emitir.</li>
      </ol>
    `}
  ],
  tasks: [
    "Ligar a verificação em duas etapas no Payback e no Miles & More",
    "Guardar a tabela de indenizações (€ 250 / € 400 / € 600) no celular",
    "Conferir se algum voo seu dos últimos 3 anos atrasou mais de 3 horas"
  ],
  quiz: [
    { q: "Voo de Frankfurt a São Paulo chegou 4 horas atrasado. Quanto é a indenização?", o: ["€ 250", "€ 400", "€ 600"], a: 2, e: "Mais de 3.500 km e mais de 3 horas de atraso: € 600 por pessoa." },
    { q: "No Brasil, a maquininha pergunta: pagar em euro ou real?", o: ["Euro, pra saber o valor", "Real", "Tanto faz"], a: 1, e: "A conversão na hora costuma sair mais cara." },
    { q: "Quanto tempo você tem pra pedir a indenização na Alemanha?", o: ["30 dias", "1 ano", "3 anos"], a: 2, e: "O prazo geral é de 3 anos." }
  ],
  sources: [
    { t: "Flugverspätung: Entschädigung (AirHelp)", u: "https://www.airhelp.de/flug-verspaetung/" },
    { t: "Fluggastrechte (AirHelp)", u: "https://www.airhelp.de/fluggastrechte/" },
    { t: "Flugverspätung Entschädigung (AirAdvisor)", u: "https://airadvisor.com/de/flugverspaetung-entschaedigung" },
    { t: "Wann kann ich Entschädigung beantragen? (wandernundmehr)", u: "https://www.wandernundmehr.at/faq/wann-kann-ich-eine-flugentschadigung-beantragen" },
    { t: "Amex Gold Card Test (finanzwissen)", u: "https://finanzwissen.de/anbieter/american-express/test/gold-card/" }
  ]
},
{
  id: 10, code: "M10", gate: "F11",
  title: "Seu sistema",
  tagline: "Uma planilha simples e uma rotina mensal",
  lessons: [
    { id: "10.1", title: "A planilha de controle", min: 15, html: `
      <p class="lead">Uma planilha com três abas resolve: saldos, vencimentos e histórico de emissões.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Programa</th><th>Saldo</th><th>Vence em</th><th>Protegido?</th></tr></thead>
        <tbody>
          <tr><td>Payback</td><td>4.200</td><td>30/09/2029</td><td>Sim, com cartão Payback</td></tr>
          <tr><td>Miles & More</td><td>18.000</td><td>31/03/2029</td><td>Não</td></tr>
          <tr><td>Flying Blue</td><td>0</td><td>—</td><td>—</td></tr>
        </tbody>
      </table></div>
      <p>No histórico de emissões, anote: data, rota, programa, milhas, taxas, preço em dinheiro e valor da milha em centavos. Com o tempo, você vê quanto economizou de verdade.</p>
    `},
    { id: "10.2", title: "As duas contas que decidem tudo", min: 5, html: `
      <ul>
        <li><strong>Vale usar milhas?</strong> (preço − taxas) ÷ milhas × 100. Acima de 1 centavo, sim. Acima de 2, ótimo.</li>
        <li><strong>Vale transferir?</strong> Valor da milha × milhas recebidas por ponto. Compare com 1 centavo (o valor do ponto Payback em dinheiro).</li>
      </ul>
      <p>As duas estão prontas na aba <a href="#ferramentas">Ferramentas</a> deste app.</p>
    `},
    { id: "10.3", title: "Rotina mensal", min: 5, html: `
      <p>No começo de cada mês (20 minutos):</p>
      <ol>
        <li>Atualizar os saldos na planilha.</li>
        <li>Ativar os cupons Payback do mês.</li>
        <li>Olhar as Promo Rewards da Flying Blue.</li>
        <li>Ver se há bônus de transferência Payback → Miles & More.</li>
        <li>Conferir o que vence nos próximos 6 meses.</li>
      </ol>
    `}
  ],
  tasks: [
    "Montar a planilha com saldos e vencimentos",
    "Colocar a rotina mensal no calendário do celular",
    "Anotar a primeira emissão no histórico quando ela acontecer"
  ],
  quiz: [
    { q: "Qual o valor mínimo de milha pra valer a pena usar milhas Miles & More?", o: ["Mais de 1 centavo", "Mais de 10 centavos", "Qualquer valor"], a: 0, e: "Abaixo de 1 centavo, o dinheiro do Payback valeria mais." },
    { q: "Quando vencem os pontos Payback?", o: ["Em 31 de dezembro", "Em 30 de setembro, depois de pelo menos 36 meses", "Nunca"], a: 1, e: "Por isso vale conferir o saldo antes de setembro." },
    { q: "O que fazer no começo de cada mês?", o: ["Nada", "Atualizar saldos, ativar cupons e olhar promoções", "Transferir todos os pontos"], a: 1, e: "Uma rotina curta evita perder pontos e promoções." }
  ],
  sources: []
}
);

window.CURSO.final = {
  title: "Projeto final",
  steps: [
    ["Meta", "Defina a viagem: datas, pessoas e cabine.", 0],
    ["Pesquisa", "Preço em dinheiro e em milhas no Miles & More, Flying Blue e Iberia.", 5],
    ["Plano de acúmulo", "Quantas milhas faltam e de onde vêm (Payback, cartão).", 3],
    ["Transferência", "Transfira só o necessário, de preferência com bônus.", 4],
    ["Monitoramento", "Alertas ativos até bater o alvo.", 6],
    ["Emissão", "Emita (a volta saindo do Brasil, se possível) e confira as regras.", 5],
    ["Registro", "Anote tudo no histórico.", 10]
  ]
};

window.CURSO.glossario = [
  ["Prämienmeilen", "Milhas que você usa pra emitir passagens no Miles & More."],
  ["Prämienflug", "Passagem emitida com milhas (voo-prêmio)."],
  ["Payback", "Programa de pontos do dia a dia: supermercado, drogaria, posto. 1 ponto = 1 centavo ou 1 milha Miles & More."],
  ["Membership Rewards", "Programa de pontos dos cartões American Express."],
  ["Miles & More", "Programa de milhas da Lufthansa, Swiss e Austrian."],
  ["Flying Blue", "Programa de milhas da Air France e da KLM."],
  ["Avios", "Moeda de milhas da Iberia, British Airways e Qatar Airways."],
  ["Zuschläge", "Sobretaxas que as companhias cobram além das taxas de aeroporto."],
  ["Steuern und Gebühren", "Impostos e taxas de aeroporto, pagos em dinheiro mesmo em passagens com milhas."],
  ["Cent pro Meile", "Centavos por milha: o valor de cada milha num resgate."],
  ["eCoupon", "Cupom do app Payback que multiplica os pontos. Precisa ser ativado antes da compra."],
  ["Jahresgebühr", "Anuidade do cartão de crédito."],
  ["Teilzahlung", "Pagamento parcelado da fatura, com juros. Evite."],
  ["Lastschrift 100%", "Débito automático da fatura inteira. Sempre use."],
  ["SCHUFA", "Cadastro de crédito alemão, consultado ao pedir um cartão."],
  ["Meilenverfall", "Vencimento das milhas."],
  ["Promo Rewards", "Passagens com até 25% menos milhas que a Flying Blue publica todo mês."],
  ["Off-peak", "Baixa temporada na tabela da Iberia: as mesmas passagens por menos Avios."],
  ["Stopover", "Parada de mais de 24 horas numa cidade no meio do caminho."],
  ["Fluggastrechte", "Direitos dos passageiros na União Europeia: até € 600 por atraso de 3 horas ou mais."]
];
