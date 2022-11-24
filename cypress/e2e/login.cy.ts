import { endpoints } from '@onlineberatung/onlineberatung-frontend/src/resources/scripts/endpoints';

describe('Login', () => {
	xit('should be able to login', () => {
		cy.mockedLogin();

		cy.get('#appRoot').should('exist');
	});

	it('displays the registration at the root', () => {
		cy.fixture('service.consultingtypes.addiction.json').then(
			(addictionConsultingType) => {
				cy.intercept(
					`${endpoints.consultingTypeServiceBase}/byslug/beratung/full`,
					addictionConsultingType
				);
			}
		);

		cy.visit('/');
		cy.contains('Beratung & Hilfe');
		cy.contains('Einfache Registrierung');
		cy.contains('Impressum');
		cy.contains('Datenschutzerklärung');
	});

	it('displays the login for consulting types', () => {
		cy.fixture('service.consultingtypes.addiction.json').then(
			(addictionConsultingType) => {
				cy.intercept(
					`${endpoints.consultingTypeServiceBase}/byslug/suchtberatung/full`,
					addictionConsultingType
				);
			}
		);
		cy.visit('/suchtberatung');
		cy.contains('Login');
	});
});
