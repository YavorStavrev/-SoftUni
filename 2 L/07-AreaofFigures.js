function Figures(input){
    let figure = input[0];
    let area = 0;
    if(figure === "square"){
        let a = Number(input[1]);
        area = a * a;
    }else if(figure === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    }else if(figure === "circle"){
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r,2);
    }else if(figure === "triangle"){
        let a = Number(input[1]);
        let hA = Number(input[2]);
        area = (a * hA) / 2;
    }
    console.log(area.toFixed(3));
}
Figures(["triangle", "5", ""]);