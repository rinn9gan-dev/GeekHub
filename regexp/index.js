document.querySelector('#user-form').addEventListener('submit', function (e) {
	e.preventDefault();

	const fullName = document.getElementById('name');

	if (fullName.value && isValidFullName(fullName.value)) {
		fullName.style.backgroundColor = '#5CEC5C';
	} else {
		fullName.style.backgroundColor = '#F9D0C4';
	}

	const email = document.getElementById('email');

	if (email.value && isValidEmail(email.value)) {
		email.style.backgroundColor = '#5CEC5C';
	} else {
		email.style.backgroundColor = '#F9D0C4';
	}

	const password = document.getElementById('password');

	if (password.value && isValidPassword(password.value)) {
		password.style.backgroundColor = '#5CEC5C';
	} else {
		password.style.backgroundColor = '#F9D0C4';
	}
});


document.querySelectorAll('[data-show]').forEach(function (button) {
	button.addEventListener('click', function (e) {
		document.querySelector('#description').classList.add('d-none');
		document.querySelector('#preview').classList.add('d-none');

		document.querySelector('#' + e.currentTarget.getAttribute('data-show')).classList.remove('d-none');
	});
});



const isValidFullName = (fullName) => {
	const nameRules = /([абвгґдеєжзиіїйклмнопрстуфхцчшщьюя]+)/gi;
	return fullName.match(nameRules).length === 3;
};

const isValidEmail = (email) => {
	const emailRules = /[^_.-]([a-z\d-.]+)[^_.-]@[^_.-]([a-z]+)\.([a-z]+)$/gmi;
	return emailRules.test(email);
};

const isValidPassword = (password) => {
	const passwordRules = /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[A-Z])/gm
	return passwordRules.test(password);
};