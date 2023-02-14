window.onload = function () {

    var dropDownMenu = document.getElementById('myDropdown');

    dropDownMenu.addEventListener('click', function (e) {

        var target = e.target.id;

        if (target === 'Car')
    }

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdowns = dropdowns[i];
            if (openDropdowns.classList.contains('show')) {
                openDropdowns.classList.remove('show');
            }
        }
    }
}