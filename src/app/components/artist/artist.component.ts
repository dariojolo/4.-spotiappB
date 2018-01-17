import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: []
})
export class ArtistComponent implements OnInit {

  constructor( private activateRoute: ActivatedRoute,
                public spotifyService: SpotifyService) { }

  ngOnInit() {
  }

}
