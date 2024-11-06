$(document).ready(() => {
  const form = $('#shippingForm');
  const paymentOptions = $('.payment-options input');
  const paymentMessage = $('.payment-message');
  const couponInput = $('#couponCode');
  const applyCouponBtn = $('#applyCoupon');
  const couponMessage = $('.coupon-message');
  const payButton = $('#payButton');

  // 폼 유효성 검사 및 결제 완료 처리
  payButton.on('click', () => {
    const name = $('input[name="name"]').val().trim();
    const address = $('input[name="address"]').val().trim();
    const email = $('input[name="email"]').val().trim();

    if (!name || !address || !email) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    if (confirm("결제가 완료되었습니다! 홈으로 돌아가시겠습니까?")) {
      window.location.href = "index.html";
    }
  });

  // 이메일 유효성 검사 함수
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // 결제 옵션 선택 시 메시지 표시
  paymentOptions.on('change', function() {
    paymentMessage.text(`${$(this).val()} 결제 방식이 선택되었습니다.`);
  });

  // 쿠폰 코드 적용
  applyCouponBtn.on('click', () => {
    const code = couponInput.val().trim();
    if (code === "정키펑키") {
      couponMessage.text("10% 할인이 적용되었습니다!").css("color", "green");
    } else {
      couponMessage.text("유효하지 않은 쿠폰 코드입니다.").css("color", "red");
    }
  });
});
