/* eslint no-void: "off" */

// Loaded ready states
const loadedStates = ['interactive', 'complete'];

// Return Promise
const whenDomReady = (callback, doc) => new Promise(resolve => {
	// Allow doc to be passed in as the lone first param
	if (callback && typeof callback !== 'function') {
		doc = callback;
		callback = null;
	}

	// Use global document if we don't have one
	doc = doc || window.document;

	// Handle DOM load
	const done = () => resolve(void (callback && setTimeout(callback)));

	// Resolve now if DOM has already loaded
	// Otherwise wait for DOMContentLoaded
	if (loadedStates.includes(doc.readyState)) {
		done();
	} else {
		doc.addEventListener('DOMContentLoaded', done);
	}
});

// Promise chain helper
whenDomReady.resume = doc => val => whenDomReady(doc).then(() => val);

export default whenDomReady;
