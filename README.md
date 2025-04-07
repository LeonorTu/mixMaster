# MixMaster

MixMaster is a React-based web application that allows users to explore and search for cocktail recipes. It integrates with external APIs to fetch cocktail data and provides a user-friendly interface for browsing, searching, and learning about various drinks. View the live project [here](https://react-practice-mix-master.netlify.app/).

## Features

- **Cocktail Search**: Search for cocktails by name or browse by category.
- **Detailed Cocktail Information**: View detailed information about each cocktail, including ingredients, instructions, and images.
- **Newsletter Subscription**: Subscribe to a newsletter to stay updated with the latest cocktail recipes.
- **Error Handling**: Custom error pages for better user experience.
- **Responsive Design**: Fully responsive and styled using `styled-components`.

## Tech Stack

- **Frontend**: React, React Router, React Query, Axios
- **Styling**: Styled Components
- **Notifications**: React Toastify
- **Build Tool**: Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/leonortu/mixmaster.git
   cd mixmaster
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

5. Alternatively, view the deployed application at:
   [https://react-practice-mix-master.netlify.app/](https://react-practice-mix-master.netlify.app/)

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.

## Folder Structure

```
mixMaster/
├── public/               # Static assets
├── src/                  # Source code
│   ├── assets/           # Styling and wrappers
│   ├── components/       # Reusable components
│   ├── pages/            # Application pages
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .gitignore            # Git ignore file
├── index.html            # HTML template
├── package.json          # Project configuration
└── README.md             # Project documentation
```

## Acknowledgments

- [TheCocktailDB API](https://www.thecocktaildb.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Styled Components](https://styled-components.com/)

Enjoy exploring MixMaster! 🍹
