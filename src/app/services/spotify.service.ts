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

  getArtistas(termino: string){
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`;

    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCJfsu3ZNRNhnbPuDQpFPLUl_Uj-RISo5Xx8AxKQOF6QdiXSElvL1dDn-O-0G7TymtKQBWAzw6LoqC08es'
    });
    return this.http.get(url, {headers})
            .map(( resp: any) => {
              this.artistas = resp.artists.items;
              return this.artistas;
            });



  }

}
