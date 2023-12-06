import { DockList } from "./docks.js";
import { HaulerList } from "./haulers.js";


const dockHTMLlist = DockList()
const haulersHTMLlist = HaulerList()

const mainContainer = document.querySelector(".container")

const mainHTMLlist = `
<section>
    <h2>Docks</h2>
    ${dockHTMLlist}
</section>
<section>
    <h2>Hauler Ships</h2>
    ${haulersHTMLlist}
</section>`


mainContainer.innerHTML = mainHTMLlist