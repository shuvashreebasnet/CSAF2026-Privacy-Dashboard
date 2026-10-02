//the first chatgpt popup (only exists on the dashboard page)
const alwaysaskpopup = document.getElementById('always-ask-popup');

//only run this on the page that has the chatgpt popups
if (alwaysaskpopup) {
    //the other popups
    const readactionspopup = document.getElementById('read-actions-popup');
    const lowriskactionspopup = document.getElementById('low-risk-actions-popup');
    const allowallactionspopup = document.getElementById('allow-all-actions-popup');

    //popup buttons
    const alwaysaskallowbtn = document.getElementById('always-ask-allow-btn');
    const alwaysaskdontallowbtn = document.getElementById('always-ask-dont-allow-btn');
    const readactionsallowbtn = document.getElementById('read-actions-allow-btn');
    const readactionsdontallowbtn = document.getElementById('read-actions-dont-allow-btn');
    const lowriskallowbtn = document.getElementById('low-risk-actions-allow-btn');
    const lowriskdontallowbtn = document.getElementById('low-risk-actions-dont-allow-btn');
    const allowallallowbtn = document.getElementById('allow-all-actions-allow-btn');
    const allowalldontallowbtn = document.getElementById('allow-all-actions-dont-allow-btn');

    //how many times each permission was allowed
    //(still counted, ready for a Permission Use list later)
    let alwaysasknum = 0;
    let readactionsnum = 0;
    let lowrisknum = 0;
    let allowallnum = 0;

    //what each explanation screen says (based on the research doc)
    const alwaysaskexplain = {
        title: "Always Ask",
        verdict: "Recommended",
        text: "ChatGPT asks before reading app information or making changes. You stay in control of everything it does."
    };
    const readactionsexplain = {
        title: "Allow Read Actions",
        verdict: "Optional",
        text: "ChatGPT reads your information without asking, but still asks before making changes."
    };
    const lowriskexplain = {
        title: "Allow Low-Risk Actions",
        verdict: "Optional",
        text: "ChatGPT automatically approves low-risk actions. Higher-risk actions may need your confirmation or be denied."
    };
    const allowallexplain = {
        title: "Allow All Actions",
        verdict: "Optional",
        text: "ChatGPT can take supported actions without asking for approval. This carries elevated risk, which is why standard account and workspace settings don't offer it."
    };

    //the explanation screen and its parts
    const explainpopup = document.getElementById('explain-popup');
    const explaintitle = document.getElementById('explain-title');
    const explainverdict = document.getElementById('explain-verdict');
    const explaintext = document.getElementById('explain-text');
    const explainnextbtn = document.getElementById('explain-next-btn');

    //remembers which popup comes after the explanation
    let nextpopup = null;

    //fills in the explanation screen and opens it
    function showExplanation(explain, next) {
        explaintitle.textContent = explain.title;
        explainverdict.textContent = explain.verdict;
        explaintext.textContent = explain.text;
        nextpopup = next;
        //last screen says "Done", the others say "Next"
        explainnextbtn.textContent = next ? "Next" : "Done";
        explainpopup.showModal();
    }

    //when Next is clicked, close the explanation and open the next popup (if there is one)
    explainnextbtn.addEventListener("click", () => {
        explainpopup.close();
        if (nextpopup) {
            nextpopup.showModal();
        }
    });

    //popup 1 (always ask) → explanation → popup 2
    alwaysaskallowbtn.addEventListener("click", () => {
        alwaysasknum = alwaysasknum + 1;
        alwaysaskpopup.close();
        showExplanation(alwaysaskexplain, readactionspopup);
    });
    alwaysaskdontallowbtn.addEventListener("click", () => {
        alwaysaskpopup.close();
        showExplanation(alwaysaskexplain, readactionspopup);
    });

    //popup 2 (read actions) → explanation → popup 3
    readactionsallowbtn.addEventListener("click", () => {
        readactionsnum = readactionsnum + 1;
        readactionspopup.close();
        showExplanation(readactionsexplain, lowriskactionspopup);
    });
    readactionsdontallowbtn.addEventListener("click", () => {
        readactionspopup.close();
        showExplanation(readactionsexplain, lowriskactionspopup);
    });

    //popup 3 (low-risk actions) → explanation → popup 4
    lowriskallowbtn.addEventListener("click", () => {
        lowrisknum = lowrisknum + 1;
        lowriskactionspopup.close();
        showExplanation(lowriskexplain, allowallactionspopup);
    });
    lowriskdontallowbtn.addEventListener("click", () => {
        lowriskactionspopup.close();
        showExplanation(lowriskexplain, allowallactionspopup);
    });

    //popup 4 (all actions) → explanation → done
    allowallallowbtn.addEventListener("click", () => {
        allowallnum = allowallnum + 1;
        allowallactionspopup.close();
        showExplanation(allowallexplain, null);
    });
    allowalldontallowbtn.addEventListener("click", () => {
        allowallactionspopup.close();
        showExplanation(allowallexplain, null);
    });
}
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
	reviewPermissionsButton.addEventListener("click", () => {
		//ChatGPT plays the full permission sequence with explanations
		if (descriptionTitle.textContent === "ChatGPT") {
			alwaysaskpopup.showModal();
		} else {
			//every other app keeps the original single popup
			appModal.showModal();
		}
	});
}