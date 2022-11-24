import 'cypress-file-upload';
import './commands.ts';

beforeEach(() => {
	window.localStorage.setItem('locale', 'de');
	window.localStorage.setItem('showDevTools', '0');
});
