import { getHaulers, getShippingShips } from "./database.js"

const haulers = getHaulers().sort((a, b) => {
    // sort docks alpha order by location and store in variable
    // define variables for the items in array that are being compared
    // use .toUppercase to ensure it is a case sensitive sort
    const compareNameA = a.name.toUpperCase()
    const compareNameB = b.name.toUpperCase()
    // compare both names and determine which one comes first

    // if the comparison function returns a negative number, it means that 
    //a should comes before b in the sorted array
    if (compareNameA < compareNameB) {
        return -1;
    }
    // if the comparison function returns a positive numbers, it means that
    // a should come after b in the sorted array
    if (compareNameA > compareNameB) {
        return 1;
    }
    // if the comparison function returns 0, it means that the order should
    // not change in the sorted array
    if (compareNameA === compareNameB) {
        return 0;
    }
})


export const HaulerList = () => {
    
    let haulersHTML = "<ul>"

        for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}"
                         data-type="hauler"
                         >${hauler.name}
                    </li>`

        // Convert each dock object to an <li> and append to the docksHTML string
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
  
        if (itemClicked.dataset.type === "hauler") {         // Was a hauler list item clicked?
            const haulerId = itemClicked.dataset.id    // Get the id of the hauler clicked
            let shipCounter = 0                                // Start a counter variable at 0        
        
            const shippingShips = getShippingShips()

            for (const ship of shippingShips) {                 // Iterate all of the shipping ships
                if(parseInt(haulerId) === ship.haulerId) {  // Does the haulerId foreign key match the id?
                    shipCounter++                              // Increase the counter by 1
                }
            }
            window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
        }
    }
)