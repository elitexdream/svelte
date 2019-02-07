/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, flush, init, noop, safe_not_equal } from "svelte/internal";

function create_fragment(ctx) {
	return {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
}

function instance($$self, $$props, $$invalidate) {
	let { x } = $$props;

	let a;
	let b;

	$$self.$set = $$props => {
		if ('x' in $$props) $$invalidate('x', x = $$props.x);
	};

	$$self.$$.update = ($$dirty = { b: 1, x: 1, a: 1 }) => {
		if ($$dirty.b || $$dirty.x) {
			b = x; $$invalidate('b', b);
		}
		if ($$dirty.a || $$dirty.b) {
			a = b; $$invalidate('a', a);
		}
	};

	return { x };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get x() {
		return this.$$.ctx.x;
	}

	set x(x) {
		this.$set({ x });
		flush();
	}
}

export default SvelteComponent;