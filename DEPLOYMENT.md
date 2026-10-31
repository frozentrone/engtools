# Particle Charge Calculator 2D - Release 1.10.0

Target: https://frozentrone.github.io/pccc/

## Why this is a MINOR release
New plot controls have been added: users can now set X major, X minor, Y major and Y minor axis units for each processed-data plot.

## Changes
- Added Excel-style major/minor axis unit fields independently to Plot 1, Plot 2 and Plot 3.
- Leaving a unit field blank keeps automatic nice-number spacing.
- Automatic major spacing uses nice numeric steps; automatic minor spacing uses one-fifth of the selected/automatic major unit.
- Manual unit values must be positive.
- Major gridlines/tick labels and lighter minor gridlines are rendered separately.
- Axis-unit inputs are included automatically in existing Save/Load Instance persistence because numeric inputs are already serialised.
- Existing manual axis limits, zoom/pan, reset, PNG/CSV export and crosshair are retained.
- PWA version/cache references incremented to 1.10.0.

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
1. Confirm header displays v1.10.0.
2. For each plot, set X major, X minor, Y major and Y minor units and verify grid spacing changes accordingly.
3. Leave the unit fields blank and confirm clean automatic increments are restored.
4. Save and load an instance and confirm entered axis units are restored.
5. Verify manual axis limits, zoom/pan, Reset, PNG, CSV and Crosshair still work.
6. Confirm version.json and service-worker cache use 1.10.0.
7. Confirm offline operation after one successful online load.
