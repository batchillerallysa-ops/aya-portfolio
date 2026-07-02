# Theme Colors Reference

## Quick Color Palette Guide

### 🌊 Wave Theme (Default/Teal-Ocean)
```
Background:    #08080c (near-black)
Foreground:    #ededf2 (light)
Primary:       #06b6d4 (cyan)
Secondary:     #22d3ee (light cyan)
Accent:        #67e8f9 (bright cyan)
Muted:         #1c1c24
Border:        #2a2a36 / 60%
```
**Feel**: Cool, oceanic, professional
**Best for**: Default/main theme, tech/automation focus

---

### 🌙 Moon Theme (Dark/Purple)
```
Background:    #0a0a0a (pure black)
Foreground:    #f0f0f0 (near-white)
Primary:       #8b5cf6 (purple)
Secondary:     #a78bfa (light purple)
Accent:        #c4b5fd (pale purple)
Muted:         #303030
Border:        #2a2a2a / 60%
```
**Feel**: Deep, mystical, relaxing
**Best for**: Night mode, comfortable reading

---

### ☀️ Sun Theme (Light/Orange)
```
Background:    #fafafa (off-white)
Foreground:    #1a1a1a (dark)
Primary:       #ea580c (orange)
Secondary:     #fb923c (light orange)
Accent:        #fdba74 (pale orange)
Muted:         #f0f0f0
Border:        #e0e0e0 / 60%
```
**Feel**: Bright, warm, energetic
**Best for**: Daytime use, high contrast

---

### ✨ Sparkle Theme (Special/Magenta)
```
Background:    #0f0319 (deep purple)
Foreground:    #f3f0ff (lavender)
Primary:       #d946ef (magenta)
Secondary:     #e879f9 (light magenta)
Accent:        #f0abfc (pale magenta)
Muted:         #2d1847
Border:        #3d2455 / 60%
```
**Feel**: Vibrant, fun, magical
**Best for**: Special events, creative mood

---

## Color Mapping in All Themes

| Element | Wave | Moon | Sun | Sparkle |
|---------|------|------|-----|---------|
| **Background** | #08080c | #0a0a0a | #fafafa | #0f0319 |
| **Foreground (Text)** | #ededf2 | #f0f0f0 | #1a1a1a | #f3f0ff |
| **Primary (Buttons)** | #06b6d4 | #8b5cf6 | #ea580c | #d946ef |
| **Secondary** | #22d3ee | #a78bfa | #fb923c | #e879f9 |
| **Accent** | #67e8f9 | #c4b5fd | #fdba74 | #f0abfc |
| **Card** | #121218 | #1a1a1a | #ffffff | #1a0f33 |
| **Muted** | #1c1c24 | #303030 | #f0f0f0 | #2d1847 |
| **Border** | #2a2a36/60% | #2a2a2a/60% | #e0e0e0/60% | #3d2455/60% |

---

## How Themes Apply

### UI Elements That Change
- ✅ Page background
- ✅ Text color
- ✅ Button backgrounds
- ✅ Card backgrounds
- ✅ Border colors
- ✅ Input fields
- ✅ Links and accents
- ✅ Navigation bar
- ✅ Shadows and glows
- ✅ Hover states

### Transition
All changes happen over **600ms** with smooth easing:
```css
transition-property: background-color, border-color, color, fill, stroke, box-shadow;
transition-duration: 600ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Theme Toggle Location

**Desktop**: Top right of header (4 icon buttons in a pill)
**Mobile**: Inside hamburger menu

### Icons
- 🌊 Waves = Wave (Teal)
- ✨ Sparkles = Sparkle (Magenta)
- ☀️ Sun = Sun (Orange/Light)
- 🌙 Moon = Moon (Purple/Dark)

---

## CSS Implementation

Located in: `/app/globals.css`

Each theme defined as:
```css
:root[data-theme="themename"] {
  --primary: #hexcolor;
  --secondary: #hexcolor;
  /* ... all variables ... */
}
```

Wave theme uses default `:root` (no `data-theme` attribute)

---

## Testing Checklist

- [ ] Click each theme icon - colors transition smoothly
- [ ] Refresh page - theme persists
- [ ] Open new tab - same theme loads
- [ ] Inspect DevTools - `data-theme` attribute changes
- [ ] Check localStorage - `theme-preference` saves value
- [ ] Mobile view - theme toggle works
- [ ] Accessibility - all themes have sufficient contrast

---

## Notes

- **Default theme**: Wave (teal) - loads first time
- **Persistence**: localStorage key = `theme-preference`
- **Smooth animation**: No instant jumps, everything fades over 600ms
- **Complete coverage**: All UI elements follow theme colors
- **Mobile friendly**: Touch-optimized 32x32px buttons
- **Accessible**: ARIA labels on all buttons
