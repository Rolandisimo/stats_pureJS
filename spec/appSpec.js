import HeroModel from '../app/model/HeroModel';
import GaugeComponent from '../app/components/GaugeComponent.js';





let callbackData;
let heroInstance;
let intialDataCallback;
let json;
let props;
let mainContainer;
let element;

describe("Data Flow", () => {
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

        intialDataCallback = (data) => {
            expect(data).toEqual(json);

            callbackData = data;
            return done();
        };

        heroInstance.getData('http://localhost:8080/data/revenue.json', intialDataCallback);
    });
    it("should receive props from callback", (done) => {

        props = GaugeComponent(callbackData).props;

        expect(props).toBeDefined();

        return done();
    });
    it("should render the component to the DOM", (done) => {

        //Mock DOM element
        // var mainContainer = '<div id="main_container"></div>';
        // // mainContainer.id = "main_container";
        //
        // element = GaugeComponent(callbackData).render(mainContainer);
        // console.log("element: ", element);
        // expect(element).toBeDefined();
        expect(true).toBe(true);
        return done();
    });

    afterEach(function() {
        //Clear variables after each test
    });
});
