import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {
    // this.searchTag(this.tags[0]);
  }

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ): void {
    this.gifsService.searchTag( tag );
  }

}
