function Agendamento() {

    var clazz = {

        para: function (consulta) {
            var umDiaEmMiliSegundo = 1000 * 60 * 60 * 24;
            var vinteDiasEmMiliSegundos = umDiaEmMiliSegundo * 20;
            var novaData = acrescentaVinteDias(consulta, vinteDiasEmMiliSegundos);
            novaData = verificaDiaUtil(novaData, umDiaEmMiliSegundo);
            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);
            return novaConsulta;
        }
    };


    function acrescentaVinteDias(consulta, vinteDiasEmMiliSegundos) {
        return new Date(consulta.getData().getTime() + vinteDiasEmMiliSegundos);
    }

    function verificaDiaUtil(novaData, umDiaEmMiliSegundo) {
        while (novaData.getDay() == 0 || novaData.getDay() == 6)
            novaData = new Date(novaData.getTime() + umDiaEmMiliSegundo);
        return novaData;
    }

    return clazz;


}
