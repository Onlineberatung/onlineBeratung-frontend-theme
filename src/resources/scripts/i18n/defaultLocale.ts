import { de } from '@onlineberatung/onlineberatung-frontend/src/resources/i18n/de';
import deepmerge from 'deepmerge';
import commonOverrides from './commonOverrides';

const defaultLocale = deepmerge.all([
	de,
	commonOverrides,
	{
		anonymous: {
			'waitingroom.redirect.subline':
				'Registrieren Sie sich und hinterlassen Sie uns Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen. <b>Gehen Sie <a href="registration">zur Registrierung</a></b>',
			'waitingroom.overlay.rejection.copy':
				'Leider konnten wir innerhalb der Chat-Zeit nicht auf Ihr Anliegen eingehen. Registrieren Sie sich und hinterlassen Sie uns Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.'
		},
		deleteAccount: {
			'successOverlay.headline':
				'Sie haben Ihren Account bei der Online-Beratung & Hilfe erfolgreich gelöscht.'
		},
		enquiry: {
			'write.overlayCopy':
				'Wir melden uns so schnell wie möglich bei Ihnen.',
			'write.infotext.copy':
				'Vielleicht hilft Ihnen einer der folgenden Punkte bei der Formulierung weiter:',
			'write.infotext.copy.facts':
				'<ul><li>Zu welchem Thema wünschen Sie sich mehr Informationen oder Beratung?</li><li>Wie ist Ihre aktuelle Situation?</li><li>Was beschäftigt Sie?</li><li>Haben Sie eine bestimmte Frage oder wissen Sie vielleicht selbst noch nicht so genau was Ihnen helfen könnte?</li></ul>'
		},
		registration: {
			'welcomeScreen.info2.text':
				'Schicken Sie Ihre Nachricht an unsere Berater_innen',
			'welcomeScreen.info3.text':
				'Wir melden uns so schnell wie möglich bei Ihnen'
		},
		furtherSteps: {
			'step3.info': 'Ihr_e Berater_in antwortet so schnell wie möglich.'
		},
		twoFactorAuth: {
			subtitle:
				'Nutzen Sie eine weitere App für die Anmeldung mit Ihrem Online-Beratung & Hilfe Konto. Dadurch ist Ihr Konto sicherer vor einem möglichen unbefugtem Zugriff.'
		}
	}
]);

export default defaultLocale;
