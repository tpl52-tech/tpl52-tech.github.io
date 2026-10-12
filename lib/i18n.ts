/**
 * All translatable copy, in English, French, and Korean.
 * The language toggle swaps dict[locale] live. Replace this placeholder copy
 * with your own words (and your own translations) when you're ready.
 *
 * House rule carried across every language: no em-dashes anywhere.
 */

export type Locale = "en" | "fr" | "ko";

export const locales: Locale[] = ["en", "fr", "ko"];

export const localeNames: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ko: "KR",
};

// Flags for the language switcher (English = US flag per the user's request).
export const localeFlags: Record<Locale, string> = {
  en: "\u{1F1FA}\u{1F1F8}",
  fr: "\u{1F1EB}\u{1F1F7}",
  ko: "\u{1F1F0}\u{1F1F7}",
};

/** value for the html lang attribute */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  ko: "ko",
};

export type Dict = {
  availability: string;
  nav: { work: string; about: string; contact: string };
  cta: { viewWork: string; getInTouch: string; viewRepo: string };
  ui: { dark: string; light: string; copy: string; copied: string; theme: string };
  hero: { bio: string[] };
  about: { heading: string; coursework: string; activities: string; expected: string };
  work: { heading: string; blurbs: Record<string, string>; privateNote: string };
  experience: { heading: string; bullets: Record<string, string[]> };
  workedAt: string;
  contact: { heading: string; sub: string };
  footer: { left: string; right: string };
};

export const dict: Record<Locale, Dict> = {
  en: {
    availability: "available for new work",
    nav: { work: "Work", about: "Education", contact: "Contact" },
    cta: { viewWork: "View work", getInTouch: "Get in touch", viewRepo: "View on GitHub" },
    ui: { dark: "Dark", light: "Light", copy: "Copy", copied: "Copied", theme: "Theme" },
    hero: {
      bio: [
        "Hi! I'm Tess, currently working as a software engineer intern at Dorsia (an Index Ventures backed startup) while continuing my double major as a junior in Computer Science and Mathematics at Cornell University. On campus I lead the software team at Engineers Without Borders, building a cross-platform marketplace app and the CI/CD that keeps a 15-person team shipping safely.",
        "I like growing ideas into things that ship and get used. I've got good experience with both the front end and the back end of systems that stay correct and reliable once real users (hundreds of thousands of them!) and real money (lots of it) are in play. I'm big on cross-platform apps (React Native/Expo), REST APIs, and lately AI agent workflows!",
      ],
    },
    about: {
      heading: "Education",
      coursework: "Relevant coursework",
      activities: "Activities",
      expected: "Expected",
    },
    work: {
      heading: "A few favorites",
      blurbs: {
        reuse: "An iOS and Android marketplace I've led for the past year and a half, built with Cornell Engineers Without Borders for Finger Lakes ReUse, a nonprofit that reported about $3.3M in sales in 2025. Shoppers browse, filter, and buy secondhand goods with in-app payment and scheduled pickup; donors list items and staff approve and price them.",
        borderless: "A system I built to run the engineering pipeline of my EWB software team, always on a tight deadline. It's a concurrent, zero-dependency TypeScript daemon that coordinates AI coding agents in isolated git worktrees, driving each pull request through CI and a second agent's code review and fixing failures until it's merge-ready. A pure functional core keeps all live I/O (agents, CI, Git, Linear, Postgres) at the edges.",
        greenlight: "A testing system for that marketplace that lets non-technical volunteers QA real features: screen-verifiable tickets become tap-through run sheets in an Apple-styled web app with live shared results, while backend-only work (RLS, triggers, migrations) is verified automatically by an agent cross-checked against deterministic database probes.",
      },
      privateNote: "Source private, as it runs a live nonprofit service",
    },
    experience: {
      heading: "Experience",
      bullets: {
        "dorsia-swe": [
          "Shipped full-stack features across Dorsia's member-facing reservations platform (hundreds of thousands of members) and its internal operations tools, including a rebuild of the Trust & Safety dashboard from a read-only mirror into a Nova tool the team can actually act on.",
          "Took ownership of inventory correctness and revenue accuracy inside an Inventory Engine spanning hundreds of restaurants, tracking down a live oversell bug and introducing tier-gated minimum-spend valuation safely behind a feature flag.",
          "Created the Gatekeeper Operator Profile, the staff-management layer inside the Dorsia app, so a venue can add team members, assign roles, and decide exactly who is allowed to do what during an event.",
        ],
        "ewb-lead": [
          "Designed the authorization layer that ties Firebase Auth to Supabase/PostgreSQL, passing a JWT with every request so row-level-security policies govern access across all eight tables of the schema.",
          "Stood up a serverless backend for our React Native/Expo marketplace on Supabase/PostgreSQL, Stripe, and Cloudflare Workers, along with the typed TypeScript data modules shared by the iOS, Android, and web apps.",
          "Set up the team's entire Git-based CI/CD and code-review process from nothing, with risk-tiered reviews, protected paths, required checks, secrets scanning, lead sign-off, and branch safeguards.",
          "Carried the project from roughly 10% to 70% done and lifted our delivery pace by close to 8x, mostly by coordinating the engineering work, clearing blockers, and tightening how the team ships.",
        ],
        "ewb-backend": [
          "Delivered around twenty full-stack features for a donation and resale marketplace used by more than 16,000 people, spanning Node.js/Express APIs and TypeScript React Native/Expo screens on iOS, Android, and web.",
          "Modeled the marketplace's relational schema in PostgreSQL and built the REST endpoints and Auth.js authentication flows that drive most of the product's core features.",
          "Built a reusable NativeWind component library that got adopted across iOS, Android, and web, and kept quality and reliability up through Git-based reviews with the senior engineers.",
        ],
      },
    },
    workedAt: "Places I've worked",
    contact: {
      heading: "Let's work together.",
      sub: "Have a product that deserves real craft? I'm booking interface and motion work for the next quarter.",
    },
    footer: { left: "© 2026 Tess Lee", right: "Software engineer, Queens NY" },
  },

  fr: {
    availability: "disponible pour de nouveaux projets",
    nav: { work: "Projets", about: "Formation", contact: "Contact" },
    cta: { viewWork: "Voir les projets", getInTouch: "Me contacter", viewRepo: "Voir sur GitHub" },
    ui: { dark: "Sombre", light: "Clair", copy: "Copier", copied: "Copié", theme: "Thème" },
    hero: {
      bio: [
        "Salut ! Je suis Tess, actuellement ingénieure logiciel en stage chez Dorsia (une startup financée par Index Ventures), tout en poursuivant ma double majeure en informatique et mathématiques, en troisième année à Cornell University. Sur le campus, je dirige l'équipe logicielle d'Engineers Without Borders, où nous construisons une application marketplace cross-platform et le CI/CD qui permet à une équipe de 15 personnes de livrer en toute sécurité.",
        "J'aime faire grandir des idées jusqu'à des choses qui sont déployées et vraiment utilisées. J'ai une bonne expérience du front-end comme du back-end de systèmes qui restent corrects et fiables une fois que de vrais utilisateurs (des centaines de milliers !) et de l'argent réel (beaucoup) sont en jeu. Je m'intéresse beaucoup aux applications cross-platform (React Native/Expo), aux API REST, et depuis peu aux workflows d'agents IA !",
      ],
    },
    about: {
      heading: "Formation",
      coursework: "Cours pertinents",
      activities: "Activités",
      expected: "Prévu",
    },
    work: {
      heading: "Quelques favoris",
      blurbs: {
        reuse: "Une marketplace iOS et Android dont je dirige le développement depuis un an et demi, construite avec Cornell Engineers Without Borders pour Finger Lakes ReUse, une association qui a réalisé environ 3,3 millions de dollars de ventes en 2025. Les acheteurs parcourent, filtrent et achètent des articles d'occasion avec paiement intégré et retrait programmé ; les donateurs publient leurs articles et l'équipe les valide et fixe leur prix.",
        borderless: "Un système que j'ai conçu pour faire tourner le pipeline d'ingénierie de mon équipe logicielle EWB, toujours soumise à des délais serrés. C'est un daemon TypeScript concurrent et sans dépendances qui coordonne des agents de codage IA dans des worktrees Git isolés, pilotant chaque pull request à travers la CI et la revue de code d'un second agent, et corrigeant les échecs jusqu'à ce que ce soit prêt à fusionner. Un cœur purement fonctionnel garde toutes les I/O réelles (agents, CI, Git, Linear, Postgres) en périphérie.",
        greenlight: "Un système de test pour cette marketplace qui permet à des bénévoles non techniques de faire le QA de vraies fonctionnalités : les tickets vérifiables à l'écran deviennent des parcours de test tactiles dans une application web au style Apple, avec des résultats partagés en direct, tandis que le travail purement backend (RLS, triggers, migrations) est vérifié automatiquement par un agent recoupé avec des sondes de base de données déterministes.",
      },
      privateNote: "Code source privé, car il fait tourner un service associatif en production",
    },
    experience: {
      heading: "Expérience",
      bullets: {
        "dorsia-swe": [
          "Livré des fonctionnalités full-stack sur la plateforme de réservations de Dorsia destinée aux membres (des centaines de milliers de membres) ainsi que sur ses outils internes d'exploitation, dont la refonte du tableau de bord Trust & Safety, passé d'un simple miroir en lecture seule à un outil Nova sur lequel l'équipe peut réellement agir.",
          "Pris la responsabilité de l'exactitude des stocks et des revenus au sein d'un Inventory Engine couvrant des centaines de restaurants, en traquant un bug de survente en production et en introduisant, en toute sécurité derrière un feature flag, une valorisation de la dépense minimale conditionnée par palier.",
          "Créé le Gatekeeper Operator Profile, la couche de gestion du personnel intégrée à l'application Dorsia, pour qu'un établissement puisse ajouter des membres d'équipe, attribuer des rôles et décider précisément qui a le droit de faire quoi pendant un événement.",
        ],
        "ewb-lead": [
          "Conçu la couche d'autorisation qui relie Firebase Auth à Supabase/PostgreSQL, en transmettant un JWT à chaque requête pour que les politiques de sécurité au niveau des lignes (RLS) régissent l'accès sur l'ensemble des huit tables du schéma.",
          "Mis en place un backend serverless pour notre marketplace React Native/Expo sur Supabase/PostgreSQL, Stripe et Cloudflare Workers, avec les modules de données typés en TypeScript partagés par les applications iOS, Android et web.",
          "Construit de toutes pièces l'ensemble du processus de CI/CD et de revue de code de l'équipe basé sur Git : revues à niveaux de risque, chemins protégés, vérifications obligatoires, scan de secrets, validation du responsable et garde-fous sur les branches.",
          "Fait passer le projet d'environ 10 % à 70 % d'avancement et multiplié notre rythme de livraison par près de 8, surtout en coordonnant le travail d'ingénierie, en levant les blocages et en resserrant la façon dont l'équipe livre.",
        ],
        "ewb-backend": [
          "Livré une vingtaine de fonctionnalités full-stack pour une marketplace de dons et de revente utilisée par plus de 16 000 personnes, couvrant des API Node.js/Express et des écrans React Native/Expo en TypeScript sur iOS, Android et le web.",
          "Modélisé le schéma relationnel de la marketplace sous PostgreSQL et construit les endpoints REST et les flux d'authentification Auth.js qui font tourner la plupart des fonctionnalités de base du produit.",
          "Construit une bibliothèque de composants NativeWind réutilisables, adoptée sur iOS, Android et le web, tout en maintenant la qualité et la fiabilité grâce à des revues de code Git avec les ingénieurs seniors.",
        ],
      },
    },
    workedAt: "Où j'ai travaillé",
    contact: {
      heading: "Travaillons ensemble.",
      sub: "Un produit qui mérite un vrai soin ? Je réserve des missions d'interface et de motion pour le prochain trimestre.",
    },
    footer: { left: "© 2026 Tess Lee", right: "Ingénieure logiciel, Queens NY" },
  },

  ko: {
    availability: "새로운 프로젝트를 찾고 있어요",
    nav: { work: "작업", about: "소개", contact: "연락처" },
    cta: { viewWork: "작업 보기", getInTouch: "연락하기", viewRepo: "GitHub에서 보기" },
    ui: { dark: "다크", light: "라이트", copy: "복사", copied: "복사됨", theme: "테마" },
    hero: {
      bio: [
        "안녕하세요! 저는 Tess예요. 지금은 Dorsia(Index Ventures가 투자한 스타트업)에서 소프트웨어 엔지니어 인턴으로 일하면서, 코넬대학교에서 컴퓨터과학·수학 복수전공 3학년 과정을 이어가고 있어요. 교내에서는 Engineers Without Borders의 소프트웨어 팀을 이끌며, 크로스플랫폼 마켓플레이스 앱과 15명 규모의 팀이 안전하게 배포할 수 있게 해주는 CI/CD를 만들고 있습니다.",
        "아이디어를 실제로 배포되고 쓰이는 것으로 키우는 걸 좋아해요. 수십만 명의 진짜 사용자와 (아주 많은) 실제 돈이 걸린 상황에서도 정확하고 안정적으로 동작하는 시스템의 프론트엔드와 백엔드 모두 탄탄한 경험이 있습니다. 크로스플랫폼 앱(React Native/Expo), REST API, 그리고 최근에는 AI 에이전트 워크플로우에 푹 빠져 있어요!",
      ],
    },
    about: {
      heading: "학력",
      coursework: "주요 수강 과목",
      activities: "활동",
      expected: "졸업 예정",
    },
    work: {
      heading: "제가 좋아하는 몇 가지",
      blurbs: {
        reuse: "제가 1년 반 동안 이끌어 온 iOS·안드로이드 마켓플레이스로, 코넬 Engineers Without Borders와 함께 Finger Lakes ReUse를 위해 만들었습니다. 이 비영리단체는 2025년에 약 330만 달러의 매출을 올렸어요. 구매자는 중고 물품을 둘러보고 필터링해 앱 내 결제와 예약 픽업으로 구매하고, 기부자는 물품을 올리며 담당 직원이 이를 승인하고 가격을 매깁니다.",
        borderless: "늘 마감에 쫓기는 제 EWB 소프트웨어 팀의 엔지니어링 파이프라인을 운영하기 위해 제가 만든 시스템입니다. 의존성이 전혀 없는 동시성 TypeScript 데몬으로, 격리된 Git worktree에서 AI 코딩 에이전트를 조율하며, 각 풀 리퀘스트를 CI와 두 번째 에이전트의 코드 리뷰를 거쳐 진행시키고 실패를 머지 가능한 상태가 될 때까지 수정합니다. 순수 함수형 코어가 모든 실제 I/O(에이전트, CI, Git, Linear, Postgres)를 가장자리에 둡니다.",
        greenlight: "그 마켓플레이스를 위한 테스트 시스템으로, 비개발자 자원봉사자도 실제 기능을 QA할 수 있게 해줍니다. 화면에서 확인 가능한 티켓은 Apple 스타일 웹앱에서 탭으로 진행하는 체크리스트가 되어 결과가 실시간으로 공유되고, 백엔드 전용 작업(RLS, 트리거, 마이그레이션)은 결정론적 데이터베이스 프로브와 교차 검증하는 에이전트가 자동으로 검증합니다.",
      },
      privateNote: "실제 운영 중인 비영리 서비스의 코드라 소스는 비공개입니다",
    },
    experience: {
      heading: "경력",
      bullets: {
        "dorsia-swe": [
          "Dorsia의 회원 대상 예약 플랫폼(수십만 명의 회원)과 내부 운영 도구 전반에 걸쳐 풀스택 기능을 출시했으며, 특히 Trust & Safety 대시보드를 읽기 전용 미러에서 팀이 실제로 조치를 취할 수 있는 Nova 도구로 재구축했습니다.",
          "수백 곳의 레스토랑을 아우르는 Inventory Engine에서 재고 정확성과 매출 정확성을 책임지며, 실시간 오버셀 버그를 찾아 해결하고 피처 플래그 뒤에서 안전하게 등급별 최소 지출(min-spend) 평가를 도입했습니다.",
          "Dorsia 앱에 내장된 직원 관리 계층인 Gatekeeper Operator Profile을 만들어, 매장이 팀원을 추가하고 역할을 배정하며 이벤트 중에 누가 무엇을 할 수 있는지 정확히 정할 수 있게 했습니다.",
        ],
        "ewb-lead": [
          "Firebase Auth와 Supabase/PostgreSQL을 잇는 인가(authorization) 계층을 설계해, 모든 요청에 JWT를 실어 보내 행 수준 보안(RLS) 정책이 스키마의 8개 테이블 전반에서 접근을 제어하도록 했습니다.",
          "Supabase/PostgreSQL, Stripe, Cloudflare Workers 위에 React Native/Expo 마켓플레이스용 서버리스 백엔드를 구축하고, iOS·Android·웹 앱이 함께 쓰는 타입 지정 TypeScript 데이터 모듈도 만들었습니다.",
          "팀의 Git 기반 CI/CD와 코드 리뷰 프로세스를 처음부터 전부 세웠습니다. 위험 등급별 리뷰, 보호된 경로, 필수 체크, 시크릿 스캔, 리드 승인, 브랜치 보호 장치를 갖췄습니다.",
          "프로젝트를 약 10%에서 70% 완성도까지 끌어올리고, 엔지니어링 작업을 조율하고 병목을 걷어내며 팀의 배포 방식을 다듬어 전달 속도를 거의 8배로 끌어올렸습니다.",
        ],
        "ewb-backend": [
          "16,000명 넘게 사용하는 기부·재판매 마켓플레이스를 위해 약 20개의 풀스택 기능을 iOS·Android·웹에 걸쳐 전달했으며, Node.js/Express API와 TypeScript React Native/Expo 화면을 모두 다뤘습니다.",
          "마켓플레이스의 관계형 스키마를 PostgreSQL로 모델링하고, 제품 핵심 기능 대부분을 구동하는 REST 엔드포인트와 Auth.js 인증 플로우를 구축했습니다.",
          "iOS·Android·웹에서 두루 채택된 재사용 가능한 NativeWind 컴포넌트 라이브러리를 만들고, 시니어 엔지니어들과의 Git 기반 코드 리뷰로 코드 품질과 안정성을 유지했습니다.",
        ],
      },
    },
    workedAt: "제가 일한 곳",
    contact: {
      heading: "함께 일해요.",
      sub: "진짜 완성도가 필요한 제품이 있나요? 다음 분기 인터페이스·모션 작업을 받고 있습니다.",
    },
    footer: { left: "© 2026 Tess Lee", right: "소프트웨어 엔지니어, 퀸스" },
  },
};
