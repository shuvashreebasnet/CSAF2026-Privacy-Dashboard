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

// Shared per-app permission lists power the dashboard popup and permission cards.
const appPermissions = {
	chatgpt: {
        image: "./assets/chatGPT.png",
		name: "ChatGPT",
		permissions: [
			{
				permission: "Always Ask",
				description: "ChatGPT requests your approval before reading connected app information or making changes. This keeps you in control while still allowing you to approve individual actions.",
				label: "Recommended"
			},
			{
				permission: "Allow Read Actions",
				description: "ChatGPT can read information from connected apps without asking each time. It still requests approval before making changes.",
				label: "Optional"
			},
			{
				permission: "Allow Low-Risk Actions",
				description: "ChatGPT can complete actions considered low risk automatically. Other actions may still require your approval.",
				label: "Optional"
			},
			{
				permission: "Allow All Actions",
				description: "ChatGPT can read information and make supported changes without asking each time. This is convenient, but gives the app broader access to connected accounts.",
				label: "Optional"
			}
		]
	},
	tiktok: {
        image: "./assets/tiktok.png",
		name: "TikTok",
		permissions: [{
			permission: "Face and Voice",
			description: '"By uploading videos or photos, using effects and filters, creating personalized content based on your face or voice, going LIVE on TikTok, or using facial age estimation, you agree to your face and voice information being used for these purposes."',
			label: "Optional"
		}]
	},
	instagram: {
        image: "./assets/instagram.png",
		name: "Instagram",
		permissions: [{
			permission: "Collected Activity and Information",
			description: "Created content including posts, comments, camera roll content, and audio are used for masks, filters, avatars, effects, and ads.",
			label: "Optional"
		}]
	},
	temu: {
        image: "./assets/temu.png",
		name: "Temu",
		permissions: [{
			permission: "Personal Information and Device Data",
			description: '"We receive and collect your personal information from our marketing and advertising partners...we may automatically collect information about you, your computer, or mobile device, your interactions with the Service, and our communications over time."',
			label: "Optional"
		}]
	},
	whatsapp: {
        image: "./assets/whatsapp.png",
		name: "WhatsApp",
		permissions: [{
			permission: "Photo and Video",
			description: "Requests permissions if the user wants to access their camera roll.",
			label: "Recommended"
		}]
	},
	facebook: {
        image: "./assets/facebook.png",
		name: "Facebook",
		permissions: [{
			permission: "Collected Activity and Information",
			description: "Created content including posts, comments, camera roll content, and audio are used for masks, filters, avatars, effects, and ads.",
			label: "Optional"
		}]
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
const permissionAppSelect = document.querySelector("#permission-app-select");
const selectedAppName = document.querySelector("#selected-app-name");
const permissionOptions = document.querySelector("#permission-options");
const descriptionSizeInputs = document.querySelectorAll('input[name="description-size"]');
const whyPermissionsPage = document.querySelector(".why-permissions-page");

function showAppDescription(image) {
    const app = appDescriptions[image.dataset.app];
    const permissions = appPermissions[image.dataset.app];
	// The dashboard popup shows the first permission in the selected app's list.
	const firstPermission = permissions?.permissions[0];

	if (!app || !permissions || !firstPermission) {
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
	modalTitle.textContent = `${permissions.name} would like to access the following: ${firstPermission.permission}`;
	modalDescription.textContent = firstPermission.description;
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

// Render the selected app's permission records as cards.
function renderPermissionOptions(appKey) {
	const app = appPermissions[appKey];

	if (!app || !permissionOptions || !selectedAppName) {
		return;
	}

	selectedAppName.textContent = app.name;
	permissionOptions.setAttribute("aria-label", `${app.name} permission levels`);
	permissionOptions.replaceChildren();

	app.permissions.forEach((permission) => {
		const card = document.createElement("article");
		card.classList.add("permission-option");
		if (permission.label === "Recommended") {
			card.classList.add("recommended-option");
		}

		const mark = document.createElement("span");
		mark.classList.add("permission-mark");
		mark.setAttribute("aria-hidden", "true");

		const copy = document.createElement("div");
		copy.classList.add("permission-copy");

		const title = document.createElement("h3");
		title.textContent = permission.permission;

		const description = document.createElement("p");
		description.textContent = permission.description;

		const label = document.createElement("span");
		label.classList.add("permission-label");
		label.textContent = permission.label;

		copy.append(title, description, label);
		card.append(mark, copy);
		permissionOptions.append(card);
	});
}

// Initialize the default app and update cards when the selection changes.
if (permissionAppSelect) {
	permissionAppSelect.addEventListener("change", () => {
		renderPermissionOptions(permissionAppSelect.value);
	});
	renderPermissionOptions(permissionAppSelect.value);
}

// Apply the selected size to every permission description and set the default.
descriptionSizeInputs.forEach((input) => {
	input.addEventListener("change", () => {
		if (input.checked && whyPermissionsPage) {
			whyPermissionsPage.style.setProperty("--permission-description-size", `${input.value}px`);
		}
	});
});

const initialDescriptionSize = document.querySelector('input[name="description-size"]:checked');
if (initialDescriptionSize && whyPermissionsPage) {
	whyPermissionsPage.style.setProperty("--permission-description-size", `${initialDescriptionSize.value}px`);
}

// Bind the popup control only on pages that include the dashboard modal.
if (reviewPermissionsButton && appModal) {
	reviewPermissionsButton.addEventListener("click", () => appModal.showModal());
}
