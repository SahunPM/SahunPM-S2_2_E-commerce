
// Exercise 6
function validate() 
{
    let error = 0;

    // Get the input fields
    let fName = document.getElementById("fName");
    let fEmail = document.getElementById("fEmail");
    let fAddress = document.getElementById('fAddress');
    let fLastN = document.getElementById('fLastN');
    let fPassword = document.getElementById('fPassword');
    let fPhone = document.getElementById('fPhone');

    // Get the error elements
    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");  
    let errorAddress = document.getElementById('errorAddress');
    let errorLastN = document.getElementById('errorLastN');
    let errorPassword = document.getElementById('errorPassword');
    let errorPhone = document.getElementById('errorPhone');

    // Validate fields entered by the user: name, phone, password, and email

    // Nombre
    if (fName.value == "" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
        error++;
        fName.style.border = 'solid 2px red';
        errorName.style.display = 'block';
    }

    
    if (fEmail.value == "" || fEmail.value.length < 3 || !/^\S+@\S+\.\S+$/.test(fEmail.value)) {
        error++;
        fEmail.style.border = 'solid 2px red';
        errorEmail.style.display = 'block';
    }

    
    if (fAddress.value == "" || fAddress.value.length < 3) {
        error++;
        fAddress.style.border = 'solid 2px red';
        errorAddress.style.display = 'block';
    }

  
    if (fLastN.value == "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
        error++;
        fLastN.style.border = 'solid 2px red';
        errorLastN.style.display = 'block';
    }

   
    if (fPassword.value == "" || fPassword.value.length < 3 || !/^(?=.*[a-zA-Z])(?=.*\d).{3,}$/.test(fPassword.value)) {
        error++;
        fPassword.style.border = 'solid 2px red';
        errorPassword.style.display = 'block';
    }

  
    if (fPhone.value == "" || fPhone.value.length < 3 || !/^\d+$/.test(fPhone.value)) {
        error++;
        fPhone.style.border = 'solid 2px red';
        errorPhone.style.display = 'block';
    }
    
    if (error > 0) {
        alert("Error");
    } else {
        alert("OK");
    }
}
