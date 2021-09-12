function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      console.log(response);
      var products = response.products;
      console.log(products);
      var output = "";
      output += `<tr>`;
      output += `<th> Sl No </th>`;
      output += `<th> Name </th>`;
      output += `<th> Quantity </th>`;
      output += `<th> Unit </th>`;
      output += `<th> Department </th>`;
      output += `<th> Notes </th>`;
      output += `<tr>`;
      for (i = 0; i < products.length; i++) {
        output += `<tr>`;
        output += `<td> ${products[i].slno} </td>`;
        output += `<td> ${products[i].name} </td>`;
        output += `<td> ${products[i].quantity} </td>`;
        output += `<td> ${products[i].unit} </td>`;
        output += `<td> ${products[i].department} </td>`;
        output += `<td> ${products[i].notes} </td>`;
        output += `</tr>`;
      }
      document.getElementById("table").append(output);
      document.getElementById("table").innerHTML = output;
      document.getElementById("table").style.border = "2px solid black";
    }
  };
  xhttp.open("GET", "list.json", true);
  xhttp.send();
}
