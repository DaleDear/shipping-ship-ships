import { DockList } from "./docks.js";
import { HaulerList } from "./haulers.js";
import { ShippingShipList } from "./shippingShips.js";


const dockHTMLlist = DockList()
const haulersHTMLlist = HaulerList()
const shippingShipHTMLlist = ShippingShipList()

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section>
    <h2>Docks</h2>
    ${dockHTMLlist}
</section>
<section>
    <h2>Hauler Ships</h2>
    ${haulersHTMLlist}
</section>
<section>
    <h2>Shipping Ships</h2>
    ${shippingShipHTMLlist}
</section>
`


mainContainer.innerHTML = applicationHTML