import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  characters: Character[] = [
    {
      name: 'Krillin',
      power: 500,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegetta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    //debugger;

    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    //debugger;

    this.characters.splice(index);
  }
}
