const choosePeopleResort = function () {

	const resortPeople = prompt('Введите число учасников группы', '');

	const taba = document.getElementById('taba');
	const sharm = document.getElementById('sharm');
	const hurgada = document.getElementById('hurgada');

	if ((resortPeople == null)||(resortPeople == '')) {
		alert('Вы передумали!');
	}
	else {
		if ((resortPeople >= 0) && (resortPeople%1==0)) {
			if (resortPeople<=25) {
				let sharmPeople = confirm('Согласны ли Вы быть в группе Sharm?');
				if (sharmPeople == true) {
					sharm.innerHTML = `Sharm - ${25-resortPeople} мест`;
				}
				else if (resortPeople<=15) {
					let hurgadaPeople = confirm('Согласны ли Вы быть в группе Hurgada?');
					if (hurgadaPeople == true) {
						hurgada.innerHTML = `Hurgada - ${15-resortPeople} мест`;
					}
					else if (resortPeople<=6) {
						let tabaPeople = confirm('Согласны ли Вы быть в группе Taba?');
						if (tabaPeople == true) {
							taba.innerHTML = `Taba - ${6-resortPeople} мест`;
						}
						else {
							alert('Вы передумали!');
						}
					}
					else {
						alert('Мест нету!');
					}
				}
				else {
					alert('Мест нету!');
				}
			}
			else {
				alert('Мест нету!');
			}
		}
		else {
			alert('Вы ввели ошибочное число!');
		}
	}
}

export default choosePeopleResort;