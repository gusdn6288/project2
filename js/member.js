document.getElementById("signupBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const nickname = document.getElementById("nickname").value;
    const pwd = document.getElementById("pwd").value;

    const data = { nickname, email, pwd };


        const response = await axios.post("http://localhost:8080/insertMember", data);
        
        alert(response.data); // 서버에서 받은 응답을 alert 창에 표시

    
});
