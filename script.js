
// Реализовать калькулятор, в котором есть слайдер(input type =”range”) и поле ввода(input type =”number”).

// Изменяя состояние range меняется состояние поля ввода number.И наоборот.

// Реализовать блок - диаграмму, который в пикселях будет отображать значение range.Например - range выбрали число 83, высота блока - диаграммы будет 83 пикселя.
// Красный блок - количество комиссии. Комиссия вычисляется по формуле:

// (range < 20) -> 2%
// (20 - 50)  -> 4%
// (50 - 75)  -> 6%
// (75 - 100)  -> 8%

// Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px

const interestObj = {
	int1: 0.02,
	int2: 0.04,
	int3: 0.06,
	int4: 0.08,
}

const range = document.querySelector('.range');
const number = document.querySelector('.number');
const interest = document.querySelector('.interest');
const volume = document.querySelector('.volume');

function createInterest(diagramValue) {
	if (diagramValue < 20) {
		interest.style.height = `${diagramValue * interestObj.int1}px`;
	} else if (diagramValue >= 20 && diagramValue < 50) {
		interest.style.height = `${diagramValue * interestObj.int2}px`;
	} else if (diagramValue >= 50 && diagramValue < 75) {
		interest.style.height = `${diagramValue * interestObj.int3}px`;
	} else if (diagramValue >= 75 && diagramValue <= 100) {
		interest.style.height = `${diagramValue * interestObj.int4}px`;
	}
}

function diagramInterestRange() {
	createInterest(range.value);
}

function diagramInterestNumber() {
	createInterest(number.value);
}

function volumeHeight() {
	volume.style.height = `${range.value}px`;
}

function handlerForRange() {
	number.value = range.value;
	volumeHeight();
	diagramInterestRange();
}

range.addEventListener("input", handlerForRange);

function handlerForNumber () {
	range.value = number.value;
	volumeHeight();
	diagramInterestNumber();
}

number.addEventListener("input", handlerForNumber);


// function test() {
// 	if (diagramValue < 20) {
// 		interest.style.height = `${diagramValue * interestObj.int1}px`;
// 	} else if (diagramValue >= 20 && diagramValue < 50) {
// 		interest.style.height = `${diagramValue * interestObj.int2}px`;
// 	} else if (diagramValue >= 50 && diagramValue < 75) {
// 		interest.style.height = `${diagramValue * interestObj.int3}px`;
// 	} else if (diagramValue >= 75 && diagramValue <= 100) {
// 		interest.style.height = `${diagramValue * interestObj.int4}px`;
// 	}
// }

// function createInterest(diagramValue) {
// 	test();
// }