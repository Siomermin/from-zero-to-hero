import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss'],
})
export class PropertiesPageComponent implements OnInit {
  public counter = signal(10);

  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public fullName = computed<string>(() => `${this.user()!.first_name} ${this.user()!.last_name}`);

  public userChangedEffect = effect( () => {

    console.log(`${this.user().first_name} - ${this.counter()}`);

  });

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update( current => current + 1);

      if ( this.counter() == 15 ) {
        this.userChangedEffect.destroy();
      }
    }, 1000)
  }

  increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }




  onFieldUpdated(field: string, value: string) {
    // console.log({ field, value });
    // this.user.set({
    //   ...this.user(),
    // })

    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'avatar':
          current.avatar = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number(value);
          break;
      }

      return current;
    });
  }


}
