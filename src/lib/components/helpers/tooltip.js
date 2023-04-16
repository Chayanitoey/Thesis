import Tooltip from '$lib/components/helpers/Tooltip.svelte';

/**
 * @param {{ getAttribute: (arg0: string) => any; removeAttribute: (arg0: string) => void; setAttribute: (arg0: string, arg1: any) => void; addEventListener: (arg0: string, arg1: { (event: any): void; (): void; (event: any): void; }) => void; removeEventListener: (arg0: string, arg1: { (event: any): void; (): void; (event: any): void; }) => void; }} element
 */
export function tooltip(element) {
	let div;
	let title;
	let tooltipComponent;
	function mouseOver(event) {
		// NOTE: remove the `title` attribute, to prevent showing the default browser tooltip
		// remember to set it back on `mouseleave`
		title = element.getAttribute('title');
		element.removeAttribute('title');

		tooltipComponent = new Tooltip({
			props: {
				title: title,
				x: event.pageX,
				y: event.pageY,
			},
			target: document.body,
		});
	}
	function mouseMove(event) {
		tooltipComponent.$set({
			x: event.pageX,
			y: event.pageY,
		})
	}
	function mouseLeave() {
		tooltipComponent.$destroy();
		// NOTE: restore the `title` attribute
		element.setAttribute('title', title);
	}
	
	element.addEventListener('mouseover', mouseOver);
  element.addEventListener('mouseleave', mouseLeave);
	element.addEventListener('mousemove', mouseMove);
	
	return {
		destroy() {
			element.removeEventListener('mouseover', mouseOver);
			element.removeEventListener('mouseleave', mouseLeave);
			element.removeEventListener('mousemove', mouseMove);
		}
	}
}