// SELECT ELEMENTS 
const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#dataTable tbody");

// SUBMIT EVENT 
form.addEventListener("submit", function (event) {

// Prevent page reload
event.preventDefault();

// GET INPUT VALUES 
const firstName = document.getElementById("firstName").value.trim();
const lastName = document.getElementById("lastName").value.trim();
const email = document.getElementById("email").value.trim();
const address = document.getElementById("address").value.trim();
const pincode = document.getElementById("pincode").value.trim();
const state = document.getElementById("state").value.trim();
const country = document.getElementById("country").value.trim();

// Get selected gender
const gender = document.querySelector('input[name="gender"]:checked');

// VALIDATION 
if (!firstName || !lastName || !email || !address || !pincode || !state || !country || !gender) {
    alert("Please fill all fields!");
    return;
}

// CREATE TABLE ROW 
const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender.value}</td>
    <td>${state}</td>
    <td>${country}</td>
  `;

  // ADD ROW TO TABLE 
  tableBody.appendChild(newRow);

  // RESET FORM
  form.reset();
});