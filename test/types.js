import test from 'ava';
import Window from 'window';
import whenDomReady from '../';

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

test('Promise value always resolves to undefined', async t => {
	t.plan(2);
	const { document } = new Window();
	const promises = [
		whenDomReady(() => 'foo', document).then(val => t.is(val, undefined)),
		whenDomReady(document).then(val => t.is(val, undefined))
	];
	await Promise.all(promises);
});
