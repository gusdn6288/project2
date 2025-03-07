window.onload = async () => {
    try {
        let response = await axios.get("http://localhost:8080/getAllProducts");
        console.log(response); // 응답 객체 확인

        let productList = response.data;
        let productListDiv = ''; // HTML 문자열 초기화

        productList.forEach((item) => {
            productListDiv += `<div class="card m-3" style="width: 10rem;">
                          <img src="img/${item.pimg}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <b class="card-title">${item.prodname}</b>
                            <p class="card-text text-danger">${item.price}원</p>
                            <a href="#" class="btn btn-outline-info">장바구니 담기</a>
                          </div>
                        </div>`;
          });

        // 📌 여기서 productListDiv의 내용을 실제 HTML 요소에 적용해야 함!
        document.getElementById("productListDiv").innerHTML = productListDiv;
    } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
    }
};


document.getElementById("signupBtn").addEventListener("click", async () => {
  const nickname = document.getElementById("nickname").value;
  const email = document.getElementById("email").value;
  const pwd = document.getElementById("pwd").value;
  const data = { nickname, email, pwd };
  let response = await fetch("insertMember", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  response = await response.json();
  console.log(response);
  if (response.msg === "ok") {
    console.log("ok");
    const modal = bootstrap.Modal.getInstance(document.getElementById("signupModal"));
    modal.hide();
    //hero icons
    document.getElementById("loginSpan").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</svg>`;
    document.getElementById("signupLi").remove();
  }
});