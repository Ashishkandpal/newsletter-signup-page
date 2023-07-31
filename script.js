document.addEventListener("DOMContentLoaded", () => {
  const submitForm = () => {
    const email = document.querySelector("#email-input").value;
    document.querySelector("#email-input").value = "";
    const spanError = document.querySelector(".error-info");

    if (email === "") {
      spanError.textContent = "The field is left empty";
      return;
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      spanError.textContent = "The email address is not formatted correctly";
      return;
    }

    const para = document.querySelector(".success-page-desc");
    const descContent = `<p class="success-msg">A confirmation email has been sent to <span>${email}</span>. Please open it and click the button inside to confirm your subscription.</p>`;
    para.insertAdjacentHTML("afterbegin", descContent);
    document.querySelector(".main-component").style.display = "none";
    document.querySelector(".success-page").style.display = "flex";
  };
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", submitForm);

  const dismissBtn = document.querySelector(".dismiss-succes-modal");
  dismissBtn.addEventListener("click", () => {
    document.querySelector(".main-component").style.display = "flex";
    document.querySelector(".success-page").style.display = "none";
    const successPara = document.querySelector(".success-msg");
    successPara.textContent = "";
  });
});
