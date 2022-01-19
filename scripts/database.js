const database = {
    fish: [
        {
            name: "Bart",
            food: "crustacean",
            size: 3,
            harvested: "Pacific Ocean"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}