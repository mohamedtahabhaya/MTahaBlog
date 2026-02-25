---
title: "3D Fireboy & Watergirl"
date: "2025-12-25"
description: "A voxel-based 3D co-op platformer reimagining the classic flash game — featuring dynamic split-screen, intricate puzzles, and AI-assisted character modeling."
tech: ["JavaScript", "Three.js", "WebGL", "HTML5/CSS3"]
---

For this personal project, I wanted to capture the cooperative magic of the classic *Fireboy & Watergirl* but in a fully immersive 3D environment. 

**3D Fireboy & Watergirl** is the result: a split-screen puzzle platformer built from scratch where two players must work in perfect sync to navigate elemental hazards and reach the exit doors.

---

## Project Goal

The challenge was to translate 2D puzzle mechanics into a 3D space while building a custom engine without using Unity or Unreal. I focused on:

- **Dynamic Split-Screen**: Allowing each player to explore independently.
- **Voxel Aesthetics**: Creating a unique 3D pixel-art style for characters based on the original designs.
- **Teamwork Puzzles**: Designing obstacles that require simultaneous actions (levers, dual pressure plates, and pushable blocks).

---

## How to Play

The game is entirely self-contained in a single web page:

1. Open `index.html` in any modern web browser.
2. Choose **Survival Mode** (Teamwork) or **1 vs 1** (Competition).
3. Controls:
   - **Fireboy**: `W, A, S, D` to move, `Space` to jump, `E` to interact.
   - **Watergirl**: `Arrow Keys` to move, `Shift` to jump, `Enter` to interact.

---

## How We Used AI (Gemini / ChatGPT)

I used AI as a **high-level pair programmer** to handle complex mathematical boilerplate and accelerate the visualization process.

For instance, when designing the characters, I provided 2D reference images and asked the AI to:
- Generate the logic for the `createPlayer` function.
- Meticulously place dozens of small cubes (`BoxGeometry`) to match the voxel art style.
- Calculate the rotation offsets for walking and idle animations to make the voxels feel alive.

This allowed me to focus on the **creative direction** while the AI handled the repetitive coordinate mapping.

> AI acted as a specialist tool. I provided the vision and the debugging logic; the AI provided the raw code speed.

We also collaborated on:
- **Debugging**: Solving tricky "null pointer" errors in the UI text rendering.
- **Physics**: Refining the "lerp" (linear interpolation) formulas to make character movement and camera tracking feel smooth.

---

## What I Designed Myself

As the lead developer, I was responsible for the core architecture and gameplay balance:

- **Level Design**: Crafted the 3D "Survival" map based on classic 2D layouts to ensure a steep but fair difficulty curve.
- **Physics Engine**: Developed the gravity, grounding, and collision detection systems from the ground up.
- **Interactive Logic**: Programmed the synchronization between levers, moving platforms, and gated doors.
- **Voxel Aesthetics**: Decided the exact color palettes and facial proportions for Fireboy and Watergirl.

---

## Technical Challenges

- **Collision Detection**: Preventing players from "clipping" through walls or sticking to the corners of platforms in 3D space.
- **Performance**: Optimizing the rendering loop to handle hundreds of individual voxel meshes simultaneously at 60 FPS.
- **Split-Screen Logic**: Managing two separate viewports and cameras within a single WebGL renderer.

---

## Libraries Used

- `Three.js` (r161) — The core engine for 3D rendering and lighting.
- `HTML5 LocalStorage` — To persist player progress and checkpoints.
- `Google Fonts` — For that retro "Press Start 2P" arcade feel.

---

## Final Thoughts

This project taught me that the modern web is an incredibly powerful game platform. Moving from 2D to 3D requires a significant jump in mathematical rigor, but seeing the voxel characters come to life makes every line of code worth it.

**3D Fireboy & Watergirl** isn't just a game; it's a proof of concept for high-quality, zero-install web gaming.

Thanks for reading!