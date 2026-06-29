---
name: Neo-Gen High Tech
colors:
  surface: '#12131c'
  surface-dim: '#12131c'
  surface-bright: '#383843'
  surface-container-lowest: '#0d0e17'
  surface-container-low: '#1a1b24'
  surface-container: '#1e1f29'
  surface-container-high: '#282933'
  surface-container-highest: '#33343e'
  on-surface: '#e3e1ef'
  on-surface-variant: '#c9c8ab'
  inverse-surface: '#e3e1ef'
  inverse-on-surface: '#2f303a'
  outline: '#929277'
  outline-variant: '#474832'
  surface-tint: '#ffaa06'
  primary: '#ffaa06'
  on-primary: '#1c1300'
  primary-container: '#5a3d00'
  on-primary-container: '#ffce6b'
  inverse-primary: '#7a5300'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#ffffff'
  on-tertiary: '#5e1700'
  tertiary-container: '#ffdbd0'
  on-tertiary-container: '#b83500'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffaa06'
  primary-fixed-dim: '#d98e00'
  on-primary-fixed: '#1c1300'
  on-primary-fixed-variant: '#7a5300'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#3a0b00'
  on-tertiary-fixed-variant: '#852400'
  background: '#12131c'
  on-background: '#e3e1ef'
  surface-variant: '#33343e'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-sm: 16px
  margin-md: 32px
  margin-lg: 48px
  container-max: 1280px
---

## Brand & Style
The design system bridges the gap between high-velocity energy and technical sophistication. It is a hybrid aesthetic that fuses the structural playfulness of **Gen-Z Bold** with the refined, atmospheric depth of **Neo-Bac**. The UI should feel like a premium command center—urgent and vibrant, yet organized and professional.

The style leverages a **Modern-Bento** layout, utilizing high-contrast accents against a void-like dark background. Key visual pillars include:
- **Glassmorphism:** Layers of semi-transparent surfaces to imply physical depth.
- **Neon Accents:** Strategic "light-leak" glows and high-saturation focal points.
- **Dynamic Energy:** A tension between heavy, bold typography and airy, translucent components.

## Colors
The palette is rooted in a deep, nocturnal base to allow neon accents to vibrate.
- **Primary (Amber `#FFAA06`):** Used for critical calls to action and "attention-grabbing" data points.
- **Secondary (Cyan Neon):** Used for technical indicators, active states, and interactive decorative elements.
- **Tertiary (Blaze Orange):** Reserved for warnings, errors, or secondary highlights within bento modules.
- **Neutral (Ink Deep):** A multi-tonal indigo-black system used for the background and container fills to prevent pure-black "crushing."

Color application should follow a "glow-on-dark" logic, where saturated colors are often paired with a subtle outer shadow of the same hue to simulate light emission.

## Typography
The typography is built entirely on **Montserrat**, emphasizing its geometric and architectural qualities.
- **Headlines:** Utilize the "Black" (900) and "ExtraBold" (800) weights with tight letter spacing to create a high-impact, editorial feel.
- **Body:** Use "Regular" (400) for long-form reading to maintain legibility against dark backgrounds.
- **Labels:** Use "SemiBold" (600) with increased letter spacing and uppercase styling for a technical, HUD-inspired aesthetic.
- **Monospaced Accents:** For data values or technical snippets, **JetBrains Mono** should be used sparingly.

## Layout & Spacing
The layout philosophy centers on the **Bento Grid**. Content is organized into distinct, card-like modules of varying sizes that fit together in a tight, geometric puzzle.

- **Grid System:** A 12-column grid for desktop, 6-column for tablet, and 2-column for mobile.
- **Module Spacing:** Use a consistent 24px gutter between bento boxes.
- **Internal Padding:** Modules should have a minimum internal padding of 32px to ensure the bold typography has enough room to breathe.
- **Reflow:** On mobile, bento modules stack vertically but maintain their distinct card-like borders and glass effects.

## Elevation & Depth
Depth is not communicated through traditional drop shadows, but through **Tonal Stacking** and **Light Emission**.

1.  **Background:** The base `#12131c` layer.
2.  **Mid-Ground (Glass):** Bento containers use a semi-transparent fill (`rgba(255, 255, 255, 0.05)`) with a `backdrop-filter: blur(12px)`.
3.  **Foreground:** Interactive elements like buttons and chips.
4.  **Accents:** A 1px "inner border" on the top and left of containers (light-white or primary-color at 10% opacity) simulates a glass edge catching the light.

**Subtle Glows:** Use a `box-shadow` with a large blur (20px-40px) and very low opacity (15%) in either the Primary or Secondary color to make high-priority cards appear as if they are backlit.

## Shapes
The shape language is "Modern-Rounded." It avoids the clinical feel of sharp corners while maintaining a professional structure.

- **Containers (Bento Boxes):** Use `rounded-xl` (1.5rem / 24px) to create a soft, friendly container for the bold content inside.
- **Interactive Elements:** Buttons and Inputs use `rounded-md` (0.5rem / 8px) to feel more precise and technical.
- **Iconography:** Icons should feature thick strokes (2px+) with rounded terminals to match the playfulness of the brand.

## Components
### Buttons
- **Primary:** Solid Amber (`#FFAA06`) fill with near-black text. No shadow, but a subtle amber outer glow on hover.
- **Secondary:** Ghost style with a Cyan 1.5px border and Cyan text.
- **Tertiary:** Transparent background with an underline effect on hover.

### Input Fields
- **Styling:** Darker than the bento background, 1px Cyan border (active state), or 1px white-alpha border (inactive).
- **Labels:** Small, uppercase labels positioned above the input field.

### Bento Cards
- **Styling:** Glassmorphic background, 1px white-alpha border.
- **Variants:** "Hot" cards use a faint Blaze Orange gradient glow in the corner; "Active" cards use a Cyan glow.

### Chips/Tags
- **Styling:** High-saturation backgrounds with black text for maximum contrast. Use a "pill" shape (rounded-full) regardless of the system's base roundedness.

### Progress Indicators
- **Styling:** Thick, neon-colored bars with a "pulse" animation. Avoid thin, subtle lines; make progress feel mechanical and high-tech.
