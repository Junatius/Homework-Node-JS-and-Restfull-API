exports.squareAreaAndPerimeter = function(squareSide) {
    const area = squareSide ** 2;
    const perimeter = squareSide * 4;
    console.log(
        `A square with the length of ${squareSide} cm has an Area of ${area} cm² and a perimeter of ${perimeter} cm.`
    )
}

exports.rectangleAreaAndPerimeter = function(rectangleLength, rectangleWidth) {
    const area = rectangleWidth * rectangleLength;
    const perimeter = (2*rectangleWidth) + (2*rectangleLength);
    console.log(
        `A rectangle with a length of ${rectangleLength} and a width of ${rectangleWidth} cm 
        has an Area of ${area} cm² and a perimeter of ${perimeter} cm.\n`
    )
}