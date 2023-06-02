function editProfile( element ){
    let cardName = document.querySelector (".cardName");
    cardName.innerText = "Maísa Costa";

}

function removeUser( element, action ){
    let requestNumber = document.querySelector( "#connectionRequestNumber" );
    let currentNumber = Number (requestNumber.textContent);
    console.log(currentNumber);
    currentNumber --;
    requestNumber.textContent = currentNumber;

    let user = element.closest( ".card-list-item"  );
    let buttons = element.closest(".buttons");
    buttons.remove();
    let userContent = user.innerHTML;
    user.remove();


//bonus
    if( action === "add"){   
        let myConnections = document.querySelector( "#myConnections" );
        myConnections.innerHTML += `
            <li class="card-list-item start">
                ${userContent}
            </li>
        
        `;
        let totalConections = document.querySelector( "#totalConections" );
        currentNumber = Number (totalConections.textContent);
        console.log(currentNumber);
        currentNumber ++;
        totalConections.textContent = currentNumber;
        
    }
}
