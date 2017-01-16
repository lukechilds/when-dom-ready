// Global
const doc = document;

// Loaded ready states
const loadedStates = ['interactive', 'complete'];

// Return promise
module.exports = cb => new Promise(resolve => {
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
