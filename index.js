const btn = document.querySelector(".main__button");
const input = document.querySelector(".main__input");
const form = document.querySelector(".main__form");
const computerNumber = Math.floor(Math.random() * 20 + 1);
console.log(computerNumber);

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  play();
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  play();
});

function play() {
  const pleyerNumber = input.value;

  console.log(pleyerNumber);
  pleyerNumber < 1 || pleyerNumber > 20
    ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter a number from 1 to 20!",
      })
    : isNaN(pleyerNumber)
    ? Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter a number!",
      })
    : pleyerNumber < computerNumber
    ? Swal.fire({
        title: "Fail!",
        text: "Enter the number above!",
        imageUrl: "./cat.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      })
    : pleyerNumber > computerNumber
    ? Swal.fire({
        title: "Fail!",
        text: "Enter the number below!",
        imageUrl: "./cat.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      })
    : Swal.fire({
        position: "top-center",
        icon: "success",
        title: "You won!",
        showConfirmButton: false,
        timer: 1500,
      });
}
