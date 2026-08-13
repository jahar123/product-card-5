
class Drink {
    #temperature;
    constructor(name, size, price, temperature = 20) {
        if (this.constructor === Drink) {
            throw new Error("Выберите конкретный напиток");
        }
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return `${this.name}, ${this.size}мл, ${this.price}руб.`;
    }

    getTemp() {
        return this.#temperature;
    }

    setTemp(newTemperature) {
        this.#temperature = newTemperature;
    }

    #prepareDrink() {
        console.log(`[Процесс] Напиток ${this.name} готовится!`);

        this.setTemp(85);
        console.log(`[Процесс] Температура поднялась до: ${this.getTemp()}°C`);
    }


    serveDrink() {
        this.#prepareDrink();
        console.log(`[Готово] Ваш ${this.name} готов!`);
    }
}

class Lemonade extends Drink {
    constructor(name, size, price, temperature, flavor) {
        super(name, size, price, temperature);
        this.flavor = flavor;
    }

    getInfo() {
        return `${super.getInfo()} | Вкус: ${this.flavor}`;
    }

    serveDrink() {
        console.log(`[Процесс] Смешиваем сироп и газировку для ${this.name}...`);
        this.setTemp(5);
        console.log(`[Процесс] Добавлен лед. Температура: ${this.getTemp()}°C`);
        console.log(`[Готово] Освежающий ${this.name} подан!`);
    }
}

class Tea extends Drink {
    constructor(name, size, price, temperature, teaType) {
        super(name, size, price, temperature);
        this.teaType = teaType;
    }

    getInfo() {
        return `${super.getInfo()} | Сорт чая: ${this.teaType}`;
    }
}

class Coffee extends Drink {
    constructor(name, size, price, temperature, beanType, milkType) {
        super(name, size, price, temperature);
        this.beanType = beanType;
        this.milkType = milkType;
    }

    getInfo() {
        return `${super.getInfo()} | Зерно: ${this.beanType}, Молоко: ${this.milkType}`;
    }
}

class Cafe {
    constructor(nameCafe, location) {
        this.nameCafe = nameCafe;
        this.location = location;
    }

    getInfoCafe() {
        return `${this.nameCafe}, ${this.location}`;
    }

    orderDrink(drink) {
        console.log(`\n--- Новый заказ в кафе "${this.nameCafe}" ---`);
        console.log(`Информация о напитке: ${drink.getInfo()}`);
        drink.serveDrink();
    }
}

const cafe = new Cafe('Кофе и Код', 'ул. Программистов, д. 404');

const cappuccino = new Coffee('Капучино', 350, 250, 20, 'Арабика', 'Миндальное');
const greenTea = new Tea('Сенча', 400, 180, 20, 'Зелёный');
const berryLemonade = new Lemonade('Ягодный Микс', 500, 300, 20, 'Много льда');

console.log(cafe.getInfoCafe());

cafe.orderDrink(cappuccino);
cafe.orderDrink(greenTea);
cafe.orderDrink(berryLemonade);