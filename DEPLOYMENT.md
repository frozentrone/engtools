# PCCC 1.13.0 - Marker shapes + compact mobile header

Target: https://frozentrone.github.io/pccc/

## New comparison controls
Each comparison sample now has both colour and marker-shape controls. Available shapes: Circle, Square, Diamond, Cross and X. Marker choice is applied to genuine Plotly 3D traces and the PCCC 2D Overlay/Small Multiples renderer.

## Mobile header redesign
At <=720 px the fixed blue header now defaults to a compact single-row identity bar with a Menu control. Save/Load/About and detailed active-sample metadata are collapsed by default and can be expanded with Menu, then collapsed again with Close. Desktop behaviour is preserved.

The PWA release/cache references are updated to 1.13.0 and the local offline Plotly bundle is preserved.
