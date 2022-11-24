import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Error } from '@onlineberatung/onlineberatung-frontend';
import { config } from 'resources/scripts/config';

ReactDOM.render(
	<Error config={config} />,
	document.getElementById('errorRoot')
);
