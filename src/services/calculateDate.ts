export function calculateDate(timestamp: number): number {
	const futureTimestamp = timestamp * 1000 + 365 * 2 * 24 * 60 * 60 * 1000;

	const now = Date.now();

	const diffInMs = futureTimestamp - now;

	return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}
