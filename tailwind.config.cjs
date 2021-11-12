const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				blue: "#006aff"
			}
		}
	},

	plugins: []
};

module.exports = config;
