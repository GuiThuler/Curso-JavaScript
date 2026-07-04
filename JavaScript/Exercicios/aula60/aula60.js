function recursiva(max) {
    if(max > 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

// é uma função que se chama de voltar