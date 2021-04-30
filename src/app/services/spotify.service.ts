import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }

  searchTrack(query: string) {
    let params: string = [
      `q=${query}`, `type=track`
    ].join("&");
    let queryUrl: string = `https://api.spotify.com/v1/search?${params}`;
    return this.httpClient.get(queryUrl)
  }
}
