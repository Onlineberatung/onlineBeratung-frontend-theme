import deepmerge from 'deepmerge';
import { deInformal } from '@onlineberatung/onlineberatung-frontend/src/resources/i18n/de.informal';
import commonOverrides from './commonOverrides';

const informalLocale = deepmerge.all([
	deInformal,
	commonOverrides,
	{
		anonymous: {
			'waitingroom.redirect.subline':
				'Registriere Dich und hinterlasse uns eine Nachricht. Wir melden uns so schnell wie möglich bei Dir. <b>Gehe <a href="registration">zur Registrierung</a></b>',
			'waitingroom.overlay.rejection.copy':
				'Leider konnten wir innerhalb der Chat-Zeit nicht auf Dein Anliegen eingehen. Registrieren Dich und hinterlasse uns eine Nachricht. Wir melden uns so schnell wie möglich bei Dir.'
		},
		deleteAccount: {
			'successOverlay.headline':
				'Du hast Deinen Account bei der Online-Beratung & Hilfe erfolgreich gelöscht.'
		},
		enquiry: {
			'write.overlayCopy':
				'Wir melden uns so schnell wie möglich bei Dir.',
			'write.infotext.copy':
				'Vielleicht hilft Dir einer der folgenden Punkte bei der Formulierung weiter:',
			'write.infotext.copy.facts':
				'<ul><li>Zu welchem Thema wünschst Du Dir mehr Informationen oder Beratung?</li><li>Wie ist Deine aktuelle Situation?</li><li>Was beschäftigt Dich?</li><li>Hast Du eine bestimmte Frage oder weißt Du vielleicht selbst noch nicht so genau was Dir helfen könnte?</li></ul>'
		},
		registration: {
			'welcomeScreen.info2.text':
				'Schicke Deine Nachricht an unsere Berater_innen',
			'welcomeScreen.info3.text':
				'Wir melden uns so schnell wie möglich bei Dir'
		},
		furtherSteps: {
			'step3.info': 'Dein_e Berater_in antwortet so schnell wie möglich.'
		},
		twoFactorAuth: {
			subtitle:
				'Nutze eine weitere App für die Anmeldung mit Deinem Online-Beratung & Hilfe Konto. Dadurch ist Dein Konto sicherer vor einem möglichen unbefugtem Zugriff.'
		}
	}
]);

export default informalLocale;
