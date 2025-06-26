function ehDataValida(dia, mes, ano) {
    if ( typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number' || dia <= 0 || mes <= 0 || mes > 12 || ano <= 0) {
        return false
    }

    function ehBissexto(ano) {
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
    }

    let diasPorMes = [31, (ehBissexto ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    return dia <= diasPorMes[mes - 1]
}

console.log(ehDataValida(18, 10, 2000))