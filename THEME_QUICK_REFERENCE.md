# Theme Quick Reference

## Visual Summary

```
┌─────────────────────────────────────────────────────────────────────┐
│                         THEME COMPARISON                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  WAVE 🌊                                                              │
│  ├─ Background: Teal/Cyan gradient                                   │
│  ├─ Primary: Cyan (#06b6d4)                                          │
│  ├─ Particles: Cyan bokeh bubbles                                    │
│  └─ Mood: Calm, Professional, Default                               │
│                                                                       │
│  MOON 🌙                                                              │
│  ├─ Background: Deep Navy/Purple gradient                            │
│  ├─ Primary: Purple (#8b5cf6)                                        │
│  ├─ Particles: Purple glowing stars                                  │
│  └─ Mood: Mystical, Relaxing, Night-time                            │
│                                                                       │
│  SUN ☀️                                                               │
│  ├─ Background: Warm Cream/White gradient                            │
│  ├─ Primary: Orange (#ea580c)                                        │
│  ├─ Particles: Golden light particles                                │
│  └─ Mood: Warm, Friendly, Daytime                                    │
│                                                                       │
│  SPARKLE ✨                                                           │
│  ├─ Background: Deep Purple/Violet gradient                          │
│  ├─ Primary: Magenta (#d946ef)                                       │
│  ├─ Particles: Magenta sparkles                                      │
│  └─ Mood: Creative, Magical, Special                                 │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Color Palette by Theme

### Wave Theme
```
Background:    #08080c → #0d1117 → #051828 (emerald-teal gradient)
Primary:       #06b6d4 (cyan)
Secondary:     #22d3ee (light cyan)
Accent:        #67e8f9 (bright cyan)
Text:          #ededf2 (light gray)
Card:          #121218 (dark slate)
```

### Moon Theme
```
Background:    #0a0a0a → #1a1a2e → #16213e (navy-purple gradient)
Primary:       #8b5cf6 (purple)
Secondary:     #a78bfa (light purple)
Accent:        #c4b5fd (lavender)
Text:          #f0f0f0 (off-white)
Card:          #1a1a1a (very dark)
```

### Sun Theme
```
Background:    #faf5f0 → #fff8f3 → #fffbf7 (cream-white gradient)
Primary:       #ea580c (warm orange)
Secondary:     #fb923c (light orange)
Accent:        #fdba74 (peach)
Text:          #1a1a1a (dark gray)
Card:          #ffffff (white)
```

### Sparkle Theme
```
Background:    #0f0319 → #2d1b4e → #1a0f33 (purple-violet gradient)
Primary:       #d946ef (magenta)
Secondary:     #e879f9 (light magenta)
Accent:        #f0abfc (hot pink)
Text:          #f3f0ff (very light purple)
Card:          #1a0f33 (dark purple)
```

## File Locations

```
components/
├── theme-background.tsx      ← Canvas particle renderer
├── glassmorphic-nav.tsx      ← Theme toggle buttons
└── firefly-background.tsx    ← (deprecated, replaced by theme-background)

app/
├── globals.css              ← Theme color definitions
└── layout.tsx               ← ThemeBackground integration

lib/
└── projects/
    ├── zapier/
    ├── make/
    ├── n8n/
    └── ghl/
```

## Key Features

✅ **4 Distinct Themes**
- Wave (default), Moon, Sun, Sparkle
- Each with unique color palette and particle effects

✅ **Smooth Transitions**
- 600ms fade between themes
- GPU-accelerated for performance
- No jarring color jumps

✅ **Persistent State**
- Saved to localStorage
- Survives page refreshes
- Remembers user preference

✅ **Atmospheric Effects**
- Canvas-based particle animations
- Theme-specific effects (bokeh, stars, rays, sparkles)
- Optimized 60fps rendering

✅ **Active State Indicator**
- Gradient background + glow shadow
- Changes color per theme
- Visual feedback on selection

✅ **Contrast & Accessibility**
- WCAG AA/AAA compliant contrast ratios
- Readable text in all themes
- Keyboard navigable

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Navigate to theme buttons |
| `Space/Enter` | Activate theme button |
| `Shift+Tab` | Navigate backwards |

## localStorage Key

```javascript
// To manually check saved theme:
localStorage.getItem('theme-preference')
// Returns: 'wave', 'moon', 'sun', 'sparkle', or null

// To manually set theme:
localStorage.setItem('theme-preference', 'sparkle')

// To reset to default:
localStorage.removeItem('theme-preference')
```

## CSS Variables Reference

All theme colors use CSS custom properties, making them easy to override:

```css
/* Automatic transitions between themes */
--primary                  /* Main brand color */
--primary-foreground       /* Text on primary */
--secondary                /* Secondary brand color */
--accent                   /* Highlight color */
--background               /* Page background */
--foreground               /* Main text color */
--card                     /* Card background */
--border                   /* Border colors */
--muted                    /* Disabled/secondary backgrounds */
--destructive              /* Error/danger states */
```

## Performance Tips

- **Mobile**: GPU usage is minimal, safe for all devices
- **Animations**: 120 particles optimized for 60fps
- **Canvas**: Renders only when theme changes or particles move
- **CSS**: Transitions don't block main thread

## Troubleshooting

**Theme not persisting after refresh?**
- Check if localStorage is enabled in browser
- Private/Incognito mode may disable localStorage
- Clear browser cache and retry

**Particles not visible?**
- Check browser console for canvas errors
- Ensure hardware acceleration is enabled
- Try disabling browser extensions

**Transitions too slow/fast?**
- Edit `transition-duration: 600ms` in globals.css
- Adjust timing-function for different feel
- Default is `cubic-bezier(0.4, 0, 0.2, 1)`

---

**Status**: ✨ Production Ready
**Last Updated**: July 2, 2026
