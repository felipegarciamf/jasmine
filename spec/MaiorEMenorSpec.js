describe("MaiorEMenor", function () {

    var algoritimo;

    beforeEach(function () {
        algoritimo = new MaiorEMenor();
    })

    it("deve entender números em ordem não sequencial", function () {
        algoritimo.encontra([5, 15, 7, 9]);
        expect(algoritimo.pegaMaior()).toEqual(15);
        expect(algoritimo.pegaMenor()).toEqual(5);
    });

    it("deve entender números em ordem crescente", function () {
        algoritimo.encontra([5, 6, 7, 8]);
        expect(algoritimo.pegaMaior()).toEqual(8);
        expect(algoritimo.pegaMenor()).toEqual(5);
    });

    it("deve entender números em ordem decrescente", function () {
        algoritimo.encontra([8, 7, 6, 5]);
        expect(algoritimo.pegaMaior()).toEqual(8);
        expect(algoritimo.pegaMenor()).toEqual(5);
    });

    it("deve entender um único número ser o maior e o menor elemento", function () {
        algoritimo.encontra([10]);
        expect(algoritimo.pegaMaior()).toEqual(10);
        expect(algoritimo.pegaMenor()).toEqual(10);
    });
});