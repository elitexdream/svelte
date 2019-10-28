import {
	SvelteComponentDev,
	add_location,
	append_dev,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	noop,
	safe_not_equal,
	set_data_dev,
	space,
	text
} from "svelte/internal";

const file = undefined;

function create_fragment(ctx) {
	let p;
	let t0_value = Math.max(0, ctx.foo) + "";
	let t0;
	let t1;
	let t2;

	const block = {
		c: function create() {
			p = element("p");
			t0 = text(t0_value);
			t1 = space();
			t2 = text(ctx.bar);
			add_location(p, file, 7, 0, 67);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t0);
			append_dev(p, t1);
			append_dev(p, t2);
		},
		p: function update(changed, ctx) {
			if (changed.foo && t0_value !== (t0_value = Math.max(0, ctx.foo) + "")) set_data_dev(t0, t0_value);
			if (changed.bar) set_data_dev(t2, ctx.bar);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { foo } = $$props;
	let bar;
	const writable_props = ["foo"];

	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith("$$")) console.warn(`<Component> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("foo" in $$props) $$invalidate("foo", foo = $$props.foo);
	};

	$$self.$capture_state = () => {
		return { foo, bar };
	};

	$$self.$inject_state = $$props => {
		if ("foo" in $$props) $$invalidate("foo", foo = $$props.foo);
		if ("bar" in $$props) $$invalidate("bar", bar = $$props.bar);
	};

	$$self.$$.update = (changed = { foo: 1 }) => {
		if (changed.foo) {
			$: $$invalidate("bar", bar = foo * 2);
		}
	};

	return { foo, bar };
}

class Component extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { foo: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Component",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (ctx.foo === undefined && !("foo" in props)) {
			console.warn("<Component> was created without expected prop 'foo'");
		}
	}

	get foo() {
		throw new Error("<Component>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set foo(value) {
		throw new Error("<Component>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Component;