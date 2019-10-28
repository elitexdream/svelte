import {
	SvelteElement,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.textContent = "fades in";
			this.c = noop;
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class Component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>div{animation:foo 1s}@keyframes foo{0%{opacity:0}100%{opacity:1}}</style>`;
		init(this, { target: this.shadowRoot }, null, create_fragment, safe_not_equal, {});

		if (options) {
			if (options.target) {
				insert(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("custom-element", Component);
export default Component;