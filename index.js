
const form=document.getElementById("registerForm");

const fullNameInput=document.getElementById("fullName");
const citySelect=document.getElementById("city");

form.addEventListener('submit',function(e){
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const city = document.getElementById('city').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const terms = document.getElementById('terms').checked;

    const message=document.getElementById("message");

    if(fullName.length<2){
        message.innerHTML="İsim alanını doldurunuz.<br>";
    }

    if(!isValidEmail(email)){
        message.innerHTML+="Geçerli bir e-posta adresi yazınız.";
    }

    console.log(fullName,email,age,city,gender,terms);
});

function control(){
    form.classList.add("submited");
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

// fullNameInput.addEventListener("input",function(){
// console.log("Yazılan İsim:",fullNameInput.value);
// });

// citySelect.addEventListener("change",function(){
//     console.log("Seçilen Şehir:",citySelect.value);
// });
