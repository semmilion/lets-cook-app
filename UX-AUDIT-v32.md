# Let's Cook! — UI/UX repair notes (v32)

## Changes applied
- Removed the 620px cap from the app viewport so desktop layouts can use the available screen width.
- Unified page gutters and main content width, with compact tablet/mobile spacing.
- Rebuilt the recipe feed as a responsive grid with consistent vertical recipe cards, fixed image aspect ratio, `object-fit: cover`, and bounded text blocks.
- Reduced oversized welcome/recent/dish-of-day sections and removed the scaled-down recent-card treatment.
- Made quick filters wrap on wider screens and scroll horizontally on narrow screens; kept category pills in a single horizontal strip.
- Converted recommendation actions to two equal desktop columns and stacked them on mobile.
- Hid the floating bottom navigation on desktop and synchronized its visibility to the active screen and compact viewport width.
- Increased and centered the login card to a maximum width of 440px; normalized password field background and added a show/hide password control without replacing auth handlers.
- Added focus/interaction/responsive refinements and reduced-motion support.
- Moved the existing v31 style/script block back inside the document body (it had been after `</html>`).

## Checks performed
- All inline JavaScript blocks pass `node --check`.
- Static relative `<img src>` references checked: no missing local image paths found.
- Style and script opening/closing tag counts match; `</body>` precedes `</html>`.
- Chromium headless rendering was attempted but did not finish in this environment (browser process hung during startup), so interactive visual testing at all requested viewport sizes could not be confirmed here.

## Scope
The existing single-file HTML/PWA architecture, Firebase integration, recipes, assets, route/screen logic, and existing handlers were retained.
