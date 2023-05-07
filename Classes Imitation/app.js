
const box = document.getElementById('box');
const input = `<div class="box">
<div style="display: flex; flex-direction: column; gap: 15px;">
    <input class="input is-rounded" type="text" placeholder="User name" id='name'>
    <input class="input is-rounded" type="text" placeholder="Password" id='password'>
    <div class="control">
        <label class="radio">
        <input type="radio" name="role" value='admin'>
        Admin
        </label>
        <label class="radio">
        <input type="radio" name="role" value='user' checked>
        User
        </label>
    </div>
    <div>
        <button class="button is-info is-rounded" id='login'>Login</button>
        <button class="button is-info is-rounded" id='create'>Create</button>
    </div>
    </div>
</div>`

let idAccountUser = null
let idAccountAdmin = null
let idRole = null


const create = document.getElementById('create')



class User{
    constructor(name,password){
        this.name = name;
        this.password = password;
    }
    get getName(){
        return this.name
    }
    get getRole(){
        return 'User'
    }
    login(){
        let html = `<div class="box">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 class="title is-2">Welcome ${this.getRole} ${this.getName}</h2>
                    <button class="button is-danger is-rounded" id="logout">Logout</button>
                </div>
            </div>`;
            if(this.getRole === 'Admin') {
                html += `<div class="box">
                        ${this.getUsers()}
                        </div>`;
            }
            html += `<div class="box">
                <h2 class="title is-2" style="text-align: center;">Change name</h2>
                <h3 class="title is-3">Old name</h3>
                <input class="input is-rounded mb-3" type="text" placeholder="Old name" id='oldName'>
                <h3 class="title is-3">New name</h3>
                <input class="input is-rounded mb-3" type="text" placeholder="New name" id='newName'>
                <button class="button is-info is-rounded" id='changeName'>Change</button>
            </div>
            <div class="box">
                <h2 class="title is-2" style="text-align: center;">Change password</h2>
                <h3 class="title is-3">Old password</h3>
                <input class="input is-rounded mb-3" type="text" placeholder="Old password" id='oldPassword'>
                <h3 class="title is-3">New password</h3>
                <input class="input is-rounded mb-3" type="text" placeholder="New password" id='newPassword'>
                <button class="button is-info is-rounded" id='changePassword'>Change</button>
            </div>`;
        box.innerHTML = html
        document.getElementById('logout').addEventListener('click', ()=>{
            User.logout()
            idAccountUser = null
            idAccountAdmin = null
        })
        document.getElementById('changeName').addEventListener('click', ()=>{
            if(idRole === 0){
                users[idAccountUser].#changeNamePassword('Name')
                console.log(this.name);
            }else{
                admins[idAccountAdmin].#changeNamePassword('Name')
                console.log(this.name);
            }
        })
        document.getElementById('changePassword').addEventListener('click', ()=>{
            if(idRole === 0){
                users[idAccountUser].#changeNamePassword('Password')
                console.log(this.password);
            }else{
                admins[idAccountAdmin].#changeNamePassword('Password')
                console.log(this.password);
            }
        })
        return html;
    }
    static logout(){
        box.innerHTML = input
        const login = document.getElementById('login')
        const create = document.getElementById('create')
        
        const userName = document.getElementById('name')     
        const userPassword = document.getElementById('password')

        create.addEventListener('click', ()=>{
            const radio = String(document.querySelector("input[name='role']:checked").value)
            User.create(userName.value, userPassword.value, radio)
        })

        login.addEventListener('click', ()=> {
            const radio = String(document.querySelector("input[name='role']:checked").value)
            const foundUser = users.find(user => user.name == userName.value && user.password == userPassword.value)
            const foundAdmin = admins.find(user => user.name == userName.value && user.password == userPassword.value)  
            const noAccount = () =>{
                userName.value = ''
                userPassword.value = ''
                userName.classList.add('is-danger')
                userPassword.classList.add('is-danger')
                setTimeout(() => {
                    userName.classList.remove('is-danger')
                    userPassword.classList.remove('is-danger')
                }, 2000);
            }
            if(radio === 'user'){
                if(foundUser){
                    userName.value = ''
                    userPassword.value = ''
                    idAccountUser = users.indexOf(foundUser)
                    console.log(idAccountUser)
                    users[idAccountUser].login()
                    idRole = 0
                }else{
                    console.log('no');
                    noAccount()
                }
            }else{
                if(foundAdmin){  
                    userName.value = ''
                    userPassword.value = ''
                    idAccountAdmin = admins.indexOf(foundAdmin)
                    console.log(idAccountAdmin)
                    admins[idAccountAdmin].login()
                    idRole = 1
                }else{
                    console.log('no')
                    noAccount()
                }
            }
        })
    }
    static create(name , password, role){
        if(role == 'user'){
            const newUser = new User( name , password)
            users.push(newUser)
        }else{
            const newAdmin = new Admin( name , password)
            admins.push(newAdmin)
        }
        
    }
    #changeNamePassword(changeParam){
        const oldParam = document.getElementById(`old${changeParam}`)
        const newParam = document.getElementById(`new${changeParam}`)
        const noName = ()=>{
            oldParam.value = ''
            newParam.value = ''
            newParam.classList.add('is-danger')
            oldParam.classList.add('is-danger')
            setTimeout(() => {
                newParam.classList.remove('is-danger')
                oldParam.classList.remove('is-danger')
            }, 2000);
        }
       if(this.name == oldParam.value){
            this.name = newParam.value
            oldParam.value = ''
            newParam.value = ''
            this.login()
       }else if(this.password == oldParam.value){
            this.password = newParam.value
            oldParam.value = ''
            newParam.value = ''
       }else{
            noName()
       }
       
    }
}


class Admin extends User {
    constructor(name, password){
        super(name, password);
        this.users = users;
    }
    get getRole() {
        return 'Admin';
    }
    
    getUsers() {
        let html = '<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">\n<thead>\n<tr><th>Name</th><th>Password</th><th>Remove user</th></tr>\n</thead>\n<tbody>\n';
        let indexUser = 0;
      
        for (let user of this.users) {
          html += `<tr><td>${user.name}</td><td>${user.password}</td><td><button class="button is-info is-rounded" data-index="${indexUser}">Remove</button></td></tr>\n`;
          indexUser++;
        }
      
        html += '</tbody>\n</table>';
        this.removeUser()
        return html;
    }
    removeUser(){
        document.addEventListener('click', (event) => {
            if (event.target.matches('.button[data-index]')) {
              const index = event.target.dataset.index;
              this.users.splice(index, 1);
              this.login()
            }
          });
    }
}


const users = [ new User( 'name' ,1111), ]
const admins = [ new Admin( 'Admin', 2222),]

const admin = new Admin( 'Admin2', 2222)
User.logout()
console.log(admins);
User.create('Vlad is Love', 1234)
console.log(users);







