/**
 * Brazilian Portuguese for the client-work case studies: HelloFresh design
 * transformation, The Pets Table, Móvix, and MVP Factory. Keys are the exact
 * English source strings from `src/data/`.
 */
export const ptWork: Record<string, string> = {
    // ── Shared metadata ──────────────────────────────────────────────
    '2026 – Now': '2026 – Agora',
    'Jan 2026 – Now': 'Jan 2026 – Agora',
    'Personal Project': 'Projeto Pessoal',
    'University of Brasília': 'Universidade de Brasília',

    // Tags used across studies
    'AI Enablement': 'Capacitação em IA',
    'UX Quality': 'Qualidade de UX',
    'Design-to-Code': 'Design para Código',
    'Product Design': 'Product Design',
    'UX Research': 'Pesquisa de UX',
    'Mobile': 'Mobile',
    'Prototyping': 'Prototipagem',
    'User Interviews': 'Entrevistas com Usuários',
    'Concept Testing': 'Teste de Conceito',

    // Home-page card: the headline metric label and one-line summary
    // Metric value + label read as one phrase: "9 months from idea to launch"
    'designers supported': 'designers apoiados',
    'years as sole designer': 'anos como designer único',
    'months from idea to launch': 'meses da ideia ao lançamento',
    'research ownership': 'responsabilidade pela pesquisa',
    'Built the Claude Code toolchain that lets HelloFresh designers prototype, test, and ship straight to production.':
        'Construí o conjunto de ferramentas em Claude Code que permite aos designers da HelloFresh prototipar, testar e entregar direto em produção.',
    'Shaped HelloFresh\'s dog food brand end to end, from the acquisition funnel to retention.':
        'Desenhei a marca de comida para cachorros da HelloFresh de ponta a ponta, do funil de aquisição à retenção.',
    'Ran end-to-end research to tell Schwarzkopf whether an AI hair analysis app was worth building.':
        'Conduzi a pesquisa de ponta a ponta para dizer à Schwarzkopf se valia a pena construir um app de análise capilar com IA.',
    'Designed an app that made financing a home through CAIXA, one of Brazil\'s biggest banks, simple enough for anyone.':
        'Desenhei um app que deixou o financiamento da casa própria pela CAIXA, um dos maiores bancos do Brasil, simples o bastante para qualquer pessoa.',

    // Short summaries shown on the home-page cards (src/data/caseStudies.ts)
    'Over the course of a year, we built the infrastructure for designers to ship production-ready code, established contribution models so the system could grow with the team, and created rituals that kept 30+ designers in sync without slowing anyone down.':
        'Ao longo de um ano, construímos a infraestrutura para designers entregarem código pronto para produção, estabelecemos modelos de contribuição para o sistema crescer junto com o time e criamos rituais que mantiveram mais de 30 designers em sintonia sem atrasar ninguém.',
    'The result was a fundamentally different way of working. Designers now contribute directly to the codebase, components are shared across all product teams, and the gap between what\'s designed and what\'s built has nearly disappeared.':
        'O resultado foi uma forma de trabalhar fundamentalmente diferente. Designers agora contribuem direto no código, os componentes são compartilhados entre todos os times de produto e a distância entre o que é desenhado e o que é construído quase desapareceu.',
    'I shaped the end-to-end product experience across three years, from the acquisition funnel and checkout through to delivery management, pet profile, and retention.':
        'Moldei a experiência de produto de ponta a ponta ao longo de três anos, do funil de aquisição e do checkout até a gestão de entregas, o perfil do pet e a retenção.',
    'Along the way: measurable CVR wins, DIY research programs, Figma foundations adopted cross-team, and AI-assisted design-to-code workflows that set a new bar across HelloFresh.':
        'No caminho: ganhos mensuráveis de CVR, programas de pesquisa autônomos, fundações no Figma adotadas por outros times e fluxos de design para código assistidos por IA que criaram um novo patamar em toda a HelloFresh.',
    'My role was purely research. A Schwarzkopf designer had already built a working prototype. My job was to put it in front of ten women in Germany and come back with honest answers.':
        'Meu papel era puramente de pesquisa. Um designer da Schwarzkopf já havia construído um protótipo funcional. Meu trabalho era colocá-lo diante de dez mulheres na Alemanha e voltar com respostas honestas.',
    'The report gave Schwarzkopf a clear view of where the concept worked, where it needed work, and what would need to be true for users to trust it at scale.':
        'O relatório deu à Schwarzkopf uma visão clara de onde o conceito funcionava, onde precisava de trabalho e o que teria de ser verdade para os usuários confiarem nele em escala.',
    'We started with design sprints to align stakeholders around a common vision. Everyone had different opinions on what mattered most, but the sprints helped us find a shared path. I designed wireframes, UI, and prototypes alongside another designer, keeping the brand identity consistent throughout.':
        'Começamos com design sprints para alinhar os stakeholders em torno de uma visão comum. Cada pessoa tinha uma opinião diferente sobre o que era mais importante, mas os sprints nos ajudaram a encontrar um caminho compartilhado. Desenhei wireframes, UI e protótipos junto de outra designer, mantendo a identidade da marca consistente do início ao fim.',
    'Home cards in a logical and understandable order': 'Os cards da home em uma ordem lógica e compreensível',
    'The target audience had little experience with financing, so simplicity was non-negotiable. We designed a card-based home screen with clear entry points into the main flows: simulation, financing, and follow-up. A small animated speech bubble guide, built with Lottie, walked users through each step of the simulation.':
        'O público-alvo tinha pouca experiência com financiamento, então a simplicidade era inegociável. Desenhamos uma home baseada em cards com pontos de entrada claros para os fluxos principais: simulação, financiamento e acompanhamento. Um pequeno guia animado em balão de fala, feito com Lottie, conduzia o usuário por cada etapa da simulação.',
    'The financing flow let users start directly from a saved simulation, upload documentation via phone camera, and track their process alongside all participants. We tested the app with real users at a major financing fair in Brasília. Observing people aged 15 to 60 using it was eye-opening and shaped many of our final design decisions.':
        'O fluxo de financiamento permitia começar direto de uma simulação salva, enviar a documentação pela câmera do celular e acompanhar o processo junto de todos os participantes. Testamos o app com usuários reais em uma grande feira de financiamento em Brasília. Observar pessoas de 15 a 60 anos usando-o foi revelador e moldou muitas das nossas decisões finais de design.',
    'Móvix was published on the App Store and Google Play. It was a 9-month project by AIS Digital.':
        'O Móvix foi publicado na App Store e no Google Play. Foi um projeto de 9 meses da AIS Digital.',

    // Brief labels at the top of every study (src/components/CaseStudyPage.tsx).
    // 'Problem' lives further down, with the Pets Table deep-dive summary.
    'What I did': 'O que eu fiz',
    'Company': 'Empresa',
    'Year': 'Ano',
    'Role': 'Papel',

    // ── Briefs · HelloFresh design transformation ────────────────────────────
    'I built the Claude Code toolkit that lets HelloFresh designers prototype, test, and ship UI straight to production, across all nine brands.':
        'Construí o conjunto de ferramentas no Claude Code que permite aos designers da HelloFresh prototipar, testar e levar UI direto para produção, nas nove marcas.',
    'Design intent got lost between Figma and production.':
        'A intenção do design se perdia entre o Figma e a produção.',
    'Nine brands, each with its own codebase, and a long handoff where what UX designed was reinterpreted ticket by ticket. AI prototyping was speeding up too, with nothing keeping its output in line with Zest, our design system.':
        'Nove marcas, cada uma com sua própria base de código, e um handoff longo em que o que o UX desenhava era reinterpretado ticket a ticket. Prototipar com IA também ficava mais rápido, sem nada que mantivesse o resultado alinhado ao Zest, nosso design system.',
    'I shipped production code myself, then turned it into tools for the whole team.':
        'Coloquei código em produção eu mesmo e depois transformei isso em ferramentas para o time inteiro.',
    'A suite of Claude Code commands to create, iterate, test, and publish prototypes, and to implement UI changes directly in React and React Native, packaged as a UX plugin in HelloFresh\'s shared AI repository.':
        'Um conjunto de comandos no Claude Code para criar, iterar, testar e publicar protótipos, e para implementar mudanças de UI direto em React e React Native, empacotado como um plugin de UX no repositório de IA compartilhado da HelloFresh.',

    // ── Briefs · The Pets Table ──────────────────────────────────────────────
    'Three years as the sole product designer of HelloFresh\'s fresh dog food brand, from launch to a subscription built around how dogs actually eat.':
        'Três anos como único product designer da marca de comida fresca para cães da HelloFresh, do lançamento a uma assinatura pensada em como os cães realmente comem.',
    'A dog food brand running on a front end built for human meal kits.':
        'Uma marca de comida para cães rodando num front-end feito para meal kits de humanos.',
    'The white-label platform had no idea what a pet profile was, couldn\'t handle multi-pet households or add-ons, and assumed weekly deliveries when dog food runs on cadences of four to eight weeks.':
        'A plataforma white-label não sabia o que era um perfil de pet, não lidava com casas com vários cachorros nem com add-ons, e pressupunha entregas semanais, quando comida para cães funciona em cadências de quatro a oito semanas.',
    'I designed the whole subscription, and tested every bet before scaling it.':
        'Desenhei a assinatura inteira e testei cada aposta antes de escalar.',
    'Mapped the system with OOUX, built the Figma and Zest foundations, and validated changes through interviews, usability tests, and A/B tests: the acquisition quiz, checkout, delivery dashboard, add-ons store, and variable delivery cadence, some of it shipped in production code by me.':
        'Mapeei o sistema com OOUX, construí as fundações no Figma e no Zest e validei as mudanças com entrevistas, testes de usabilidade e testes A/B: o quiz de aquisição, o checkout, o painel de entregas, a loja de add-ons e a cadência de entrega variável, parte disso entregue por mim direto no código de produção.',

    // ── Briefs · Móvix ───────────────────────────────────────────────────────
    'An MVP for CAIXA that moved home financing in Brazil from paperwork and branch visits to a simulation anyone could run on their phone.':
        'Um MVP para a CAIXA que levou o financiamento imobiliário no Brasil da papelada e das idas à agência para uma simulação que qualquer pessoa conseguia fazer no celular.',
    'Financing a home meant paperwork, queues, and no idea how much you could borrow.':
        'Financiar uma casa significava papelada, fila e nenhuma ideia de quanto dava para financiar.',
    'Applying through CAIXA required in-person appointments and gave you no view of your own application. Most people needed a broker just to get an estimate.':
        'Pedir um financiamento pela CAIXA exigia atendimento presencial e não dava nenhuma visibilidade do próprio processo. A maioria das pessoas precisava de um corretor só para ter uma estimativa.',
    'I designed the simulation and application flow from scratch.':
        'Desenhei do zero o fluxo de simulação e de pedido de financiamento.',
    'Ran workshops with stakeholders to define the features, mapped the information architecture, and designed the full flow alongside Jenny Soares. We then tested it with real users at a home financing fair in Brasília.':
        'Conduzi workshops com os stakeholders para definir as features, mapeei a arquitetura da informação e desenhei o fluxo completo junto da Jenny Soares. Depois testamos com usuários reais numa feira de financiamento em Brasília.',

    // ── Briefs · MVP Factory · Schwarzkopf ───────────────────────────────────
    'Ten interviews to help Schwarzkopf decide, before building anything, whether women in Germany would trust an AI to analyse their hair.':
        'Dez entrevistas para ajudar a Schwarzkopf a decidir, antes de construir qualquer coisa, se mulheres na Alemanha confiariam numa IA para analisar seus cabelos.',
    'Would people trust an AI with their hair?':
        'As pessoas confiariam o próprio cabelo a uma IA?',
    'Schwarzkopf had a prototype of an AI hair analysis app and needed an answer before committing budget to building it.':
        'A Schwarzkopf tinha um protótipo de um app de análise capilar com IA e precisava de uma resposta antes de comprometer orçamento com a construção.',
    'I ran the research end to end.':
        'Conduzi a pesquisa de ponta a ponta.',
    'Screening criteria, interview script, ten moderated sessions with a native German interviewer, synthesis in Dovetail with quotes behind every insight, and a report to Henkel with a clear go / no-go recommendation.':
        'Critérios de triagem, roteiro de entrevista, dez sessões moderadas com uma entrevistadora alemã nativa, síntese no Dovetail com citações sustentando cada insight, e um relatório para a Henkel com uma recomendação clara de seguir ou não.',

    // Divider labels reused by several studies
    'Outcome': 'Resultado',
    'The Problem': 'O Problema',
    'Design Process': 'Processo de Design',
    'Methods': 'Métodos',
    'Credits': 'Créditos',

    // ── HelloFresh · design transformation ───────────────────────────
    'Building the AI workflow that takes HelloFresh designers from idea to production':
        'Construindo o workflow de IA que leva os designers da HelloFresh da ideia à produção',
    'In early 2026, I joined the Consumer Acceleration team at HelloFresh with a mandate to close the gap between UX design and production engineering, using AI as the accelerant. What started as individual exploration with Claude Code grew into a team-wide movement, a new internal toolchain, and a new standard for how designers at HelloFresh ship.':
        'No começo de 2026, entrei no time de Consumer Acceleration da HelloFresh com a missão de fechar a lacuna entre o design de UX e a engenharia de produção, usando IA como acelerador. O que começou como uma exploração individual com o Claude Code virou um movimento do time inteiro, uma nova cadeia de ferramentas interna e um novo padrão de como os designers da HelloFresh entregam.',

    'Designer in production code': 'Designer em código de produção',
    'First designer at HelloFresh to merge code directly into production, setting a precedent that grew into an organisation-wide movement.':
        'Primeiro designer da HelloFresh a fazer merge de código direto em produção, criando um precedente que virou um movimento em toda a organização.',
    'AI Pioneer': 'Pioneiro em IA',
    'Skills, Agents and Commands': 'Skills, agentes e comandos',
    'A full AI workflow covering prototype creation, iteration, testing, publishing, and design-to-code workflows.':
        'Um workflow completo de IA cobrindo criação de protótipos, iteração, testes, publicação e fluxos de design para código.',
    'HelloFresh Brands affected': 'Marcas da HelloFresh impactadas',
    'The new design-to-code workflow changed how features are built across all nine HelloFresh brands, giving each one faster, higher-fidelity output and less engineering overhead.':
        'O novo workflow de design para código mudou a forma como as funcionalidades são construídas nas nove marcas da HelloFresh, dando a cada uma entregas mais rápidas, de maior fidelidade e com menos sobrecarga de engenharia.',
    'Designers Supported': 'Designers apoiados',
    'Enabled designers across the organisation to prototype with code and work directly in production, moving beyond static handoffs to a workflow where designers ship their own changes.':
        'Capacitei designers de toda a organização a prototipar com código e trabalhar direto em produção, indo além dos handoffs estáticos para um fluxo em que designers entregam as próprias mudanças.',

    'Spec-Machine: the AI brain of our UX.': 'Spec-Machine: o cérebro de IA do nosso UX.',
    'Spec-Machine is HelloFresh\'s internal AI repository, a shared hub where teams collaborate, publish commands, and improve the context available to AI agents across the company. Built primarily around Claude Code, it gives every team a way to contribute to and benefit from a growing library of skills. I contributed to building and shipping the specx-ux plugin: a growing suite of UX-specific commands covering the full design workflow.':
        'A Spec-Machine é o repositório interno de IA da HelloFresh, um hub compartilhado onde os times colaboram, publicam comandos e melhoram o contexto disponível para os agentes de IA da empresa inteira. Construída principalmente em torno do Claude Code, ela dá a cada time uma forma de contribuir com uma biblioteca de skills em crescimento e de se beneficiar dela. Eu ajudei a construir e a lançar o plugin specx-ux: um conjunto crescente de comandos específicos de UX que cobre o workflow de design inteiro.',
    'As the owner of the UX Space Inside Spec-Machine, I\'ve developed new workflows for prototyping, user testing, publishing, and implementing designs directly into production with a set of agents and skills.':
        'Como responsável pelo espaço de UX dentro da Spec-Machine, desenvolvi novos fluxos de prototipagem, teste com usuários, publicação e implementação de designs direto em produção, com um conjunto de agentes e skills.',
    'Production-like prototype created with prototyping agent in Claude Code.':
        'Protótipo com cara de produção criado com o agente de prototipagem no Claude Code.',

    'Some of the commands I created for UX': 'Alguns dos comandos que criei para UX',
    'Pull research, prior specs, and product context into a synthesised set of insights, so a brief starts from evidence instead of a blank page.':
        'Reúne pesquisas, specs anteriores e contexto de produto num conjunto sintetizado de insights, para que o briefing comece a partir de evidência, e não de uma página em branco.',
    'Turn those insights into a framed design direction, interviewing you along the way to pressure-test whether the problem is worth solving.':
        'Transforma esses insights numa direção de design enquadrada, entrevistando você pelo caminho para testar se o problema vale a pena ser resolvido.',
    'Generate production-quality HTML prototypes from text, Figma exports, screenshots, or existing HTML, in minutes, across all 9 HF brands.':
        'Gera protótipos em HTML com qualidade de produção a partir de texto, exports do Figma, screenshots ou HTML existente, em minutos, para todas as 9 marcas da HF.',
    'Spin up a live local server with a side-panel feedback interface. Describe a change in plain language; Claude applies it in real time.':
        'Sobe um servidor local ao vivo com um painel lateral de feedback. Você descreve a mudança em linguagem natural e o Claude aplica em tempo real.',
    'Run a prototype through emulated user personas to surface usability issues before a single test session is scheduled.':
        'Roda o protótipo com personas de usuário emuladas para revelar problemas de usabilidade antes de agendar uma única sessão de teste.',
    'Implement UI changes directly in React (web) and React Native using Prototype Metadata, the bridge between design intent and production code.':
        'Implementa mudanças de UI direto em React (web) e React Native usando o Prototype Metadata, a ponte entre a intenção de design e o código de produção.',
    'Update and publish prototypes to the Prototypes Playground on Vercel, shared across squads and brands.':
        'Atualiza e publica protótipos no Prototypes Playground na Vercel, compartilhado entre squads e marcas.',
    'Automated environment check and guided setup, so every designer could get running with Claude Code without needing an engineer to help.':
        'Verificação automática do ambiente e configuração guiada, para que qualquer designer conseguisse rodar o Claude Code sem precisar da ajuda de um engenheiro.',

    'Prototypes can be created as free-form, balanced, or strict, varying how closely they adhere to the design system. They\'re also convertible between thresholds, so a free-form exploration can be tightened into something production-ready.':
        'Os protótipos podem ser criados como livres, equilibrados ou estritos, variando o quanto seguem o design system. Também são conversíveis entre esses níveis, então uma exploração livre pode ser apertada até virar algo pronto para produção.',
    'An example of a free-form prototype transformed into strict.':
        'Um exemplo de protótipo livre transformado em estrito.',

    'The Design-to-Code Gap': 'A lacuna entre design e código',
    'HelloFresh\'s UX team spanned nine brands across different codebases, each with its own gap between what was designed and what shipped, tickets filed, specs reinterpreted, intent diluted with every hand. Consumer Acceleration was tasked with closing it, betting on AI, Claude Code as the interface between UX intention and production reality. My role was to explore what that looked like, then make it real for the whole team.':
        'O time de UX da HelloFresh cobria nove marcas espalhadas por bases de código diferentes, cada uma com sua própria lacuna entre o que era desenhado e o que era entregue: tickets abertos, specs reinterpretadas, intenção diluída a cada troca de mãos. O Consumer Acceleration recebeu a missão de fechar essa lacuna apostando em IA, com o Claude Code como interface entre a intenção de UX e a realidade da produção. Meu papel foi explorar como isso poderia funcionar e depois torná-lo real para o time inteiro.',
    'Following my own experiments shipping code, I was able to move the design team toward a new standard: we own the UI, not just in static designs, but directly in the product.':
        'A partir dos meus próprios experimentos entregando código, consegui levar o time de design a um novo padrão: a UI é nossa, não só nos designs estáticos, mas direto no produto.',

    'Main goal: UX Quality': 'Objetivo principal: qualidade de UX',
    'With the increasing pace of AI-assisted prototyping, there was a real risk that Zest, HelloFresh\'s design system, would get left behind, its rules and consistency disregarded when it came to implementation. My main focus was to keep the UX quality of what we ship: teaching designers how to create prototypes that match production, and making targeted fixes directly in the code.':
        'Com o ritmo crescente da prototipagem assistida por IA, havia um risco real de o Zest, o design system da HelloFresh, ficar para trás, com suas regras e consistência ignoradas na hora da implementação. Meu foco principal foi manter a qualidade de UX do que entregamos: ensinar designers a criar protótipos alinhados com a produção e fazer correções pontuais direto no código.',
    'UX Quality with Claude Code, the public guide for designers working directly in production.':
        'UX Quality with Claude Code, o guia público para designers que trabalham direto em produção.',
    'The workflow for UX quality addressed both prevention and recovery issues that might come up with rapid prototyping.':
        'O fluxo de qualidade de UX tratava tanto da prevenção quanto da correção dos problemas que a prototipagem rápida pode trazer.',
    'Prevention meant checking design readiness against Zest before a spec went to dev. Recovery meant using Claude to make targeted code fixes in production, sometimes in a single prompt, and opening a PR for review.':
        'Prevenção significava checar se o design estava pronto segundo o Zest antes de a spec ir para o desenvolvimento. Correção significava usar o Claude para fazer ajustes pontuais no código de produção, às vezes em um único prompt, e abrir um PR para revisão.',

    'Prototypes Playground': 'Prototypes Playground',
    'One of the recurring problems with AI-generated prototypes was that they lived on individual machines, shared in Slack, opened once, then lost. The Prototypes Playground was the answer: a shared GitHub repository connected to a Vercel deployment where designers published and referenced prototypes across squads.':
        'Um problema recorrente dos protótipos gerados por IA era que eles viviam em máquinas individuais, eram compartilhados no Slack, abertos uma vez e depois se perdiam. O Prototypes Playground foi a resposta: um repositório compartilhado no GitHub conectado a um deploy na Vercel, onde designers publicavam e referenciavam protótipos entre squads.',
    'Prototypes Playground, a shared Vercel environment for AI-generated prototypes across all HF brands.':
        'Prototypes Playground, um ambiente compartilhado na Vercel para protótipos gerados por IA em todas as marcas da HF.',
    'Any designer could push a prototype to the Playground using /push-prototype and immediately share a stable URL. Squads used these URLs in Confluence, Jira tickets, and usability test sessions. It made AI prototyping feel like a real part of the workflow, not a side experiment.':
        'Qualquer designer podia publicar um protótipo no Playground usando /push-prototype e compartilhar na hora uma URL estável. As squads usavam essas URLs no Confluence, em tickets do Jira e em sessões de teste de usabilidade. Isso fez a prototipagem com IA parecer parte de verdade do workflow, e não um experimento paralelo.',

    'Community & Culture': 'Comunidade e cultura',
    'Tools and documentation only go so far. The more durable change came from building a culture around them. I\'ve established regular sessions for an audience that includes designers, researchers, and product managers, an open space to share explorations.':
        'Ferramentas e documentação só levam até certo ponto. A mudança mais duradoura veio de construir uma cultura em torno delas. Criei sessões regulares para um público que inclui designers, pesquisadores e product managers: um espaço aberto para compartilhar explorações.',
    'I\'ve established UX AI Office Hours 💫 that happen biweekly, where everyone can join and get their questions answered.':
        'Criei o UX AI Office Hours 💫, que acontece a cada duas semanas, onde qualquer pessoa pode entrar e tirar suas dúvidas.',
    'Some of the trainings I did to teach people how to prototype using the new workflows.':
        'Alguns dos treinamentos que fiz para ensinar as pessoas a prototipar com os novos fluxos.',

    'Ripple Effects': 'Efeitos em cadeia',
    'The impact reached well beyond the UX team. What started as designer-focused tooling spread across disciplines as each team found its own way in.':
        'O impacto foi muito além do time de UX. O que começou como ferramenta voltada para designers se espalhou entre as disciplinas conforme cada time encontrou seu próprio caminho.',
    'Adoption across disciplines': 'Adoção entre as disciplinas',
    'design → code': 'design → código',
    '11 AI commands': '11 comandos de IA',
    'code-native tokens': 'tokens nativos em código',
    'AI-powered QA': 'QA com IA',
    'AI prototypes': 'protótipos com IA',
    'Product Designers': 'Product Designers',
    'Creating AI prototypes, merging production code, Zest components, React Native variants, accessibility fixes':
        'Criando protótipos com IA, fazendo merge de código de produção, componentes do Zest, variantes em React Native e correções de acessibilidade',
    'UX Writers': 'UX Writers',
    'Content review, auditing, and creation integrated directly into Spec-Machine and prototyping workflow':
        'Revisão, auditoria e criação de conteúdo integradas direto na Spec-Machine e no fluxo de prototipagem',
    'Motion Designers': 'Motion Designers',
    'Creating and implementing motion tokens in code, replacing ProtoPie and After Effects':
        'Criando e implementando motion tokens em código, substituindo ProtoPie e After Effects',
    'Engineers': 'Engenheiros',
    'Getting a more strategic voice by being able to present business ideas in rapid generated prototypes while also supporting AI implementation of designs directly into production code.':
        'Ganhando uma voz mais estratégica ao poder apresentar ideias de negócio em protótipos gerados rapidamente, além de apoiar a implementação por IA dos designs direto no código de produção.',
    'Product Managers': 'Product Managers',
    'Presenting and evaluating ideas with AI prototypes rather than text-only product requirements documents':
        'Apresentando e avaliando ideias com protótipos de IA em vez de documentos de requisitos só em texto',

    'Into Design Systems in Berlin': 'Into Design Systems em Berlim',
    'In February 2026, I presented at the Into Design Systems meetup hosted at HelloFresh\'s Berlin office, sharing our AI-enabled design system work publicly for the first time.':
        'Em fevereiro de 2026, apresentei no meetup Into Design Systems no escritório da HelloFresh em Berlim, compartilhando publicamente pela primeira vez nosso trabalho de design system com IA.',
    'Into Design Systems Meetup at HelloFresh in February 2026.':
        'Meetup Into Design Systems na HelloFresh em fevereiro de 2026.',

    'What started as individual exploration became a team-wide movement, and a new standard for how designers at HelloFresh ship. The infrastructure, the toolchain, the culture, and the precedent are all still running.':
        'O que começou como exploração individual virou um movimento do time inteiro e um novo padrão de como os designers da HelloFresh entregam. A infraestrutura, a cadeia de ferramentas, a cultura e o precedente seguem todos de pé.',
    'The most lasting signal: designers across the company began merging production code as a normal part of their job, not as an exception. Not because they were told to, but because the tools made it possible and the community made it feel safe. That shift, from design being a handoff layer to design being a direct contributor to what ships, is the thing I\'m most proud of.':
        'O sinal mais duradouro: designers da empresa inteira passaram a fazer merge de código de produção como parte normal do trabalho, não como exceção. Não porque mandaram, mas porque as ferramentas tornaram isso possível e a comunidade fez com que parecesse seguro. Essa virada, de o design ser uma camada de handoff para ser um contribuinte direto do que é entregue, é do que mais me orgulho.',

    // Deep dive · meal-linked add-on pairing
    'Deep Dive · Meal-linked add-on pairing': 'Mergulho · Add-on pareado à refeição',
    'One case, end to end: how a question about add-on sales went through the workflow, from evidence to a prototype to a pull request in the production codebase.':
        'Um case de ponta a ponta: como uma pergunta sobre a venda de add-ons passou pelo workflow, da evidência ao protótipo e a um pull request no código de produção.',
    'The agent searches experiments, past research and customer data for what\'s already known.':
        'O agente busca em experimentos, pesquisas anteriores e dados de clientes o que já se sabe.',
    'The question: <strong class="font-semibold text-white">What are some ways to improve add-on sales and selection, specifically by surfacing add-ons already on the meal-selection page?</strong>':
        'A pergunta: <strong class="font-semibold text-white">Que caminhos existem para melhorar a venda e a escolha de add-ons, especificamente mostrando os add-ons já na página de seleção de refeições?</strong>',
    'The agent weighs the evidence and turns it into hypotheses.':
        'O agente pesa as evidências e as transforma em hipóteses.',
    'The agent generates a series of 10 hypotheses, each with a confidence level based on how recent the research is, the group of people researched, the type of research and other factors. H1 is the one this case tests, and H5 is why the design shows one named item.':
        'O agente gera uma série de 10 hipóteses, cada uma com um nível de confiança baseado em quão recente é a pesquisa, no grupo de pessoas pesquisado, no tipo de pesquisa e em outros fatores. A H1 é a que este case testa, e a H5 é o motivo de o design mostrar um único item com nome.',
    'The agent writes a design brief for the prototyper, based on the selected hypothesis.':
        'O agente escreve um brief de design para o prototyper, a partir da hipótese escolhida.',
    'The agent builds an interactive prototype from production code and the Zest design system.':
        'O agente constrói um protótipo interativo a partir do código de produção e do design system Zest.',
    'Once a meal is added and the modal\'s pairing is skipped, a "Best pair for this meal" module appears on the card.':
        'Quando uma refeição é adicionada e a combinação do modal é pulada, um módulo "Melhor par para esta refeição" aparece no card.',
    'The agents put the prototype in front of an emulated persona and five expert reviewers.':
        'Os agentes colocam o protótipo diante de uma persona emulada e de cinco revisores especialistas.',
    'The agent implements the design in production code and opens a pull request.':
        'O agente implementa o design no código de produção e abre um pull request.',
    'Built with Zest components in HelloFresh\'s web codebase, and sent to engineering for review. The designer can then make further UI improvements directly in production code.':
        'Construído com componentes do Zest no código web da HelloFresh e enviado para revisão da engenharia. A partir daí, o designer pode seguir fazendo melhorias de UI direto no código de produção.',
    'Primary': 'Principal',
    'Supported': 'Sustentada',
    'A recipe-linked add-on recommendation surface at meal selection will be net-additive to add-on uptake, versus the Add-Ons in Main Menu baseline.':
        'Uma recomendação de add-on ligada à receita, na seleção de refeições, vai somar à adesão de add-ons em relação à linha de base de Add-Ons no Menu Principal.',
    'Presenting add-ons as specific individual items rather than category tiles improves click-to-save conversion and Add-on Net Revenue versus the category-tile baseline.':
        'Apresentar add-ons como itens individuais e específicos, em vez de blocos de categoria, melhora a conversão de clique para salvar e a receita líquida de add-ons em relação à linha de base com blocos de categoria.',
    'Design Brief: meal-linked add-on on the meal-selection card': 'Brief de design: add-on pareado à refeição no card de seleção',
    'Purpose and success': 'Propósito e sucesso',
    'Give customers a low-friction way to add a complementary item directly from the meal-selection grid, without duplicating or reinventing the product page\'s pairing logic. Success means incremental add-on attach rate on the selection screen, without adding a new recommendation system to build or maintain.':
        'Dar ao cliente um jeito de baixo atrito para adicionar um item complementar direto da grade de seleção de refeições, sem duplicar nem reinventar a lógica de combinação da página do produto. Sucesso significa uma taxa de add-on incremental na tela de seleção, sem criar um novo sistema de recomendação para construir ou manter.',
    'Primary user action': 'Ação principal do usuário',
    'After selecting a meal, notice and optionally check the one paired item shown beneath that meal\'s card, mirroring the checkbox interaction the product page already uses for pairings.':
        'Depois de escolher uma refeição, perceber e, se quiser, marcar o único item pareado que aparece abaixo do card, espelhando a interação de caixa de seleção que a página do produto já usa para combinações.',
    'Content and data': 'Conteúdo e dados',
    'One add-on per paired meal, maximum. The card reads the same pairing list already computed for the product page and shows only the top-ranked entry. No new ranking logic is built for this surface, and if there\'s no pairing, the module doesn\'t render.':
        'No máximo um add-on por refeição pareada. O card lê a mesma lista de combinações já calculada para a página do produto e mostra só a primeira colocada. Nenhuma lógica nova de ranking é criada para esta superfície e, se não houver combinação, o módulo não aparece.',
    'Copy and voice': 'Texto e tom',
    'Sharp for the price and action, encouraging for the descriptive label, with no pressure language. The label reads "Best pair for this meal", grounded in the specific meal, and the checkbox\'s accessible name is built on the action: "Add [item name]".':
        'Direto no preço e na ação, encorajador no rótulo descritivo, sem linguagem de pressão. O rótulo diz "Melhor par para esta refeição", ancorado na refeição específica, e o nome acessível da caixa de seleção é construído a partir da ação: "Adicionar [nome do item]".',
    'Visual direction': 'Direção visual',
    'Restrained: HelloFresh\'s accent on a neutral canvas, a utility surface rather than a campaign moment. It extends the live menu grid instead of replacing it, and reads as lightweight and secondary, not a second hero card.':
        'Contida: o acento da HelloFresh sobre uma base neutra, uma superfície utilitária e não um momento de campanha. Estende a grade do cardápio em vez de substituí-la e se lê como algo leve e secundário, não como um segundo card de destaque.',
    'Constraints': 'Restrições',
    'Zero presence on an unselected card, since selection is what mounts it. It must not add friction that slows meal choice, must show one specific item instead of a category or carousel, and must not read as a promotion. Its mount and unmount are announced to assistive tech.':
        'Nenhuma presença num card não selecionado, já que é a seleção que faz o módulo aparecer. Não pode adicionar atrito que atrase a escolha da refeição, precisa mostrar um item específico em vez de uma categoria ou carrossel e não pode parecer uma promoção. A entrada e a saída do módulo são anunciadas para tecnologias assistivas.',
    'Key states': 'Estados principais',
    'Meal unselected: the module has no presence. Meal selected with a best pair: the module mounts with image, name, price, "Best pair for this meal" and an unchecked checkbox. No pairing data: the module stays absent, with no broken or placeholder card.':
        'Refeição não selecionada: o módulo não aparece. Refeição selecionada com um melhor par: o módulo surge com imagem, nome, preço, "Melhor par para esta refeição" e uma caixa de seleção desmarcada. Sem dados de combinação: o módulo continua ausente, sem card quebrado nem provisório.',
    'It\'s a pre-test, not a replacement for research: the persona and the experts review the prototype through their own lenses to find pitfalls in the design before it\'s tested with real people. The persona, on the add-on: <em class="text-white">“I\'d have tapped that checkbox faster if it told me the bread was baked locally or something. Right now it\'s just bread with a price tag.”</em> All the findings come back as one report with prioritized fixes.':
        'É um pré-teste, não um substituto para a pesquisa: a persona e os especialistas revisam o protótipo cada um pela sua lente para encontrar armadilhas no design antes de testá-lo com pessoas reais. A persona, sobre o add-on: <em class="text-white">“Eu teria marcado essa caixa mais rápido se ela dissesse que o pão é assado localmente ou algo assim. Do jeito que está, é só um pão com uma etiqueta de preço.”</em> Todos os achados voltam como um único relatório com correções priorizadas.',

    // ── The Pets Table ───────────────────────────────────────────────
    'Designing the subscription that makes fresh dog food an easy habit':
        'Desenhando a assinatura que torna comida fresca para cachorros um hábito fácil',
    'The Pets Table is HelloFresh\'s fresh, human-grade dog food subscription, a brand built almost from scratch inside the HelloFresh ecosystem. For three years I was the sole product designer embedded in the TPT squad, owning UX across the full funnel, post-checkout, and member experience. Every decision was a negotiation between innovation, speed, and system reuse.':
        'The Pets Table é a assinatura de comida fresca para cães da HelloFresh: uma marca construída quase do zero dentro do ecossistema da empresa. Durante três anos fui o único product designer alocado na squad da TPT, responsável pelo UX de todo o funil, do pós-checkout e da experiência de membro. Cada decisão foi uma negociação entre inovação, velocidade e reúso do sistema.',
    'The Pets Table is HelloFresh\'s fresh, human-grade dog food subscription, a brand built almost from scratch inside the HelloFresh ecosystem. For three years I was the sole product designer, owning UX across the full funnel, post-checkout, and member experience.':
        'The Pets Table é a assinatura de comida fresca para cães da HelloFresh: uma marca construída quase do zero dentro do ecossistema da empresa. Durante três anos fui o único product designer, responsável pelo UX de todo o funil, do pós-checkout e da experiência de membro.',
    'Sr. Product Designer': 'Product Designer Sênior',
    'OOUX': 'OOUX',

    '3 yrs': '3 anos',
    'Sole designer': 'Designer único',
    'Owned TPT\'s full product UX from launch through 2025, funnel, checkout, post-checkout, and member experience.':
        'Responsável por todo o UX de produto da TPT do lançamento até 2025: funil, checkout, pós-checkout e experiência de membro.',
    'Brands influenced': 'Marcas influenciadas',
    'TPT patterns adopted by Good Chop, Factor, and core HelloFresh, including cancellation UX and Figma structure.':
        'Padrões da TPT adotados por Good Chop, Factor e pela HelloFresh principal, incluindo o UX de cancelamento e a estrutura no Figma.',
    'Pioneer': 'Pioneiro',
    'Design-to-Code Workflows': 'Fluxos de design para código',
    'TPT was where I started my design-to-code journey, experimenting with features in production, building the knowledge to bridge the gap between design intent and engineering output.':
        'A TPT foi onde comecei minha jornada de design para código, experimentando com funcionalidades em produção e construindo o conhecimento para unir a intenção de design ao resultado da engenharia.',
    'CVR +': 'CVR +',
    'Uplifts as main goal': 'Uplifts como meta principal',
    'Growth was our primary target. I drove conversion improvements across the funnel, adding goals and allergen questions, refining UX flows, introducing two-step loading states, and layering in social proof at key moments.':
        'Crescimento era nosso alvo principal. Conduzi melhorias de conversão em todo o funil: adicionei perguntas sobre objetivos e alergias, refinei fluxos de UX, introduzi estados de carregamento em duas etapas e inseri prova social em momentos-chave.',

    'From White Label to Own Identity': 'Do white label à identidade própria',
    'The Pets Table was HelloFresh\'s first pet food brand. Before TPT, HelloFresh already had a white-label front-end solution shared across its new brands. Factor, Green Chef, Chef\'s Plate, Every Plate, and Good Chop all launched using this common infrastructure. I\'d been working within that system myself, focused on meal selection and post-checkout experience for those brands.':
        'The Pets Table foi a primeira marca de comida para pets da HelloFresh. Antes da TPT, a HelloFresh já tinha uma solução de front-end white label compartilhada entre suas novas marcas. Factor, Green Chef, Chef\'s Plate, Every Plate e Good Chop foram lançadas todas sobre essa infraestrutura comum. Eu já trabalhava dentro desse sistema, focado na seleção de refeições e na experiência de pós-checkout dessas marcas.',
    'The white-label post-checkout shell shared across Factor, Chef\'s Plate, EveryPlate, Good Chop, and others, and how The Pets Table started':
        'A casca de pós-checkout white label compartilhada entre Factor, Chef\'s Plate, EveryPlate, Good Chop e outras, e como a The Pets Table começou',
    'Adapting the white-label to pet food meant working with fundamentally different constraints. The existing system was built around humans choosing weekly meals; TPT needed to handle pet profiles, breed-specific content, multi-pet households, and an add-ons model that had no equivalent elsewhere. That gap drove a gradual divergence, a redesigned add-ons store entry point, quick actions on the delivery dashboard, and dedicated pet navigation were all features the white-label was never designed for. Several of those solutions eventually made their way back, adopted and adapted by other brands.':
        'Adaptar o white label para comida de pet significou lidar com restrições fundamentalmente diferentes. O sistema existente era construído em torno de pessoas escolhendo refeições semanais; a TPT precisava dar conta de perfis de pets, conteúdo por raça, casas com vários pets e um modelo de adicionais sem equivalente em nenhum outro lugar. Essa distância gerou uma divergência gradual: um novo ponto de entrada para a loja de adicionais, ações rápidas no painel de entregas e uma navegação dedicada por pet eram funcionalidades para as quais o white label nunca havia sido pensado. Várias dessas soluções acabaram voltando, adotadas e adaptadas por outras marcas.',
    'The Pets Table dashboard, branching out from the white-label with pet-specific UX: improved add-ons access, quick actions, and pet navigation':
        'O painel da The Pets Table, se afastando do white label com UX específico para pets: acesso melhorado aos adicionais, ações rápidas e navegação por pet',
    'I had to be highly strategic: deciding when to push for innovation, when to negotiate for impactful small changes, and when to lean on cross-brand learnings to move fast.':
        'Eu precisava ser muito estratégico: decidir quando insistir na inovação, quando negociar pequenas mudanças de impacto e quando me apoiar em aprendizados de outras marcas para andar rápido.',
    'Over three years I shaped TPT\'s end-to-end product experience, from the acquisition funnel through to delivery management, pet profile, and member retention. I ran user research, built design systems foundations, drove measurable conversion improvements, and eventually pioneered AI-assisted design-to-code workflows that set a new bar across HelloFresh.':
        'Ao longo de três anos moldei a experiência de produto da TPT de ponta a ponta, do funil de aquisição até a gestão de entregas, o perfil do pet e a retenção de membros. Conduzi pesquisa com usuários, construí as fundações do design system, gerei melhorias mensuráveis de conversão e, no fim, fui pioneiro em fluxos de design para código assistidos por IA que criaram um novo patamar em toda a HelloFresh.',
    'The main plans page we kept iterating on since when the brand was launched.':
        'A página principal de planos, que seguimos iterando desde o lançamento da marca.',

    '2023 · Launch & Foundations': '2023 · Lançamento e fundações',
    'I joined TPT at a critical moment: the brand was launching and needed a full product design foundation built quickly. The first major bet was the quiz, competitors like Nom Nom and The Farmer\'s Dog had made it a cornerstone of the pet food experience, a way to personalise the product and build trust before asking for a purchase.':
        'Entrei na TPT em um momento crítico: a marca estava sendo lançada e precisava de uma fundação completa de design de produto construída rapidamente. A primeira grande aposta foi o quiz. Concorrentes como Nom Nom e The Farmer\'s Dog já o tinham como pilar da experiência de comida para pets, uma forma de personalizar o produto e criar confiança antes de pedir a compra.',
    'The Pets Table launched with a quiz, which became the template that every other HelloFresh brand adopted.':
        'A The Pets Table foi lançada com um quiz, que virou o modelo adotado por todas as outras marcas da HelloFresh.',
    'The Pets Table quiz, a first for HelloFresh, later adopted across all brands':
        'O quiz da The Pets Table, um inédito na HelloFresh, depois adotado por todas as marcas',
    'Funnel & Onboarding Design': 'Design do funil e do onboarding',
    'Designed and refined the core acquisition funnel, the quiz, plan selection, and checkout, from early MVP through post-launch iterations. Every step was built with conversion and clarity in mind.':
        'Desenhei e refinei o funil de aquisição principal, o quiz, a seleção de planos e o checkout, do MVP inicial às iterações pós-lançamento. Cada etapa foi construída pensando em conversão e clareza.',
    'Zest-Compliant UI': 'UI aderente ao Zest',
    'Zest (HelloFresh\'s newest design system) is their multi-brand system. Because TPT and Zest were born at the same time, we became the first HelloFresh brand to reach full compliance, something only possible with a brand built from scratch.':
        'O Zest (o design system mais recente da HelloFresh) é o sistema multimarca deles. Como a TPT e o Zest nasceram ao mesmo tempo, viramos a primeira marca da HelloFresh a alcançar aderência total, algo só possível com uma marca construída do zero.',
    'Object-Oriented UX': 'UX Orientado a Objetos',
    'I used OOUX to map the core objects of the system, the dog, the delivery, the meals, before touching any screen design. Understanding those relationships upfront let me design complex features with confidence, for example: multi-pet support, adjustable daily calories, and flexible delivery cadences.':
        'Usei OOUX para mapear os objetos centrais do sistema, o cão, a entrega, as refeições, antes de tocar em qualquer tela. Entender essas relações de antemão me permitiu desenhar funcionalidades complexas com segurança, por exemplo: suporte a vários pets, calorias diárias ajustáveis e cadências de entrega flexíveis.',
    'Figma MasterFlow & Component Library': 'MasterFlow no Figma e biblioteca de componentes',
    'Established TPT\'s Figma MasterFlow and component library as canonical references. TPT became one of the most Zest-compliant brands at HelloFresh from launch, a standard I maintained throughout.':
        'Estabeleci o MasterFlow no Figma e a biblioteca de componentes da TPT como referências canônicas. A TPT virou uma das marcas mais aderentes ao Zest na HelloFresh desde o lançamento, um padrão que mantive o tempo todo.',
    'Some of my OOUX Mapping and Explorations': 'Alguns dos meus mapeamentos e explorações em OOUX',

    'Research and Experimentation as a Habit': 'Pesquisa e experimentação como hábito',
    'With foundations in place, 2024 was about depth, running proper research programs, validating new features before build, and shipping a steady stream of measurable improvements across the funnel. We ran numerous A/B tests throughout, which gave us the data to decide which features were worth keeping and which ones to drop.':
        'Com as fundações prontas, 2024 foi sobre profundidade: rodar programas de pesquisa de verdade, validar novas funcionalidades antes de construir e entregar um fluxo constante de melhorias mensuráveis no funil. Rodamos diversos testes A/B ao longo do ano, o que nos deu os dados para decidir quais funcionalidades valia manter e quais descartar.',
    'Two-step loading: a feature to prepare users before seeing the plans page.':
        'Carregamento em duas etapas: uma funcionalidade para preparar os usuários antes de verem a página de planos.',
    'New features were validated through user research and usability testing before a single line was built. We also scaled ongoing insight with <a href="https://sprig.com/" target="_blank" rel="noopener noreferrer" class="underline text-white/70 hover:text-white transition-colors">Sprig</a>, leveraging screen recordings, heatmaps, and surveys to understand real behaviour across the funnel and feed the next round of improvements.':
        'Novas funcionalidades eram validadas com pesquisa e testes de usabilidade antes de escrever uma única linha. Também escalamos a coleta contínua de insights com o <a href="https://sprig.com/" target="_blank" rel="noopener noreferrer" class="underline text-white/70 hover:text-white transition-colors">Sprig</a>, usando gravações de tela, mapas de calor e pesquisas para entender o comportamento real no funil e alimentar a próxima rodada de melhorias.',
    'Conversion wins · 2024': 'Ganhos de conversão · 2024',
    'CVR: Goals question': 'CVR: pergunta de objetivos',
    'Added a goals question to the quiz and redesigned the plans page as part of Funnel 2.0.':
        'Adicionamos uma pergunta sobre objetivos no quiz e redesenhamos a página de planos como parte do Funnel 2.0.',
    'CVR: Social proof': 'CVR: prova social',
    'Introduced social proof on the delivery page in the acquisition funnel.':
        'Introduzimos prova social na página de entrega dentro do funil de aquisição.',
    'CVR: Two-step loading': 'CVR: carregamento em duas etapas',
    'A subtle UX pattern change on the checkout loading state that reduced drop-off.':
        'Uma mudança sutil de padrão de UX no estado de carregamento do checkout que reduziu a evasão.',
    'mCVR: Free items': 'mCVR: itens grátis',
    'Added free items to the order summary. We weren\'t showing them before. Pattern later adopted by Good Chop.':
        'Adicionamos os itens grátis no resumo do pedido. Antes não mostrávamos. O padrão foi depois adotado pela Good Chop.',
    'A low-hanging fruit: displaying free items in the order summary resulted in a very high increase in micro-conversion from this page to the payment page.':
        'Uma fruta no pé: exibir os itens grátis no resumo do pedido gerou um aumento altíssimo na microconversão desta página para a de pagamento.',

    'Deep Dive · Variable Delivery Cadence': 'Mergulho · Cadência de entrega variável',
    'Background': 'Contexto',
    'The Pets Table is a dog food subscription, not a meal kit. One box lasts four, six, eight weeks or longer, cadence, not the weekly delivery, is the unit customers actually live with.':
        'A The Pets Table é uma assinatura de comida para cães, não um kit de refeições. Uma caixa dura quatro, seis, oito semanas ou mais: a cadência, e não a entrega semanal, é a unidade com que o cliente realmente convive.',
    'Problem': 'Problema',
    'The funnel defaults new customers to a long cadence to keep the price per meal competitive. After the discounted trial box, that same default makes the first full box big, and the jump in absolute price is a reason to stop ordering.':
        'O funil coloca novos clientes numa cadência longa por padrão, para manter o preço por refeição competitivo. Depois da caixa experimental com desconto, esse mesmo padrão deixa a primeira caixa cheia grande, e o salto no preço absoluto vira motivo para parar de pedir.',
    'Hypothesis': 'Hipótese',
    'If customers can change their delivery cadence or box size right after they convert, they\'ll order more boxes, because a smaller box is a smaller amount to pay at once.':
        'Se os clientes puderem mudar a cadência de entrega ou o tamanho da caixa logo após converter, vão pedir mais caixas, porque uma caixa menor é um valor menor para pagar de uma vez.',
    'Approach': 'Abordagem',
    'A quick action to change box size right after conversion, backed by CRM timing and the leaflet already shipping in the trial box. Validated through interviews, prototypes, usability testing and an A/B test.':
        'Uma ação rápida para mudar o tamanho da caixa logo após a conversão, apoiada pelo timing do CRM e pelo folheto que já ia dentro da caixa experimental. Validada com entrevistas, protótipos, testes de usabilidade e um teste A/B.',
    'The quick action on the delivery dashboard, changing box size in a few taps, with the weekly price shown for each option and a clear confirmation of when the new cadence starts.':
        'A ação rápida no painel de entregas, mudando o tamanho da caixa em poucos toques, com o preço semanal exibido para cada opção e uma confirmação clara de quando a nova cadência começa.',
    'The solution wasn\'t only a screen. Customers had to know the change was possible at the exact moment the price shock would land, so we solved it in three places at once: a quick action on the delivery dashboard that makes the switch in a few taps, CRM messaging timed around the first full box, and the leaflet already shipping inside the trial box carrying the same message.':
        'A solução não era só uma tela. O cliente precisava saber que a mudança era possível exatamente no momento em que o susto do preço chegaria, então resolvemos em três lugares ao mesmo tempo: uma ação rápida no painel de entregas que faz a troca em poucos toques, mensagens de CRM cronometradas em torno da primeira caixa cheia e o folheto que já ia dentro da caixa experimental levando a mesma mensagem.',
    'Hypothesis vs. Business Goals': 'Hipótese x metas de negócio',
    'Framed the bet against the commercial reality: a low price per meal is what wins the funnel, so anything we did had to protect acquisition while fixing what happened right after it.':
        'Enquadrei a aposta diante da realidade comercial: um preço baixo por refeição é o que vence o funil, então tudo o que fizéssemos tinha que proteger a aquisição enquanto consertava o que acontecia logo depois dela.',
    'Spoke with customers who had been exposed to the feature and never used it, the group that tells you what\'s actually in the way.':
        'Conversei com clientes que foram expostos à funcionalidade e nunca a usaram, o grupo que revela o que está de fato no caminho.',
    'Built the cadence and box size change as a working flow before any engineering time was committed, so it could be tested end to end.':
        'Construí a mudança de cadência e de tamanho de caixa como um fluxo funcional antes de comprometer qualquer tempo de engenharia, para que pudesse ser testado de ponta a ponta.',
    'Usability Testing': 'Testes de usabilidade',
    'Tested whether customers understood what changing box size does to their weekly price, their next delivery date, and how long the food would last.':
        'Testamos se os clientes entendiam o que mudar o tamanho da caixa faz com o preço semanal, com a próxima data de entrega e com a duração da comida.',
    'A/B Testing': 'Testes A/B',
    'Shipped as an experiment and measured against control, which is where the revenue and order rate movement below came from.':
        'Entregue como experimento e medido contra o controle, de onde vieram os movimentos de receita e taxa de pedidos abaixo.',
    'CRM': 'CRM',
    'Aligned lifecycle messaging with the feature so the option to change cadence reached customers around the first full box, not buried in the account settings.':
        'Alinhei as mensagens de ciclo de vida à funcionalidade, para que a opção de mudar a cadência chegasse ao cliente perto da primeira caixa cheia, e não enterrada nas configurações da conta.',
    'Physical Product Inserts': 'Encartes no produto físico',
    'The trial box already ships with a leaflet. We used it to tell customers the box size is theirs to change, connecting the physical product to the digital one.':
        'A caixa experimental já vai com um folheto. Usamos ele para contar ao cliente que o tamanho da caixa é dele para mudar, conectando o produto físico ao digital.',
    'Variable cadence · experiment results': 'Cadência variável · resultados do experimento',
    'Net Revenue': 'Receita líquida',
    'Measured against control in the A/B test, the clearest signal that lowering the amount paid per box didn\'t lower what customers were worth.':
        'Medida contra o controle no teste A/B, o sinal mais claro de que baixar o valor pago por caixa não baixou o valor do cliente.',
    'Gross Revenue': 'Receita bruta',
    'Smaller, more frequent boxes translated into more revenue overall, not less.':
        'Caixas menores e mais frequentes se traduziram em mais receita no total, não em menos.',
    'AOR': 'AOR',
    'More orders per customer, the core hypothesis, confirmed: an easier amount to pay at once means people keep ordering.':
        'Mais pedidos por cliente, a hipótese central, confirmada: um valor mais fácil de pagar de uma vez faz as pessoas continuarem pedindo.',
    '52-week CVA impact': 'Impacto de CVA em 52 semanas',
    'Estimated contribution over a 52-week horizon, making this one of the highest-value features I shipped at TPT.':
        'Contribuição estimada em um horizonte de 52 semanas, o que faz dessa uma das funcionalidades de maior valor que entreguei na TPT.',
    '<strong class="font-semibold text-white/80">The follow-up:</strong> a winning experiment tells you the change worked for the people who used it, nothing about the ones who saw it and did nothing. So with the test still running, we interviewed customers who had been exposed to the quick action and never touched it, to hear what stopped them.':
        '<strong class="font-semibold text-white/80">O acompanhamento:</strong> um experimento vencedor diz que a mudança funcionou para quem a usou, e nada sobre quem viu e não fez nada. Então, com o teste ainda rodando, entrevistamos clientes que foram expostos à ação rápida e nunca a tocaram, para ouvir o que os impediu.',
    'We ran user interviews with customers who were exposed to the feature but didn\'t use it, to understand why not, and what we should improve next.':
        'Rodamos entrevistas com clientes que foram expostos à funcionalidade mas não a usaram, para entender por quê e o que deveríamos melhorar em seguida.',

    'Pioneering Design-to-Code': 'Pioneirismo em design para código',
    'I became the first designer at HelloFresh to merge code directly into production, setting a precedent that eventually grew into an organisation-wide movement under the Consumer Acceleration team.':
        'Virei o primeiro designer da HelloFresh a fazer merge de código direto em produção, criando um precedente que acabou virando um movimento de toda a organização sob o time de Consumer Acceleration.',
    'Toward the end of my time at TPT, I began implementing features directly in the production codebase. It started with AI agents in Cursor, and as the company grew in AI maturity it evolved into a more structured workflow, using Claude Code alongside Spec-Machine, a shared repository of skills built for our stack.':
        'Perto do fim do meu tempo na TPT, comecei a implementar funcionalidades direto no código de produção. Começou com agentes de IA no Cursor e, conforme a empresa amadureceu em IA, evoluiu para um fluxo mais estruturado, usando o Claude Code junto da Spec-Machine, um repositório compartilhado de skills feito para a nossa stack.',
    'The breed-specific message feature, 11 personalised copy variants for the most-selected dog breeds, conditional logic, real social proof data, was one of the first I shipped end-to-end without an engineering handoff.':
        'A funcionalidade de mensagem por raça, com 11 variantes de texto personalizadas para as raças mais escolhidas, lógica condicional e dados reais de prova social, foi uma das primeiras que entreguei de ponta a ponta sem handoff para engenharia.',
    'The breed-specific message feature': 'A funcionalidade de mensagem por raça',
    'This wasn\'t about replacing engineers. It was about removing the gap between design intent and what ships, taking ownership of the full quality of what I designed, all the way to the user.':
        'Não se tratava de substituir engenheiros. Tratava-se de eliminar a distância entre a intenção de design e o que é entregue, assumindo a responsabilidade pela qualidade completa do que desenhei, até chegar ao usuário.',
    'Three years. One designer. A brand with its own voice inside HelloFresh, and a playbook that other brands borrowed from.':
        'Três anos. Um designer. Uma marca com voz própria dentro da HelloFresh e um manual do qual outras marcas tomaram emprestado.',
    'What I\'m most proud of isn\'t any single metric. It\'s the discipline of working at pace without cutting corners, shipping fast but maintaining quality, running real research under real constraints, and treating every negotiation for engineering time as a design decision in itself. TPT taught me how to operate with ambiguity, advocate for users with data, and keep iterating based on what the numbers tell you rather than what you assumed at the start.':
        'Do que mais me orgulho não é de nenhuma métrica isolada. É da disciplina de trabalhar em ritmo alto sem cortar caminho, entregar rápido mantendo a qualidade, rodar pesquisa de verdade sob restrições reais e tratar cada negociação por tempo de engenharia como uma decisão de design em si. A TPT me ensinou a operar na ambiguidade, a defender os usuários com dados e a seguir iterando com base no que os números dizem, e não no que eu supus no começo.',
    'The meal selection page.': 'A página de seleção de refeições.',
    'Iterations are ongoing. The latest ones focus on helping customers choose their recipes with more confidence, the recipe detail page is now more interactive and informative, featuring key ingredients and customer reviews.':
        'As iterações continuam. As mais recentes focam em ajudar o cliente a escolher as receitas com mais confiança: a página de detalhe da receita está mais interativa e informativa, destacando os ingredientes principais e as avaliações de clientes.',
    'The new recipe detail page.': 'A nova página de detalhe da receita.',

    // ── Móvix ────────────────────────────────────────────────────────
    'Turning Brazil\'s home financing maze into a few taps':
        'Transformando o labirinto do financiamento imobiliário em poucos toques',
    'Móvix was an MVP built to help Brazilians finance a house through CAIXA, one of the country\'s biggest banks. Financing a home in Brazil is notoriously complex and bureaucratic. Our goal was to create a mobile experience that made simulation, documentation, and follow-up simple enough for anyone, regardless of their tech literacy.':
        'O Móvix foi um MVP criado para ajudar brasileiros a financiar uma casa pela CAIXA, um dos maiores bancos do país. Financiar um imóvel no Brasil é notoriamente complexo e burocrático. Nosso objetivo era criar uma experiência mobile que tornasse simulação, documentação e acompanhamento simples o suficiente para qualquer pessoa, independentemente do seu letramento digital.',
    'Móvix was an MVP built to help Brazilians finance a house through <a href="https://www.caixa.gov.br/voce/Paginas/default.aspx" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-white transition-colors">CAIXA</a>, one of the country\'s biggest banks. Financing a home in Brazil is notoriously complex and bureaucratic, our goal was to create a mobile experience that made simulation, documentation, and follow-up simple enough for anyone, regardless of their tech literacy.':
        'O Móvix foi um MVP criado para ajudar brasileiros a financiar uma casa pela <a href="https://www.caixa.gov.br/voce/Paginas/default.aspx" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-white transition-colors">CAIXA</a>, um dos maiores bancos do país. Financiar um imóvel no Brasil é notoriamente complexo e burocrático; nosso objetivo era criar uma experiência mobile que tornasse simulação, documentação e acompanhamento simples o suficiente para qualquer pessoa, independentemente do seu letramento digital.',
    'Platforms launched': 'Plataformas lançadas',
    'Published on both the App Store and Google Play after 9 months of design and development.':
        'Publicado na App Store e no Google Play após 9 meses de design e desenvolvimento.',
    '9mo': '9 meses',
    'Idea to launch': 'Da ideia ao lançamento',
    'Full end-to-end project from discovery to a live product used by real customers.':
        'Projeto completo de ponta a ponta, da descoberta a um produto no ar usado por clientes reais.',
    'Age range tested': 'Faixa etária testada',
    'Users of all ages and tech literacy levels tested the app at a major financing fair in Brasília.':
        'Usuários de todas as idades e níveis de letramento digital testaram o app em uma grande feira de financiamento em Brasília.',
    'Digital simulation tool': 'Ferramenta de simulação digital',
    'One of the first apps to let Brazilians simulate, save, and share home financing results on mobile.':
        'Um dos primeiros apps a permitir que brasileiros simulassem, salvassem e compartilhassem resultados de financiamento imobiliário pelo celular.',
    'In a market where every process is as traditional as 10 years ago, Móvix was an important step toward changing how people finance their homes.':
        'Em um mercado onde todo processo é tão tradicional quanto há 10 anos, o Móvix foi um passo importante para mudar a forma como as pessoas financiam suas casas.',
    'Financing a home through CAIXA meant dealing with dense paperwork, in-person appointments, and zero visibility into your application status. Most Brazilians had no way to understand how much they could borrow, what their monthly payments would look like, or where their process stood, unless they had a broker walking them through it in person.':
        'Financiar um imóvel pela CAIXA significava lidar com uma papelada densa, atendimentos presenciais e nenhuma visibilidade sobre o status do pedido. A maioria dos brasileiros não tinha como entender quanto poderia tomar emprestado, como ficariam as parcelas mensais ou em que pé estava o processo, a não ser que um corretor explicasse tudo pessoalmente.',
    'Stakeholder Alignment via Design Sprints': 'Alinhamento com stakeholders via design sprints',
    'Everyone had different opinions on what mattered most. We started with design sprints to align stakeholders around a common vision and find a shared path forward before touching any screens.':
        'Cada pessoa tinha uma opinião diferente sobre o que era mais importante. Começamos com design sprints para alinhar os stakeholders em torno de uma visão comum e encontrar um caminho compartilhado antes de tocar em qualquer tela.',
    'Wireframes & UI Design': 'Wireframes e design de UI',
    'I designed wireframes, high-fidelity UI, and prototypes alongside designer Jenny Soares, keeping the brand identity consistent across all flows while solving for low tech literacy.':
        'Desenhei wireframes, UI de alta fidelidade e protótipos junto da designer Jenny Soares, mantendo a identidade da marca consistente em todos os fluxos enquanto resolvíamos para um baixo letramento digital.',
    'User Testing at Scale': 'Testes com usuários em escala',
    'We tested the app with real users at a major home financing fair in Brasília, observing people aged 15 to 60 using it in a real-world context. These sessions shaped many of our final decisions.':
        'Testamos o app com usuários reais em uma grande feira de financiamento imobiliário em Brasília, observando pessoas de 15 a 60 anos usando-o em um contexto real. Essas sessões moldaram muitas das nossas decisões finais.',
    'Iteration & Launch': 'Iteração e lançamento',
    'We shared test feedback directly with developers and product owners in structured sessions, iterated on the design, and shipped to both the App Store and Google Play.':
        'Compartilhamos o feedback dos testes direto com desenvolvedores e product owners em sessões estruturadas, iteramos o design e publicamos na App Store e no Google Play.',
    'A session dedicated to exploring how technologies already present on people\'s phones could enhance the app experience.':
        'Uma sessão dedicada a explorar como tecnologias já presentes no celular das pessoas poderiam melhorar a experiência do app.',
    'From Paperwork to Digital Process': 'Da papelada ao processo digital',
    'The first thing we focused on was translating CAIXA\'s paperwork questions into a digital format, a quiz.':
        'A primeira coisa em que focamos foi traduzir as perguntas do formulário da CAIXA para um formato digital: um quiz.',
    'A session dedicated to defining the main user flow, translating the traditional into the digital.':
        'Uma sessão dedicada a definir o fluxo principal do usuário, traduzindo o tradicional para o digital.',
    'The target audience had little experience with financing. We designed a card-based home screen with three entry points, and because the simulation alone required dozens of questions, we added an animated avatar guide built with Lottie to keep people from dropping off.':
        'O público-alvo tinha pouca experiência com financiamento. Desenhamos uma home baseada em cards com três pontos de entrada e, como só a simulação já exigia dezenas de perguntas, adicionamos um guia animado em avatar feito com Lottie para evitar que as pessoas desistissem no meio.',
    'The animated guide helped users navigate through the many required questions without dropping off':
        'O guia animado ajudou os usuários a atravessar as muitas perguntas obrigatórias sem desistir',
    'The use of cards on the home screen helped us guide people through Móvix\'s experience.':
        'O uso de cards na tela inicial nos ajudou a guiar as pessoas pela experiência do Móvix.',
    'Home screen with cards guiding people to the main moments of the user journey.':
        'Tela inicial com cards guiando as pessoas para os principais momentos da jornada.',
    'Before Móvix, every simulation result had to be thrown away if not printed. We designed a saved simulations feature that let users store, compare, and share results, a small change that made the entire experience feel personal and trustworthy.':
        'Antes do Móvix, todo resultado de simulação era descartado se não fosse impresso. Desenhamos uma funcionalidade de simulações salvas que permitia guardar, comparar e compartilhar resultados: uma pequena mudança que deixou a experiência inteira mais pessoal e confiável.',
    'Saved simulations give people the opportunity to compare':
        'As simulações salvas dão às pessoas a chance de comparar',
    'We translated the outdated web-based simulation platform from the bank CAIXA into a mobile-first flow for Móvix that made results easier to understand and share.':
        'Traduzimos a plataforma de simulação web ultrapassada da CAIXA em um fluxo mobile-first para o Móvix, que tornou os resultados mais fáceis de entender e compartilhar.',
    'The result of a home financing simulation.': 'O resultado de uma simulação de financiamento imobiliário.',
    'The financing flow let users start directly from a saved simulation, upload documentation via phone camera, and track their process alongside all participants, removing the need for in-person visits just to check a status.':
        'O fluxo de financiamento permitia começar direto de uma simulação salva, enviar a documentação pela câmera do celular e acompanhar o processo junto de todos os participantes, eliminando visitas presenciais só para checar um status.',
    'The financing proposal was shared and tracked by all participants involved in the process.':
        'A proposta de financiamento era compartilhada e acompanhada por todos os participantes do processo.',
    'The whole process was put to the test at a home financing fair in Brasília, the capital of Brazil.':
        'O processo inteiro foi colocado à prova em uma feira de financiamento imobiliário em Brasília, a capital do Brasil.',
    'Testing Móvix with real users at a financing fair in Brasília':
        'Testando o Móvix com usuários reais em uma feira de financiamento em Brasília',
    'Móvix was published on the App Store and Google Play after a 9-month project by AIS Digital. Watching people of every age, many of whom had never used a financial app, successfully navigate the simulation flow at the fair was the clearest signal that we had built the right thing in the right way.':
        'O Móvix foi publicado na App Store e no Google Play após um projeto de 9 meses da AIS Digital. Ver pessoas de todas as idades, muitas delas sem nunca ter usado um app financeiro, atravessarem o fluxo de simulação com sucesso na feira foi o sinal mais claro de que tínhamos construído a coisa certa do jeito certo.',
    'Móvix was the first step into digital home financing in Brazil and set a precedent for the next iterations in the same market.':
        'O Móvix foi o primeiro passo do financiamento imobiliário digital no Brasil e abriu um precedente para as próximas iterações nesse mercado.',
    'Designer Jenny Soares and I at the financing fair':
        'A designer Jenny Soares e eu na feira de financiamento',
    'Móvix was available on the App Store and on Google Play until February, 2019.':
        'O Móvix ficou disponível na App Store e no Google Play até fevereiro de 2019.',

    // ── MVP Factory · Schwarzkopf ────────────────────────────────────
    'Helping Schwarzkopf decide if an AI hair app was worth building':
        'Ajudando a Schwarzkopf a decidir se valia a pena construir um app de cabelo com IA',
    'Schwarzkopf wanted to know if women in Germany would trust and use an AI-powered hair analysis app before committing to building it. I led the research end-to-end: recruitment, script, ten moderated interviews, insight synthesis in Dovetail, and a final report delivered to Henkel.':
        'A Schwarzkopf queria saber se mulheres na Alemanha confiariam e usariam um app de análise capilar com IA antes de se comprometer a construí-lo. Conduzi a pesquisa de ponta a ponta: recrutamento, roteiro, dez entrevistas moderadas, síntese dos insights no Dovetail e um relatório final entregue à Henkel.',
    'Schwarzkopf wanted to know if women in Germany would trust and use an AI-powered hair analysis app, before committing to building it. I was handed a ready prototype by a Schwarzkopf designer and acted purely as a researcher: recruitment, script, ten moderated interviews, insight synthesis in Dovetail, and a final report delivered to Henkel.':
        'A Schwarzkopf queria saber se mulheres na Alemanha confiariam e usariam um app de análise capilar com IA antes de se comprometer a construí-lo. Recebi um protótipo pronto de um designer da Schwarzkopf e atuei puramente como pesquisador: recrutamento, roteiro, dez entrevistas moderadas, síntese dos insights no Dovetail e um relatório final entregue à Henkel.',
    'UX Researcher': 'Pesquisador de UX',
    'Women interviewed': 'Mulheres entrevistadas',
    'Moderated sessions with women across Germany, conducted alongside another German UX Researcher.':
        'Sessões moderadas com mulheres de toda a Alemanha, conduzidas junto de outra pesquisadora de UX alemã.',
    'Full': 'Total',
    'Research ownership': 'Responsabilidade pela pesquisa',
    'I owned the entire research process, from screening criteria and script to synthesis and final report.':
        'Fui responsável por todo o processo de pesquisa, dos critérios de triagem e do roteiro à síntese e ao relatório final.',
    'Synthesis': 'Síntese',
    'Clustered in Dovetail': 'Agrupada no Dovetail',
    'All sessions were tagged, clustered, and synthesised in Dovetail to surface themes and patterns across participants.':
        'Todas as sessões foram etiquetadas, agrupadas e sintetizadas no Dovetail para revelar temas e padrões entre as participantes.',
    'Report': 'Relatório',
    'Go / No-go to Henkel': 'Go / No-go para a Henkel',
    'The deliverable was a research report helping Schwarzkopf decide whether to fully invest in the concept.':
        'A entrega foi um relatório de pesquisa para ajudar a Schwarzkopf a decidir se investiria de vez no conceito.',
    'The Brief': 'O Briefing',
    'MVP Factory was partnering with Schwarzkopf, part of Henkel, to validate an early-stage AI hair analysis concept. Before committing to development, they needed a clear answer: would real users trust an app to analyse their hair and recommend the right products? My role was to find out, recruiting and interviewing 10 women across Germany, then delivering a research report with a clear recommendation.':
        'A MVP Factory estava em parceria com a Schwarzkopf, do grupo Henkel, para validar um conceito inicial de análise capilar com IA. Antes de partir para o desenvolvimento, eles precisavam de uma resposta clara: usuárias reais confiariam em um app para analisar seu cabelo e recomendar os produtos certos? Meu papel era descobrir, recrutando e entrevistando 10 mulheres na Alemanha e entregando um relatório de pesquisa com uma recomendação clara.',
    'The 10 interviewed women were spread across Germany.':
        'As 10 mulheres entrevistadas estavam espalhadas pela Alemanha.',
    'The Prototype': 'O Protótipo',
    'The flow had three stages. First, a short quiz to capture hair context, whether the user bleaches, the curl pattern, hair goals. Then a camera step: the app asked users to take photos of their hair so the AI could analyse its condition.':
        'O fluxo tinha três etapas. Primeiro, um quiz curto para capturar o contexto do cabelo: se a pessoa descolore, o padrão de cachos, os objetivos capilares. Depois, uma etapa de câmera: o app pedia fotos do cabelo para a IA analisar sua condição.',
    'The prototype started with a quiz and a photo of the hair.':
        'O protótipo começava com um quiz e uma foto do cabelo.',
    'Shown as lo-fi, tested on a full high-fidelity prototype under NDA.':
        'Exibido em baixa fidelidade; testado em um protótipo completo de alta fidelidade sob NDA.',
    'I was handed a ready Figma prototype, my job was to put it in front of ten women in Germany to understand the pitfalls of the project and deliver a validation research report.':
        'Recebi um protótipo pronto no Figma; meu trabalho era colocá-lo diante de dez mulheres na Alemanha para entender as armadilhas do projeto e entregar um relatório de pesquisa de validação.',
    'Finally, based on the quiz and the analysis, the app generated a hair score and explained the results with product recommendations from the Schwarzkopf range.':
        'Por fim, com base no quiz e na análise, o app gerava uma pontuação capilar e explicava os resultados com recomendações de produtos da linha Schwarzkopf.',
    'Hair-score screen and final product recommendation.':
        'Tela de pontuação capilar e recomendação final de produtos.',
    'Research Design': 'Desenho da pesquisa',
    'Screening Criteria': 'Critérios de triagem',
    'I defined the participant profile to reflect the real target audience, women in Germany with varying hair types, treatments, and product habits. The screening ensured diversity in hair condition and familiarity with beauty apps, while filtering out anyone too close to the industry.':
        'Defini o perfil das participantes para refletir o público-alvo real: mulheres na Alemanha com diferentes tipos de cabelo, tratamentos e hábitos de consumo. A triagem garantiu diversidade na condição capilar e na familiaridade com apps de beleza, ao mesmo tempo em que filtrava quem fosse próximo demais do setor.',
    'Research Script': 'Roteiro da pesquisa',
    'I wrote the full moderated interview script: a warm-up to understand existing hair care habits, a prototype walkthrough with think-aloud prompts, and a debrief with direct attitudinal questions. The goal was to separate first-impression reactions from considered opinions.':
        'Escrevi o roteiro completo da entrevista moderada: um aquecimento para entender os hábitos de cuidado capilar, um percurso pelo protótipo com estímulos de pensar em voz alta e um encerramento com perguntas atitudinais diretas. O objetivo era separar as reações de primeira impressão das opiniões ponderadas.',
    'Moderated Sessions with German Interviewer': 'Sessões moderadas com entrevistadora alemã',
    'Ten one-on-one sessions conducted remotely. A native German interviewer led each session while participants walked through the prototype narrating their thoughts. I was present as a note-taker and stepped in with additional questions on trust, privacy, and whether the output felt credible, not just whether the UI was clear.':
        'Dez sessões individuais conduzidas remotamente. Uma entrevistadora nativa em alemão liderava cada sessão enquanto as participantes percorriam o protótipo narrando seus pensamentos. Eu estava presente como anotador e entrava com perguntas adicionais sobre confiança, privacidade e se o resultado parecia crível, não só se a interface estava clara.',
    'Synthesis in Dovetail': 'Síntese no Dovetail',
    'All sessions were tagged and affinity-clustered in Dovetail. Themes emerged around the camera step, trust in the score, expectations about product quality, and willingness to pay. Dovetail let me show stakeholders exact quote evidence for every insight.':
        'Todas as sessões foram etiquetadas e agrupadas por afinidade no Dovetail. Surgiram temas em torno da etapa de câmera, da confiança na pontuação, das expectativas sobre a qualidade dos produtos e da disposição a pagar. O Dovetail me permitiu mostrar aos stakeholders a citação exata que sustentava cada insight.',
    'Final Report': 'Relatório final',
    'I wrote and delivered a full research report to Schwarzkopf and Henkel, structured around the key research questions, the evidence, and a clear recommendation on whether the concept was ready to develop.':
        'Escrevi e entreguei um relatório de pesquisa completo para a Schwarzkopf e a Henkel, estruturado em torno das perguntas-chave da pesquisa, das evidências e de uma recomendação clara sobre se o conceito estava pronto para ser desenvolvido.',
    'What I\'m proud of in this project isn\'t a UI design decision or a shipped screen. It\'s the discipline of staying in the research role.':
        'O que me orgulha neste projeto não é uma decisão de UI nem uma tela entregue. É a disciplina de permanecer no papel de pesquisador.',
    'Observing without steering, separating what participants said from what I wished they\'d said, and writing a report honest enough to actually be useful to the people receiving it.':
        'Observar sem conduzir, separar o que as participantes disseram do que eu gostaria que tivessem dito e escrever um relatório honesto o bastante para ser de fato útil a quem o recebeu.',
};
