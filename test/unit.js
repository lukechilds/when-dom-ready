import EventEmitter from 'events';
import test from 'ava';
import Window from 'window';
import whenDomReady from '../';

test.cb('callback fires', t => {
	t.plan(1);
	const { document } = new Window();
	whenDomReady(() => {
		t.pass();
		t.end();
	}, document);
});

test('Promise resolves', async t => {
	const { document } = new Window();
	t.plan(1);
	await whenDomReady(document).then(() => t.pass());
});

test('Promise chain helper passes value through', async t => {
	const { document } = new Window();
	t.plan(1);
	await Promise
		.resolve('foo')
		.then(whenDomReady.resume(document))
		.then(val => t.is(val, 'foo'));
});

test('If document.readyState is already "interactive" run cb', async t => {
	const document = { readyState: 'interactive' };
	t.plan(1);
	await whenDomReady(document).then(() => t.pass());
});

test('If document.readyState is already "complete" run cb', async t => {
	const document = { readyState: 'complete' };
	t.plan(1);
	await whenDomReady(document).then(() => t.pass());
});

test('If document.readyState is "loading" run cb on DOMContentLoaded event', async t => {
	const document = new EventEmitter();
	document.addEventListener = document.on;
	document.readyState = 'loading';
	t.plan(1);
	setTimeout(() => document.emit('DOMContentLoaded'), 500);
	await whenDomReady(document).then(() => t.pass());
});
