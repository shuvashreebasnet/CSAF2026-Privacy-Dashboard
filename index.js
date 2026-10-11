//the first popup for each app (only exists on the dashboard page)
const alwaysaskpopup = document.getElementById('always-ask-popup');
const tiktokfacevoicepopup = document.getElementById('tiktok-face-voice-popup');
const instagramactivitypopup = document.getElementById('instagram-activity-popup');
const temupersonalinfopopup = document.getElementById('temu-personal-info-popup');
const whatsappphotospopup = document.getElementById('whatsapp-photos-popup');
const facebookactivitypopup = document.getElementById('facebook-activity-popup');

//only run this on the page that has the permission popups
if (alwaysaskpopup) {
    //the other chatgpt popups
    const readactionspopup = document.getElementById('read-actions-popup');
    const lowriskactionspopup = document.getElementById('low-risk-actions-popup');
    const allowallactionspopup = document.getElementById('allow-all-actions-popup');

    //chatgpt popup buttons
    const alwaysaskallowbtn = document.getElementById('always-ask-allow-btn');
    const alwaysaskdontallowbtn = document.getElementById('always-ask-dont-allow-btn');
    const readactionsallowbtn = document.getElementById('read-actions-allow-btn');
    const readactionsdontallowbtn = document.getElementById('read-actions-dont-allow-btn');
    const lowriskallowbtn = document.getElementById('low-risk-actions-allow-btn');
    const lowriskdontallowbtn = document.getElementById('low-risk-actions-dont-allow-btn');
    const allowallallowbtn = document.getElementById('allow-all-actions-allow-btn');
    const allowalldontallowbtn = document.getElementById('allow-all-actions-dont-allow-btn');

    //the other tiktok popups
    const tiktoklocationpopup = document.getElementById('tiktok-location-popup');
    const tiktokthirdpartypopup = document.getElementById('tiktok-third-party-popup');

    //tiktok popup buttons
    const tiktokfacevoiceallowbtn = document.getElementById('tiktok-face-voice-allow-btn');
    const tiktokfacevoicedontallowbtn = document.getElementById('tiktok-face-voice-dont-allow-btn');
    const tiktoklocationallowbtn = document.getElementById('tiktok-location-allow-btn');
    const tiktoklocationdontallowbtn = document.getElementById('tiktok-location-dont-allow-btn');
    const tiktokthirdpartyallowbtn = document.getElementById('tiktok-third-party-allow-btn');
    const tiktokthirdpartydontallowbtn = document.getElementById('tiktok-third-party-dont-allow-btn');

    //the other instagram popup
    const instagramadvertiserspopup = document.getElementById('instagram-advertisers-popup');

    //instagram popup buttons
    const instagramactivityallowbtn = document.getElementById('instagram-activity-allow-btn');
    const instagramactivitydontallowbtn = document.getElementById('instagram-activity-dont-allow-btn');
    const instagramadvertisersallowbtn = document.getElementById('instagram-advertisers-allow-btn');
    const instagramadvertisersdontallowbtn = document.getElementById('instagram-advertisers-dont-allow-btn');

    //the other temu popup
    const temusigninpopup = document.getElementById('temu-sign-in-popup');

    //temu popup buttons
    const temupersonalinfoallowbtn = document.getElementById('temu-personal-info-allow-btn');
    const temupersonalinfodontallowbtn = document.getElementById('temu-personal-info-dont-allow-btn');
    const temusigninallowbtn = document.getElementById('temu-sign-in-allow-btn');
    const temusignindontallowbtn = document.getElementById('temu-sign-in-dont-allow-btn');

    //whatsapp popup buttons
    const whatsappphotosallowbtn = document.getElementById('whatsapp-photos-allow-btn');
    const whatsappphotosdontallowbtn = document.getElementById('whatsapp-photos-dont-allow-btn');

    //the other facebook popup
    const facebookadvertiserspopup = document.getElementById('facebook-advertisers-popup');

    //facebook popup buttons
    const facebookactivityallowbtn = document.getElementById('facebook-activity-allow-btn');
    const facebookactivitydontallowbtn = document.getElementById('facebook-activity-dont-allow-btn');
    const facebookadvertisersallowbtn = document.getElementById('facebook-advertisers-allow-btn');
    const facebookadvertisersdontallowbtn = document.getElementById('facebook-advertisers-dont-allow-btn');

    //how many times each permission was allowed
    //(still counted, ready for a Permission Use list later)
    let alwaysasknum = 0;
    let readactionsnum = 0;
    let lowrisknum = 0;
    let allowallnum = 0;
    let tiktokfacevoicenum = 0;
    let tiktoklocationnum = 0;
    let tiktokthirdpartynum = 0;
    let instagramactivitynum = 0;
    let instagramadvertisersnum = 0;
    let temupersonalinfonum = 0;
    let temusigninnum = 0;
    let whatsappphotosnum = 0;
    let facebookactivitynum = 0;
    let facebookadvertisersnum = 0;

    //what each chatgpt explanation screen says (based on the research doc)
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

    //what each tiktok explanation screen says (based on the research doc)
    const tiktokfacevoiceexplain = {
        title: "Face and Voice",
        verdict: "Does this make sense? No",
        text: "TikTok analyzes faces and voices to fit filters and create avatars, but also to recommend content. If you confirm your age with a selfie, it's sent to Yoti, a third-party company. That's a lot for a social media app."
    };
    const tiktoklocationexplain = {
        title: "Location",
        verdict: "Does this make sense? No",
        text: "Location helps TikTok suggest nearby content and location tags, but it's also used to recommend ads. It has to be turned on in both your device settings and TikTok's settings."
    };
    const tiktokthirdpartyexplain = {
        title: "Third-Party Apps",
        verdict: "Does this make sense? No",
        text: "Apps you log in to with TikTok can see your profile picture, name, and public content, plus an ID linked to your account. You can opt out of sharing some of this before connecting."
    };

    //what each instagram explanation screen says (based on the research doc)
    const instagramactivityexplain = {
        title: "Collected Activity and Information",
        verdict: "Does this make sense? No",
        text: "Instagram collects what you post, what you view, and what you do in its in-app browser. Social media is meant to keep people updated on your life, but this data is used to show you ads."
    };
    const instagramadvertisersexplain = {
        title: "Share Contact Info with Advertisers",
        verdict: "Does this make sense? No",
        text: "Advertisers get reports on who saw and engaged with their ads. Information that identifies you is only shared if you give permission, like sending an advertiser a form."
    };

    //what each temu explanation screen says (based on the research doc)
    const temupersonalinfoexplain = {
        title: "Personal Information and Device Data",
        verdict: "Does this make sense? Yes",
        text: "As a store, Temu needs your purchase and delivery details. But it also automatically collects your device model, operating system, and internet service, and gets information from advertising partners, which can feel invasive."
    };
    const temusigninexplain = {
        title: "Sign In with Facebook or Google",
        verdict: "Does this make sense? Yes",
        text: "Signing in with another account is convenient, but it gives Temu your profile photo, user name, and email from that account."
    };

    //what the whatsapp explanation screen says (based on the research doc)
    const whatsappphotosexplain = {
        title: "Photo and Video",
        verdict: "Does this make sense? Yes",
        text: "WhatsApp only asks for your camera roll when you want to share a photo or video. Your personal messages and calls are end-to-end encrypted, so they stay between the people in the conversation."
    };

    //what each facebook explanation screen says (same reasoning as instagram in the research doc)
    const facebookactivityexplain = {
        title: "Collected Activity and Information",
        verdict: "Does this make sense? No",
        text: "Facebook collects what you post, what you view, and what you do in its in-app browser. Social media is meant to keep people updated on your life, but this data is used to show you ads."
    };
    const facebookadvertisersexplain = {
        title: "Share Contact Info with Advertisers",
        verdict: "Does this make sense? No",
        text: "Advertisers get reports on who saw and engaged with their ads. Information that identifies you is only shared if you give permission, like sending an advertiser a form."
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

    //chatgpt popup 1 (always ask) → explanation → popup 2
    alwaysaskallowbtn.addEventListener("click", () => {
        alwaysasknum = alwaysasknum + 1;
        alwaysaskpopup.close();
        showExplanation(alwaysaskexplain, readactionspopup);
    });
    alwaysaskdontallowbtn.addEventListener("click", () => {
        alwaysaskpopup.close();
        showExplanation(alwaysaskexplain, readactionspopup);
    });

    //chatgpt popup 2 (read actions) → explanation → popup 3
    readactionsallowbtn.addEventListener("click", () => {
        readactionsnum = readactionsnum + 1;
        readactionspopup.close();
        showExplanation(readactionsexplain, lowriskactionspopup);
    });
    readactionsdontallowbtn.addEventListener("click", () => {
        readactionspopup.close();
        showExplanation(readactionsexplain, lowriskactionspopup);
    });

    //chatgpt popup 3 (low-risk actions) → explanation → popup 4
    lowriskallowbtn.addEventListener("click", () => {
        lowrisknum = lowrisknum + 1;
        lowriskactionspopup.close();
        showExplanation(lowriskexplain, allowallactionspopup);
    });
    lowriskdontallowbtn.addEventListener("click", () => {
        lowriskactionspopup.close();
        showExplanation(lowriskexplain, allowallactionspopup);
    });

    //chatgpt popup 4 (all actions) → explanation → done
    allowallallowbtn.addEventListener("click", () => {
        allowallnum = allowallnum + 1;
        allowallactionspopup.close();
        showExplanation(allowallexplain, null);
    });
    allowalldontallowbtn.addEventListener("click", () => {
        allowallactionspopup.close();
        showExplanation(allowallexplain, null);
    });

    //tiktok popup 1 (face and voice) → explanation → popup 2
    tiktokfacevoiceallowbtn.addEventListener("click", () => {
        tiktokfacevoicenum = tiktokfacevoicenum + 1;
        tiktokfacevoicepopup.close();
        showExplanation(tiktokfacevoiceexplain, tiktoklocationpopup);
    });
    tiktokfacevoicedontallowbtn.addEventListener("click", () => {
        tiktokfacevoicepopup.close();
        showExplanation(tiktokfacevoiceexplain, tiktoklocationpopup);
    });

    //tiktok popup 2 (location) → explanation → popup 3
    tiktoklocationallowbtn.addEventListener("click", () => {
        tiktoklocationnum = tiktoklocationnum + 1;
        tiktoklocationpopup.close();
        showExplanation(tiktoklocationexplain, tiktokthirdpartypopup);
    });
    tiktoklocationdontallowbtn.addEventListener("click", () => {
        tiktoklocationpopup.close();
        showExplanation(tiktoklocationexplain, tiktokthirdpartypopup);
    });

    //tiktok popup 3 (third-party apps) → explanation → done
    tiktokthirdpartyallowbtn.addEventListener("click", () => {
        tiktokthirdpartynum = tiktokthirdpartynum + 1;
        tiktokthirdpartypopup.close();
        showExplanation(tiktokthirdpartyexplain, null);
    });
    tiktokthirdpartydontallowbtn.addEventListener("click", () => {
        tiktokthirdpartypopup.close();
        showExplanation(tiktokthirdpartyexplain, null);
    });

    //instagram popup 1 (collected activity) → explanation → popup 2
    instagramactivityallowbtn.addEventListener("click", () => {
        instagramactivitynum = instagramactivitynum + 1;
        instagramactivitypopup.close();
        showExplanation(instagramactivityexplain, instagramadvertiserspopup);
    });
    instagramactivitydontallowbtn.addEventListener("click", () => {
        instagramactivitypopup.close();
        showExplanation(instagramactivityexplain, instagramadvertiserspopup);
    });

    //instagram popup 2 (advertisers) → explanation → done
    instagramadvertisersallowbtn.addEventListener("click", () => {
        instagramadvertisersnum = instagramadvertisersnum + 1;
        instagramadvertiserspopup.close();
        showExplanation(instagramadvertisersexplain, null);
    });
    instagramadvertisersdontallowbtn.addEventListener("click", () => {
        instagramadvertiserspopup.close();
        showExplanation(instagramadvertisersexplain, null);
    });

    //temu popup 1 (personal information) → explanation → popup 2
    temupersonalinfoallowbtn.addEventListener("click", () => {
        temupersonalinfonum = temupersonalinfonum + 1;
        temupersonalinfopopup.close();
        showExplanation(temupersonalinfoexplain, temusigninpopup);
    });
    temupersonalinfodontallowbtn.addEventListener("click", () => {
        temupersonalinfopopup.close();
        showExplanation(temupersonalinfoexplain, temusigninpopup);
    });

    //temu popup 2 (sign in with facebook or google) → explanation → done
    temusigninallowbtn.addEventListener("click", () => {
        temusigninnum = temusigninnum + 1;
        temusigninpopup.close();
        showExplanation(temusigninexplain, null);
    });
    temusignindontallowbtn.addEventListener("click", () => {
        temusigninpopup.close();
        showExplanation(temusigninexplain, null);
    });

    //whatsapp popup 1 (photo and video) → explanation → done
    whatsappphotosallowbtn.addEventListener("click", () => {
        whatsappphotosnum = whatsappphotosnum + 1;
        whatsappphotospopup.close();
        showExplanation(whatsappphotosexplain, null);
    });
    whatsappphotosdontallowbtn.addEventListener("click", () => {
        whatsappphotospopup.close();
        showExplanation(whatsappphotosexplain, null);
    });

    //facebook popup 1 (collected activity) → explanation → popup 2
    facebookactivityallowbtn.addEventListener("click", () => {
        facebookactivitynum = facebookactivitynum + 1;
        facebookactivitypopup.close();
        showExplanation(facebookactivityexplain, facebookadvertiserspopup);
    });
    facebookactivitydontallowbtn.addEventListener("click", () => {
        facebookactivitypopup.close();
        showExplanation(facebookactivityexplain, facebookadvertiserspopup);
    });

    //facebook popup 2 (advertisers) → explanation → done
    facebookadvertisersallowbtn.addEventListener("click", () => {
        facebookadvertisersnum = facebookadvertisersnum + 1;
        facebookadvertiserspopup.close();
        showExplanation(facebookadvertisersexplain, null);
    });
    facebookadvertisersdontallowbtn.addEventListener("click", () => {
        facebookadvertiserspopup.close();
        showExplanation(facebookadvertisersexplain, null);
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
		permissions: [
			{
				permission: "Face and Voice",
				description: '"By uploading videos or photos, using effects and filters, creating personalized content based on your face or voice, going LIVE on TikTok, or using facial age estimation, you agree to your face and voice information being used for these purposes."',
				label: "Optional"
			},
			{
				permission: "Location",
				description: "TikTok uses your location to recommend nearby content, suggest location tags for your posts, and recommend relevant ads. It must be turned on in both your device settings and TikTok's settings.",
				label: "Optional"
			},
			{
				permission: "Third-Party Apps",
				description: "Apps you log in to with TikTok may receive your profile picture, profile name, and public content. You can opt out of sharing some of this before connecting.",
				label: "Optional"
			}
		]
	},
	instagram: {
        image: "./assets/instagram.png",
		name: "Instagram",
		permissions: [
			{
				permission: "Collected Activity and Information",
				description: "Created content including posts, comments, camera roll content, and audio are used for masks, filters, avatars, effects, and ads.",
				label: "Optional"
			},
			{
				permission: "Share Contact Info with Advertisers",
				description: "Advertisers only get information that identifies you if you give permission, such as by sending them a form with your contact information.",
				label: "Optional"
			}
		]
	},
	temu: {
        image: "./assets/temu.png",
		name: "Temu",
		permissions: [
			{
				permission: "Personal Information and Device Data",
				description: '"We receive and collect your personal information from our marketing and advertising partners...we may automatically collect information about you, your computer, or mobile device, your interactions with the Service, and our communications over time."',
				label: "Optional"
			},
			{
				permission: "Sign In with Facebook or Google",
				description: "If you sign in with Facebook or Google, Temu receives your profile photo, user name, and the email address linked to that account.",
				label: "Optional"
			}
		]
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
		permissions: [
			{
				permission: "Collected Activity and Information",
				description: "Created content including posts, comments, camera roll content, and audio are used for masks, filters, avatars, effects, and ads.",
				label: "Optional"
			},
			{
				permission: "Share Contact Info with Advertisers",
				description: "Advertisers only get information that identifies you if you give permission, such as by sending them a form with your contact information.",
				label: "Optional"
			}
		]
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
		//each app plays its own permission sequence with explanations
		if (descriptionTitle.textContent === "ChatGPT") {
			alwaysaskpopup.showModal();
		} else if (descriptionTitle.textContent === "TikTok") {
			tiktokfacevoicepopup.showModal();
		} else if (descriptionTitle.textContent === "Instagram") {
			instagramactivitypopup.showModal();
		} else if (descriptionTitle.textContent === "Temu") {
			temupersonalinfopopup.showModal();
		} else if (descriptionTitle.textContent === "WhatsApp") {
			whatsappphotospopup.showModal();
		} else if (descriptionTitle.textContent === "Facebook") {
			facebookactivitypopup.showModal();
		} else {
			//any app without a sequence keeps the original single popup
			appModal.showModal();
		}
	});
}