<script lang="ts">
	import type { Coffee } from '@/lib/types';
	import Card from '@/components/card.svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	type ButtonClass = 'all' | 'available';

	export let coffeeList: Coffee[];

	let filteredCoffeeList = coffeeList;

	let tab: ButtonClass = 'all';

	let buttonClasses: Record<ButtonClass, string> = {
		all: '',
		available: '',
	};

	const getButtonClasses = () => {
		const base = 'px-3 py-1.5 font-semibold text-sm rounded-lg';
		const active = 'bg-muted text-pastel-white/80';

		buttonClasses = {
			all: tab === 'all' ? `${base} ${active}` : base,
			available: tab === 'available' ? `${base} ${active}` : base,
		};
	};

	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		tab = event.currentTarget.name as ButtonClass;

		getButtonClasses();

		filteredCoffeeList = coffeeList.filter((coffee) => {
			if (tab === 'all') return true;
			return coffee.available;
		});
	};

	getButtonClasses();
</script>

<div class="flex gap-x-4 mb-8 justify-center">
	<button name="all" on:click={handleClick} class={buttonClasses.all}>All Products</button>
	<button name="available" on:click={handleClick} class={buttonClasses.available}>Available Now</button>
</div>

<ul class="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
	{#each filteredCoffeeList as coffee}
		<Card {coffee} />
	{/each}
</ul>
