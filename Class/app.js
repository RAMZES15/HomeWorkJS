class circle {
    constructor(radius){
        this.radius = radius;
    }
    get radiusGet(){
        return this.radius;
    }
    get diameterGet(){
        return this.radius*2;
    }
    set radiusSet(radiusNew){
        if(radiusNew > 0){
            this.radius = radiusNew;
        } else{
            console.log('Радіус не може бути меншим за 0 або дорівнювати йому');
        }
    }
    getArea(){
        return Math.PI * this.radius ** 2;
    }
    getCircuit(){
        return Math.PI * this.diameterGet
    }

}
const circle0 = new circle(5);

document.getElementById('newRadiusBtn').addEventListener('click', ()=>{
    circle0.radiusSet = document.getElementById('newRadius').value
    document.getElementById('newRadius').value = '';
})
document.getElementById('radiusBtn').addEventListener('click', ()=>{
    document.getElementById('radius').innerText = circle0.radiusGet
})
document.getElementById('diameterBtn').addEventListener('click', ()=>{
    document.getElementById('diameter').innerText = circle0.diameterGet
})
document.getElementById('areaBtn').addEventListener('click', ()=>{
    document.getElementById('area').innerText = circle0.getArea()
})
document.getElementById('circuitBtn').addEventListener('click', ()=>{
    document.getElementById('circuit').innerText = circle0.getCircuit()
})

class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }
    getHtml() {
        let html = '<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">\n<thead>\n<tr><th>Name</th><th>Position</th><th>Salary</th></tr>\n</thead>\n<tbody>\n';
    
        for (let employee of this.employees) {
          html += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>\n`;
        }
    
        html += '</tbody>\n</table>';
        return html;
    }
}
const employees = [  new Employee('Степан Перенок', 'Манагер', 50000),  new Employee('Женіслав Святенко', 'КлінерМанагер', 25000),  new Employee('Святослав Загайкевич', 'Ведучий', 60000)];
const empTable = new EmpTable(employees);
document.getElementById('table').innerHTML = empTable.getHtml()

document.getElementById('employeeBtn').addEventListener('click', ()=>{
    const newEmployee = document.getElementById('employee').value.split(',').map(str => str.trim());
    document.getElementById('employee').value = "";
    employees.push( new Employee(newEmployee[0], newEmployee[1], newEmployee[2]));
    const empTable = new EmpTable(employees);
    document.getElementById('table').innerHTML = empTable.getHtml()
})
