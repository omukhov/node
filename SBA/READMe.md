# Express Pokémon Management Web App

An interactive web application for managing Pokémon, trainers, and their elemental types. Built with Node.js using the Express framework, EJS templates, and styled with Bootstrap 5.

## Features

- **Pokémon Management:** Full CRUD operations. View the roster, filter by elemental types, view in-depth details, add new Pokémon, update existing stats instantly via Bootstrap modals, and delete items from the collection.
- **Interactive Media UI:** Toggle between a static Pokémon image and an animated GIF with a single click natively in the browser.
- **Trainers & Teams:** Browse professional trainer profiles, their origin cities, age, and dynamically linked current team lineups based on ID mappings.
- **Elemental Types:** Clean, image-supported grid directory of all Pokémon types that routes straight into pre-filtered views.
- **Request Logger:** Built-in custom middleware that outputs clean, formatted data in the server console for every incoming request (Timestamp, HTTP Method, URL path, and Body payloads).

---

## Tech Stack

- **Backend:** Node.js, Express (ES Modules)
- **Frontend:** EJS (Embedded JavaScript), Bootstrap 5, Vanilla JavaScript (DOM Manipulation)
- **Dependencies:** `method-override` (to enable native `PATCH` and `DELETE` requests directly within standard HTML forms)
- **Database:** In-memory storage (Mock data stored as local JS object arrays)

---

## Project Structure

```text
├── data/
│   ├── pokemon.js         # Basic Pokémon details (level, hp, media)
│   ├── pokemon-info.js    # Deep encyclopedia entry details for Pokémon
│   ├── trainer.js         # Standard trainer metrics and team IDs
│   ├── trainer-info.js    # In-depth biography/achievements of trainers
│   └── type.js            # Elemental type catalog data
├── public/
│   ├── css/
│   │   └── styles.css     # Custom UI style enhancements
│   └── images/
│       └── 404.jpeg       # Fallback Error 404 graphic
├── routes/
│   ├── pokemon.js         # Routes and logic for /pokemons
│   ├── trainer.js         # Routes and logic for /trainers
│   └── type.js            # Routes and logic for /types
├── utilities/
│   └── error.js           # Centralized custom error generator utility
├── views/
│   ├── partials/
│   │   ├── header.ejs     # Shared head tag & global CSS imports
│   │   └── footer.ejs     # Shared global scripts & closing tags
│   ├── menu.ejs           # Main navbar with dynamic active link tracking
│   ├── index.ejs          # Home page / API documentation dashboard
│   ├── pokemon.ejs        # Core grid dashboard for all Pokémon
│   ├── pokemon-create.ejs # Creation form layout for new Pokémon
│   ├── pokemon-info.ejs   # Individual detailed Pokémon stats page
│   ├── trainer.ejs        # Trainers summary overview page
│   ├── trainer-info.ejs   # Key-value extended trainer profile layout
│   ├── type.ejs           # Elemental types library page
│   └── not-found.ejs      # Custom 404 error page template
├── index.js               # Application entry point and middleware configuration
└── package.json
```
