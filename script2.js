function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){        
        window.alert('[ERRO] Verifique os dados e tente novamente')
        } else {       
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.getElementById('imagem')
           
            if (fsex[0].checked) {
               genero = 'Homem'
             if (idade >= 0 && idade < 13){
                   //criança
                   img.src = `c:/Programacao/cursoJavascript/aula14/img/criancaM.png`                              
               } else if (idade < 21){
                   //jovem
                   img.src = `c:/Programacao/cursoJavascript/aula14/img/adolescenteM.png`
               } else if (idade < 65){
                   //adulto
                   img.src = `c:/Programacao/cursoJavascript/aula14/img/adultoM.png`
               } else {
                   //idoso
                   img.src = `c:/Programacao/cursoJavascript/aula14/img/idosoM.png`
               }

            } else if (fsex[1].checked){
               genero = 'Mulher'
               if (idade >= 0 && idade < 13){
                   //crianca
                   img.src = `c:/Programacao/cursoJavascript/aula14/img/criancaF.png`                   
               } else if (idade < 21){
                   //jovem
                   img.src = `c:/Programacao/cursoJavascript/aula14/img/adolescenteF.png`
               } else if (idade < 65){
                   //adulto
                   img.src = `c:/Programacao/cursoJavascript/aula14/img/adultoF.png`
               } else {
                   //idoso
                   img.src = `c:/Programacao/cursoJavascript/aula14/img/idosoF.png`
               }
 
            }
        }//res.innerHTML =`detectamos ${genero} com ${idade} anos.`
    }


