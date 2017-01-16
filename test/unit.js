import test from 'ava';
import jsdom from 'jsdom';
import whenDomReady from '../';

test('callback fires with global window', async t => {
	t.plan(1);
	whenDomReady(() => t.pass());
});

test('Promise resolves with global window', async t => {
	t.plan(1);
	whenDomReady().then(() => t.pass());
});

test('callback fires with local document', async t => {
	t.plan(1);
	const config = {
		html: '',
		onload: window => whenDomReady(() => t.pass(), window.document)
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

test('callback fires if we wait for DOMContentLoaded', async t => {
	t.plan(1);
	const config = {
		html: '',
		created: (err, window) => whenDomReady(() => t.pass(), window.document)
	};
	jsdom.env(config);
});

test.cb('Promise resolves if we wait for DOMContentLoaded', t => {
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
