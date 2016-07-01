import HeroModel from '../app/model/HeroModel';
import GaugeComponent from '../app/components/GaugeComponent.js';





describe("Data requests", () => {
    let heroInstance;
    let callback;
    let json;
    beforeEach(() => {
        heroInstance = new HeroModel;
        json = {
            "tablet": {
                "value": 120000,
                "currency": true
            },
            "mobile": {
                "value": 80000,
                "currency": true
            }
        };
    });
    it("should return data from json", (done) => {

        callback = (data) => {
            expect(data).toEqual(json);

            done();
            return data;
        };

        heroInstance.getData('http://localhost:8080/data/revenue.json', callback);
    });
});
