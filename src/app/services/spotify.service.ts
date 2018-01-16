import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[];
//Prueba  
  constructor(public http: HttpClient) {
    console.log("servicio spotify listo");
  }

  getArtistas(){
    let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';

    let headers = new HttpHeaders({
      'authorization': 'Bearer BQDY89pJxswgobsOW_3HTE-Za9Cra-fkSmzExHI3TqcK697VPdmJlrhtwBugLAp0B28vChv-ZqrYtdhX5Mk'
    });
    return this.http.get(url, {headers})
            .map(( resp: any) => {
              this.artistas = resp.artists.items;
              return this.artistas;
            });



  }

}
