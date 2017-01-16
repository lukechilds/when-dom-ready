// Global
const doc = document;

// Return promise
module.exports = cb => new Promise(resolve => {
	// Handle DOM load
	const done = () => resolve(cb && cb());

	// Run now if DOM has already loaded
	if (['interactive', 'complete'].indexOf(doc.readyState) >= 0) {
		done();

	// Otherwise wait for DOM
	} else {
		doc.addEventListener('DOMContentLoaded', done);
	}
});
