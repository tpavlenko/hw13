
// Реализовать калькулятор, в котором есть слайдер(input type =”range”) и поле ввода(input type =”number”).

// Изменяя состояние range меняется состояние поля ввода number.И наоборот.

// Реализовать блок - диаграмму, который в пикселях будет отображать значение range.Например - range выбрали число 83, высота блока - диаграммы будет 83 пикселя.
// Красный блок - количество комиссии. Комиссия вычисляется по формуле:

// (range < 20) -> 2%
// (20 - 50)  -> 4%
// (50 - 75)  -> 6%
// (75 - 100)  -> 8%

// Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px


const range = document.querySelector('.range');
const number = document.querySelector('.number');
const diagram = document.querySelector('.box');

function diagramInterestRange() {
	let rangeValue = range.value;
	if (rangeValue < 20) {
		diagram.firstElementChild.style.height = `${rangeValue * 0.02}px`;
	} else if (rangeValue >= 20 && rangeValue < 50) {
		diagram.firstElementChild.style.height = `${rangeValue * 0.04}px`;
	} else if (rangeValue >= 50 && rangeValue < 75) {
		diagram.firstElementChild.style.height = `${rangeValue * 0.06}px`;
	} else if (rangeValue >= 75 && rangeValue <= 100) {
		diagram.firstElementChild.style.height = `${rangeValue * 0.08}px`;
	}
}

function diagramInterestNumber() {
	let numberValue = number.value;
	if (numberValue < 20) {
		diagram.firstElementChild.style.height = `${numberValue * 0.02}px`;
	} else if (numberValue >= 20 && numberValue < 50) {
		diagram.firstElementChild.style.height = `${numberValue * 0.04}px`;
	} else if (numberValue >= 50 && numberValue < 75) {
		diagram.firstElementChild.style.height = `${numberValue * 0.06}px`;
	} else if (numberValue >= 75 && numberValue <= 100) {
		diagram.firstElementChild.style.height = `${numberValue * 0.08}px`;
	}
}

range.oninput = function () {
	number.value = range.value;
	diagram.lastElementChild.style.height = `${range.value}px`;
	diagramInterestRange()
}

number.oninput = function () {
	range.value = number.value;
	diagram.lastElementChild.style.height = `${range.value}px`;
	diagramInterestNumber()
}