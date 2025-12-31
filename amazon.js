//navbar sabit

const links = document.querySelectorAll("a");
const pages = document.querySelectorAll(".page");

const navbar = document.querySelector('.navbar');
function adjustPagePosition(){
    if(!navbar) return;
    const navHeight = navbar.offsetHeight;
    const container = document.querySelector('.icerikler');
    container.style.paddingTop = navHeight - 10 + 'px';
}
window.addEventListener('load', adjustPagePosition);
window.addEventListener('resize', adjustPagePosition);
//

//sayfa aktif/pasif
document.body.addEventListener('click', function(e){
    const tiklananElement = e.target.closest('a');

    if(tiklananElement && tiklananElement.hasAttribute('href')){
        e.preventDefault();

        pages.forEach(page => page.classList.remove('active'));
        const targetId = tiklananElement.getAttribute("href").substring(1);

        const hedefSayfa = document.getElementById(targetId);
        if(targetId === 'cart'){
            navbar.style.display = 'none';
            document.querySelector('.icerikler').style.paddingTop = '10px';
            nonTrackPackage();
        }
        if(targetId === 'anasayfa'){
            navbar.style.display = 'flex';
            adjustPagePosition();
            nonTrackPackage();
        }
        if(targetId === 'orders'){
            navbar.style.display = 'flex';
            adjustPagePosition();
            nonTrackPackage();
        }
        if(hedefSayfa){
            hedefSayfa.classList.add("active");
        }
        
        if(menuOpened){
            menuWork();
        }
    }
})
//

//MENÜ
const menu = document.querySelector('.menu');
const orders = document.querySelector('.orders');
const cart = document.querySelector('.cart');
const openMenu = document.querySelector('.open-menu');
const nav = document.querySelector('nav');
let menuOpened = false;

export function menuWork(){
    const windowWidth = window.innerWidth;
    if(!menuOpened){
        navbar.style.height = '120px';
        navbar.style.alignItems = 'flex-start';
        navbar.style.paddingTop = '12px';
        navbar.style.width = `${windowWidth + 335}px`;
        openMenu.innerHTML = `<a href="#orders" class="orders">Returns & Orders</a><p><a href="#cart" class="cartMenu">Cart(${productAtCart})</a></p>`;
        openMenu.style.width = `${windowWidth + 80}px`;
        openMenu.style.display = 'flex';
        openMenu.style.flexDirection ='column';
        openMenu.style.justifyContent = 'center';
        openMenu.style.transform = 'translate(-300px, 50px)';
        menuOpened = true;
    }else{
        menuOpened = false;
        openMenu.style.display = 'none';
        navbar.style.paddingTop = '2px';
        navbar.style.alignItems = 'center';
        navbar.style.height = '65px';
        navbar.style.width = `${windowWidth}px`;
    }
    adjustPagePosition();
}

function windowControl(){
    const windowWidth = window.innerWidth;
    if(windowWidth<600){
        if(navbar && menu && orders && cart){
        navbar.style.width = '100%';
        menu.style.display = 'flex';
        orders.style.display = 'none';
        cart.style.display = 'none';
        navbar.style.paddingTop = '4px';}
        if(menuOpened){
            menuOpened = false;
            menuWork();
        }
    }else{
        if(openMenu){
        openMenu.style.display = 'none';}
        if(navbar){
        navbar.style.alignItems = 'center';
        navbar.style.height = '65px';
        navbar.style.paddingTop = '4px';
        navbar.style.paddingBottom = '4px';
        navbar.style.width = '100%';}
        if(menu){
        menu.style.display = 'none';}
        if(orders){
        orders.style.display = 'flex';}
        if(cart){
        cart.style.display = 'flex';}
    }
}
//

/*ANA SAYFA */
const urunler = [
    "",
    "Black and Gray Athletic Cotton Socks - 6 Pairs",
    "Intermediate Size Basketball",
    "Adults Plain Cotton T-Shirt - 2 Pack",
    "2 Slot Toaster - Black",
    "6 Piece White Dinner Plate Set",
    "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    "Plain Hooded Fleece Sweatshirt",
    "Luxury Towel Set - Graphite Gray",
    "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    "Waterproof Knit Athletic Sneakers - Gray",
    "Women's Chiffon Beachwear Cover Up - Black",
    "Round Sunglasses",
    "Women's Two Strap Buckle Sandals - Tan",
    "Blackout Curtains Set 4-Pack - Beige",
    "Men's Slim-Fit Summer Shorts",
    "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    "Ultra Soft Tissue 2-Ply - 18 Box",
    "Straw Lifeguard Sun Hat",
    "Sterling Silver Sky Flower Stud Earrings",
    "Women's Stretch Popover Hoodie",
    "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    "Women's Knit Ballet Flat",
    "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    "Trash Can with Foot Pedal - Brushed Stainless Steel",
    "Duvet Cover Set with Zipper Closure",
    "Women's Chunky Cable Beanie - Gray",
    "Men's Classic-fit Pleated Chino Pants",
    "Men's Athletic Sneaker",
    "Men's Navigator Sunglasses Pilot",
    "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    "Vanity Mirror with Heavy Base - Chrome",
    "Women's Fleece Jogger Sweatpant",
    "Double Oval Twist French Wire Earrings - Gold",
    "Round Airtight Food Storage Containers - 5 Piece",
    "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    "100% Cotton Bath Towels - 2 Pack, Light Teal",
    "Waterproof Knit Athletic Sneakers - Pink",
    "Countertop Blender - 64oz, 1400 Watts",
    "10-Piece Mixing Bowl Set with Lids - Floral",
    "2-Ply Kitchen Paper Towels - 30 Pack",
    "Men's Full-Zip Hooded Fleece Sweatshirt"
];
const satis = [
    '',
    87,
    127,
    56,
    2197,
    37,
    175,
    317,
    144,
    305,
    89,
    235,
    30,
    562,
    232,
    160,
    846,
    99,
    215,
    52,
    2465,
    119,
    326,
    2556,
    2286,
    456,
    83,
    9017,
    229,
    42,
    511,
    130,
    248,
    117,
    126,
    1211,
    363,
    93,
    89,
    3,
    679,
    1045,
    3157
];
const fiyat = [
    '',
    10.90,
    20.95,
    7.99,
    18.99,
    20.67,
    34.99,
    24.00,
    35.99,
    28.99,
    33.90,
    20.70,
    15.60,
    24.99,
    45.99,
    16.99,
    30.74,
    23.74,
    22.00,
    17.99,
    13.74,
    12.50,
    26.40,
    15.99,
    83.00,
    23.99,
    12.50,
    22.90,
    38.90,
    16.90,
    67.97,
    16.49,
    24.00,
    24.00,
    28.99,
    22.50,
    30.99,
    21.10,
    33.90,
    107.47,
    38.99,
    57.99,
    24.00
];
const anasayfa = document.querySelector('.anasayfa');
if(anasayfa){const tumUrunler = [];
for(let i = 1; i<=42; i++){
    const newBlock = document.createElement('div');
    newBlock.classList.add(`urun${i}`);
    newBlock.classList.add('urun');
    const urunObje = {
        name: urunler[i],
        index: i
    };
    tumUrunler.push(urunObje);
    if(anasayfa){
    anasayfa.appendChild(newBlock);}
    document.querySelector(`.urun${i}`).innerHTML =
    `<div class="foto-div">
            <img class="urun-foto urun-foto-${i}" src="p${i}.jpg">
        </div>

        <p class="urun-adi">${urunler[i]}</p>

        <div class="star-price star-price${i}">` + //star + satis + fiyat + select
        `<div class="star-and-number${i} s-a-n">
                <div class="star-container">
                    <div class="star star${i}"></div>
                    <div class="star-filled star-filled${i}"></div>
                </div>
                ${satis[i]}
            </div>
            <p>$${fiyat[i]}</p>
            <p>
                <select class="adet${i}" id="urun-adedi${i}" name="urun_adedi">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </p>
        </div>
        <div class="added${i} added"></div>
        <div class="add-to-cart add-to-cart${i}">
            <button class="add-cart-button add-cart-button${i}" onclick="buttonUpdate(${i})">
                add to cart
            </button>
    </div>`
    const puan = Math.floor(Math.random()*(100-0+1));
    const starFill = document.querySelector(`.star-filled${i}`);
    starFill.style.width = puan + 'px';
}}
//

/*SEARCH*/
const buyutec = document.querySelector('.buyutec');
if(buyutec){buyutec.addEventListener('click', ()=>{
    const productToShow = [];
    const userSearch = document.querySelector('.search-bar').value;
    for(let i = 1; i<=42; i++){
        const urun = document.querySelector(`.urun${i}`);
        if(tumUrunler[i-1].name.toLowerCase().includes(userSearch.toLowerCase())){
            productToShow.push(i);
            urun.style.display = 'grid';
        }else{
            urun.style.display = 'none';
        }
    }
});}
//

/*CART*/
const cartSize = document.querySelector('.cart-size');
let productAtCart = Number(localStorage.getItem('cartSize')) || 0;
if(cartSize){cartSize.innerHTML = `   ${productAtCart}
     Cart`;}
const cOXT = document.querySelector('.co-x-t');
if(cOXT){cOXT.innerHTML =`(${productAtCart} items)`;}
const items = document.querySelector('.items-at-cart');
if(items){items.innerHTML = `Items(${productAtCart})`}

if (!window.buttonsByIndex) {
    try {
        const raw = localStorage.getItem('window.buttonsByIndex');
        window.buttonsByIndex = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(window.buttonsByIndex)) window.buttonsByIndex = [];
    } catch (e) {
        window.buttonsByIndex = [];
        localStorage.removeItem('window.buttonsByIndex');
    }
}

let sayac = 0;
function buttonUpdate(i){
    buttonsByIndex = window.buttonsByIndex || buttonsByIndex;
    const alinacakUrun = document.querySelector('.alinacak-urun');
    const stok = document.querySelector(`.adet${i}`);
    const kacEkle = stok ? parseInt(stok.value) : 1;
    
    if(!alinacakUrun) return;
    const hasChild = alinacakUrun.querySelector(`.alinacak-urun-div${i}`) !== null;
    
    if(hasChild){
        const tekUrunQuantity = document.querySelector(`.quantity${i}`);
        if(tekUrunQuantity){
            const currentQty = parseInt(tekUrunQuantity.textContent);
            tekUrunQuantity.textContent = currentQty + kacEkle;
            localStorage.setItem(`quantity${i}`, tekUrunQuantity.textContent);
        }
    } else {
        if(!window.buttonsByIndex.includes(i)) {
            window.buttonsByIndex.push(i);
        }
        alinacakUrunCart(i,1);
        const tekUrunQuantity = document.querySelector(`.quantity${i}`);
        if(tekUrunQuantity){
            tekUrunQuantity.textContent = kacEkle;
            localStorage.setItem(`quantity${i}`, kacEkle);
        }
    }

    productAtCart += kacEkle;
    if(!cartSize) return;
    cartSize.innerHTML = `   ${productAtCart}
    Cart`;
    if(cOXT) cOXT.innerHTML = `(${productAtCart} items)`;
    if(items) items.innerHTML = `Items(${productAtCart})`;
    
    localStorage.setItem('cartSize', productAtCart.toString());
    localStorage.setItem('window.buttonsByIndex', JSON.stringify(window.buttonsByIndex));
    localStorage.setItem('sepet', alinacakUrun.innerHTML);

    const added = document.querySelector(`.added${i}`);
    if(added){
        added.innerHTML = '✅ Added to cart!';
        setTimeout(()=>{ added.innerHTML = ''; }, 3000);
    }

    hesaplamalarYap(1);
}

const alinacakUrun = document.querySelector('.alinacak-urun');
const eskiSepet = localStorage.getItem('sepet');
if(eskiSepet && eskiSepet.trim() !== ''){
    alinacakUrun.innerHTML = eskiSepet;
    document.querySelector('.bos-sepet').style.display = 'none';
} else {
    if(document.querySelector('.bos-sepet')){
    document.querySelector('.bos-sepet').style.display = 'flex';}
}
if(eskiSepet !== ''){
    if(document.querySelector('.bos-sepet')){
    document.querySelector('.bos-sepet').style.display = 'none';}
}
if(alinacakUrun){alinacakUrun.innerHTML = eskiSepet;}
function alinacakUrunCart(i, x){
    const alinacakUrun = document.querySelector('.alinacak-urun');
    buttonsByIndex = window.buttonsByIndex || buttonsByIndex;
    if(x){
        const now = new Date();
        const currentDate = now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        });
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday']
        const dayName = dayNames[now.getDay()];
        const newAlinacakUrun = document.createElement('div');
        newAlinacakUrun.innerHTML =
        `<div class="alinacak-urun-div alinacak-urun-div${i}">
                <p class="delivery-date" style="color: green; font-weight: bold">
                    ${dayName}, ${currentDate}
                </p>
                <div class="foto-detay">
                    <img class="alinacak-urun-foto" src="p${i}.jpg">
                    <div class="alinacak-urun-detay">
                        <p class="alinacak-urun-isim"style="font-weight: bold">${urunler[i]}</p>
                        <p style="color: red" class="urununFiyati">$${fiyat[i]}</p>
                        <div class="alinacak-urun-adet-sil-ekle">
                            <p>Quantity:<span class="quantity quantity${i}">1</span></p>
                            <div class="update-sil">
                                <div class="update-button-area${i}">
                                    <button class="update-button update-button${i}">
                                        Update
                                    </button>
                                </div>
                                <button class="delete-button delete-button${i}" onclick="urunuSil(${i})">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <p>Choose a delivery option:</p>

                    <div class="teslim">
                        <input type="radio" id="standart" name="teslimat${i}" value="standart" checked>
                        <label for="standart">
                            <p style="color: green">${addDaysToDate(`${dayName}, ${currentDate}`, 7)}</p>
                            <p style="font-size: 15px">FREE Shipping</p>
                        </label><br>
                    </div>
                    
                    <div class="teslim">
                        <input type="radio" id="hizli" name="teslimat${i}" value="hizli">
                        <label for="hizli">
                            <p style="color: green">${addDaysToDate(`${dayName}, ${currentDate}`, 3)}</p>
                            <p style="font-size: 15px">$4.99 - Shipping</p>
                        </label><br>
                    </div>
                    
                    <div class="teslim">
                        <input type="radio" id="express" name="teslimat${i}" value="express">
                        <label for="express">
                            <p style="color: green">${dayName}, ${currentDate}</p>
                            <p style="font-size: 15px">$9.99 - Shipping</p>
                        </label>
                    </div>
                </div>
            </div>
            `;
        newAlinacakUrun.classList.add(`alinacak-urun-div${i}`)
        if(alinacakUrun){
        alinacakUrun.appendChild(newAlinacakUrun);}
        const radioButtons = newAlinacakUrun.querySelectorAll(`input[name="teslimat${i}"]`);
        radioButtons.forEach(radio => {
            radio.addEventListener('change', ()=>{
                hesaplamalarYap(1);
                
            });
        });
        document.querySelector('.bos-sepet').style.display = 'none';
        if(!alinacakUrun) return;
        localStorage.setItem('sepet', alinacakUrun.innerHTML);
    }else{
        const silincekUrun = document.querySelector(`.alinacak-urun-div${i}`);
        
        silincekUrun.remove();
        localStorage.removeItem(`quantity${i}`);

        if (!alinacakUrun) return;
        if(alinacakUrun.children.length === 0){
            window.buttonsByIndex = [];
            localStorage.setItem('window.buttonsByIndex', JSON.stringify(window.buttonsByIndex));
            document.querySelector('.bos-sepet').style.display = 'flex';
            document.querySelector('.bos-sepet').style.flexDirection = 'column';
            productAtCart=0;
            cartSize.innerHTML = `   ${productAtCart}
            Cart`;
            if(cOXT){
                cOXT.innerHTML = `(${productAtCart} items)`;
            }
            if(items){
                items.innerHTML = `Items(${productAtCart})`;
            }
            localStorage.setItem('cartSize', productAtCart.toString());
            hesaplamalarYap(1);
        }
        hesaplamalarYap(1);
    }
    updateCartElement(i);
    yonlendirButton();
}

function urunuSil(i){
        const alinacakUrun = document.querySelector('.alinacak-urun');
        buttonsByIndex = window.buttonsByIndex || buttonsByIndex;
        productAtCart--;
        cartSize.innerHTML = `   ${productAtCart}
        Cart`;
        if(cOXT){
            cOXT.innerHTML = `(${productAtCart} items)`;
        }
        if(items){
            items.innerHTML = `Items(${productAtCart})`;
        }
        const idx = window.buttonsByIndex.indexOf(i);
        if(idx > -1) {
            window.buttonsByIndex.splice(idx, 1);
            localStorage.setItem('window.buttonsByIndex', JSON.stringify(window.buttonsByIndex));
        }
        localStorage.removeItem(`quantity${i}`);
        alinacakUrunCart(i, 0);
        hesaplamalarYap(1);
        localStorage.setItem('cartSize', productAtCart.toString());
        localStorage.setItem('sepet', alinacakUrun.innerHTML);
}

let hesaplamalar = document.querySelector('.hesaplamalar');
function hesaplamalarYap(i){

    buttonsByIndex = window.buttonsByIndex || buttonsByIndex;
    const alinacakUrun = document.querySelector('.alinacak-urun');
    if(i){
        let ItemsBrutTotal = 0;
        let kargo = 0;
        window.buttonsByIndex.forEach(index=>{
            let quantity = parseInt(localStorage.getItem(`quantity${index}`));
            if(!alinacakUrun) return;
            let itemsBrut = parseFloat(alinacakUrun.querySelector(`.alinacak-urun-div${index} .urununFiyati`).textContent.replace('$', ''));
            ItemsBrutTotal += itemsBrut*quantity;
            const selectedDelivery = document.querySelector(`input[name="teslimat${index}"]:checked`);
            if(selectedDelivery){
                switch(selectedDelivery.value){
                    case 'standart':
                        kargo += 0;
                        break;
                    case 'hizli':
                        kargo += 4.99;
                        break;
                    case 'express':
                        kargo += 9.99;
                        break;
                }
            }
        });
        let totalBeforeTax = ItemsBrutTotal + kargo;
        let estimatedTax = totalBeforeTax / 10;
        const cartTotal = {
            ItemsBrutTotal: ItemsBrutTotal,
            kargo: kargo,
            totalBeforeTax: totalBeforeTax,
            estimatedTax: estimatedTax
        }
        localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
        if(!hesaplamalar) return;
        hesaplamalar.innerHTML = `$${ItemsBrutTotal.toFixed(2)}
                                    
        
$${kargo.toFixed(2)}
                                


$${totalBeforeTax.toFixed(2)}


$${estimatedTax.toFixed(2)}


$${(totalBeforeTax + estimatedTax).toFixed(2)}`;
    return (totalBeforeTax + estimatedTax).toFixed(2);
    }
    else{

    }
}

function updateCartElement(i){
    const updateButton = document.querySelector(`.update-button${i}`);
    const area = document.querySelector(`.update-button-area${i}`);
    if(!updateButton) return;
    const newUpdateButton = updateButton.cloneNode(true);
    updateButton.parentNode.replaceChild(newUpdateButton, updateButton);
    newUpdateButton.addEventListener('click', ()=>{
        updateButton.style.display = 'none';
        area.innerHTML = `
            <select class="adet${i}" id="urun-adedi${i}" name="urun_adedi">
                <option value="1">+1</option>
            </select>
            <button onclick="buttonUpdate(${i}); updateCartElement(${i})">
                Confirm
            </button>`;
    })
}

//

/*KARGO TAKİP*/
function yonlendirButton(){
    if (!alinacakUrun) return;
    if(alinacakUrun.children.length === 0){
        document.querySelector('.place-order-at-cart2').style.display = 'none';
    }
    else{
        document.querySelector('.place-order-at-cart2').style.display = 'flex';
    }
}

const alinmisUrunler = document.querySelector('.alinmis-urunler');
const trackInfoArray = JSON.parse(localStorage.getItem('trackInfo')) || [];
function kargoTakipYonlendir(){
    const trackPackage = document.querySelector('.track-package');
    trackPackage.style.display = 'none';
    const newAlinmisUrunler = document.createElement('div');
    const alinmisUrunlerBilgi = document.createElement('div');
    let orderDate;
    let deliveryDate;
    if(newAlinmisUrunler){
    newAlinmisUrunler.appendChild(alinmisUrunlerBilgi);}
    const alinmisUrunlerFotoVsTotal = document.createElement('div');
    
    const newTrackInfoArray = [];
    
    let cokluGenId = randomID();

    const eskiTutarArray = JSON.parse(localStorage.getItem('eskiTutarArray')) || [];
    window.buttonsByIndex.forEach((index,i)=>{
        const srcElement = alinacakUrun.querySelector(`.alinacak-urun-div${index}`);
        if(!srcElement) return;
        const quantity = localStorage.getItem(`quantity${index}`) || 1;
        const urunFoto = srcElement.querySelector('.alinacak-urun-foto')?.src||'';
        const urunIsim = srcElement.querySelector('.alinacak-urun-isim')?.textContent || '';
        orderDate = srcElement.querySelector('.delivery-date')?.textContent||'';
        if(srcElement.querySelector(`input[name="teslimat${index}"]:checked`).value
        === 'standart'){
            deliveryDate = addDaysToDate(orderDate, 7);
        }else if(srcElement.querySelector(`input[name="teslimat${index}"]:checked`).value
        === 'hizli'){
            deliveryDate = addDaysToDate(orderDate, 3);
        }else deliveryDate = orderDate;

        let generateID;

        if (!alinacakUrun) return;
        if(alinacakUrun.children.length>1){
            generateID = cokluGenId;
        }else{
            generateID = randomID();
        }

       
        newTrackInfoArray.push({
            id: generateID,
            orderDate: orderDate,
            deliveryDate: deliveryDate,
            urunIsim: urunIsim,
            quantity: quantity,
            urunFoto: urunFoto,
            index: index
        });

        const alinmisUrunlerFotoVs = document.createElement('div');
        alinmisUrunlerFotoVs.innerHTML =
            `
            <div class="alinmis-urunler-foto-vs alinmis-urunler-foto-vs${i}">
                <div class="alinmis-urun-foto-div alinmis-urun-foto-div${i}">
                    <img src="${urunFoto}" class="alinmis-urun-foto">
                </div>
                <div class="alinmis-urun-isim-vs alinmis-urun-isim-vs${i}">
                    <div class="alinmis-urun-isim alinmis-urun-isim${i}" style="font-weight: bold;">
                        ${urunIsim}
                    </div>
                    <div class="alinmis-urun-teslim alinmis-urun-teslim${i}">
                        Arriving on: ${deliveryDate}
                    </div>
                    <div class="alinmis-urun-quantity alinmis-urun-quantity${i}">
                        Quantity: ${quantity}
                    </div>
                    <button onclick="buttonUpdate(${index})" class="tekrar-sepete-ekle tekrar-sepete-ekle${i}">
                        <img class="buy-again-png"src="buy-again.png">
                        <span class="buy-it-again-text">
                            Buy it again
                        </span>
                    </button>
                    <button onclick="trackPackage('${generateID}')" class="kargo-durumu-gözle kargo-durumu-gözle${i}">
                        Track package
                    </button>
                </div>
            </div>
        `;
        alinmisUrunlerBilgi.innerHTML =  `
        <div class="alinmis-urunler-bilgi">
            <div class="order-placed">
                Order Placed:<span class="alinmis-urunler-tarih">${orderDate}</span>
            </div>
            <div class="order-placed">
                Total: $<span class="alinmis-urunler-total">${hesaplamalarYap(1)}</span>
            </div>
            <div class="order-placed">
                Order ID: <span class="alinmis-urunler-id">${generateID}</span>
            </div>
        </div>`;
        if(alinmisUrunlerFotoVsTotal){
        alinmisUrunlerFotoVsTotal.appendChild(alinmisUrunlerFotoVs);}
    });eskiTutarArray.push(hesaplamalarYap(1));
    localStorage.setItem('eskiTutarArray', JSON.stringify(eskiTutarArray));

    const existingTrackInfo = JSON.parse(localStorage.getItem('trackInfo')) || [];
    const allTrackInfo = [...existingTrackInfo, ...newTrackInfoArray];
    localStorage.setItem('trackInfo', JSON.stringify(allTrackInfo));
    if(newAlinmisUrunler&&alinmisUrunler){
    newAlinmisUrunler.appendChild(alinmisUrunlerFotoVsTotal);
    alinmisUrunler.appendChild(newAlinmisUrunler);}

    document.querySelector('#orders').classList.add('active');
    document.querySelector('#anasayfa').classList.remove('active');
    document.querySelector('#cart').classList.remove('active');

    const indicesToDelete = [...window.buttonsByIndex];
    indicesToDelete.forEach(index => {
        urunuSil(index);
    });
}

function trackDurumu(deliveryDate){
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Delivery tarihini parse et
    const [deliveryDayName, deliveryMonthAndDay] = deliveryDate.split(', ');
    const [deliveryMonthName, deliveryDayNum] = deliveryMonthAndDay.split(' ');
    const deliveryDateObj = new Date();
    deliveryDateObj.setMonth(monthNames.indexOf(deliveryMonthName));
    deliveryDateObj.setDate(parseInt(deliveryDayNum));
    
    // İlerleme yüzdesini hesapla (bugünün konumunu varsay)
    const today = new Date();
    const kalanGun = Math.ceil((deliveryDateObj-today) / (1000 * 60 * 60 * 24));
    
    // İlerleme çubuğunu güncelle
    const trackDurumu = document.querySelector('.track-durumu');
    const preparing = document.querySelector('.preparing');
    const shipped = document.querySelector('.shipped');
    const delivered = document.querySelector('.delivered');
    if(trackDurumu) {
        trackDurumu.style.width = `${((7-kalanGun)/(7))*495}px`;
        if(kalanGun === 0){
            delivered.style.color = 'green';
            shipped.style.color = 'black';
            preparing.style.color = 'black';
        }else if(kalanGun<3.5){
            shipped.style.color = 'green';
            delivered.style.color = 'black';
            preparing.style.color = 'black';
        }else{
            preparing.style.color = 'green';
            delivered.style.color = 'black';
            shipped.style.color = 'black';
        }
    }
}
function addDaysToDate(dateString, days) {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const [dayName, monthAndDay] = dateString.split(', ');
    const [monthName, dayNum] = monthAndDay.split(' ');
    const date = new Date();
    const monthIndex = monthNames.indexOf(monthName);
    date.setMonth(monthIndex);
    date.setDate(parseInt(dayNum));
    date.setDate(date.getDate() + days);
    const newDayName = dayNames[date.getDay()];
    const newMonthName = monthNames[date.getMonth()];
    const newDay = date.getDate();
    
    return `${newDayName}, ${newMonthName} ${newDay}`;
}
function randomID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16|0;
        const v = c === 'x'?r:(r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function trackPackage(id){
    const trackInfoArray = JSON.parse(localStorage.getItem('trackInfo'))||[];
    const trackInfo = trackInfoArray.find(info=>info.id === id);

    if(!trackInfo){
        return;
    }
    const track_package = document.querySelector('.track-package');
    track_package.innerHTML = `
        <a href="#orders" class="view-your-all-orders" onclick="nonTrackPackage()">
            View all orders
        </a>
        <p><b>Arriving on </b><b class="arriving-on">${trackInfo.deliveryDate}</b></p>
        <p class="urun-ismi">${trackInfo.urunIsim}</p>
        <p class="track-quantity">Quantity: ${trackInfo.quantity}</p>
        <p ><img class="track-foto" src="${trackInfo.urunFoto}"></p>
        <div class="track-surec">
            <div class="preparing-shipped-delivered">
                <p class="preparing">preparing</p>
                <p class="shipped">shipped</p>
                <p class="delivered">delivered</p>
            </div>
            <div class="p-s-dcontainer"></div>
            <p class="track-durumu"></p>
        </div>`;
    trackDurumu(trackInfo.deliveryDate);
    alinmisUrunler.style.display = 'none';
    track_package.style.display = 'flex';
    track_package.style.flexDirection = 'column';
}
function nonTrackPackage(){
    alinmisUrunler.style.display = 'flex';
    const trackPackage = document.querySelector('.track-package');
    trackPackage.style.display = 'none';
}

//
window.addEventListener('load', ()=>{
    const trackInfoArray = JSON.parse(localStorage.getItem('trackInfo')) || [];
    const savedTotals = JSON.parse(localStorage.getItem('cartTotal'));
    const eskiTutarArray = JSON.parse(localStorage.getItem('eskiTutarArray')) || [];

    const groupedOrders = {};
    trackInfoArray.forEach((element)=>{
        const key = element.id;
        if(!groupedOrders[key]){
            groupedOrders[key] = {
                id: element.id,
                orderDate: element.orderDate,
                deliveryDate: element.deliveryDate,
                products: []
            };
        }
        groupedOrders[key].products.push(element);
            
    });
    let i = 0;
    Object.keys(groupedOrders).forEach((orderId)=>{
        const order = groupedOrders[orderId];
        const orderBilgiDiv = document.createElement('div');
        const urunlerContainer = document.createElement('div');
        if(urunlerContainer){
        urunlerContainer.appendChild(orderBilgiDiv);}
        orderBilgiDiv.innerHTML = `
        <div class="alinmis-urunler-bilgi">
            <div class="order-placed">
                Order Placed:<span class="alinmis-urunler-tarih">${order.orderDate}</span>
            </div>
            <div class="order-placed">
                Total: $<span class="alinmis-urunler-total">${eskiTutarArray ? eskiTutarArray[i] : '0.00'}</span>
            </div>
            <div class="order-placed">
                Order ID: <span class="alinmis-urunler-id">${order.id}</span>
            </div>
        </div>`;
        i++;
        order.products.forEach((element)=>{
            const orderDiv = document.createElement('div');
            orderDiv.innerHTML = `
                <div class="alinmis-urunler-foto-vs">
                    <div class="alinmis-urun-foto-div">
                        <img src="${element.urunFoto}" class="alinmis-urun-foto">
                    </div>
                    <div class="alinmis-urun-isim-vs">
                        <div class="alinmis-urun-isim" style="font-weight: bold;">
                            ${element.urunIsim}
                        </div>
                        <div class="alinmis-urun-teslim">
                            Arriving on: ${element.deliveryDate}
                        </div>
                        <div class="alinmis-urun-quantity">
                            Quantity: ${element.quantity}
                        </div>
                        <button onclick="buttonUpdate(${element.index})" class="tekrar-sepete-ekle">
                            <img class="buy-again-png" src="buy-again.png">
                            <span class="buy-it-again-text">Buy it again</span>
                        </button>
                        <button onclick="trackPackage('${element.id}')" class="kargo-durumu-gözle">
                            Track package
                        </button>
                    </div>
                </div>
            `;
            if(urunlerContainer){
            urunlerContainer.appendChild(orderDiv);}
        });
        if(alinmisUrunler){
        alinmisUrunler.appendChild(urunlerContainer);}  
    });
    window.buttonsByIndex.forEach(index => {
        const quantityEl = document.querySelector(`.quantity${index}`);
        const savedQty = localStorage.getItem(`quantity${index}`);
        if(quantityEl && savedQty) {
            quantityEl.textContent = savedQty;
        }
        const radioButtons = document.querySelectorAll(`input[name="teslimat${index}"]`);
        radioButtons.forEach(radio => {
            radio.addEventListener('change', ()=>{ hesaplamalarYap(1); });
        });
        updateCartElement(index);
    });
    if (!alinacakUrun) return;
    if(savedTotals && alinacakUrun.children.length > 0){
        window.buttonsByIndex.forEach(index => {
            const radioButtons = document.querySelectorAll(`input[name="teslimat${index}"]`);
            radioButtons.forEach(radio => {
                radio.addEventListener('change', ()=>{hesaplamalarYap(1)});
            });
        });
        hesaplamalarYap(1);
    }
    yonlendirButton();
    nonTrackPackage();
})



windowControl();
window.addEventListener('resize', windowControl, yonlendirButton);
window.buttonUpdate = buttonUpdate;
window.urunuSil = urunuSil;
window.trackPackage = trackPackage;
window.nonTrackPackage = nonTrackPackage;
window.buttonsByIndex = window.buttonsByIndex;
window.randomID = randomID;
window.addDaysToDate = addDaysToDate;
window.hesaplamalarYap = hesaplamalarYap;