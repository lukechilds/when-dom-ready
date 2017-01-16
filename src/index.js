// Loaded ready states
const loadedStates = ['interactive', 'complete'];

// Return Promise
module.exports = (cb, doc) => new Promise(resolve => {
	// Use global document if we don't have one
	doc = doc || document;

	// Handle DOM load
	const done = () => resolve(cb && cb());

	// Resolve now if DOM has already loaded
	// Otherwise wait for DOMContentLoaded
	if (loadedStates.includes(doc.readyState)) {
		done();
	} else {
		doc.addEventListener('DOMContentLoaded', done);
	}
});
