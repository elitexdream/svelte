import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_style
} from "svelte/internal";

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			set_style(div, "color", ctx.color);
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p(changed, ctx) {
			if (changed.color) {
				set_style(div, "color", ctx.color);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { color } = $$props;

	$$self.$set = $$props => {
		if ("color" in $$props) $$invalidate("color", color = $$props.color);
	};

	return { color };
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { color: 0 });
	}
}

export default Component;