const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
// como se fosse o IF ELSE

const corUsuario = null;
const corPardrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPardrao);