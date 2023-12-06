const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockid: 1},
        { id: 2, name: "Boaty McBoatface", dockid: 2},
        { id: 3, name: "Seawise Giant", dockid: 3},
        { id: 4, name: "Haulin Harry", dockid: 4},
        { id: 5, name: "Birdie Boatly", dockid: 1},
        { id: 6, name: "Toby Totenson", dockid: 2 },
        { id: 7, name: "Hannah Hauler", dockid: 3}
    ]
}



export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
    // You write the code for copying the array and returning it
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
    // You write the code for copying the array and returning it
}