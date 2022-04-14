
var users = [{
    name: 'Lucy',
    gender: 'F',
    hobby: 'bailar',
    avatar: 'avatar1.png'
},
{
    name: 'Mario',
    gender: 'M',
    hobby: 'videojuegos',
    avatar: 'avatar2.png'
},
{
    name: 'Lili',
    gender: 'F',
    hobby: 'cantar',
    avatar: 'avatar3.png'
},
{
    name: 'Idalia',
    gender: 'F',
    hobby: 'entrenar',
    avatar: 'avatar4.png'
},
{
    name: 'Carmen',
    gender: 'F',
    hobby: 'cantar',
    avatar: 'avatar5.png'
},
{
    name: 'Sofia',
    gender: 'F',
    hobby: 'cantar',
    avatar: 'avatar6.png'
},
{
    name: 'Dennis',
    gender: 'M',
    hobby: 'music',
    avatar: 'avatar7.png'
},


];
    /*es un escuchador de eventos se carga la pagina con load */
window.addEventListener('load', function () {
    function buscar() {


        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);

        var genderField = document.getElementById('gender');//obtengo el campo de opciones 
        var selected = genderField.selectedIndex;//obtengo el indice del campo seleccionado
        var gender = genderField.options[selected].value;//una vez tengo la opcio obtengo el valor
        console.log(gender);// muestro por pantalla

        //cuando obtenga el hobby y el genero ver la informacion del usuario

        var resultsHTML = '';
        var numUsers = users.length;
        for (var i = 0; i < numUsers; i++) {
            if (gender == 'A' || gender == users[i].gender) {

                if (hobby == '' || hobby == users[i].hobby) {

                    resultsHTML += '<div class="person-row"><img src="images/' + users[i].avatar + '" /><div class="person-info"><div>' + users[i].name + '</div><div>' + users[i].hobby + '</div></div><button>Add as friend</button></div>';
                }
            }

        }

        results.innerHTML = resultsHTML;
    };



    var results = this.document.getElementById('results');
    
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', buscar);
    buscar();

});


