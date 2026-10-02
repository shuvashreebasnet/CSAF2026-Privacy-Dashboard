/* for the app descriptions when a user clicks an app icon */
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

/* for the modal popups asking to allow/not allow certain app permissions*/
const appPermissions = {
	chatgpt: {
        image: "./assets/chatGPT.png",
		name: "ChatGPT",
		permission: "Always Ask",
		description: "ChatGPT asks before reading app information or making changes."
	},
	tiktok: {
        image: "./assets/tiktok.png",
		name: "TikTok",
		permission: "Face and Voice",
		description: '"By uploading videos or photos, using effects and filters, creating personalized content based on your face or voice, going LIVE on TikTok, or using facial age estimation, you agree to your face and voice information being used for these purposes."'
	},
	instagram: {
        image: "./assets/instagram.png",
		name: "Instagram",
		permission: "Collected Activity and Information",
		description: "Created content including posts, comments, camera roll content, and audio are used for masks, filters, avatars, effecs, and ads."
	},
	temu: {
        image: "./assets/temu.png",
		name: "Temu",
		permission: "Personal Information and Device Data",
		description: '"We receive and collect your personal information from our marketing and advertising partners...we may automatically collect information about you, your computer, or mobile device, your interactions with the Service, and our communications over time."'
	},
	whatsapp: {
        image: "./assets/whatsapp.png",
		name: "WhatsApp",
		permission: "Photo and Video",
		description: "Requests permissions if the user wants to access their camera roll."
	},
	facebook: {
        image: "./assets/facebook.png",
		name: "Facebook",
		permission: "Collected Activity and Information",
		description: "Created content including posts, comments, camera roll content, and audio are used for masks, filters, avatars, effecs, and ads."
    }
};

const descriptionTitle = document.querySelector("#description-title");
const descriptionText = document.querySelector("#description-text");
const descriptionImage = document.querySelector("#description-image");
// References used to update and control the app details dialog.
const reviewPermissionsButton = document.querySelector("#review-permissions-btn");
const appModal = document.querySelector("#app-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const appImages = document.querySelectorAll(".apps-container img[data-app]");

function showAppDescription(image) {
    const app = appDescriptions[image.dataset.app];
    const permissions = appPermissions[image.dataset.app];

    if (!app || !permissions) {
        return;
    }

    descriptionImage.src = app.image;
    descriptionImage.alt = `${app.name} app icon`;
    descriptionImage.hidden = false;
    descriptionTitle.textContent = app.name;
    descriptionText.textContent = app.description;
    reviewPermissionsButton.hidden = false;

    modalImage.src = permissions.image;
    modalImage.alt = `${permissions.name} app icon`;
    modalTitle.textContent = `${permissions.name} would like to access the following: ${permissions.permission}`;
    modalDescription.textContent = permissions.description;
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

// Open the permission dialog on request and close it with its button.
reviewPermissionsButton.addEventListener("click", () => appModal.showModal());
