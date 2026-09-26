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
        alwaysasknum = alwaysasknum + 1;    //add 1 to the permission use count
        alwaysaskcount.textContent = alwaysasknum;  //show number on page
        alwaysaskpopup.close();
        readactionspopup.showModal();
    });
    alwaysaskdontaskbtn.addEventListener("click", () => {
        alwaysaskpopup.close();
        readactionspopup.showModal();
    });
        
    //next popup
    readactionsallowbtn.addEventListener("click", () => {
        readactionsnum = readactionsnum + 1;    //add 1 to the permission use count
        readactionscount.textContent = readactionsnum;  //show number on page
        readactionspopup.close();
        lowriskactionspopup.showModal();
    });
    readactionsdontallowbtn.addEventListener("click", () => {
        readactionspopup.close();
        lowriskactionspopup.showModal();
    });

    //next popup
    lowriskallowbtn.addEventListener("click", () => {
        lowriskactionsnum = lowriskactionsnum + 1;    //add 1 to the permission use count
        lowriskactionscount.textContent = lowriskactionsnum;  //show number on page
        lowriskactionspopup.close();
        allowallactionspopup.showModal();
    });
    lowriskdontallowbtn.addEventListener("click", () => {
        lowriskactionspopup.close();
        allowallactionspopup.showModal();
    });

    //next popup
    allowallallowbtn.addEventListener("click", () => {
        allowallactionsnum = allowallactionsnum + 1;    //add 1 to the permission use count
        allowallactionscount.textContent = allowallactionsnum;  //show number on page
        allowallactionspopup.close();
    });
    allowalldontallowbtn.addEventListener("click", () => {
        allowallactionspopup.close();
    });

    //permission use counts (number on the page)
    const alwaysaskcount = document.getElementById('always-ask-count');
    const readactionscount = document.getElementById('read-actions-count');
    const lowriskactionscount = document.getElementById('low-risk-actions-count');
    const allowallactionscount = document.getElementById('allow-all-actions-count');
    //number of times each permission was allowed
    let alwaysasknum = 0;
    let readactionsnum = 0;
    let lowriskactionsnum = 0;
    let allowallactionsnum = 0;
    
}