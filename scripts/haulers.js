import { getHaulingShips } from "./database.js"


export const HaulerList = () => {
    let haulersHTML = "<ul>"

    const haulers = getHaulingShips()
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