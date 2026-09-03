
// TEMPORARY DEMO PRICE

let price = 0.0042;

const priceElement = document.getElementById("price");
const changeElement = document.getElementById("priceChange");
const marketCapElement = document.getElementById("marketCap");


function updatePrice() {

    const marketCap =
        Math.round(price * 100000000);

    marketCapElement.textContent =
        "$" + marketCap.toLocaleString();


    const movement = (Math.random() - 0.5) * 0.0003;

    price += movement;

    if (price < 0.001) {
        price = 0.001;
    }

    priceElement.textContent =
        "$" + price.toFixed(4);


    const change =
        ((Math.random() - 0.5) * 20).toFixed(1);


    if (change >= 0) {

        changeElement.textContent =
            "+" + change + "%";

        changeElement.style.color =
            "#45e38a";

    } else {

        changeElement.textContent =
            change + "%";

        changeElement.style.color =
            "#ff6b6b";
    }

}


setInterval(updatePrice, 2000);
