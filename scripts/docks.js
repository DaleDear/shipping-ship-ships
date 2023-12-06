import { getDocks } from "./database.js"


export const DockList = () => {
        let docksHTML = "<ul>"

    const docks = getDocks()
    for (const dock of docks) {
        docksHTML += `<li data-id="${dock.id}"
                         data-location="${dock.location}"
                         data-volume="${dock.volume}"
                         data-type="dock"
                         >${dock.name}
                    </li>`

        // Convert each dock object to an <li> and append to the docksHTML string
    }

    docksHTML += "</ul>"

    return docksHTML
}

