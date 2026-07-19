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


id:
Date.now(),


name:
document.getElementById(
"propertyName"
).value,


url:
document.getElementById(
"propertyURL"
).value,



basic:{


price:
Number(
document.getElementById(
"propertyPrice"
).value
),


location:
document.getElementById(
"propertyLocation"
).value,


postcode:
document.getElementById(
"propertyPostcode"
).value,


epc:
document.getElementById(
"propertyEPC"
).value,


tenure:
document.getElementById(
"propertyTenure"
).value

},



transport:{


station:
document.getElementById(
"propertyStation"
).value,


distance:
document.getElementById(
"propertyDistance"
).value


},



analysis:{


aiScore:
Number(
document.getElementById(
"propertyScore"
).value
),


pros:[],


cons:[]

}




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
