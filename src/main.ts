class Movie{
  private _producer: string;
  get producer(): string {
    return this._producer;
  }
  set producer(value: string) {
    this._producer = value;
  }
  constructor(public title: string, public year: number){
    this.title = title;
    this.year = year;
    this._producer = '';
  }

  print(): void{
    console.log(`${this.title} was released in ${this.year}`);
  }
}

let m:Movie = new Movie('The Godfather', 1972);
m.print()











// interface Duck{
//    walk: () => void;
//    quack: () => void;
//    id: number;
//    name: string;
// };


// class DuckClass implements Duck{ 
//   constructor(public id: number, public name: string){  
//     this.id = id;
//     this.name = name;
//   }
//   walk()  {
//     console.log('Duck is walking');
//   }
//   quack(){
//     console.log('Duck is quacking');
//   }
// };



// function actOnDuck(duck:Duck){
//     duck.walk();
//     duck.quack(); 
// };


// let duck : Duck = {
//     id:12,
//     name: 'Daffy',
//     walk: () => {
//       console.log('Duck is walking');
//     },
//     quack: () =>{
//       console.log('Duck is quacking');
//     }
// };


// actOnDuck(duck);












// let names: string[] = ['Stefan', 'John', 'Jane'];
// let names2: Array<string> = ['Stefan', 'John', 'Jane'];


// let age : number | string;

// age = 52;
// age = "Old";


// class Player{
//     jersey: number;
//     name: string;

//     constructor(jersey: number, name: string){
//         this.jersey = jersey;
//         this.name = name;
//     }
// }

// let allPlayers: Player[] = [new Player(10, 'Messi'), new Player(7, 'Ronaldo')];

// function findPlayer(jersey:number): Player|null {
//   for(let player of allPlayers) {
//     if (player.jersey === jersey){
//       return player;
//     }
//   }
//   return null;
// }
// let x = findPlayer(11);
// if(x === null){
//   console.log('Player not found');
// }
// console.log(x)


// // function getSomeValue() {
// //     return 123;
// // }

// // let name = 'Stefan';

// // console.log(name);

// // let address: string = '123 Main St';
// // console.log(address);

// // let z = getSomeValue();

