import { getShippingShips, getHaulers } from "./database.js"

/* export const ShippingShipList = () => {
    let shippingShipsHTML = "<ul>"

    const shippingShips = getShippingShips()

    for (const shippingShip of shippingShips) {
        shippingShipsHTML += `<li data-id="${shippingShip.id}"                 
                            data-haulerid="${shippingShip.haulerId}
                            data-type="shippingShips"
                            data-name="${shippingShip.name}"
                            >${shippingShip.name}</li>
                         `

        // Convert each dock object to an <li> and append to the docksHTML string
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
} */

const shippingShips = getShippingShips().sort((a, b) => {
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


const haulers = getHaulers()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingShip") {
            // Get the haulerId value of the shipping ship clicked
            let haulingId = itemClicked.dataset.haulerId
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            // Iterate the array of hauler objects
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (haulingId === `${hauler.id}`) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler
                }
            }
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)

export const ShippingShipList = () => {

    let shippingShipsHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        // Convert each shippingShip object to an <li> and append to the shippingShipsHTML string
        shippingShipsHTML += `
        <li data-type="shippingShip"
        data-hauler-id=${shippingShip.haulerId}
        data-name="${shippingShip.name}"
        >${shippingShip.name}</li>
        `
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}
