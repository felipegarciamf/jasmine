describe("Paciente", function () {

    var guilherme;

    beforeEach(function(){
        guilherme = new PacienteBuilder().constroi();
    });

    it("deve calcular o imc", function () {
        var imc = guilherme.imc();
        expect(imc).toEqual(72 / (1.82 * 1.82));
    });

    it("deve calcular a quantidade de batimento que o paciente teve na vida", function(){
        var batimento = guilherme.batimentos();
        expect(batimento).toEqual(1177344000);
    })



})