//1)

const customer = {
    firstName: 'Oleksij',
    surName: 'Derevianko',
    eMail: 'derevyanko.alexey88@gmail.com',
    password: 'qwerty',
    telNumber: '+380987506623',
    addres: {
        city: 'Kharkiv',
        street: 'Svobody sqr.',
        houseNumber: 4,
        getAddres () {
        return `${this.city}`+', '+`${this.street}`+', '+`${this.houseNumber}`;
        },
    },
    changeTelNumber (newNumber) {
        newNumber = String (prompt ('input new number') );
        this.telNumber = newNumber;
    },
    customerCard () {
        document.write ('<article style="width: 400px; height: 400px; text-align: center; border: 1px solid black; padding: 10px">');
        if (this.firstName !== undefined) {
            document.write (`<h2> Ім'я: ${this.firstName}</h2>`)
        };
        if (this.surName  !== undefined) {
            document.write (`<h2> Прізвище: ${this.surName}</h2>`)
        };
        if (this.gender === 'male') {
            document.write(`<p> Стать: чоловік </p>`)
        } else { if (this.gender === 'female') {
            document.write(`<p> Стать: жінка </p>`)
            };
        };
        document.write (`<p> КОНТАКТИ: </p>`);
        if (this.eMail  !== undefined) {
            document.write (`<p> eMail: ${this.eMail}</p>`)
        };
        if (this.telNumber  !== undefined) {
            document.write (`<p> Номер телефону: ${this.telNumber}</p>`)
        };
        if (this.addres !== undefined) {
            document.write (`<p> Адреса: ${this.addres.getAddres ()}</p>`)
        };            
        document.write ('</article>');
    },  
};

console.log(customer);

const fullAddres = customer.addres.getAddres ();
console.log(fullAddres);

customer.changeTelNumber ();
console.log(customer);

customer.gender = 'male';
console.log(customer);

delete customer.telNumber;
console.log(customer);

const customer1 = Object.assign ({}, customer);
console.log(customer1);

const customer2 = {...customer};
console.log(customer2);

//1*

customer.customerCard ();

//2 

const cat = {   
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
};

for (key in cat) {
    console.log (`${key}:>>`, cat[key])
};

//3

function Book (auth, ttl, year, pr, pubHsCity, pubHsName) {
        function PublicHouse () {
        this.publHouseCity = pubHsCity;
        this.pubHouseName = pubHsName;
    };
    this.author = auth;
    this.title = ttl;
    this.yearOfPublic = year;
    this.price = pr;
    this.publHouse = new PublicHouse (pubHsCity, pubHsName);
};

const bookProto = {};

bookProto.changePrice = function (newPrice) {
    newPrice = prompt ('input new price');
        this.price = newPrice;
};

bookProto.calcAge = function () {
    return `З часу видання минуло ${2025 - this.yearOfPublic} років`;
};

Book.prototype = bookProto;

const book1 = new Book ('Стівен Кінг', 'Під куполом', 2009, 540, 'Київ', 'КСД');

console.log(book1);

console.log(book1.calcAge());

book1.changePrice();
console.log(book1);


