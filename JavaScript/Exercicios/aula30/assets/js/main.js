// function horarioDeAgora() {
//     const resultado = document.querySelector('.resultado');
//     const data = new Date();
//     const ano = data.getFullYear();
//     const mes = data.getMonth();
//     const diaDaSemana = data.getDay();
//     const dia = data.getDate();
//     const horas = data.getHours();
//     const minutos = data.getMinutes();
//     const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos; // IMPORTANTE
//     console.log(data.toString());
//     console.log(dia, mes + 1, ano.toString(), diaDaSemana, horas, minutos);

//     function Semana() {
//         switch (diaDaSemana) {
//             case 0:
//                 return 'Domingo';
//             case 1:
//                 return 'Segunda';
//             case 2:
//                 return 'Terça-Feira';
//             case 3:
//                 return 'Quarta-Feira';
//             case 4:
//                 return 'Quinta-Feira';
//             case 5:
//                 return 'Sexta-Feira';
//             case 6:
//                 return 'Sábado';
//             default:
//                 data = '';
//                 return 'ERROR 01';
//         }
//     }
//     function mesInterio() {

//         switch (mes) {
//             case 0:
//                 return 'Janeiro';
//             case 1:
//                 return 'Fevereiro';
//             case 2:
//                 return 'Março';
//             case 3:
//                 return 'Abril';
//             case 4:
//                 return 'Maio';
//             case 5:
//                 return 'Junho';
//             case 6:
//                 return 'Julho';
//             case 7:
//                 return 'Agosto';
//             case 8:
//                 return 'Setembro';
//             case 9:
//                 return 'Outubro';
//             case 10:
//                 return 'Novembro';
//             case 11:
//                 return 'Dezembro';
//             default:
//                 mes = '';
//                 return 'ERROR 02';

//         }
//     }
//     return resultado.innerHTML = `${Semana()}, ${dia} de ${mesInterio()}, de ${ano}, as ${horas}:${minutosFormatados}`;
// }
// horarioDeAgora()

const res = document.querySelector('#resultado');
const data = new Date();
res.innerHTML = data.toLocaleString('pt-BR' , {dateStyle: 'full', timeStyle: 'short' });
