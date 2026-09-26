//contains the chatgpt button
const chatgptBtn = document.getElementById('chatgpt-btn');

//once button is found (in the dashboard page)
if(chatgptBtn) {
    //store each button on the page when the app is clicked
    const chatgptinfo = document.getElementById('chatgpt-info');
    const openappbtn = document.getElementById('open-app-btn');

    //popups 
    const alwaysaskpopup = document.getElementById('always-ask-popup');
    const readactionspopup = document.getElementById('read-actions-popup');
    const lowriskactionspopup = document.getElementById('low-risk-actions-popup');
    const allowallactionspopup = document.getElementById('allow-all-actions-popup');

    //popup buttons
    const alwaysaskallowbtn = document.getElementById('always-ask-allow-btn');
    const alwaysaskdontaskbtn = document.getElementById('always-ask-dont-ask-btn');
    const readactionsallowbtn = document.getElementById('read-actions-allow-btn');
    const readactionsdontallowbtn = document.getElementById('read-actions-dont-allow-btn');
    const lowriskallowbtn = document.getElementById('low-risk-actions-allow-btn');
    const lowriskdontallowbtn = document.getElementById('low-risk-actions-dont-allow-btn');
    const allowallallowbtn = document.getElementById('allow-all-actions-allow-btn');
    const allowalldontallowbtn = document.getElementById('allow-all-actions-dont-allow-btn');

    //once the chatgpt button is clicked, show the info and hide it when clicked again
    chatgptBtn.addEventListener("click", () => {
        chatgptinfo.hidden = !chatgptinfo.hidden;
    });

    //once open app button is clicked, show the firstpopup
    openappbtn.addEventListener("click", () => {
        //focuses on the popup
        alwaysaskpopup.showModal();
    });

    //when allow/don't allow is clicked for each popup, close it, and display the next one
    alwaysaskallowbtn.addEventListener("click", () => {
        alwaysaskpopup.close();
        readactionspopup.showModal();
    });
    alwaysaskdontaskbtn.addEventListener("click", () => {
        alwaysaskpopup.close();
        readactionspopup.showModal();
    });
        
    //next popup
    readactionsallowbtn.addEventListener("click", () => {
        readactionspopup.close();
        lowriskactionspopup.showModal();
    });
    readactionsdontallowbtn.addEventListener("click", () => {
        readactionspopup.close();
        lowriskactionspopup.showModal();
    });

    //next popup
    lowriskallowbtn.addEventListener("click", () => {
        lowriskactionspopup.close();
        allowallactionspopup.showModal();
    });
    lowriskdontallowbtn.addEventListener("click", () => {
        lowriskactionspopup.close();
        allowallactionspopup.showModal();
    });

    //next popup
    allowallallowbtn.addEventListener("click", () => {
        allowallactionspopup.close();
    });
    allowalldontallowbtn.addEventListener("click", () => {
        allowallactionspopup.close();
    });
}