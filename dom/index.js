jQuery('input').on('paste', function (e) {
	e.preventDefault();

	var text = e.originalEvent.clipboardData.getData('text/plain');
	var input = e.currentTarget;

	removeAllChildNodes(table);

	const arrayText = processText(text);
	const tableHead = createThead(arrayText);
	const tableBody = createTbody(arrayText);

	table.appendChild(tableHead);
	table.appendChild(tableBody);
	console.log(arrayText);
});

var currentColumn;

jQuery('thead th').on('contextmenu', function (e) {
	e.preventDefault();

	currentColumn = e.currentTarget;

	var menu = jQuery('#column-menu');

	menu.addClass('d-block');

	menu.css({
		left: e.clientX,
		top: e.clientY
	});
});

jQuery('#column-menu [data-action]').on('click', function (e) {
	e.preventDefault();

	var action = e.currentTarget.getAttribute('data-action');

	switch (action) {
		case 'add-left':

			break;

		case 'add-right':

			break;

		case 'remove':

			break;
	}

	jQuery('#column-menu').removeClass('d-block');
});

const processText = (text) => {
	const splitByLines = text.split('\n');
	return splitByLines.map(line => line.split(';'));
}

const table = document.getElementById('table');

// const createTable = (table, arrayText) => {
// 	for (let i = 0; i < arrayText.length; i++) {
// 		const tr = document.createElement('tr');
//
// 		for (let j = 0; j < arrayText[i].length; j++){
// 			const td = document.createElement('td');
// 			td.innerHTML = arrayText[i][j];
//
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}
// };

const removeAllChildNodes = () => {
	while (table.firstChild) {
		table.removeChild(table.firstChild);
	}
};

const createThead = (arrayText) => {
	const abetka = ['A','B','C','D','E','F','G'];
	const tHead = document.createElement('thead');
	const tR = document.createElement('tr');
	const tH = document.createElement('th');

	tH.textContent = ' ';
	tR.appendChild(tH);

	arrayText[0].forEach((_, index) => {
		const tH = document.createElement('th');
		tH.textContent = abetka[index];
		tR.appendChild(tH);
	});

	tHead.appendChild(tR);

	return tHead;
}

const createTbody = (arrayText) => {
	const tBody = document.createElement('tbody');
	
	arrayText.forEach((row, index) => {
		const tR = document.createElement('tr');
		const tH = document.createElement('th');
		tH.textContent = index + 1;

		tR.appendChild(tH);

		row.forEach((value) => {
			const tD = document.createElement('td');
			const input = document.createElement('input');
			input.value = value;

			tD.appendChild(input);
			tR.appendChild(tD);
		});

		tBody.appendChild(tR);
	});


	return tBody;
}