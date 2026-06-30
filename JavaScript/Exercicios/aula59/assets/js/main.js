function Calculadora() {
        this.display = document.querySelector('.display');

        this.inicia = () => { // METODO
            cliqueBotoes();
            pressionaEnter();
        };

        const pressionaEnter = () => {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    realizaConta();
                }
            })
        };
        
        const realizaConta = () => {
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
        };

        const apagaUm = () => {
            this.display.value = this.display.value.slice(0, -1)
        };

        const clearDisplay = () => {
            this.display.value = '';
        };

        const cliqueBotoes = () =>  {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')) {
                    clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    realizaConta();
                }
                
             });
        
        };

        const btnParaDisplay = (valor) => {
            this.display.value += valor;
        };
    };

const calculadora = new Calculadora();
calculadora.inicia();
