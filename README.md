# Remote Finder Prototype

> ⚠️ This repository is archived in practice and no longer actively maintained.

Remote Finder was the original prototype for a browser-based map tool that explored areas farther away from mapped buildings and other signs of human presence.

The prototype proved the core idea:

- full-screen OpenStreetMap/Leaflet map
- first-load disclaimer popup
- adjustable radius slider
- manual “Search this area” workflow
- Overpass query for `building=*`
- building outlines display
- buffer avoid zones around buildings
- merged/dissolved avoid-zone visualisation
- loading, error, and empty-result states
- warning when the map has moved since the last search

## Project status

This repo is now discontinued as the active development repo.

Future development is moving to **CairnKit**:

> **CairnKit** — *A modular map toolkit for finding and saving places.*

CairnKit will rebuild the idea with a cleaner architecture based around modular tools, map layers, data-source adapters, storage adapters, and saved places.

## Why this repo is discontinued

Remote Finder was useful as a fast prototype, but the project direction has grown beyond a single Remote Finder tool.

Rather than continuing to patch this prototype, the project is being restarted as CairnKit so the app can grow in a more considered and maintainable way.

The new direction treats Rural Area Finder as one tool inside a broader map toolkit, rather than making it the whole application.

## Development notice

Do not use this repository for new feature development.

Open issues in this repo are being closed because future work will be reconsidered and rewritten as smaller CairnKit tasks in the new repository.

## Important disclaimer

Remote Finder only shows distance from mapped features. It does not confirm land ownership, legal access, permission, hazards, safety, or suitability for any activity.

OpenStreetMap data may be incomplete, outdated, or inconsistently tagged.

## Running the old prototype

The prototype can still be run locally for reference:

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Licence

Remote Finder is open source under the MIT License.
