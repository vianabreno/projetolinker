//PAGINA INDEX

//Funções dos butões

var but01 = window.document.getElementById('but1')
var but02 = window.document.getElementById('but2')
var but021 = window.document.getElementById('but21')
var but0212 = window.document.getElementById('but212')
var but03 = window.document.getElementById('but3')
var but04 = window.document.getElementById('but4')
var but05 = window.document.getElementById('but5')
var menu1 = window.document.getElementById('menu1')
var menu2 = window.document.getElementById('menu2')

but01.addEventListener('mouseenter', entrar1)
but01.addEventListener('mouseout', sair1)
function entrar1(){
    but01.style.backgroundColor = 'var(--cor01)'
}
function sair1(){
    but01.style.backgroundColor = 'var(--cor04)'
}

but02.addEventListener('mouseenter', entrar2)
but02.addEventListener('mouseout', sair2)
function entrar2(){
    but02.style.backgroundColor = 'var(--cor01)'
}
function sair2(){
    but02.style.backgroundColor = 'var(--cor04)'
}

but021.addEventListener('mouseenter', entrar21)
but021.addEventListener('mouseout', sair21)
function entrar21(){
    but021.style.backgroundColor = 'var(--cor01)'
}
function sair21(){
    but021.style.backgroundColor = 'var(--cor04)'
}

but0212.addEventListener('mouseenter', entrar212)
but0212.addEventListener('mouseout', sair212)
function entrar212(){
    but0212.style.backgroundColor = 'var(--cor01)'
}
function sair212(){
    but0212.style.backgroundColor = 'var(--cor04)'
}

but03.addEventListener('mouseenter', entrar3)
but03.addEventListener('mouseout', sair3)
but03.addEventListener('click', clique)
function entrar3(){
    but03.style.backgroundColor = 'var(--cor01)'
}
function sair3(){
    but03.style.backgroundColor = 'var(--cor04)'
}
function clique(){
    menu1.style.display = 'block'
    menu2.style.display = 'none'
}

but04.addEventListener('mouseenter', entrar4)
but04.addEventListener('mouseout', sair4)
but04.addEventListener('click', clique2)
function entrar4(){
    but04.style.backgroundColor = 'var(--cor01)'
}
function sair4(){
    but04.style.backgroundColor = 'var(--cor04)'
}
function clique2(){
    menu2.style.display = 'block'
    menu1.style.display = 'none'
}

but05.addEventListener('mouseenter', entrar5)
but05.addEventListener('mouseout', sair5)
function entrar5(){
    but05.style.backgroundColor = 'var(--cor01)'
}
function sair5(){
    but05.style.backgroundColor = 'var(--cor04)'
}

//
//CODIGO PARA MUDAR DE COR O LAIOUT - DESATIVADO

/*var data = new Date()
var agora = data.getFullYear()
var hora = data.getHours()
var secao1 = window.document.getElementById('secao1')
var secao2 = window.document.getElementById('secao2')
var cabeca = window.document.getElementById('cabeca')
var subcabeca = window.document.getElementById('subcabeca')
var footer = window.document.getElementById('cabecabaixo')
var main = window.document.getElementById('main')

    //Tardinha//
if(hora >= 13 && hora <= 17){
    window.document.body.style.backgroundColor = 'var(--cor03)'
    secao1.style.backgroundColor = 'var(--cor03)'
    secao2.style.backgroundColor = 'var(--cor03)'
    main.style.backgroundColor = 'var(--cor03)'
} 

    //Noitinha//
    else if(hora >= 18 && hora <= 22){
        window.document.body.style.backgroundColor = 'var(--cor04)'
        secao1.style.backgroundColor = 'var(--cor04)'
        secao2.style.backgroundColor = 'var(--cor04)'
        cabeca.style.color = 'white'
        subcabeca.style.color = 'white'
        footer.style.color = 'white'
        main.style.backgroundColor = 'var(--cor04)'

        but01.style.backgroundColor = 'var(--cor02)'
        but01.style.color = 'white'
        but02.style.backgroundColor = 'var(--cor02)'
        but02.style.color = 'white'
        but03.style.backgroundColor = 'var(--cor02)'
        but03.style.color = 'white'
        but04.style.backgroundColor = 'var(--cor02)'
        but04.style.color = 'white'
        but05.style.backgroundColor = 'var(--cor02)'
        but05.style.color = 'white'

        but01.addEventListener('mouseenter', entrar1)
        but01.addEventListener('mouseout', sair1)
        function entrar1(){
            but01.style.backgroundColor = 'var(--cor03)'
            but01.style.color = 'var(--cor05)'
        }
        function sair1(){
            but01.style.backgroundColor = 'var(--cor02)'
            but01.style.color = 'white'
        }

        but02.addEventListener('mouseenter', entrar2)
        but02.addEventListener('mouseout', sair2)
        function entrar2(){
            but02.style.backgroundColor = 'var(--cor03)'
            but02.style.color = 'var(--cor05)'
        }
        function sair2(){
            but02.style.backgroundColor = 'var(--cor02)'
            but02.style.color = 'white'
        }

        but03.addEventListener('mouseenter', entrar3)
        but03.addEventListener('mouseout', sair3)
        function entrar3(){
            but03.style.backgroundColor = 'var(--cor03)'
            but03.style.color = 'var(--cor05)'
        }
        function sair3(){
            but03.style.backgroundColor = 'var(--cor02)'
            but03.style.color = 'white'
        }

        but04.addEventListener('mouseenter', entrar4)
        but04.addEventListener('mouseout', sair4)
        function entrar4(){
            but04.style.backgroundColor = 'var(--cor03)'
            but04.style.color = 'var(--cor05)'
        }
        function sair4(){
            but04.style.backgroundColor = 'var(--cor02)'
            but04.style.color = 'white'
        }

        but05.addEventListener('mouseenter', entrar5)
        but05.addEventListener('mouseout', sair5)
        function entrar5(){
            but05.style.backgroundColor = 'var(--cor03)'
            but05.style.color = 'var(--cor05)'
        }
        function sair5(){
            but05.style.backgroundColor = 'var(--cor02)'
            but05.style.color = 'white'
        }
    }*/

function pagina2(){
    var but07 = window.document.getElementById('but7')
    var but08 = window.document.getElementById('but8')
    var but09 = window.document.getElementById('but9')

    but07.addEventListener('mouseenter', entrar7)
    but07.addEventListener('mouseout', sair7)
    function entrar7(){
        but07.style.backgroundColor = 'var(--cor01)'
    }
    function sair7(){
        but07.style.backgroundColor = 'var(--cor04)'
    }

    but08.addEventListener('mouseenter', entrar8)
    but08.addEventListener('mouseout', sair8)
    function entrar8(){
        but08.style.backgroundColor = 'var(--cor01)'
    }
    function sair8(){
        but08.style.backgroundColor = 'var(--cor04)'
    }

    but09.addEventListener('mouseenter', entrar9)
    but09.addEventListener('mouseout', sair9)
    function entrar9(){
        but09.style.backgroundColor = 'var(--cor01)'
    }
    function sair9(){
        but09.style.backgroundColor = 'var(--cor04)'
    }
    
}
