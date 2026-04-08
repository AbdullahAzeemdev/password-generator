let input = document.querySelector("#password");


let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

function generatePassword() {
    let password="";
    for(let i=0; i<12; i++){
        random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }
    input.value = password;
}

function copyPassword() {
    input.select();
    document.execCommand("copy");
    input.value = "";
    showAlert();
}
function showAlert() {
  Swal.fire({
    title: 'Copied!',
    text: 'Password copied to clipboard!',
    icon: 'success'
  });
}

