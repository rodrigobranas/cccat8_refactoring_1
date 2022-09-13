import Ride from "../../src/v3/Ride";

// 58
test("Deve calcular uma corrida em horário normal", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-10T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(21);
});
// 70
test("Deve calcular uma corrida em horário noturno", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-10T22:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(39);
});
// 76
test("Deve calcular uma corrida em horário no domingo", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-07T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(29);
});
// 82
test("Deve calcular uma corrida em horário no domingo em horário noturno", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-07T22:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(50);
});
// 88
test("Não deve calcular uma corrida com distância inválida", function () {
	const ride = new Ride();
	expect(() => ride.addSegment(-10,  new Date("2021-03-10T10:00:00"))).toThrow(new Error("Invalid Distance"));
});
// 94
test("Não deve calcular uma corrida com data inválida", function () {
	const ride = new Ride();
	expect(() => ride.addSegment(10, new Date("javascript"))).toThrow(new Error("Invalid Date"));
});
// 100
test("Deve calcular uma corrida em horário normal com valor mínimo", function () {
	const ride = new Ride();
	ride.addSegment(3, new Date("2021-03-10T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(10);
});