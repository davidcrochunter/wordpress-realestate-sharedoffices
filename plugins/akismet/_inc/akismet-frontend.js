/**
 * Observe how the user enters content into the comment form in order to determine whether it's a bot or not.
 *
 * Note that no actual input is being saved here, only counts and timings between events.
 */

( function() {
	// Passive event listeners are guaranteed to never call e.preventDefault(),
	// but they're not supported in all browsers.  Use this feature detection
	// to determine whether they're available for use.
	var supportsPassive = false;

	try {
		var opts = Object.defineProperty( {}, 'passive', {
			get : function() {
				supportsPassive = true;
			}
		} );

		window.addEventListener( 'testPassive', null, opts );
		window.removeEventListener( 'testPassive', null, opts );
	} catch ( e ) {}

	

	/**
	 * For the timestamp data that is collected, don't send more than `limit` data points in the request.
	 * Choose a random slice and send those.
	 */
	

	if ( document.readyState !== 'loading' ) {
		init();
	} else {
		document.addEventListener( 'DOMContentLoaded', init );
	}
})();