import test from 'ava';
import domLoaded from '../';

test('domLoaded is a function', t => {
	t.is(typeof domLoaded, 'function');
});
