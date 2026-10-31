# Particle Charge Calculator 2D - Release 1.9.4

Target: https://frozentrone.github.io/aeros/

## Changes
- Plot Zoom, Zoom Out, Reset, PNG and CSV controls reduced to the same control height/typographic scale as the Crosshair control.
- Automatic X-axis limits now use a nice-number rounding algorithm (1, 2, 5 × powers of ten) after padding, reducing unnecessary decimal precision while still enclosing the plotted data.
- Previous 1.9.3 labels retained: Particle Size (um) on all Y axes and Specific Charge on Plot 3 X axis.
- Version/cache references incremented to 1.9.4.

## Replace/add in repository root
- index.html
- manifest.webmanifest
- service-worker.js
- version.json
- offline.html

## Preserve
- favicon.png
- icons/
- README.md

## Verification
1. Confirm the header displays v1.9.4.
2. Confirm Zoom, Zoom Out, Reset, PNG, CSV and Crosshair controls have matching compact height.
3. Process data spanning decimal-valued X ranges and confirm automatic X minima/maxima are rounded outward to concise limits and still contain all points.
4. Confirm all three Y-axis labels remain Particle Size (um) and Plot 3 X axis remains Specific Charge.
5. Confirm version.json reads 1.9.4 and service-worker cache is pccc-v1.9.4.
6. Confirm the PWA loads offline after one successful online load.
