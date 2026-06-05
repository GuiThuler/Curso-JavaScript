// Exercício 5 — Método dentro do objeto (médio)
// Crie um objeto contaBancaria com saldo, depositar(valor) e sacar(valor). O saque deve verificar se há saldo suficiente.
// const contaBancaria = {
//   saldo: 1000,
//   depositar(valor) {
//     // adicione ao saldo
//   },
//   sacar(valor) {
//     // verifique saldo antes
//   }
// }
// Dica: use this.saldo dentro dos métodos para acessar o saldo do próprio objeto.

const contaBancaria = {
  saldo: 1000,
  depositar(valor) {
    this.saldo += valor
     console.log(`Valor ${valor} depositado com sucesso! Seu saldo agora é de ${this.saldo}`);
  },
  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor
      console.log(`Saque no valor ${valor} realizado com sucesso! Seu saldo agora é de ${this.saldo}`)
    } else {
      console.log(`Saldo insuficiente. Seu saldo é ${this.saldo}. `)
  }
}
}
contaBancaria.depositar(500);
contaBancaria.sacar(300);