/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

class StringNumberPair implements KeyValuePair<string, number> {
  constructor(public key: string, public value: number) {}

  display(): void {
    console.log(`Key: ${this.key}, Value: ${this.value}`);
  }
}

export {};
