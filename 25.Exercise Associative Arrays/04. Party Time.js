function party(input) {
    let guests = {
        vipGuests : [],
        regualarGuests : []
    }
    let command = input.shift();
    while (command !== "PARTY") {
        
        let currentGuest = command;
        let char = currentGuest.charAt(0);
        if (!isNaN(char) ) {
            guests.vipGuests.push(currentGuest)
        }else {
            guests.regualarGuests.push(currentGuest)
        }

        command = input.shift();
    }
    for (const line of input) {
        let guestToRemove = line;
        if (guests.vipGuests.includes(guestToRemove)) {
            let index = guests.vipGuests.indexOf(guestToRemove)
            guests.vipGuests.splice(index,1)

        }else if (guests.regualarGuests.includes(guestToRemove)) {
            let index = guests.regualarGuests.indexOf(guestToRemove)
            guests.regualarGuests.splice(index,1)
        }
    }
    let result = Object.values(guests);
    let peopleNotComingCount = result.reduce((sum , el) => {
        let num = el.length
        return sum += num
    },0)
    console.log(peopleNotComingCount);
    result.forEach(arrGuests => arrGuests.forEach(guest => console.log(guest)))
}
party(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)