/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, createElement, detachNode, init, insert, noop, safe_not_equal, setStyle } from "svelte/internal";

function create_fragment(ctx) {
	var div;

	return {
		c() {
			div = createElement("div");
			setStyle(div, "color", ctx.color);
		},

		m(target, anchor) {
			insert(target, div, anchor);
		},

		p(changed, ctx) {
			if (changed.color) {
				setStyle(div, "color", ctx.color);
			}
		},

		i: noop,
		o: noop,

		d(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { color } = $$props;

	$$self.$set = $$props => {
		if ('color' in $$props) $$invalidate('color', color = $$props.color);
	};

	return { color };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["color"]);
	}
}

export default SvelteComponent;