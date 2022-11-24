// This file should contain labels that should be overridden for both the
// default as well as the informal locale. If you need to override labels
// specific to one of those modes, please add them to the respective module.

const commonOverrides = {
	login: {
		'register.linkLabel': 'Registrieren'
	},
	anonymous: {
		'overlay.finishChat.success.button': 'Zur Startseite',
		'overlay.chatWasFinished.button': 'Zur Startseite'
	},
	app: {
		'stage.title': 'Beratung\n& Hilfe'
	},
	registration: {
		'overlay.success.headline':
			'Herzlich willkommen<br>bei der Online-Beratung & Hilfe.',
		'welcomeScreen.subline': 'Wie läuft die Beratung & Hilfe ab?'
	},
	legal: {
		'termsAndConditions.label': 'Nutzungsbedingungen'
	},
	error: {
		'statusCodes.400.description':
			'Da ist etwas schiefgelaufen. Bitte überprüfe noch einmal deine URL, sie sollte so aussehen:<br /><br/><strong>[beratungsstelle].onlineberatung.net</strong>'
	},
	groupChat: {
		'create.button.label': 'Chat erstellen'
	},
	sessionList: {
		'createChat.buttonTitle': 'Chat erstellen'
	}
};

export default commonOverrides;
