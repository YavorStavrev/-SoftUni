function Cone(r, h){
    let volume = 1/ 3 * 3.14159265359 * r * r * h;
    let s = Math.sqrt(r * r + h * h);
    let l = 3.14159265359 * r * s;
    let b = 3.14159265359 * r * r;
    let totalSurface = l + b;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`);
}
Cone(3, 5);