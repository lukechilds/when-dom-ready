import test from 'ava';
import domLoaded from '../';

test('domLoaded is a function', t => {
	t.is(typeof domLoaded, 'function');
});

test('domLoaded returns a Promise', t => {
	t.true(domLoaded() instanceof Promise);
});
