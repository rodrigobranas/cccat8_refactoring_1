import NormalFareCalculator from "../../src/v3/NormalFareCalculator";
import OvernightFareCalculator from "../../src/v3/OvernightFareCalculator";
import OvernightSundayFareCalculator from "../../src/v3/OvernightSundayFareCalculator";
import Ride from "../../src/v3/Ride";
import SundayFareCalculator from "../../src/v3/SundayFareCalculator";

let ride: Ride;

beforeEach(function () {
	const normalFareCalculator = new NormalFareCalculator();
	const overnightFareCalculator = new OvernightFareCalculator(normalFareCalculator);
	const sundayFareCalculator = new SundayFareCalculator(overnightFareCalculator);
	const overnightSundayFaceCalculator = new OvernightSundayFareCalculator(sundayFareCalculator);
	ride = new Ride(overnightSundayFaceCalculator);
});

test("Deve calcular uma corrida em horário normal", function () {
	ride.addSegment(10, new Date("2021-03-10T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(21);
});

test("Deve calcular uma corrida em horário noturno", function () {
	ride.addSegment(10, new Date("2021-03-10T22:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(39);
});

test("Deve calcular uma corrida em horário no domingo", function () {
	ride.addSegment(10, new Date("2021-03-07T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(29);
});

test("Deve calcular uma corrida em horário no domingo em horário noturno", function () {
	ride.addSegment(10, new Date("2021-03-07T22:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(50);
});

test("Não deve calcular uma corrida com distância inválida", function () {
	expect(() => ride.addSegment(-10,  new Date("2021-03-10T10:00:00"))).toThrow(new Error("Invalid Distance"));
});

test("Não deve calcular uma corrida com data inválida", function () {
	expect(() => ride.addSegment(10, new Date("javascript"))).toThrow(new Error("Invalid Date"));
});

test("Deve calcular uma corrida em horário normal com valor mínimo", function () {
	ride.addSegment(3, new Date("2021-03-10T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(10);
});