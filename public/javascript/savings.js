function loadTrans() {
    const response = fetch('/api/transaction/savings', {
        method: 'GET',

    })
    console.log(response);
    document.getElementsByClassName("translist").innerHTML = "Hello";
}

loadTrans();
