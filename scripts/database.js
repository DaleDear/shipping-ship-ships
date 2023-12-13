const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", currentDockId: 1 },
        { id: 2, name: "Boaty McBoatface", currentDockId: 2 },
        { id: 3, name: "Seawise Giant", currentDockId: 3 },
        { id: 4, name: "Haulin Harry", currentDockId: 4 },
        { id: 5, name: "Birdie Boatly", currentDockId: 1 },
        { id: 6, name: "Toby Totenson", currentDockId: 2 },
        { id: 7, name: "Hannah Hauler", currentDockId: 3 }
    ],
    shippingShips: [
        { id: 1, name: "Esso Atlantic", haulerId: 1 },
        { id: 2, name: "Prairial", haulerId: 2 },
        { id: 3, name: "Palais Royal", haulerId: 3 },
        { id: 4, name: "Rivoli", haulerId: 4 },
        { id: 5, name: "Champs Elysee", haulerId: 5 },
        { id: 6, name: "Ever Ace", haulerId: 6 },
        { id: 7, name: "Nissei Maru", haulerId: 7 },
        { id: 8, name: "MSC Gulsun", haulerId: 1 },
        { id: 9, name: "HMM Rotterdam", haulerId: 2 },
        { id: 10, name: "CMA CGM Trocadero", haulerId: 3 }
    ],
    contracts: [
        { id: 1, haulerId: 1, dockId: 1 },
        { id: 2, haulerId: 2, dockId: 2 },
        { id: 3, haulerId: 3, dockId: 3 },
        { id: 4, haulerId: 4, dockId: 4 },
        { id: 5, haulerId: 5, dockId: 1 },
        { id: 6, haulerId: 6, dockId: 2 },
        { id: 7, haulerId: 7, dockId: 3 },
        { id: 8, haulerId: 1, dockId: 4 },
        { id: 9, haulerId: 2, dockId: 1 },
        { id: 10, haulerId: 3, dockId: 2 }
    ],
}



export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
    // You write the code for copying the array and returning it
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
    // You write the code for copying the array and returning it
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({ ...shippingShip}))
    // You write the code for copying the array and returning it
}

export const getContracts = () => {
    return database.contracts.map(contract => ({ ...contract }))
    // You write the code for copying the array and returning it
}