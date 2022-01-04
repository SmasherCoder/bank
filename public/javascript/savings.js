var response = "";
function loadTrans() {
    response = fetch('/api/transaction/savings', {
        method: 'GET',
    }).then(res => {
        res.json.toString(response);
    })
};
loadTrans();
document.getElementsByClassName("translist").innerHTML = response;