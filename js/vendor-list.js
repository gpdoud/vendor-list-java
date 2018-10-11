
$().ready(() => {

    $.getJSON("http://localhost:8080/Vendors/List")
        .then((resp) => {
            console.log(resp);
            render(resp.data);
        });

});

function render(vendors) {
    var tbody = $("#tbody");
    for(var vendor of vendors) {
        var row = `<tr>`;
        row += `<td>${vendor.id}</td>`;
        row += `<td>${vendor.code}</td>`;
        row += `<td>${vendor.name}</td>`;
        row += `<td>${vendor.address}, ${vendor.city}, ${vendor.state} ${vendor.zip}</td>`;
        row += `<td>${vendor.preapproved ? "Yes" : "No"}</td>`;
        row += `</tr>`;
        tbody.append(row);
    }
}