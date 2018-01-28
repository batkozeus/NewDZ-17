const chooseResort = function () {
	const resort = prompt('Введите число от 1 до 3', '1 - taba, 2 - sharm, 3 - hurgada');

	const resortNumber = document.getElementById('resortNumber');
	const resortName = document.getElementById('resortName');

	if (resort == 1) {
		resortNumber.innerHTML = 'Введено число - 1';
		resortName.innerHTML = 'Вы выбрали курорт - taba' ;
	}
	else if (resort == 2) {
		resortNumber.innerHTML = 'Введено число - 2';
		resortName.innerHTML = 'Вы выбрали курорт - sharm' ;
	}
	else if (resort == 3) {
		resortNumber.innerHTML = 'Введено число - 3';
		resortName.innerHTML = 'Вы выбрали курорт - hurgada' ;
	}
	else  {
		resortNumber.innerHTML = 'Такого числа нету';
		resortName.innerHTML = 'Такого курорта нету' ;
	}	
}




export default chooseResort;