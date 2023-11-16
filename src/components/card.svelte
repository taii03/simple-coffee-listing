<script lang="ts">
	import StarFill from '@/icons/star-fill.svelte';
	import Star from '@/icons/star.svelte';

	import type { Coffee } from '@/lib/types';

	export let coffee: Coffee;
</script>

<li class="flex flex-col gap-y-2">
	<header class="mb-2 relative">
		<img src={coffee.image} alt={coffee.name} class="w-full rounded-xl object-cover" />
		{#if coffee.popular}
			<span class="bg-accent-0 px-3.5 py-1 font-semibold text-black absolute top-2 left-2 rounded-full text-xs">
				Popular
			</span>
		{/if}
	</header>
	<main class="flex justify-between">
		<h4 class="font-semibold tracking-wide">{coffee.name}</h4>
		<span class="bg-accent-1 px-2 text-xs font-bold rounded flex justify-center items-center text-black">
			{coffee.price}
		</span>
	</main>
	<footer class="flex items-center justify-between">
		<div class="flex gap-x-1 items-center">
			{#if coffee.rating !== null}
				<StarFill />
				<span class="font-semibold text-sm">
					{Number(coffee.rating).toLocaleString('en-US', { minimumFractionDigits: 1 })}
				</span>
				<span class="font-semibold text-sm text-muted">({coffee.votes} votes)</span>
			{:else}
				<Star />
				<span class="font-semibold text-muted text-sm">No ratings.</span>
			{/if}
		</div>
		{#if !coffee.available}
			<span class="text-danger font-semibold text-sm">Sold out</span>
		{/if}
	</footer>
</li>
