# Remote Finder

Remote Finder is an open-source web mapping tool for exploring areas that are farther away from mapped buildings and other signs of human presence.

The app is intended as a planning and scouting tool. It does not confirm land ownership, legal access, permission, hazards, safety, or suitability for any activity.

## Core idea

Remote Finder shows an interactive map. Users can load mapped building data for the visible area, adjust a radius, and see shaded avoid zones around those features.

Clear areas are farther away from the selected mapped features.

## Current prototype

The current prototype includes:

* React + Vite web app
* Full-screen OpenStreetMap basemap
* First-load disclaimer popup
* Adjustable radius slider

## Planned features

* Fetch OpenStreetMap building data for the visible map area
* Draw building outlines
* Create shaded avoid zones around mapped features
* Merge avoid zones into one clean combined shape
* Add optional filters for different building and human-presence layers
* Add pins, notes, lines, and drawn areas
* Add saved projects and shareable view-only links
* Improve mobile support
* Explore offline scouting features later

## Important disclaimer

Remote Finder shows distance from mapped features only. It does not confirm land ownership, legal access, permission, hazards, safety, or suitability for any activity.

OpenStreetMap data may be incomplete, outdated, or inconsistently tagged.

## Development status

Remote Finder is in early prototype development.

Current milestone:

**Prototype v0.1 — Core Map Demo**

The first goal is to prove the main concept: a browser map with a radius slider and shaded avoid zones based on mapped building data.

## Open source

Remote Finder is open source under the MIT License.

Contributions, ideas, bug reports, and improvements will be welcome as the project develops.
