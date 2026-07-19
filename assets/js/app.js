const addBtn = document.getElementById(
"addPropertyBtn"
);


const modal = document.getElementById(
"propertyModal"
);


const saveBtn = document.getElementById(
"savePropertyBtn"
);


const closeBtn = document.getElementById(
"closeModalBtn"
);



addBtn.onclick = () => {

modal.style.display="flex";

};



closeBtn.onclick = () => {

modal.style.display="none";

};





saveBtn.onclick = () => {


let property = {


name:
document.getElementById(
"propertyName"
).value,


location:
document.getElementById(
"propertyLocation"
).value,


price:
document.getElementById(
"propertyPrice"
).value,


bedrooms:
document.getElementById(
"propertyBedrooms"
).value,


size:
document.getElementById(
"propertySize"
).value,


score:
document.getElementById(
"propertyScore"
).value


};




let properties =
JSON.parse(
localStorage.getItem(
"properties"
)
) || [];



properties.push(property);



localStorage.setItem(
"properties",
JSON.stringify(properties)
);



alert(
"Property Saved!"
);



location.reload();


};