// 2.1.
let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;

// 2.2.
let city = "Москва";          // string
let population = 12_000_000;  // number
let isCapital = true;         // boolean

// 3.1.
function formatPrice(value: number): string {
  return value.toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " р";
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function logMessage(message: string): void {
  console.log(message);
}

function repeat(text: string, times: number = 2): string {
  return text.repeat(times);
}

function describeUser(name: string, age?: number): string {
  if (age !== undefined) return `${name}, возраст: ${age}`;
  return name;
}

console.log({ studentName, studentAge, isEnrolled, middleName, hobby, city, population, isCapital });
console.log(formatPrice(1234.5));
console.log(clamp(15, 0, 10));
logMessage("Привет");
console.log(repeat("abc"));
console.log(describeUser("Иван"));
console.log(describeUser("Иван", 25));

import { createBook, markAsRead, getBookInfo, countReadBooks } from "./library";

const books = [
  createBook("1984", "Джордж Оруэлл", 1949),
  createBook("Мастер и Маргарита", "Михаил Булгаков", 1967),
  createBook("Преступление и наказание", "Фёдор Достоевский", 1866),
];

const firstBook = books[0];
const thirdBook = books[2];
if (firstBook && thirdBook) {
  books[0] = markAsRead(firstBook);
  books[2] = markAsRead(thirdBook);
}

books.forEach((book) => console.log(getBookInfo(book)));
console.log(`Прочитано книг: ${countReadBooks(books)}`);