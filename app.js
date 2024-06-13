const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');



burger.addEventListener('click', () => {
	menu.classList.toggle('disp');
})


// document.querySelector('#elastic').oninput = function() {
// 	let val = this.value.trim();
// 	let elasticItems = document.querySelectroAll('.elastic li');
// 	if (val != '') {
// 		elasticItems.forEach(function(elem) {
// 			if (elem.innerText.search(val) == -1) {
// 				elem.classList.add('hide');
// 				elem.innerHTML = elem.innerText;
// 			}
// 			else {
// 				elem.classList.remove('hide');
// 				let str = elem.innerText;
// 				elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
// 			}
// 		});
// 	}
// 	else {
// 		elasticItems.forEach(function(elem) {
// 			elem.classList.remove('hide');
// 			elem.innerHTML = elem.innerText;
// 	}
// }


// function insertMark(find, pos, len) {
// 	return find.slice(0, pos) + '<mark>' + find.slice(pos, pos+len)+'</mark>'+string.slice(pos+len);
// }