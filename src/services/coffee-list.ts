import type { Coffee } from '@/lib/types';

const COFFEE_JSON_URL =
	'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

export const getCoffeeList = async (): Promise<Coffee[]> => {
	const response = await fetch(COFFEE_JSON_URL);
	const coffeeList: Coffee[] = await response.json();

	return coffeeList;
};
