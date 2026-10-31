# PCCC 1.12.3 - Sample spacing fix

Target: https://frozentrone.github.io/pccc/

## Fix
In 1.12.2 the slider scaled the sample Z coordinates and the Z-axis range by the same factor. Plotly therefore normalised the changed coordinates back into essentially the same visible depth, so spacing appeared almost unchanged.

1.12.3 keeps sample categories at fixed Z coordinates (0, 1, 2, ...), and the slider instead changes the physical Z aspect ratio of the genuine 3D scene. This makes separation visibly contract or expand without changing X/Y scientific values or sample identity.

- Sample spacing range: 0.15× to 4.00×.
- 1.00× is the default.
- Scatter points, sample planes and categorical Z labels remain aligned.
- Reset View restores 1.00×.
