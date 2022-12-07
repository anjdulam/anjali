let names = ["Anakin", "Obi-Wan", "Luke", "Leia"];

function displaytable() {
    let table = document.getElementById("t");

    for (let i = 0; i < names.length; i++) {
        let row = `<tr>
            <td>${i + 1}</td>
            <td>${names[i]}</td>
          </tr>`;
        table.innerHTML += row;
    }
}