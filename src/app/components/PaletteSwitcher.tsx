import { useState, useEffect } from 'react';

interface Palette {
  id: string;
  name: string;
  primary: string;
  primaryDark: string;
  cta: string;
  ctaDark: string;
  oliveDark: string;
  oliveMedium: string;
  cream: string;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  inputBackground: string;
  switchBackground: string;
  ring: string;
}

const palettes: Palette[] = [
  {
    id: 'sage-cream',
    name: 'Sage & Cream',
    primary: '#7D8E6E',
    primaryDark: '#6A7A5C',
    cta: '#7D8E6E',
    ctaDark: '#6A7A5C',
    oliveDark: '#2C3527',
    oliveMedium: '#6B7F6B',
    cream: '#E8EDE4',
    background: '#F5F6F3',
    foreground: '#2C3527',
    muted: '#E8EDE4',
    accent: '#E2E7DE',
    inputBackground: '#E8EDE4',
    switchBackground: '#C5CEC1',
    ring: '#6B7F6B',
  },
  {
    id: 'forest-teal',
    name: 'Forest & Teal',
    primary: '#4A6741',
    primaryDark: '#3B5434',
    cta: '#3E8E7E',
    ctaDark: '#337368',
    oliveDark: '#1E2B1E',
    oliveMedium: '#6B7F6B',
    cream: '#E4EBE4',
    background: '#F3F5F2',
    foreground: '#1E2B1E',
    muted: '#E4EBE4',
    accent: '#DEE5DE',
    inputBackground: '#E4EBE4',
    switchBackground: '#C0CAC0',
    ring: '#6B7F6B',
  },
  {
    id: 'moss-rose',
    name: 'Moss & Rose',
    primary: '#6B8F5E',
    primaryDark: '#5A7A4E',
    cta: '#C4878B',
    ctaDark: '#B07074',
    oliveDark: '#2A3325',
    oliveMedium: '#7A8B72',
    cream: '#EAE5E0',
    background: '#F5F4F2',
    foreground: '#2A3325',
    muted: '#EAE5E0',
    accent: '#E4E0DB',
    inputBackground: '#EAE5E0',
    switchBackground: '#C8C2BC',
    ring: '#7A8B72',
  },
  {
    id: 'olive-blue',
    name: 'Olive & Blue',
    primary: '#6A7D52',
    primaryDark: '#5A6B44',
    cta: '#5E83A4',
    ctaDark: '#4D6F8D',
    oliveDark: '#2B3124',
    oliveMedium: '#7A8672',
    cream: '#E5E8E2',
    background: '#F4F5F2',
    foreground: '#2B3124',
    muted: '#E5E8E2',
    accent: '#DFE3DB',
    inputBackground: '#E5E8E2',
    switchBackground: '#C2C8BE',
    ring: '#7A8672',
  },
];

function applyPalette(palette: Palette) {
  const root = document.documentElement;
  root.style.setProperty('--primary', palette.primary);
  root.style.setProperty('--primary-dark', palette.primaryDark);
  root.style.setProperty('--cta', palette.cta);
  root.style.setProperty('--cta-dark', palette.ctaDark);
  root.style.setProperty('--secondary', palette.primaryDark);
  root.style.setProperty('--olive-dark', palette.oliveDark);
  root.style.setProperty('--olive-medium', palette.oliveMedium);
  root.style.setProperty('--cream', palette.cream);
  root.style.setProperty('--background', palette.background);
  root.style.setProperty('--foreground', palette.foreground);
  root.style.setProperty('--card-foreground', palette.foreground);
  root.style.setProperty('--popover-foreground', palette.foreground);
  root.style.setProperty('--accent-foreground', palette.foreground);
  root.style.setProperty('--muted', palette.muted);
  root.style.setProperty('--muted-foreground', palette.oliveMedium);
  root.style.setProperty('--accent', palette.accent);
  root.style.setProperty('--input-background', palette.inputBackground);
  root.style.setProperty('--switch-background', palette.switchBackground);
  root.style.setProperty('--ring', palette.ring);

  // Update browser chrome color
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', palette.primary);
}

const STORAGE_KEY = 'uncle-voo-palette';

export function PaletteSwitcher() {
  const [activeId, setActiveId] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'sage-cream';
    } catch {
      return 'sage-cream';
    }
  });

  useEffect(() => {
    const palette = palettes.find((p) => p.id === activeId) || palettes[0];
    applyPalette(palette);
  }, [activeId]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Color palette">
      {palettes.map((p) => (
        <button
          key={p.id}
          onClick={() => handleSelect(p.id)}
          title={p.name}
          role="radio"
          aria-checked={activeId === p.id}
          className={`h-6 w-6 rounded-full border-2 transition-all duration-200 cursor-pointer ${
            activeId === p.id
              ? 'border-gray-500 scale-110 shadow-md'
              : 'border-transparent hover:scale-110 hover:border-gray-300'
          }`}
          style={{
            background:
              p.primary === p.cta
                ? p.primary
                : `linear-gradient(135deg, ${p.primary} 50%, ${p.cta} 50%)`,
          }}
          aria-label={`Switch to ${p.name} palette`}
        />
      ))}
    </div>
  );
}
