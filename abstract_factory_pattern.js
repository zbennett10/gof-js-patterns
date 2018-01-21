//Below is my interpretation of the Abstract Factory Pattern in a functional context.
//Two types of soccer balls - AddidasBall and NikeBall

const NikeBall = function(name, size, sponsors) {

}

const AdidasBall = function(name, size, sponsors) {

}

//Example use of pattern below...
const generateFactory = (types) => {
    return (type, ...args) => {
        if(types.indexOf(type) > -1) {
            return new type(...args);
        }
    };
}

const BallFactory = generateFactory(["Nike", "Adidas"]);

document.querySelector("#CreateNikeBall").addEventListener("click", () => {
    return BallFactory(NikeBall, "BallName", 5, ["Ronaldo"]);
});

document.querySelector("#CreateAdidasBall").addEventListener("click", () => {
    return BallFactory(AdidasBall, "BallName", 4, ["Messi"]);
});