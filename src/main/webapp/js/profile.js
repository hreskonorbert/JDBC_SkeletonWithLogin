document.addEventListener("DOMContentLoaded", onLoad)

function onLoad(){
    const customerListButton = document.getElementById("customerList");
    const employeeListButton = document.getElementById("employeeList");
    const purchaseHistoryButton = document.getElementById("purchaseHistory");
    customerListButton.addEventListener("click", onCustomerListClicked);
    employeeListButton.addEventListener("click", onEmployeeListClicked);
    purchaseHistoryButton.addEventListener("click", onPurchaseHistoryClicked);


}

function onPurchaseHistoryClicked(){
    showContents(["purchaseHistoryDiv"])
    const backButton = document.createElement("button");
    backButton.id="backButton";
    backButton.innerHTML = "Back to profile";
    backButton.addEventListener("click", backToProfile);

    document.getElementById("purchaseHistoryDiv").appendChild(backButton);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', showPurchaseHistory);
    xhr.open('GET', 'purchaseServlet');
    xhr.send();


}




function showContents(ids) {
    const contentEls = document.getElementsByClassName('content');
    for (let i = 0; i < contentEls.length; i++) {
        const contentEl = contentEls[i];
        if (ids.includes(contentEl.id)) {
            contentEl.classList.remove('hidden');
        } else {
            contentEl.classList.add('hidden');
        }
    }
}


function onCustomerListClicked(){
    showContents(["customersDiv"])
    const backButton = document.createElement("button");
    backButton.id="backButton";
    backButton.innerHTML = "Back to profile";
    backButton.addEventListener("click", backToProfile);

    document.getElementById("customersDiv").appendChild(backButton);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', showCustomerList);
    xhr.open('GET', 'customerServlet');
    xhr.send();


}


function onEmployeeListClicked(){
    showContents(["employeesDiv"])
    const backButton = document.createElement("button");
    backButton.id="backButton";
    backButton.innerHTML = "Back to profile";
    backButton.addEventListener("click", function(){

        document.getElementById("employeesDiv").removeChild(document.getElementById("backButton"));
        showContents(["profile"]);

    });

    document.getElementById("employeesDiv").appendChild(backButton);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', showEmployeeList);
    xhr.open('GET', 'employeeServlet');
    xhr.send();


}



function backToProfile(){
    document.getElementById("customersDiv").removeChild(document.getElementById("backButton"));
    showContents(["profile"]);
}

function showPurchaseHistory(){

    const response = JSON.parse(this.responseText);
    const table = document.getElementById("purchaseHistoryTable");

    while(table.firstChild){
        table.removeChild(table.firstChild);
    }

    for(let i = 0; i < response.length; i++){
        const tr=document.createElement("tr");
        const nameTd = document.createElement("td");
        const companyTd = document.createElement("td");
        const addressTd = document.createElement("td");


        nameTd.innerHTML = response[i].invoiceId;
        companyTd.innerHTML = response[i].artistName;
        addressTd.innerHTML = response[i].trackTitle;

        tr.appendChild(nameTd);
        tr.appendChild(companyTd);
        tr.appendChild(addressTd);
        table.appendChild(tr);
    }

}

function showEmployeeList(){

    const response = JSON.parse(this.responseText);
    const table = document.getElementById("employeesTable");

    while(table.firstChild){
        table.removeChild(table.firstChild);
    }

    for(let i = 0; i < response.length; i++){
        const tr=document.createElement("tr");
        const nameTd = document.createElement("td");
        const companyTd = document.createElement("td");
        const addressTd = document.createElement("td");


        nameTd.innerHTML = response[i].firstName +" "+ response[i].lastName;
        companyTd.innerHTML = response[i].phone;
        addressTd.innerHTML = response[i].address;

        tr.appendChild(nameTd);
        tr.appendChild(companyTd);
        tr.appendChild(addressTd);
        table.appendChild(tr);
    }

}

function showCustomerList(){

    const response = JSON.parse(this.responseText);
    const table = document.getElementById("customersTable");

    while(table.firstChild){
        table.removeChild(table.firstChild);
    }

    for(let i = 0; i < response.length; i++){
        const tr=document.createElement("tr");
        const nameTd = document.createElement("td");
        const companyTd = document.createElement("td");
        const addressTd = document.createElement("td");


        nameTd.innerHTML = response[i].firstName + " " +response[i].lastName;
        companyTd.innerHTML = response[i].company;
        addressTd.innerHTML = response[i].address;

        tr.appendChild(nameTd);
        tr.appendChild(companyTd);
        tr.appendChild(addressTd);
        table.appendChild(tr);
    }

}
