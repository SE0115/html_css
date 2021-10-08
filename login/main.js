window.onload = () => {
    this.sessionStorage.setItem("username", "sieun");
    this.sessionStorage.setItem("password", "1234");
}

let input = document.getElementsByTagName('input');
let login = document.getElementById('login');
let form = document.querySelector('form');
form.onsubmit = () => {return false};

login.onclick = () => {
    if(input[0].value !== "" && input[1].value !== "") {
        if(input[0].value === sessionStorage.getItem('username') 
            && input[1].value === sessionStorage.getItem('password')) {
                // form.onsubmit = () => {return true};
                alert('로그인 성공!');
        }
        else {
            if(input[0].value !== sessionStorage.getItem('username')){
                input[0].nextElementSibling.textContent = "아이디를 다시 확인해주세요 :-(";
                setTimeout(() => {
                    input[0].nextElementSibling.textContent="";
                }, 2000);
            }
            if(input[1].value !== sessionStorage.getItem('password')){
                input[1].nextElementSibling.textContent = "비밀번호가 틀렸어요 :-(";
                setTimeout(() => {
                    input[1].nextElementSibling.textContent="";
                }, 2000);
            }
        }
    }
    else {
        if(input[0].value === ""){
            input[0].nextElementSibling.textContent = "아이디를 입력하세요 :-)";
            setTimeout(() => {
                input[0].nextElementSibling.textContent="";
            }, 2000);
        }
        if(input[1].value === ""){
            input[1].nextElementSibling.textContent = "비밀번호를 입력하세요 :-)";
            setTimeout(() => {
                input[1].nextElementSibling.textContent="";
            }, 2000);
        }
    }
}
