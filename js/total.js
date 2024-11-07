window.addEventListener("load" , function(){
    let basePrice = 0;
    let price = basePrice;
    const sideMenu = document.querySelectorAll(".checkbox");
    const total = document.querySelector("#total");
    const slelectedItem = document.querySelector("#slelectedItem");
    const selectAll = document.querySelector("#selectAll");
    total.value = `합계 : ${price.toLocaleString()}원`;
    //  개별 체크박스 클릭시 실행
    sideMenu.forEach((checkbox) => {
      // console.log(checkbox);
      checkbox.onclick = function () {
        let itemName = this.parentNode.textContent.trim();
        //   console.log(itemName);
        let itemPrice = parseInt(this.value);
        // console.log(itemPrice);
        if (this.checked) {
          price += itemPrice;
          // console.log(price);
          slelectedItem.innerHTML += `<div class ="sideItem">${itemName} : ${itemPrice.toLocaleString()}원 </div>  `;
        } else {
          price -= itemPrice;
          let sideItem = document.querySelectorAll(".sideItem");
          sideItem.forEach((item) => {
            // console.log(item);
            if (item.textContent.includes(itemName)) {
              item.remove();
            }
          });
        }
        total.value = `합계 : ${price.toLocaleString()}원`;
      };
    });
    // 전체선택 기능
    selectAll.onclick = function () {
      // 선택항목 및 가격 초기화
      // 선택항목 초기화
      slelectedItem.innerHTML = "";
      // 가격 초기화
      price = basePrice;
      // 모든 체크박스의 체크 상태를 먼저 초기화
      sideMenu.forEach((checkbox) => {
        // console.log(checked);
        checkbox.checked = false; //체크 해제
      });
      // 전체 선택 체크박스의 체크된 경우
      if (selectAll.checked) {
        sideMenu.forEach((checkbox) => {
          // console.log(checked);
          checkbox.checked = true; //모든 체크박스를 선택
          checkbox.dispatchEvent(new Event("click")); //클릭이벤 발생
        });
      }

      total.value = `합계 : ${price.toLocaleString()}원`;
    };

})