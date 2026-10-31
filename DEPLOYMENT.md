# PCCC 1.12.0 - Genuine interactive 3D comparison

Target: https://frozentrone.github.io/pccc/

## Major comparison change
The previous canvas pseudo-3D renderer has been replaced with a genuine Plotly.js WebGL 3D scene for the 3D Stacked comparison view.

- X = selected particle metric
- Y = Particle Size (µm)
- Z = sample layer
- Each sample is a separate scatter3d trace at its own Z coordinate
- A translucent mesh plane marks each sample layer
- True orbit camera, pan/zoom interaction, wheel zoom, Plotly 3D modebar and PNG export
- Sample names are Z tick labels
- Hover identifies sample, particle ID and values
- Local plotly.min.js is included and precached so the 3D renderer remains available offline
- 2D Overlay and Small Multiples remain available using the existing renderer
