import deepmerge from 'deepmerge';
import { deConsultingTypes } from '@onlineberatung/onlineberatung-frontend/src/resources/i18n/de.consultingTypes';

const consultingTypes = deepmerge.all([
	deConsultingTypes,
	{
		consultingType: {
			1: {
				titles: {
					default: 'Beratung',
					short: 'Beratung',
					long:
						'Beratung für suizidgefährdete junge Menschen Beratung',
					welcome: 'Willkommen bei der Online-Beratung',
					registrationDropdown:
						'Beratung für suizidgefährdete junge Menschen Beratung'
				}
			}
		}
	}
]);

export default consultingTypes;
