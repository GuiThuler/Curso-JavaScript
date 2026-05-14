
const dataNumber = new Date(2026, 1, 2, 20, 30);
console.log(dataNumber.toString());

const dataString = new Date('2019-8-22  04:10:43');
console.log(dataString.toString())



function HoraAgora(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
};

const data = new Date();
const dataBrasil = HoraAgora(data);
console.log(dataBrasil);

