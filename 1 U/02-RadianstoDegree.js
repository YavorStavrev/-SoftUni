function RadianstoDegree(input) {
    let radian = Number(input[0]);
    let radius = radian * 180 / Math.PI;
    console.log(radius);
}
RadianstoDegree(["3.1416"]);