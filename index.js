const appDescriptions = {
	chatgpt: {
        image: "./assets/chatGPT.png",
		name: "ChatGPT",
		description: "ChatGPT is a generative artificial intelligence chatbot developed by OpenAI that uses natural language processing to engage in human-like, conversational dialogue. Review which permissions ChatGPT can use on your device."
	},
	tiktok: {
        image: "./assets/tiktok.png",
		name: "TikTok",
		description: "Tiktok is a social media platform that hosts user-created short-form content. Review which permissions TikTok can use on your device."
	},
	instagram: {
        image: "./assets/instagram.png",
		name: "Instagram",
		description: "Instagram is a social media platform that hosts user-created content. Posts can be shared with specific users or publicly. Review which permissions Instagram can use on your device."
	},
	temu: {
        image: "./assets/temu.png",
		name: "Temu",
		description: "Temu is a online marketplace that sells consumer goods at low prices. Review which permissions Temu can use on your device."
	},
	whatsapp: {
        image: "./assets/whatsapp.png",
		name: "WhatsApp",
		description: "Whatsapp is a communication platform that allows for instant messaging, calls, and photo and video sharing. Review which permissions WhatsApp can use on your device."
	},
	facebook: {
        image: "./assets/facebook.png",
		name: "Facebook",
		description: "Facebook is a social media platform that allows for content-sharing and communication between people. Review which permissions Facebook can use on your device."
    }
};

const descriptionTitle = document.querySelector("#description-title");
const descriptionText = document.querySelector("#description-text");
const descriptionImage = document.querySelector("#description-image");
const appImages = document.querySelectorAll(".apps-container img[data-app]");

function showAppDescription(image) {
	const app = appDescriptions[image.dataset.app];

	if (!app) {
		return;
	}

	descriptionImage.src = app.image;
	descriptionImage.alt = `${app.name} app icon`;
	descriptionImage.hidden = false;
    descriptionTitle.textContent = app.name;
	descriptionText.textContent = app.description;
}

appImages.forEach((image) => {
	image.addEventListener("click", () => showAppDescription(image));
	image.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			showAppDescription(image);
		}
	});
});
