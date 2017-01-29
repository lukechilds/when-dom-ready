import test from 'ava';
import whenDomReady from '../../';

test('whenDomReady is a function', t => {
	t.is(typeof whenDomReady, 'function');
});

test('whenDomReady returns a Promise', t => {
	t.true(whenDomReady() instanceof Promise);
});

test('whenDomReady.resume is a function', t => {
	t.is(typeof whenDomReady.resume, 'function');
});

test('whenDomReady.resume returns a function that returns a promise', t => {
	const returnValue = whenDomReady.resume();
	t.is(typeof returnValue, 'function');
	t.true(returnValue() instanceof Promise);
});
