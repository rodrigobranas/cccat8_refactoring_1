import { calc } from "../../src/v1/calc";
// 58
test("Deve calcular uma corrida em horário normal", function () {
	const fare = calc([{ dist: 10, ds: new Date("2021-03-10T10:00:00") }]);
	expect(fare).toBe(21);
});
// 70
test("Deve calcular uma corrida em horário noturno", function () {
	const fare = calc([{ dist: 10, ds: new Date("2021-03-10T22:00:00") }]);
	expect(fare).toBe(39);
});
// 76
test("Deve calcular uma corrida em horário no domingo", function () {
	const fare = calc([{ dist: 10, ds: new Date("2021-03-07T10:00:00") }]);
	expect(fare).toBe(29);
});
// 82
test("Deve calcular uma corrida em horário no domingo em horário noturno", function () {
	const fare = calc([{ dist: 10, ds: new Date("2021-03-07T22:00:00") }]);
	expect(fare).toBe(50);
});
// 88
test("Não deve calcular uma corrida com distância inválida", function () {
	const fare = calc([{ dist: -10, ds: new Date("2021-03-10T10:00:00") }]);
	expect(fare).toBe(-1);
});
// 94
test("Não deve calcular uma corrida com data inválida", function () {
	const fare = calc([{ dist: 10, ds: new Date("javascript") }]);
	expect(fare).toBe(-2);
});
// 100
test("Deve calcular uma corrida em horário normal com valor mínimo", function () {
	const fare = calc([{ dist: 3, ds: new Date("2021-03-10T10:00:00") }]);
	expect(fare).toBe(10);
});