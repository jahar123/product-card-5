      // Задание 3:

const userProfile = {
  firstName: 'Джохар',
  lastName: 'Айдамиров',
  age: '27',
  email: 'aires24699@gmail.com',
  job: 'програмист',
  position: 'ученик',
  country: 'Россия',
  citi: 'Сочи',
  realitionshipStatus: 'не женат',
};

      // Задание 4: 

const myCar = {
  brand: 'Toyota',
  model: 'Corolla',
  year: '2019',
  color: 'белый',
  transmission: 'автоматическая',
};

myCar.owner = userProfile;

       // Задание 5:

function checkMaxSpeed(carObject) {
  if (carObject.maxSpeed === undefined) { 
     carObject.maxSpeed = 260;
    }
}

checkMaxSpeed(myCar);
console.log(myCar.maxSpeed);

       // Задание 6:

function showValue(obj, propertyName) { 
      console.log(obj[propertyName]);

}       

      // Задание 7:

const products = ['Ноудбук', 'Монитор', 'Клавиатура', 'Мышь'];

      // Задание 8:

const booksList = [                
  {
    title: "Гарри Поттер",          
    author: "Дж. К. Роулинг",       
    year: 1997,                     
    coverColor: "red",             
    genre: "Фэнтези"               
  },
  {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    year: 1892,
    coverColor: "brown",            
    genre: "Детектив"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "black",           
    genre: "Роман"
  }
];

booksList.push({                    
  title: "Властелин Колец",
  author: "Дж. Р. Р. Толкин",
  year: 1954,
  coverColor: "green",              
  genre: "Фэнтези"
});

console.log(booksList);  

      // Задание 9:

const marvelBooks = [                
  {
    title: "Человек-Паук",           
    author: "Стэн Ли",                
    year: 1962,                      
    coverColor: "red",                
    genre: "Комикс"                   
  },
  {
    title: "Железный Человек",
    author: "Стэн Ли",
    year: 1963,
    coverColor: "gold",              
    genre: "Комикс"
  }
];

const allBooks = [...booksList, ...marvelBooks]
console.log(allBooks);                

      // Задание 10:

function getRareBooks(booksArray) {
  return booksArray.map(book => {
    const isRare = book.year > 2000;
    return {
      ...book,
      isRare: isRare
    };
  });
}

const finalBooksList = getRareBooks(allBooks);
console.log(finalBooksList);
     