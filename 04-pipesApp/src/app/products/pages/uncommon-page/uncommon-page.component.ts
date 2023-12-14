import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Fermin';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Pepe';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fran'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',

  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fermin',
    age: 22,
    adress: 'Buenos Aires, Argentina'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  })

}
