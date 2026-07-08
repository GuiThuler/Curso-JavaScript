const exe1callback = () => console.log('ola');
function executaDuasVezes(callback) {
    callback();
    callback();
}
executaDuasVezes(exe1callback)