import LazyLoad from 'vanilla-lazyload';
import canUseWebp from '../utils/canUseWebp.js';

export default () => {
	if (canUseWebp() === false) {
		const lazyBgItems = document.querySelectorAll('.lazy[data-bg-fallback]');

		lazyBgItems.forEach((item) => {
			const srcBgFallback = item.getAttribute('data-bg-fallback');
			item.setAttribute('data-bg', srcBgFallback);
		});
	}

	const lazyLoadInstance = new LazyLoad({
		elements_selector: '.lazy',
		callback_error: (img) => {
		  // Use the following line only if your images have the `srcset` attribute
		  img.setAttribute("srcset", "fallback_image@1x.jpg 1x, fallback_image@2x.jpg 2x");
		  img.setAttribute("src", "fallback_image@1x.jpg");
		},
	  });

	  lazyLoadInstance.update();
};
