checkTriangleType = (side1, side2, side3) => {
    if (side1 === side2 && side2 === side3) return "Equilateral"
    if (side1 === side2 || side2 === side3 || side3 === side1) return "Isoceles"
    return "Scalene"
}

console.log(checkTriangleType(3,3,3))