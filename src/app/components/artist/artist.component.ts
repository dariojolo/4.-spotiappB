import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: []
})
export class ArtistComponent implements OnInit {

artista: any = {};
canciones:any[] = [];

  constructor( private activateRoute: ActivatedRoute,
                public spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activateRoute.params
          .map( params => params['id'])
          .subscribe(id => {
            console.log(id);
            this.spotifyService.getArtista(id)
              .subscribe(artista => {
                console.log(artista);
                this.artista = artista;
          });
          this.spotifyService.getTop(id)
            .map((resp:any) => resp.tracks)
            .subscribe(canciones => {
              console.log(canciones);
              this.canciones = canciones;
        });
  });

}
}
