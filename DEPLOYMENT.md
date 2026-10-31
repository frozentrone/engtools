# PCCC 1.12.2 - Adjustable 3D sample spacing

Target: https://frozentrone.github.io/pccc/

## Changes
- Replaced the obsolete Depth control with a functional `Sample spacing` slider.
- Range: 0.20× to 5.00× in 0.05× increments.
- The slider genuinely changes each sample's Z coordinate in the Plotly WebGL scene.
- Sample planes, scatter points, Z tick positions and Z-axis range all update together.
- A live numeric readout shows the current spacing multiplier.
- Reset View returns spacing to 1.00×.
- X and Y scientific values are not changed by sample spacing.
- Offline Plotly bundle and all previous comparison modes are retained.
