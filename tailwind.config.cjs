const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				blue: "#4190F1"
			}
		}
	},

	plugins: []
};

module.exports = config;
