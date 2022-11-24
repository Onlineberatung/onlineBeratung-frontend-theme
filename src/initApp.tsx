import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '@onlineberatung/onlineberatung-frontend';
import { Stage } from './components/stage/Stage';
import { config, routePathNames } from 'resources/scripts/config';
import { TermsAndConditions } from './components/legalInformationLinks/TermsAndConditions';
import { Imprint } from './components/legalInformationLinks/Imprint';
import { Privacy } from './components/legalInformationLinks/Privacy';

ReactDOM.render(
	<App
		config={config}
		extraRoutes={[
			{
				route: { path: routePathNames.termsAndConditions },
				component: TermsAndConditions
			},
			{ route: { path: routePathNames.imprint }, component: Imprint },
			{ route: { path: routePathNames.privacy }, component: Privacy }
		]}
		stageComponent={Stage}
		entryPoint="/beratung/registration"
	/>,
	document.getElementById('appRoot')
);
