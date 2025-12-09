import { saveStudent } from "./index.js";
console.log("hel");
const student = JSON.parse(localStorage.getItem('students'));
console.log(student);
const users = Object(student);



  // Update these with your credentials
        // const adminUsername = "admin";
        // const adminPassword = "admin123";


        // Login functionality
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const error = document.getElementById('error');

            const verifyUser = users.find(user => user.fullName === username && user.matricule === password)

            if (verifyUser) {
                alert(`Welcome backe ${username}`)
                window.location.href = 'home.html'
                console.log('you are a student')
                
            } else {
                alert('wrong credentials');
            }
            
        });
const signUp = ()=>{
    const signUpBtn = document.getElementById('signUp')
        
        signUpBtn.addEventListener('click', (event)=>{
            event.preventDefault()
            document.getElementById('loginPage').style.display = 'none'
            document.getElementById('regForm').style.display = 'block'
        })
        
}
document.getElementById('loginInstead').addEventListener('click', (event)=>{
    window.location.href= 'index.html'
})

//signUP button function call
  signUp()   