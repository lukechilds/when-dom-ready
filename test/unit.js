import test from 'ava';
import jsdom from 'jsdom';
import whenDomReady from '../';

test.cb('callback fires with global document', t => {
	t.plan(1);
	whenDomReady(() => {
		t.pass();
		t.end();
	});
});

test('Promise resolves with global document', async t => {
	t.plan(1);
	await whenDomReady().then(() => t.pass());
});

test.cb('callback fires with local document', t => {
	t.plan(1);
	const config = {
		html: '',
		onload: window => whenDomReady(() => {
			t.pass();
			t.end();
		}, window.document)
	};
	jsdom.env(config);
});

test.cb('Promise resolves with local document', t => {
	t.plan(1);
	const config = {
		html: '',
		onload: window => whenDomReady(window.document).then(() => {
			t.pass();
			t.end();
		})
	};
	jsdom.env(config);
});

test('callback fires if we run after DOMContentLoaded', async t => {
	t.plan(1);
	const config = {
		html: '',
		created: (err, window) => whenDomReady(() => t.pass(), window.document)
	};
	jsdom.env(config);
});

test.cb('Promise resolves if we run after DOMContentLoaded', t => {
	t.plan(1);
	const config = {
		html: '',
		created: (err, window) => whenDomReady(window.document).then(() => {
			t.pass();
			t.end();
		})
	};
	jsdom.env(config);
});

test('Promise chain helper passes value through', async t => {
	t.plan(1);
	await Promise
		.resolve('foo')
		.then(whenDomReady.resume())
		.then(val => t.is(val, 'foo'));
});
