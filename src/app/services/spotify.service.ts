import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[];
  url_spotify:String='https://api.spotify.com/v1/';
  token:string = 'BQBXsfA9wp4nul-xWQd2iZ1HzmBbt72yY07pqMDUrj4LXyjWFD6itZfySI_8iEYE-4N_G-sXR3mi6sQZV5s';
//Prueba
  constructor(public http: HttpClient) {
    console.log("servicio spotify listo");
  }
 private getHeaders(): HttpHeaders {
   let headers = new HttpHeaders({
     'authorization': 'Bearer ' + this.token
   });
   return headers;
 }

 getTop(id:String){
   let url = `${this.url_spotify}artists/${id}/top-tracks?country=US`;

   let headers = this.getHeaders();

   return this.http.get(url, { headers });
 }
 getArtista(id:String){
   let url = `${this.url_spotify}artists/${id}`;

   let headers = this.getHeaders();

   return this.http.get(url, { headers });
 }
  getArtistas(termino: string){
    let url = `${this.url_spotify}search?query=${termino}&type=artist&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers})
            .map(( resp: any) => {
              this.artistas = resp.artists.items;
              return this.artistas;
            });
  }

}
