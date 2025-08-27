import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Brand colors
				brand: {
					green: 'hsl(var(--brand-green))',
					'green-muted': 'hsl(var(--brand-green-muted))'
				},
				
				// Text colors
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))'
				},
				
				// Dividers
				divider: {
					DEFAULT: 'hsl(var(--divider))',
					light: 'hsl(var(--divider-light))'
				},
				
				// Surfaces
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					soft: 'hsl(var(--surface-soft))'
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				display: ['var(--font-display)'],
				'display-ar': ['var(--font-display-ar)'],
				body: ['var(--font-body)'],
				'body-ar': ['var(--font-body-ar)']
			},
			spacing: {
				'section': '10rem',
				'section-sm': '6rem'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'ken-burns': {
					'0%': { transform: 'scale(1) translateX(0) translateY(0)' },
					'100%': { transform: 'scale(1.06) translateX(-2%) translateY(-1%)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ken-burns': 'ken-burns 6s infinite linear alternate',
				'fade-in': 'fade-in 700ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
				'slide-up': 'slide-up 600ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards'
			},
			transitionTimingFunction: {
				'luxury': 'cubic-bezier(0.22, 0.61, 0.36, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
