function vacation(peopleCount, groupType , dayOfWeek) {
    let price = 0;
    let totalPrice = 0;
    switch (dayOfWeek) {
        case "Friday":switch (groupType) {
            case "Students":price = 8.45;break;
            case "Business":price = 10.90;break;
            case "Regular":price = 15;break;
        } break;
    
        case "Saturday":switch (groupType) {
            case "Students":price = 9.80; break;
            case "Business":price = 15.60; break;
            case "Regular":price = 20; break;
        }break;

        case "Sunday":switch (groupType) {
            case "Students":price = 10.46; break;
            case "Business":price = 16; break;
            case "Regular":price = 22.50; break;
        }break;
    }
    totalPrice = price * peopleCount;
    switch (groupType) {
        case "Students":if (peopleCount >= 30) {
            totalPrice -= totalPrice * 0.15;
        } break;
        case "Business":if (peopleCount >= 100) {
            totalPrice -= price * 10;
        } break;
        case "Regular":if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice -= totalPrice * 0.05
        } break
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
