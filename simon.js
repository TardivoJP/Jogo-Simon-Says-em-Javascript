window.onload=async()=>{

    alert(`Clique no centro para iniciar o jogo\nApós observar a sequencia, tente repeti-la\n
    Após repetir a sequencia clique no centro novamente para observar a mesma sequencia com um valor adicional\n
    Qual é o limite de sua memória?`)

    //seletores para os elementos html
    const uno=document.querySelector("#um");
    const dos=document.querySelector("#dois");
    const tres=document.querySelector("#tres");
    const cuatro=document.querySelector("#quatro");
    const botao=document.querySelector("#menor");

    //função para criar um atraso em milisegundos, ou seja
    //o intervalo entre cada cor piscando na sequencia
    const delay = ms => new Promise(res => setTimeout(res, ms));

    /*variaveis com valores iniciais para a lógica do jogo
      1. uma variável para verificar se o jogo iniciou ou não
      2. uma array vazia na qual a sequencia das luzes vai ser inserida
      3. uma variável contadora para percorrer a array
      4. outras duas contadoras para verificar o tamanho da sequencia
      (lembrando que arrays começam em 0)
      5. uma variável para a dificuldade do jogo, intervalo de tempo entre as luzes*/
    let gameStart=0;
    let sequencia=[];
    let contador=0;
    let tamanhoSequencia=1;
    let x=0;
    let dificuldade=650;

    console.log(sequencia);

    //ao clicar no botão central temos
    botao.addEventListener("click",async()=>{

        //variável diz que o jogo foi iniciado
        gameStart=1;     

        /*esse if inicial serve para certificar que
          o botão não vai funcionar novamente até que o
          jogador repita a sequencia de cores corretamente */
        if(x<tamanhoSequencia){

            /*aqui a variavel dificuldade é ajustada dependendo do
              tamanho da sequencia, como trata-se do intervalo em
              milisegundos entre as luzes, valores menores significam
              maior dificuldade */
            
            if(tamanhoSequencia>10){
                dificuldade=400;
            } else if(tamanhoSequencia>6){
                dificuldade=500;
            } else if(tamanhoSequencia>4){
                dificuldade=550;
            } else if(tamanhoSequencia>2){
                dificuldade=600;
            }

            /*este if verificando se x>0 certifica que este bloco
              de código não vai rodar na primeira rodada, mas será
              em todas subsequentes, considerando que o x foi iniciado
              como 0 e ele é incrementado cada vez que o botão central
              é precionado após a repetição correta da sequencia atual de luzes
              
              o bloco de comandos deste if cuida da repetição da sequencia atual
              de luzes, então como na primeira vez não existe nada ainda para
              se repetir ele não é executado*/
            if(x>0){

                /*este loop for percorre toda a sequencia, repetindo o padrão
                  de luzes existente que posteriormente vai ser incrementado em 1*/
                for (y=0; y < x; y++) {

                    /*este switch verifica qual luz será piscada dependendo do valor
                      na array da sequencia, 1 -> vermelho, 2 -> verde, 3 -> amarelo
                      e 4 -> azul */
                    switch(sequencia[y]){
                        case 1:
                            uno.classList.remove("vermelho");
                            uno.classList.add("branco");
        
                            setTimeout(function(){
                                uno.classList.remove("branco");
                                uno.classList.add("vermelho");
                            }, 400);                     
                        break;
                        case 2:
                            dos.classList.remove("verde");
                            dos.classList.add("branco");
        
                            setTimeout(function(){
                                dos.classList.remove("branco");
                                dos.classList.add("verde");
                            }, 400);
                        break;
                        case 3:
                            tres.classList.remove("amarelo");
                            tres.classList.add("branco");
        
                            setTimeout(function(){
                                tres.classList.remove("branco");
                                tres.classList.add("amarelo");
                            }, 400);
                        break;
                        case 4:
                            cuatro.classList.remove("azul");
                            cuatro.classList.add("branco");
        
                            setTimeout(function(){
                                cuatro.classList.remove("branco");
                                cuatro.classList.add("azul");
                            }, 400);
                        break;
                    }
                    /*no fim de cada repetição temos a função de atraso
                      que diminui dependendo da dificuldade atual, ou seja,
                      as luzes piscam mais rápido */
                    await delay(dificuldade);
                 }
            }

            /*esta variável será um número aleatório entre 1 e 4, o que
              corresponde as cores conforme descrito anteriormente, após isso
              atribuimos este valor para a sequencia
              
              por isso também é importante o x começar em 0, pois arrays
              iniciam neste valor e conforme o x vai aumentando ele irá
              continuar atribuindo valores para as próximas posições da array,
              criando a sequencia de luzes aleatória a ser repetidade pelo jogador*/
            let rando=Math.floor(Math.random() * 4) + 1;
            sequencia[x]=rando;
            
            /*após esta atribuição, temos um novo switch para piscar a respectiva
              luz deste novo valor para o jogador, logo:
              
              em conjunto com os códigos acima, repetimos a sequencia até agora,
              depois adicionamos e mostramos um novo valor, o que é a lógica do jogo
              simon says */
            switch(rando){
                case 1:
                    uno.classList.remove("vermelho");
                    uno.classList.add("branco");

                    setTimeout(function(){
                        uno.classList.remove("branco");
                        uno.classList.add("vermelho");
                    }, 400);                     
                break;
                case 2:
                    dos.classList.remove("verde");
                    dos.classList.add("branco");

                    setTimeout(function(){
                        dos.classList.remove("branco");
                        dos.classList.add("verde");
                    }, 400);
                break;
                case 3:
                    tres.classList.remove("amarelo");
                    tres.classList.add("branco");

                    setTimeout(function(){
                        tres.classList.remove("branco");
                        tres.classList.add("amarelo");
                    }, 400);
                break;
                case 4:
                    cuatro.classList.remove("azul");
                    cuatro.classList.add("branco");

                    setTimeout(function(){
                        cuatro.classList.remove("branco");
                        cuatro.classList.add("azul");
                    }, 400);
                break;
            }
            
            //por fim incrementamos o x para continuar a sequencia
            x++;
            await delay(dificuldade);
        }

        console.log(sequencia);
    })

    /*aqui temos vários eventos parecidos para cada uma das luzes coloridas,
      ao clicar em qualquer uma temos uma breve animação e de forma mais importante
      temos os ifs para verificar se o jogo foi iniciado ou não
      
      caso o jogo foi iniciado ele chama uma outra função que cuida da lógica do jogo,
      passando o numero correspondente a sua cor como argumento, lembrando:
      1 -> vermelho, 2 -> verde, 3 -> amarelo e 4 -> azul */
    uno.addEventListener("click",()=>{

        uno.classList.remove("vermelho");
        uno.classList.add("branco");

        setTimeout(function(){
            uno.classList.remove("branco");
            uno.classList.add("vermelho");
        }, 200);       

        if(gameStart==0){
            alert("Clique no meio para jogar");
        }
        if(gameStart==1){
            logicaCor(1);
        }
    })

    dos.addEventListener("click",()=>{

        dos.classList.remove("verde");
        dos.classList.add("branco");

        setTimeout(function(){
            dos.classList.remove("branco");
            dos.classList.add("verde");
        }, 200);

        if(gameStart==0){
            alert("Clique no meio para jogar");
        }
        if(gameStart==1){
            logicaCor(2);
        }
    })

    tres.addEventListener("click",()=>{

        tres.classList.remove("amarelo");
        tres.classList.add("branco");

        setTimeout(function(){
            tres.classList.remove("branco");
            tres.classList.add("amarelo");
        }, 200);

        if(gameStart==0){
            alert("Clique no meio para jogar");
        }
        if(gameStart==1){
            logicaCor(3);
        }
    })

    cuatro.addEventListener("click",()=>{

        cuatro.classList.remove("azul");
        cuatro.classList.add("branco");

        setTimeout(function(){
            cuatro.classList.remove("branco");
            cuatro.classList.add("azul");
        }, 200);

        if(gameStart==0){
            alert("Clique no meio para jogar");
        }
        if(gameStart==1){
            logicaCor(4);
        }
    })

    /*por fim tem-se a função da lógica das luzes precionadas pelo jogador
    
      lembra-se do contador declarado anteriormente, ele será a chave de cada
      elemento da array, 0, 1, 2, 3, etc, em outras palavras estamos percorrendo
      esta array desde o início, ou seja, reproduzindo as cores que piscaram
      anteriormente
      
      caso todos os valores forem inseridos corretamente o contador zera para a
      próxima rodada e a outra variavel contadora para o tamanho da sequencia é
      incrementada em 1, permitindo que o botão central seja precionado novamente
      
      caso a luz precionada pelo jogador for o valor errado para a sequência então
      temos o fim do jogo*/
    function logicaCor(valorCor){
        if(sequencia[contador]==valorCor){
            contador++;
            if(contador==tamanhoSequencia){
                tamanhoSequencia++;
                contador=0;
            }
        }else{
            gameOver();  
        }
    }

    //esta função simplesmente retorna o jogo ao estado inicial para uma nova partida
    function gameOver(){
        alert("Escolheu errado!")
        alert("Jogo encerrado!")
        alert(`Você atingiu ${tamanhoSequencia} pontos.`)
        alert("Clique no centro para jogar novamente")
        gameStart=0;
        sequencia=[];
        contador=0;
        tamanhoSequencia=1;
        x=0;
        dificuldade=650;  
    }


}