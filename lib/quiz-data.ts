import type { Question, ScoreTier } from './quiz-types'

export const QUESTIONS: Question[] = [
  {
    q: "Yuh est supervisé par la FINMA.",
    type: "tf",
    options: ["Vrai", "Faux"],
    correct: 0,
    feedbackOk:   "Exactement ! Vos fonds sont entre de bonnes mains 🇨🇭",
    feedbackFail: "Pas cette fois — Yuh est bien sous la loupe de la FINMA, le régulateur financier suisse."
  },
  {
    q: "Quel duo a lancé Yuh ?",
    type: "mcq",
    options: ["UBS & PostFinance", "Swissquote & PostFinance", "Revolut & SIX Group", "Raiffeisen & Neon"],
    correct: 1,
    feedbackOk:   "Swissquote + PostFinance = Yuh. Un beau duo 💜 (PostFinance s'est depuis retiré du partenariat.)",
    feedbackFail: "C'est <strong>Swissquote & PostFinance</strong> qui ont lancé l'aventure — PostFinance s'est ensuite retiré."
  },
  {
    q: "Comment s'appelle le programme de fidélité de Yuh ?",
    type: "mcq",
    options: ["Yuhcoins", "SwissPoints", "Swisscoins", "NeoPay"],
    correct: 2,
    feedbackOk:   "Vous connaissez votre monnaie ! Les <strong>Swisscoins</strong> s'accumulent à chaque achat 💜",
    feedbackFail: "C'est les <strong>Swisscoins</strong> ! Ils récompensent chaque coup de carte Yuh."
  },
  {
    q: "Yuh existe aussi en version ordinateur.",
    type: "tf",
    options: ["Vrai", "Faux"],
    correct: 1,
    feedbackOk:   "Exactement — Yuh c'est <strong>100 % mobile</strong>, le bureau c'est pour les autres 📱",
    feedbackFail: "Nope — Yuh reste sur votre smartphone. Pas besoin d'ordi, tout est dans votre poche."
  },
  {
    q: "Quel type de carte Yuh vous propose-t-il ?",
    type: "mcq",
    options: ["Visa Classic", "Mastercard", "American Express", "Diners Club"],
    correct: 1,
    feedbackOk:   "<strong>Mastercard</strong>, partout dans le monde, sans frais cachés 🌍",
    feedbackFail: "C'est une <strong>Mastercard</strong> — acceptée partout dans le monde, sans mauvaises surprises."
  },
  {
    q: "Vous pouvez investir en cryptos directement dans Yuh.",
    type: "tf",
    options: ["Vrai", "Faux"],
    correct: 0,
    feedbackOk:   "Yep ! Bitcoin, Ethereum et cie — tout ça depuis l'app 🚀",
    feedbackFail: "Si ! Les cryptos, c'est aussi dans Yuh — à portée de pouce, entre deux Insta Stories."
  },
  {
    q: "Dans quelles langues est disponible Yuh ?",
    type: "mcq",
    options: ["Français et allemand seulement", "Anglais, français et allemand", "Français, allemand et italien", "Toutes les langues de l'UE"],
    correct: 2,
    feedbackOk:   "FR, DE, IT — Yuh parle les <strong>3 langues de la Suisse</strong> 🇨🇭",
    feedbackFail: "Yuh couvre les 3 régions : <strong>français, allemand et italien</strong> — 100 % helvétique."
  },
  {
    q: "TWINT est intégré dans Yuh.",
    type: "tf",
    options: ["Vrai", "Faux"],
    correct: 0,
    feedbackOk:   "TWINT dans Yuh — payer en Suisse, ça n'a jamais été aussi simple 📱",
    feedbackFail: "Si ! <strong>TWINT</strong> est directement dans l'app Yuh — pratique, non ?"
  },
  {
    q: "Quel pilier prévoyance Yuh propose-t-il ?",
    type: "mcq",
    options: ["1er pilier (AVS)", "2e pilier (LPP)", "3e pilier (3a)", "Aucun pilier"],
    correct: 2,
    feedbackOk:   "Le <strong>3e pilier</strong> dans l'app — épargne retraite avec avantages fiscaux 💰",
    feedbackFail: "C'est le <strong>3e pilier (3a)</strong> — idéal pour préparer votre retraite avec style."
  },
  {
    q: "Parmi ces apps, laquelle n'est PAS concurrente de Yuh ?",
    type: "mcq",
    options: ["Neon", "Revolut", "N26", "Twint"],
    correct: 3,
    feedbackOk:   "Bonne lecture ! <strong>TWINT</strong> est un partenaire de Yuh, pas un rival — Neon, Revolut et N26 sont les vrais concurrents.",
    feedbackFail: "<strong>TWINT</strong> est intégré dans Yuh — partenaire, pas concurrent ! Neon, Revolut et N26 jouent dans l'autre camp."
  }
]

export const SCORE_TIERS: ScoreTier[] = [
  { min: 0,  max: 3,  title: "Explore Yuh, tout commence ici",    sub: "L'aventure ne fait que commencer" },
  { min: 4,  max: 6,  title: "Vous gérez, continuez comme ça",        sub: "Pas mal — encore quelques secrets à découvrir" },
  { min: 7,  max: 9,  title: "Presque expert — encore un peu",        sub: "Vous touchez au but, presque parfait" },
  { min: 10, max: 10, title: "Expert Yuh. L'argent vous remerciera",  sub: "Score parfait — vous maîtrisez tout 🏆" }
]
