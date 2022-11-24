import { defineConfig } from 'cypress';
// @ts-ignore
import wp from '@cypress/webpack-preprocessor';

const options = {
	webpackOptions: {
		resolve: {
			extensions: ['.ts', '.tsx', '.js']
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					options: { transpileOnly: true }
				}
			]
		}
	}
};

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:9000',
		supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
		setupNodeEvents(on, config) {
			on('file:preprocessor', wp(options));
		}
	},
	env: {
		REACT_APP_API_URL: process.env.REACT_APP_API_URL,
		CYPRESS_WS_URL:
			process.env.CYPRESS_WS_URL || process.env.REACT_APP_API_URL
	},
	//pluginsFile: false,
	chromeWebSecurity: false,
	viewportWidth: 1200,
	viewportHeight: 800,
	defaultCommandTimeout: 10000
});
