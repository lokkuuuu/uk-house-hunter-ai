function loadProperties() {


    const list = document.querySelector(".property-list");


    const savedProperties =
        JSON.parse(
            localStorage.getItem("properties")
        ) || [];



    if (!list) {
        console.log("Property list not found");
        return;
    }



    list.innerHTML = "";



    savedProperties.forEach((property, index) => {


        const card =
            document.createElement("div");


        card.className =
            "property-card";



        card.innerHTML = `

            <h4>
            🏠 ${property.name}
            </h4>

            <p>
            📍 ${property.location}
            </p>

            <p>
            💷 £${property.price}
            </p>

            <p>
            🛏 ${property.bedrooms} Bedrooms
            </p>

            <p>
            📐 ${property.size} sqm
            </p>

            <p>
            ⭐ ${property.score}/100
            </p>


            <button onclick="viewProperty(${index})">
            View
            </button>


            <button onclick="deleteProperty(${index})">
            Delete
            </button>

        `;


        list.appendChild(card);


    });



    const counter =
        document.getElementById(
            "propertyCount"
        );


    if(counter){

        counter.innerHTML =
            savedProperties.length;

    }


}





function deleteProperty(index){


    let savedProperties =
        JSON.parse(
            localStorage.getItem("properties")
        ) || [];



    savedProperties.splice(index,1);



    localStorage.setItem(
        "properties",
        JSON.stringify(savedProperties)
    );



    loadProperties();


}




loadProperties();
function viewProperty(index){


const properties =
JSON.parse(
localStorage.getItem("properties")
) || [];



const property =
properties[index];



document.getElementById(
"detailName"
).innerHTML =
"🏠 " + property.name;



document.getElementById(
"detailLocation"
).innerHTML =
"📍 " + property.location;



document.getElementById(
"detailPrice"
).innerHTML =
"💷 £" + property.price;



document.getElementById(
"detailBedroom"
).innerHTML =
"🛏 Bedrooms: " + property.bedrooms;



document.getElementById(
"detailSize"
).innerHTML =
"📐 Size: " + property.size + " sqm";



document.getElementById(
"detailScore"
).innerHTML =
"⭐ Score: " + property.score;
loadMap(
52.003,
-0.744
);


document.getElementById(
"detailModal"
).style.display =
"flex";


}



document.getElementById(
"closeDetailBtn"
).onclick =
()=>{

document.getElementById(
"detailModal"
).style.display =
"none";

}