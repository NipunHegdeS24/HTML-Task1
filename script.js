fetch("Data.json")

.then(function(response)
{
    return response.json();
})

.then(function(info)
{
    // let Value = document.querySelector("#data-output");
    let Value = document.getElementById("data-output");
    let out ="";

    for(let data of info)
    {
        out += `
            <tr>
                <td>${data.Id}</td>
                <td>${data.Name}</td>
                <td>${data.Age}</td>
                <td>${data.Marks}</td>
            </tr>
        `;
    }

    Value.innerHTML = out;
})