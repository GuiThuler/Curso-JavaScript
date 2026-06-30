function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() { // METODO
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },
        
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta Inválida')
                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay() {
            this.display.value = '';
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                
             }); //.bind(this)
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();

// Factory Function
// Função que retorna um objeto. Usada aqui pra criar a calculadora com propriedades e métodos encapsulados.

// this
// Aponta pro objeto que está executando o método. Dentro de callbacks como addEventListener, o this muda — arrow function resolve isso herdando o this do contexto externo.

// Arrow function vs function normal
// function tem this próprio (muda dependendo de quem chama). Arrow function herda o this de onde foi escrita. Por isso substituiu o .bind(this).

// .bind(this)
// Congela o valor do this dentro de uma função normal. Foi substituído pelas arrow functions nesse projeto.

// eval()
// Executa uma string como código JavaScript. Útil pra calcular expressões como "2+3*4", mas perigoso em produção.

// try/catch
// Usado quando um erro pode acontecer durante a execução e você não tem como prever antes com if. O try tenta, o catch captura o erro se explodir.

// slice(0, -1)
// Remove o último caractere de uma string. Usado no botão de apagar.

// e.target
// O elemento que foi clicado dentro do evento. Usado pra identificar qual botão foi pressionado pela classe dele.