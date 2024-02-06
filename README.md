### Variables

Переменные - это ячейка памяти в оперативной памяти

string - строка
number - число
boolean - true или false
Array - список
Object - объект
any - всё что угодно

НО можно не писать тип

example 1:

```typescript
let name: string = "Hello world!";
let age: number = 12;
let isStarted: boolean = false;
```

exaple 2:

```typescript
let arr0: Array<any> = ["hi", 132, false];
let arr1: Array<number> = [99, 132, 1000];
let arr2: Array<string> = ["hi", "hello"];
var numberList = [123, 12345, 123456];
arr0[1]; // 132

let obj0: Object = { arr0, arr1 };
obj.arr0; // ["hi", 132, false]

var none: null; // ничего
var undefined1: undefined; // ничего
```

### Enum

Enum - это перечисление

```typescript
enum simpleEmun {
    Up,
    Down,
    Left,
    Rigth,
}

simpleEmun[0]; // Up
simpleEmun.Up; // 0
simpleEmun.Down; // 1
```

### Function

функция - это часть кода

```typescript
function print(msg): any {
    console.log(msg);
}
// never когда функция возрощяет ошибку
function error(err): never {
    throw TypeError(err);
}
```

### Interface

Интерфейс - это определедие типа

```typescript
interface user = {
  username: string;
  email: string;
  password: string;
  [propName: string]: any; // это чтобы можно бы добовлять компоненты
};

var Ivan: Readonly<user> = {
  // его можно только читать
  username: "YulaiN",
  email: "example@gmail.com",
  password: "vhyufbxhdgluisdbghhhibdfjshbrcccnjkdfewfjtuegifhkusivdgdkvhvgvdhk",
};

const Ivan1: Required<user> = {
  email: "example@gmail.com",
  password: "vhyufbxhdgluisdbghhhibdfjshbrcccnjkdfewfjtuegifhkusivdgdkvhvgvdhk",
}; // Все поля user обязательные. Тут ошибка нету поля username.
```

### Class

Класс - это

```typescript
// протокол (описание)
interface pers {
    name: string;
    age: number;
    [propName: string]: any; // можно ещё добавлять переменные
}

class Persion implements pers {
    // implements pers - это добовление в класс протокола
    public name: string;
    public age: number;

    constructor(setName, setAge) {
        this.name = setName;
        this.age = setAge;
    }
    // функции класа
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

const im = new Persion("Yulai", 999); // экземляр класса
var age = im.getAge(); // 999
var nameIm = im.getName(); // Yulai

class Yulai extends Persion {
    // extends Persion - это наследование от Persion
    public name = "Yulai";
    getHobby() {
        console.log("Nothings!!!");
    }
}

const im_updated = new Yulai("Azamat", 100); // экземляр класса
var hobby = im_updated.getHobby(); // Nothings!!!
```

### Generic

Generic (Общие типы) - это

```typescript
const getter = (data: number): number => data / 2;
var output = getter(2);
```

Переменная output будет равна 2

```typescript
const getter = (data: string): string => data;
var output = getter("test").length;
```

Переменная output будет равна 4, потому что в слово "test" всего 4 буквы.

```typescript
const getter = <T>(data: T): T => data;
var output = getter<string>("test").length;
```

Можно вместро типа писать T но когда вызываешь "функцию" надо прописовать тип.

```typescript
type T = any;

const T = <T>(data: T): T => data;

class Persion {
    public name: T;
    public age: T;

    constructor(setName, setAge) {
        this.name = setName;
        this.age = setAge;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
```

Вместо типа можно писать T, и age и name могуть быть и number, и string.

### Decorators

Декораторы нужны для модифецирование поведение сущности.

```typescript
type T = any;

const logClass = (constructor: Function) => {
    console.log(constructor); // какому классу дан этот декоратор
};

const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey); // она выдаст название переменной
};

@logClass
class Persion {
    @logProperty
    public name: string;
    public age: T;

    constructor(setName, setAge) {
        this.name = setName;
        this.age = setAge;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
```
