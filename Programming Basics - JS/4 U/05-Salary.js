function Salary(input){
    let opentabs = Number(input[0]);
    let salary = Number(input[1]);
    for (let i = 2; i <= opentabs + 1; i++){
        let site = input[i];
        switch(site){
            case 'Facebook':salary -= 150;break;
            case 'Instagram':salary -= 100;break;
            case 'Reddit':salary -= 50;break;
        }
        if(salary <= 0){
            console.log(`You have lost your salary.`);
            return;
        }
    }
   console.log(salary);
}
Salary(['2', '750', 'Facebook', 'Facebook']);
