import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class OvernightFareCalculator implements FareCalculator {
	FARE = 3.9;
	next?: FareCalculator;

	constructor (next?: FareCalculator) {
		this.next = next;
	}

	calculate(segment: Segment): number {
		if (segment.isOvernight() && !segment.isSunday()) {
			return segment.distance * this.FARE;
		}
		if (!this.next) throw new Error("");
		return this.next.calculate(segment);
	}

}