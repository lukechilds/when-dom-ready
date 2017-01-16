import test from 'ava';
import domLoaded from '../';

test('domLoaded runs the callback', t => {
	t.plan(1);
	domLoaded(() => t.pass());
});
