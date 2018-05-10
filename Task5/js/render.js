function Render() {}

Render.render = function (acсeptPlace, object, objectGenerator) {
    if(typeof objectGenerator.generate != "function"){
        throw new Error("objectGenerator must have generator fucntion");
    }
    var generatedObject = objectGenerator.generate(object);
    acсeptPlace.appendChild(generatedObject);
}