import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: {
			min: '100px',
  			max: '400px'
  		},
  		md: {
			min: '401px',
  			max: '480px'
  		},
  		lg: {
			min: '481px',
  			max: '1024px'
  		},
  		xl: {
			min: '1025px',
  			max: '1280px'
  		},
  		'2xl': {
			min: '1281px',
  			max: '1536px'
		}
  	},
  	extend: {
		keyframes: {
			loading: {
			  '0%': { width: '0%' },
			  '5%': { width: '5%' },
			  '10%': { width: '10%' },
			  '15%': { width: '15%' },
			  '20%': { width: '20%' },
			  '25%': { width: '25%' },
			  '30%': { width: '30%' },
			  '35%': { width: '35%' },
			  '40%': { width: '40%' },
			  '45%': { width: '45%' },
			  '50%': { width: '50%' },
			  '55%': { width: '55%' },
			  '60%': { width: '60%' },
			  '75%': { width: '75%' },
			  '80%': { width: '80%' },
			  '90%': { width: '90%' },
			  '100%': { width: '100%' }
			}
		  },
		  animation: {
			loading: 'loading 1900ms ease-in-out'
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
