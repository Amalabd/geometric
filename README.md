# Geometrische Figuren (Figuren-Abdalla)

Small static web tool for calculating basic properties of geometric figures.

Live demo: https://geokalc.netlify.app/


## Features
- **Circle**: Choose to compute area, circumference, or diameter with instant results while typing.
- **Square**: Compute area or circumference with instant results.
- **Triangle**: Compute area (base and height) or perimeter (sides a, b, c).
- **Rectangle**: Compute area or circumference (length, width).
- **Instant feedback**: Results are computed reactively with Vue 3.


## Tech stack
- **Vue 3 (CDN)** – reactive components without a build step
- **Bootstrap 5 (CDN)** – layout and styles
- **Font Awesome (CDN)** – icons
- **Vanilla JavaScript** – logic in `shapes.js`


## Project structure
```
Figuren-Abdalla/
└─ geometric/
   ├─ index.html        # Entry point, includes Vue/Bootstrap/Font Awesome via CDN
   ├─ shapes.js         # Vue components and calculation logic
   ├─ pic/              # Images/icons (logo and figures)
   └─ .git/             # (if present) repository metadata
```


## Run locally
This is a pure static HTML project. No build or installation is required.

- **Option A (open directly)**: Open `geometric/index.html` in your browser (double-click).
- **Option B (local server)**: Serve the `geometric/` folder with any simple static server (e.g., VS Code Live Server, Python `http.server`, Node tools like `serve`).


## Usage
1. **Choose shape**: In `index.html` under "Calculation", select a shape (Circle, Square, Triangle, Rectangle).
2. **Choose calculation**: Depending on the shape, select Area, Circumference, or Diameter.
3. **Enter values**: Relevant inputs appear contextually.
4. **Read result**: The result is calculated and displayed automatically.


## Deployment
- The project is static and can be hosted on any static hosting platform (e.g., Netlify, GitHub Pages, Vercel).
- For Netlify, deploy the `geometric/` folder (e.g., drag & drop in the Netlify dashboard or via a Git repo).
- Live example: https://geokalc.netlify.app/


## Notes
- All dependencies (Vue, Bootstrap, Font Awesome) are included via CDN in `geometric/index.html` – no `package.json` or build step is required.
- Images and icons are in `geometric/pic/`. Ensure they are served with the site when hosting.


## Author
Amal Abdalla


## License
No specific license provided.
