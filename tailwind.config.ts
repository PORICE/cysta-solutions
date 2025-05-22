
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
				border: '#3e3a38',
				input: '#3e3a38',
				ring: '#c3b697',
				background: '#07070d',
				foreground: '#ffffff',
				primary: {
					DEFAULT: '#c3b697',
					foreground: '#07070d'
				},
				secondary: {
					DEFAULT: '#3e3a38',
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#111118',
					foreground: '#a1a1aa'
				},
				accent: {
					DEFAULT: '#3e3a38',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: '#111118',
					foreground: '#ffffff'
				},
				card: {
					DEFAULT: '#111118',
					foreground: '#ffffff'
				},
				success: {
					DEFAULT: '#10b981',
					foreground: '#ffffff'
				},
				sidebar: {
					DEFAULT: '#111118',
					foreground: '#ffffff',
					primary: '#c3b697',
					'primary-foreground': '#07070d',
					accent: '#3e3a38',
					'accent-foreground': '#ffffff',
					border: '#3e3a38',
					ring: '#c3b697'
				},
				// New color scheme based on provided colors
				smoky_black: {
					DEFAULT: '#090A05',
					100: '#020201',
					200: '#040402',
					300: '#050603',
					400: '#070804',
					500: '#090a05',
					600: '#444c26',
					700: '#808e47',
					800: '#b0bd7b',
					900: '#d7debd'
				},
				night: {
					DEFAULT: '#0C0C11',
					100: '#030304',
					200: '#050507',
					300: '#08080b',
					400: '#0a0a0e',
					500: '#0c0c11',
					600: '#34344a',
					700: '#5c5c82',
					800: '#8f8faf',
					900: '#c7c7d7'
				},
				walnut_brown: {
					DEFAULT: '#4E483E',
					100: '#0f0e0c',
					200: '#1f1c19',
					300: '#2e2a25',
					400: '#3d3831',
					500: '#4e483e',
					600: '#766d5e',
					700: '#9c9283',
					800: '#bdb6ac',
					900: '#dedbd6'
				},
				davys_gray: {
					DEFAULT: '#5C5B5B',
					100: '#131212',
					200: '#252424',
					300: '#383737',
					400: '#4a4949',
					500: '#5c5b5b',
					600: '#7e7b7b',
					700: '#9e9c9c',
					800: '#bebdbd',
					900: '#dfdede'
				},
				khaki: {
					DEFAULT: '#C4B799',
					100: '#2c2619',
					200: '#584d33',
					300: '#84734c',
					400: '#aa976b',
					500: '#c4b799',
					600: '#cfc5ac',
					700: '#dbd3c1',
					800: '#e7e2d6',
					900: '#f3f0ea'
				},
				// Remove the old lumina and teal colors since we're replacing them
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter var', 'sans-serif'],
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
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'fade-out': 'fade-out 0.4s ease-out',
				'slide-in-right': 'slide-in-right 0.4s ease-out',
				'slide-in-left': 'slide-in-left 0.4s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
