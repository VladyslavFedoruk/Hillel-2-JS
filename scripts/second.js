const sport = prompt('Привіт! Обери вид спорту, який тобі найбільше подобається - волейбол, футбол чи теніс');

if (sport === null || sport === "") {
    alert("На жаль, ти нічого не обрав. Немає бажання продовжувати нашу розмову")
} else {
    switch (sport) {
        case "Волейбол":
            alert("Круто! Хочеш стати, як Євген Лапинський?")
            break;
        case "Футбол":
            alert("Круто! Хочеш стати, як Ліонель Мессі?")
            break;
        case "Теніс":
            alert("Круто! Хочеш стати, як Піт Сампрас?")
            break;
        default:
            alert("Не вказуй те, чого немає")
    }
}