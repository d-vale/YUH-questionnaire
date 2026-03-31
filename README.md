# Yuh Questionnaire

**Équipe DJMKEL**

Un quiz interactif pour découvrir l'univers Yuh — l'app financière suisse simple et intuitive.

## 🎯 Aperçu

Quiz de **10 questions** conçu pour tester les connaissances des utilisateurs sur Yuh et ses fonctionnalités. L'expérience est pensée pour être légère, engageante et fidèle à l'identité de marque Yuh : **simple, surprenante, empowering et dynamique**.

### Fonctionnalités

- ✅ Écran d'accueil avec branding Yuh
- ✅ 10 questions à choix multiples
- ✅ Feedback immédiat après chaque réponse
- ✅ Animation de progression entre les questions
- ✅ Écran de résultat avec profil personnalisé
- ✅ Confettis pour les bons scores (≥7/10)
- ✅ Design responsive (mobile-first)

## 🛠️ Stack technique

- **Framework** : Next.js 16 (App Router)
- **UI** : React 19 + Tailwind CSS 4
- **Langage** : TypeScript
- **Fonts** : ProximaSoft (Medium + MediumIt)

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## 📁 Structure du projet

```
├── app/
│   ├── components/
│   │   └── QuizApp.tsx     # Composant principal du quiz
│   ├── globals.css         # Styles globaux + theming
│   ├── layout.tsx          # Layout racine
│   └── page.tsx            # Page d'entrée
├── lib/
│   ├── quiz-data.ts        # Questions et tiers de score
│   └── quiz-types.ts       # Types TypeScript
├── public/
│   └── fonts/              # Polices ProximaSoft
└── brandbook.md            # Guide de marque Yuh
```

## 🎨 Design tokens

| Variable     | Valeur    | Usage                    |
|--------------|-----------|--------------------------|
| `--orange`   | `#FA5B35` | Couleur CTA principale   |
| `--bg`       | `#FFFFFF` | Fond                     |
| `--card`     | `#F7F7F8` | Fond des cartes          |
| `--text`     | `#1A1A1A` | Texte principal          |
| `--grey`     | `#6B6B6B` | Texte secondaire         |

## 📜 Scripts disponibles

| Commande        | Description                        |
|-----------------|------------------------------------|
| `npm run dev`   | Serveur de développement           |
| `npm run build` | Build de production                |
| `npm run start` | Lancer le build de production      |
| `npm run lint`  | Vérification ESLint                |

## 📖 Ressources

- [Brandbook Yuh](./brandbook.md) — Guide de tonalité et écriture
- [Next.js Documentation](https://nextjs.org/docs)

---

Projet réalisé dans le cadre du **Projet d'Intégration** — HES-SO 3ème année.
