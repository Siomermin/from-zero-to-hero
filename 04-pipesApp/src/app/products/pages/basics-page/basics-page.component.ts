import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {
  public nameLower: string = 'fermin';
  public nameUpper: string = 'FERMIN';
  public fullName: string = 'FerMIn GonZaLeZ';


  public customDate: Date = new Date();
}
