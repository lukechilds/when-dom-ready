import test from 'ava';
import domLoaded from '../';

test('domLoaded runs the callback', async t => {
	t.plan(1);
	domLoaded(() => t.pass());
});

test('domLoaded Promise resolves', async t => {
	t.plan(1);
	domLoaded().then(() => t.pass());
});
