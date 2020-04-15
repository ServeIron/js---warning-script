let war = document.querySelector('.warningBox');


function uyari(messageInfo,messageContent){
    
    switch(messageInfo){
    case "warning":
    war.classList.add('warning');
    war.textContent = messageContent;
    
    break;

    case "error":
        war.classList.add('error');
        war.textContent = messageContent;
       
    break;
       
    case "info":
        war.classList.add('info');
        war.textContent = messageContent;
       
    break;
       
    case "succes":
        war.classList.add('succes');
        war.textContent = messageContent;
       
    break;
    }
    
};

uyari("warning","Yazılacak Mesaj");
