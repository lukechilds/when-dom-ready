import test from 'ava';
import whenDomReady from '../';

test('whenDomReady is a function', t => {
	t.is(typeof whenDomReady, 'function');
});

test('whenDomReady returns a Promise', t => {
	t.true(whenDomReady() instanceof Promise);
});
