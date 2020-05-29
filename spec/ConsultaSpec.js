describe("Consulta", function () {

    var guilherme;

    beforeEach(function () {
        var guilherme = new PacienteBuilder();
    });

    describe("consulta do tipo retorno", function () {
        it("não deve cobrar nada se for um retorno", function () {
            var consulta = new Consulta(guilherme, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });
    });

    describe("consultas com procedimentos", function () {
        it("deve cobrar 25 por cada procedimento comum", function () {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);
            expect(consulta.preco()).toEqual(50);
        });

        it("deve cobrar preco especifico dependendo do procedimento", function () {
            var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });

        it("deve cobrar preco base do procedimento basico", function () {
            var consulta = new Consulta(guilherme, ["procedimento-comum", "procedimento-comum"], false, false);
            expect(consulta.preco()).toEqual(50);
        });

        it("deve cobrar o preco de valores procedimentos especiais", function () {
            var consulta = new Consulta(guilherme, ["raio-x", "gesso"], false, false);
            expect(consulta.preco()).toEqual(87);
        });
    });


});