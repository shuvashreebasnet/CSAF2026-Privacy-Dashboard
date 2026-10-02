//contains the chatgpt button
const chatgptBtn = document.getElementById('chatgpt-btn');

//once button is found (in the dashboard page)
if (chatgptBtn) {
    //the info box and open app button
    const chatgptinfo = document.getElementById('chatgpt-info');
    const openappbtn = document.getElementById('open-app-btn');

    //popups
    const alwaysaskpopup = document.getElementById('always-ask-popup');
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

    //permission use counts (the number shown on the page)
    const alwaysaskcount = document.getElementById('always-ask-count');
    const readactionscount = document.getElementById('read-actions-count');
    const lowriskcount = document.getElementById('low-risk-actions-count');
    const allowallcount = document.getElementById('allow-all-actions-count');

    //how many times each permission was allowed (starts at 0)
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

    //once the chatgpt button is clicked, show the info and hide it when clicked again
    chatgptBtn.addEventListener("click", () => {
        chatgptinfo.hidden = !chatgptinfo.hidden;
    });

    //once open app button is clicked, show the first popup
    openappbtn.addEventListener("click", () => {
        alwaysaskpopup.showModal();
    });

    //popup 1 (always ask) → explanation → popup 2
    alwaysaskallowbtn.addEventListener("click", () => {
        alwaysasknum = alwaysasknum + 1;           //add 1 to the count
        alwaysaskcount.textContent = alwaysasknum; //show the new count
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
        readactionscount.textContent = readactionsnum;
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
        lowriskcount.textContent = lowrisknum;
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
        allowallcount.textContent = allowallnum;
        allowallactionspopup.close();
        showExplanation(allowallexplain, null);
    });
    allowalldontallowbtn.addEventListener("click", () => {
        allowallactionspopup.close();
        showExplanation(allowallexplain, null);
    });
}