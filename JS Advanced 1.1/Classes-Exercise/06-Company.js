class Company {
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || name === "" || !salary || salary < 0 || !position || position === "" || !department || department === "") {
            throw new Error("Invalid input!");
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name: name, salary: salary, position: position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDept = null;
        let highestAvgSalary = 0;

        for (let el in this.departments) {
            let employees = this.departments[el];
            let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
            let avgSalary = totalSalary / employees.length;

            if (avgSalary > highestAvgSalary) {
                highestAvgSalary = avgSalary;
                bestDept = el;
            }
        }

        let result = `Best Department is: ${bestDept}\n`;
        result += `Average salary: ${highestAvgSalary.toFixed(2)}\n`;

        this.departments[bestDept]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(emp => {
                result += `${emp.name} ${emp.salary} ${emp.position}\n`;
            });

        return result.trim();
    }
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());