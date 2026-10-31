# PCCC 1.12.1 - 3D comparison layout fix

Target: https://frozentrone.github.io/pccc/

## Fix
The inactive 2D comparison canvas was still occupying its fixed 650 px height when the Plotly 3D renderer was active. The application's author CSS was overriding the browser's default `[hidden]` styling, creating the large blank area visible above the 3D scene.

- Hidden comparison renderers now explicitly use `display: none !important`.
- Only the active 2D or 3D renderer occupies layout space.
- The Plotly 3D viewport uses a responsive height bounded for desktop and mobile.
- The genuine WebGL 3D renderer, axes, sample layers, camera controls and offline Plotly bundle are preserved.
