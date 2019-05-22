/* generated by Svelte vX.Y.Z */
import {
	SvelteComponentDev,
	add_location,
	append,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "svelte/internal";

const file = undefined;

function create_fragment(ctx) {
	var h1, t0, t1, t2, t3;

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Hello ");
			t1 = text(ctx.name);
			t2 = text("!");
			t3 = space();
			debugger;
			add_location(h1, file, 4, 0, 38);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			append(h1, t1);
			append(h1, t2);
			insert(target, t3, anchor);
		},

		p: function update(changed, ctx) {
			if (changed.name) {
				set_data(t1, ctx.name);
			}

			debugger;
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t3);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;

	const writableProps = ['name'];
	Object.keys($$props).forEach(key => {
		if (!writableProps.includes(key)) console.warn(`<Component> was created with unknown attribute '${key}'`);
	});

	$$self.$set = $$props => {
		if ('name' in $$props) $$invalidate('name', name = $$props.name);
	};

	return { name };
}

class Component extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["name"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.name === undefined && !('name' in props)) {
			console.warn("<Component> was created without expected prop 'name'");
		}
	}

	get name() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Component;
