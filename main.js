// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const clickEmptyHeart = async (event) => {
	try {
		const response = await mimicServerCall();
		if (event.target.classList.contains("activated-heart")) {
			event.target.innerHTML = EMPTY_HEART;
			event.target.classList.remove("activated-heart");
		} else {
			event.target.innerHTML = FULL_HEART;
			event.target.classList.add("activated-heart");
		}
	} catch (error) {
		const errorModal = document.getElementById("modal");
		errorModal.classList.remove("hidden");
		const modalMessage = document.getElementById("modal-message");
		modalMessage.innerHTML = error;
		setTimeout(() => errorModal.classList.add("hidden"), 3000);
	}
};

Array.from(document.getElementsByClassName("like-glyph")).forEach(
	(heartElement) => {
		heartElement.addEventListener("click", clickEmptyHeart);
	}
);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < 0.2;
			if (isRandomFailure) {
				reject("Random server error. Try again.");
			} else {
				resolve("Pretend remote server notified of action!");
			}
		}, 300);
	});
}
