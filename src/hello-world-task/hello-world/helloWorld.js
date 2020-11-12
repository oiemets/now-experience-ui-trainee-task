import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = () => {
	return (
		<div className="container">
			<h2>HELLO WORLD!</h2>
		</div>
	);
};

createCustomElement('hello-world', {
	renderer: {type: snabbdom},
	view,
	styles
});