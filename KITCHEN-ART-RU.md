# Kitchen icon assets and cooking animations

This test build includes 25 separately exported, newly generated kitchen line-art PNG icons in `assets/icons/`. They are original assets based on the general visual direction of the references, not exact copies.

Cooking-step SVG scenes now load illustration files from `assets/drawings/` (the correct folder) and show a small animated utensil icon selected for the step. Existing steam, pouring, stirring, pan and falling-ingredient animations remain active. `prefers-reduced-motion` is respected.

The service worker cache name was bumped so clients can fetch the updated assets. Test on a preview deployment first.
