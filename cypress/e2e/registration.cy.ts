import { endpoints } from '@onlineberatung/onlineberatung-frontend/src/resources/scripts/endpoints';

const checkForGenericRegistrationElements = () => {
	cy.get('[data-consultingtype]').should('exist');
	cy.get('.registrationForm__overline').should('exist');
	cy.get('.registrationForm__headline').should('exist');
	cy.get('#username').should('exist');
	cy.get('#passwordInput').should('exist');
	cy.get('#passwordConfirmation').should('exist');
	cy.get('#dataProtectionCheckbox').should('exist');
	cy.get('.button__primary').should('exist');
	cy.contains('Zum Login').should('exist');
};

xdescribe('registration', () => {
	describe('addiction', () => {
		beforeEach(() => {
			cy.fixture('service.consultingtypes.addiction.json').then(
				(addictionConsultingType) => {
					cy.intercept(
						`${endpoints.consultingTypeServiceBase}/byslug/suchtberatung/full`,
						addictionConsultingType
					);
				}
			);
		});

		it('should have all generic registration page elements', () => {
			cy.visit('/suchtberatung/registration');
			cy.title().should('be.equal', 'Registrierung Suchtberatung');
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have no password info text', () => {
			cy.visit('/suchtberatung/registration');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-password-note]').should('not.exist');
		});

		it('should have no agency selection info text', () => {
			cy.visit('/suchtberatung/registration');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'not.exist'
			);
		});
	});

	describe('u25', () => {
		beforeEach(() => {
			cy.fixture('service.consultingtypes.u25.json').then(
				(u25ConsultingType) => {
					cy.intercept(
						`${endpoints.consultingTypeServiceBase}/byslug/u25/full`,
						u25ConsultingType
					);
				}
			);
		});

		it('should redirect to helpmail when no aid is given', () => {
			cy.visit('/u25/registration');
			cy.url().should('be.equal', 'https://www.u25.de/helpmail/');
		});

		it('should have all generic registration page elements', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(endpoints.agencyServiceBase, agencies);
			});
			cy.visit('/u25/registration?aid=1');
			cy.title().should(
				'be.equal',
				'Registrierung Beratung für Suizidgefährdete junge Menschen [U25]'
			);
			cy.get('[data-cy=close-welcome-screen]').click();
			checkForGenericRegistrationElements();
		});

		it('should have a password info text', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(endpoints.agencyServiceBase, agencies);
				cy.visit('/u25/registration?aid=1');
				cy.get('[data-cy=close-welcome-screen]').click();
				cy.get('[data-cy=registration-password-note]').should('exist');
			});
		});

		it('should have no agency selection info text', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(endpoints.agencyServiceBase, agencies);
				cy.visit('/u25/registration?aid=1');
				cy.get('[data-cy=close-welcome-screen]').click();
				cy.get('[data-cy=registration-agency-selection-note]').should(
					'not.exist'
				);
			});
		});

		it('should have an agency info when aid is given', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(endpoints.agencyServiceBase, agencies);
				cy.visit('/u25/registration?aid=1');
				cy.get('[data-cy=close-welcome-screen]').click();
				cy.get('[data-cy=show-preselected-agency]').should('exist');
				cy.get('[data-cy=show-preselected-agency]').contains(
					agencies[0].name
				);
			});
		});

		it('should be able to register', () => {
			cy.fixture('service.agencies.json').then((agencies) => {
				cy.intercept(endpoints.agencyServiceBase, agencies);
				cy.visit('/u25/registration?aid=1');
				cy.get('[data-cy=close-welcome-screen]').click();
				cy.get('[data-cy=show-preselected-agency]').should('exist');
				cy.get('[data-cy=show-preselected-agency]').contains(
					agencies[0].name
				);
				cy.get('input[id="username"]').focus().type('u25-user');
				cy.contains('Weiter').click();
				cy.get('input[id="passwordInput"]')
					.focus()
					.type('Password123!');
				cy.get('input[id="passwordConfirmation"]')
					.focus()
					.type('Password123!');
				cy.get('button:contains("Weiter"):visible').click();
				cy.contains('Alter auswählen*').click();
				cy.get('[id^="react-select"]:contains("unter 12")').click();
				cy.get('button:contains("Weiter"):visible').click();
				cy.contains('Bundesland auswählen*').click();
				cy.get('[id^="react-select"]:contains("Bayern")').click();
				cy.get('#dataProtectionLabel').click();
				cy.contains('Registrieren').should('be.enabled');
			});
		});
	});

	describe('emigration', () => {
		beforeEach(() => {
			cy.fixture('service.consultingtypes.emigration.json').then(
				(emigrationConsultingType) => {
					cy.intercept(
						`${endpoints.consultingTypeServiceBase}/byslug/rw-auswanderung/full`,
						emigrationConsultingType
					);
				}
			);
		});

		it('should have a agency selection info text', () => {
			cy.visit('/rw-auswanderung/registration');
			cy.get('[data-cy=close-welcome-screen]').click();
			cy.get('[data-cy=registration-agency-selection-note]').should(
				'exist'
			);
		});
	});
});
