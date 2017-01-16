// Global
const doc = document;

// Run callback when DOM is loaded
module.exports = cb => {
	// Run now if DOM has already loaded
	if (['interactive', 'complete'].indexOf(doc.readyState) >= 0) {
		cb();

	// Otherwise wait for DOM
	} else {
		doc.addEventListener('DOMContentLoaded', cb);
	}
};
