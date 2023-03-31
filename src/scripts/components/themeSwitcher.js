// Выбираем кнопку
const btn = document.querySelector('.btn-toggle');
// Проверяем темный режим на уровне OS
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// Получаем икноки кнопок
let changeThemeButtons = document.querySelectorAll('.theme__icon'); // Помещаем кнопки смены темы в переменную

// Дата атрибут иконок
changeThemeButtons.forEach((button) => {
	button.addEventListener('click', function () {
		// К каждой добавляем обработчик событий на клик
		let theme = this.dataset.theme; // Помещаем в переменную название темы из атрибута data-theme
		applyTheme(theme); // Вызываем функцию, которая меняет тему и передаем в нее её название
	});
});

// Меняем дата атрибут на иконке на нужный
function applyTheme(themeName) {
	changeThemeButtons.forEach((button) => {
		button.style.display = 'block'; // Показываем все кнопки смены темы
	});
	document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрываем кнопку для активной темы
}

// Получаем пользовательские настройки темы из локального хранилища
const currentTheme = localStorage.getItem('theme');
// Если в локальном хранилище темная тема...
if (currentTheme == 'dark') {
	// ...переключаем класс .dark-mode у элемента body
	document.body.classList.toggle('dark-mode');
	// Иначе, если в локальном хранилище светлая тема...
} else if (currentTheme == 'light') {
	// ...переключаем класс .light-mode у элемента body
	document.body.classList.toggle('light-mode');
}

// Слушаем нажатия на кнопку
btn.addEventListener('click', function () {
	// Если в настройках OS темная тема и это соответствует нашему классу .dark-mode...
	if (prefersDarkScheme.matches) {
		// ...тогда переключаем класс .light-mode
		document.body.classList.toggle('light-mode');
		// ...но используем .dark-mode, если класс .light-mode уже установлен
		var theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
	} else {
		// Иначе, делаем то же самое, но с .dark-mode
		document.body.classList.toggle('dark-mode');
		var theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
	}
	// Наконец, сохраним настройки в localStorage для последующего использования
	localStorage.setItem('theme', theme);
});
