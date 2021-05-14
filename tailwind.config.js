module.exports = {
	important: false, // Add !important to every Tailwind CSS - this is useful until I have fully converted to Tailwind CSS (otherwise may be overwritten by my other styles)
	purge: ['./src/**/*.vue', './src/**/*.js', './src/**/*.html', './index.html'],
	darkMode: 'class', // 'media' or 'class'
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'2.25xl': '1650px',
			'2.5xl': '1800px',
			'3xl': '1920px',
		},
		extend: {
			colors: {
				red: {
					100: '#fbdddd',
					200: '#f7bcbc',
					300: '#f39a9a',
					400: '#ef7979',
					500: '#eb5757',
					600: '#bc4646',
					700: '#8d3434',
					800: '#5e2323',
					900: '#2f1111',
				},
				gray: {
					100: '#f7fafc',
					120: '#F5F7F8',
					150: '#EFEFEF',
					200: '#edf2f7',
					300: '#e2e8f0',
					400: '#cbd5e0',
					500: '#a0aec0',
					600: '#718096',
					700: '#4a5568',
					800: '#1f495f',
					// 800: '#2d3748',
					900: '#1a202c',
				},
				green: {
					100: '#ccebcc',
					200: '#99d899',
					300: '#66c466',
					400: '#33b133',
					500: '#009d00',
					600: '#007e00',
					700: '#005e00',
					800: '#003f00',
					900: '#001f00',
				},
				'gray-dark': {
					100: '#838891',
				},

				blue: {
					400: '#9EAAB1',
					500: '#687B8B',
					600: '#4a5568',
					700: '#396CA4',
					750: '#20495F',
					800: '#1F4976',
					900: '#00314b',
				},
				/* Use VSCode plugin to quickly generate color palette */
				black: {
					100: '#ccd6db',
					200: '#99adb7',
					300: '#668393',
					400: '#335a6f',
					500: '#00314b',
					600: '#00273c',
					700: '#001d2d',
					800: '#00141e',
					900: '#000a0f',
				},
				orange: {
					100: '#fdecce',
					200: '#fbd89d',
					300: '#f9c56d',
					// 400: '#f7b13c',
					// 500: '#f59e0b',
					400: '#f59e0b',
					500: '#F56A02',
					600: '#c47e09',
					700: '#935f07',
					800: '#623f04',
					900: '#312002',
				},
			},
			// Sets default font family
			fontFamily: {
				sans: ['Montserrat', 'Averta Std', 'Nunito Sans', 'Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
				serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'Pensum Display', 'serif'],
				mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
			},
			spacing: {
				// Padding
				'80': '20rem',
				'108': '27rem',
				loose: '1.5vw',
			},
			borderWidth: {
				DEFAULT: '1px',
				'0': '0',
				'2': '2px',
				'3': '3px',
				'4': '4px',
				'6': '6px',
				'8': '8px',
			},
			minWidth: {
				9: '9rem',
				12: '12rem',
				14: '14rem',
				15: '15rem',
				sm: '15rem',
				md: '20rem',
				lg: '25rem',
				xl: '36rem',
				'4/5': '80%',
			},
			maxWidth: {
				9: '9rem',
				12: '12rem',
				14: '14rem',
				15: '15rem',
				base: '15rem',
				md: '20rem',
				lg: '25rem',
				xl: '36rem',
				'2xl': '48rem',
				'3xl': '60rem',
				'4/5': '80%',
			},
			width: {
				'2.5': '0.875rem',
			},
			minHeight: {
				xs: '.5rem',
				sm: '1.5rem',
				base: '2.5rem',
				lg: '3.5rem',
				xl: '4.5rem',
				'2xl': '6.5rem',
				'3xl': '8.5rem',
				'4xl': '10rem',
				'5xl': '11rem',
				'6xl': '12rem',
				'7xl': '13rem',
			},
			inset: {
				cus1: '6rem',
				cus2: '4.7rem',
			},
			fontSize: {
				xxs: '.55rem',
				xs: '.75rem',
				sm: '.875rem',
				tiny: '.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',
				'7xl': '5rem',
			},
			gridTemplateColumns: {
				'2max': 'repeat(2, 1fr)',
				'3max': 'repeat(3, 1fr)',
				'4max': 'repeat(4, 1fr)',
			},
			zIndex: {
				45: 45,
				60: 60,
			},
			borderRadius: {
				none: '0',
				sm: '0.125rem',
				// DEFAULT: '0.25rem',
				DEFAULT: '4px',
				md: '0.375rem',
				lg: '0.5rem',
				full: '9999px',
				large: '12px',
			},
			// Typography plugin
			typography: {
				DEFAULT: {
					css: {
						// Prose by default restricts the width - don't
						'max-width': 'initial !important',
						// Also override some other presets
						a: {
							'text-decoration': 'none',
						},
						h1: {
							color: 'inherit',
						},
						h2: {
							color: 'inherit',
						},
						h3: {
							color: 'inherit',
						},
						h4: {
							color: 'inherit',
						},
						h5: {
							color: 'inherit',
						},
						h6: {
							color: 'inherit',
						},
					},
				},
			},
		},
	},
	variants: {
		extend: {},
		rotate: ['group-hover'],
		display: ['responsive', 'group-hover', 'group-focus'],
	},
	plugins: [
		require('tailwindcss-debug-screens'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('tailwindcss-fluid')({
			textSizes: {
				xs: {
					min: '10px',
					max: '14px',
					minvw: '320px',
					maxvw: '1400px',
				},
				sm: {
					min: '14px',
					max: '22px',
					minvw: '320px',
					maxvw: '1400px',
				},
				md: {
					min: '18px',
					max: '22px',
					minvw: '320px',
					maxvw: '1400px',
				},
				lg: {
					min: '24px',
					max: '32px',
					minvw: '320px',
					maxvw: '1400px',
				},
				xl: {
					min: '28px',
					max: '44px',
					minvw: '320px',
					maxvw: '1400px',
				},
				'2xl': {
					min: '32px',
					max: '50px',
					minvw: '320px',
					maxvw: '1400px',
				},
				'3xl': {
					min: '32px',
					max: '56px',
					minvw: '320px',
					maxvw: '1400px',
				},
				'4xl': {
					min: '32px',
					max: '56px',
					minvw: '320px',
					maxvw: '1400px',
				},
				'5xl': {
					min: '66px',
					max: '88px',
					minvw: '320px',
					maxvw: '1400px',
				},
				// '5xl': {
				// 		min: '28px',
				// 		max: '44px',
				// 		minvw: '320px',
				// 		maxvw: '1400px',
				// 	},

				// 	'2xl': '1.5rem',
				// 	'3xl': '1.875rem',
				// 	'4xl': '2.25rem',
				// 	'5xl': '3rem',
				logo: {
					min: '20px',
					max: '82px',
					minvw: '400px',
					maxvw: '1700px',
					// min: '16px',
					// max: '38px',
				},
			},
			width: {
				sidePost: {
					min: '40px',
					max: '62px',
					minvw: '320px',
					maxvw: '1400px',
				},
				logo: {
					min: '32px',
					max: '58px',
					minvw: '320px',
					maxvw: '1400px',
				},
				logoImage: {
					// Fingerprint
					// min: '16px',
					// max: '38px',
					// minvw: '320px',
					// maxvw: '1400px',
					min: '3rem',
					max: '5rem',
					minvw: '320px',
					maxvw: '1400px',
				},
			},
		}),
	],
};