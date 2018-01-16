import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {

        this.spotifyService.getArtistas()
            .subscribe(artistas => {
                console.log('Informacion lista!');
                console.log(artistas);
        });

  }

  ngOnInit() {
  }

}