const currentDateDate = new Date();
    
// Получаем текущий год и месяц
const year = currentDateDate.getFullYear();
const month = String(currentDateDate.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    

var modal = document.getElementById('myModal');
var btn = document.getElementById("link-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {	
    modal.style.display = "block";
}	

span.onclick = function() {
    modal.style.display = "none";
}

/*var button = document.getElementById("link-button"); 
button.addEventListener("click", () => {
	document.addEventListener('mousemove', e => {
		Object.assign(document.documentElement, {
			style: `
			--move-x: 0;
			--move-y: 0;
			`
		})
	})
});

span.addEventListener("click", () => {
	document.addEventListener('mousemove', e => {
		Object.assign(document.documentElement, {
			style: `
			--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
			--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
			`
		})
	})
});*/

var checkboxes_2 = document.querySelectorAll('input.my-checkbox_2'),
    checkall_2 = document.getElementById('checkbox_2');

for(var i=0; i<checkboxes_2.length; i++) {
    checkboxes_2[i].onclick = function() {
        var checkedCount = document.querySelectorAll('input.my-checkbox_2:checked').length;
        checkall_2.checked = checkedCount > 0;
        checkall_2.indeterminate = checkedCount > 0 && checkedCount < checkboxes_2.length;
    }
}

checkall_2.onclick = function() {
    for(var i=0; i<checkboxes_2.length; i++) {
        checkboxes_2[i].checked = this.checked;
    }
}

var checkboxes_3 = document.querySelectorAll('input.my-checkbox_3'),
    checkall_3 = document.getElementById('checkbox_3');

for(var i=0; i<checkboxes_3.length; i++) {
    checkboxes_3[i].onclick = function() {
        var checkedCount = document.querySelectorAll('input.my-checkbox_3:checked').length;
        checkall_3.checked = checkedCount > 0;
        checkall_3.indeterminate = checkedCount > 0 && checkedCount < checkboxes_3.length;
    }
}

checkall_3.onclick = function() {
    for(var i=0; i<checkboxes_3.length; i++) {
        checkboxes_3[i].checked = this.checked;
    }
}

var checkboxes_3 = document.querySelectorAll('input.my-checkbox_3'),
checkall = document.getElementById('checkbox');
checkall.onclick = function() {
    for(var i=0; i<checkboxes_3.length; i++) {
		checkboxes_2[i].checked = this.checked;
        checkboxes_3[i].checked = this.checked;
    }
}

var button = document.getElementById("link-button");
var my_checkbox_2_1 = document.getElementById("my_checkbox_2_1");  
button.addEventListener("click", () => {
    var table_2_1 = document.getElementById("part_2_1")
    	if(my_checkbox_2_1.checked) {
            table_2_1.style.display = "block";
		}
		else {
			table_2_1.style.display = "none";
		}
} 
);

var button = document.getElementById("link-button"); 
var my_checkbox_2_2 = document.getElementById("my_checkbox_2_2");   
button.addEventListener("click", () => {
    var table_2_2 = document.getElementById("part_2_2")
    	if(my_checkbox_2_2.checked) {
            table_2_2.style.display = "block";
		}
		else {
			table_2_2.style.display = "none";
		}
} 
);

var button = document.getElementById("link-button"); 
var my_checkbox_2_3 = document.getElementById("my_checkbox_2_3");   
button.addEventListener("click", () => {
    var table_2_3 = document.getElementById("part_2_3")
    	if(my_checkbox_2_3.checked) {
            table_2_3.style.display = "block";
		}
		else {
			table_2_3.style.display = "none";
		}
} 
);

var button = document.getElementById("link-button"); 
var my_checkbox_2_4 = document.getElementById("my_checkbox_2_4");   
button.addEventListener("click", () => {
    var table_2_4 = document.getElementById("part_2_4")
    	if(my_checkbox_2_4.checked) {
            table_2_4.style.display = "block";
		}
		else {
			table_2_4.style.display = "none";
		}
} 
);

var button = document.getElementById("link-button"); 
var my_checkbox_2_5 = document.getElementById("my_checkbox_2_5");   
button.addEventListener("click", () => {
    var table_2_5 = document.getElementById("part_2_5")
    	if(my_checkbox_2_5.checked) {
            table_2_5.style.display = "block";
		}
		else {
			table_2_5.style.display = "none";
		}
} 
);



//скрип нажатия на ячейки
var tds = document.querySelectorAll('td');
var modal2 = document.getElementById('myModal2');
var span2 = document.getElementsByClassName("close2")[0];
for (var i = 0; i < tds.length; i++) {
		tds[i].onclick = function() { 
			modal2.style.display = "block";
		}
		
		span2.onclick = function() {
			modal2.style.display = "none";
		}
	};		
		
		/*var input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);
		
		var td = this;
		input.addEventListener('blur', function() {
			td.innerHTML = this.value;
			td.addEventListener('click', func);
		});
		
		this.removeEventListener('click', func);*/

/* работы с данными в таблицу */
// Функция для сохранения данных в Local Storage



/*let selectedCell = null; // Переменная для хранения выбранной ячейки

// Добавляем обработчик событий на каждую ячейку таблицы
const cells = document.querySelectorAll('#data-table td');
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        selectedCell = cell; // Сохраняем ссылку на выбранную ячейку
        // Убираем выделение с остальных ячеек (если нужно)
        cells.forEach(c => c.style.backgroundColor = ''); // Сбрасываем цвет
        cell.style.backgroundColor = '#e0e0e0'; // Выделяем выбранную ячейку
    });
});

// Обработчик события для кнопки обновления
document.getElementById('submit-button').addEventListener('click', function() {
    const selectElement = document.getElementById('value-select');
    const selectedValue = selectElement.value;

    if (selectedCell && selectedValue) {
        selectedCell.textContent = selectedValue; // Обновляем содержимое выбранной ячейки
        selectElement.selectedIndex = 0; // Сбрасываем выбор в select
        selectedCell.style.backgroundColor = ''; // Убираем выделение
        selectedCell = null; // Сбрасываем выбранную ячейку
    } else {
        alert("Пожалуйста, выберите ячейку и значение для обновления.");
    }
});*/


let selectedCell = null; // Переменная для хранения выбранной ячейки

// Добавляем обработчик событий на каждую ячейку таблицы
const cells = document.querySelectorAll('#data-table tbody td');
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        selectedCell = cell; // Сохраняем ссылку на выбранную ячейку
        // Убираем выделение с остальных ячеек
        cells.forEach(c => c.style.backgroundColor = ''); // Сбрасываем цвет
        cell.style.backgroundColor = '#e0e0e0'; // Выделяем выбранную ячейку
    });
});

// Обработчик события для кнопки обновления
document.getElementById('submit-button').addEventListener('click', function() {
    const nameSelect = document.getElementById('name-select');
    const ageSelect = document.getElementById('age-select');
    const citySelect = document.getElementById('city-select');

    // Получаем значения из select
    const selectedName = nameSelect.value;
    const selectedAge = ageSelect.value;
    const selectedCity = citySelect.value;

    // Проверяем, выбрана ли ячейка
    if (selectedCell) {
        // Объединяем значения
        const combinedValue = [
            selectedName || "Не указано", // Если имя не выбрано, указываем "Не указано"
            selectedAge || "Не указано", // Если возраст не выбран, указываем "Не указано"
            selectedCity || "Не указано" // Если город не выбран, указываем "Не указано"
        ].join(', '); // Объединяем значения через запятую

        // Обновляем содержимое выбранной ячейки
        selectedCell.textContent = combinedValue; // Записываем объединённое значение в ячейку

        // Сбрасываем выделение
        selectedCell.style.backgroundColor = ''; // Убираем выделение
        selectedCell = null; // Сбрасываем выбранную ячейку
    } else {
        alert("Пожалуйста, выберите ячейку для обновления.");
    }
});
	// Находим ячейку по id
	/*const cellToUpdate = document.getElementById('cell_1');
  
	if (cellToUpdate) {
	  // Если ячейка найдена, обновляем ее значение
	  cellToUpdate.textContent = selectedValue;
	} else {
	}
	});*/
