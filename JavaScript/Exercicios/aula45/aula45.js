function retornaHora(data) {
   if (data && !(data instanceof Date)) { // se nao for new Date() o return, o erro aparece
    throw new TypeError('Esperando instacia de Date')
   }

   if (!data) {
    data = new Date();
   }

   return data.toLocaleTimeString('pt-BR' , {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
   }) // aq ta retornando a hora

}

try {
    const data = new Date('22-05-2026 19:18:14');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    console.log('Esta dando ERROR');
} finally {
    console.log('Vai aparecer de toda forma!') // esse finally sempre vai aparecer, nao importa se der error ou nao.
}

