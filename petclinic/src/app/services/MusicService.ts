import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    constructor(private http: HttpClient) {}

    obtenerCanciones() {
        return this.http.get("https://itunes.apple.com/search?term=beatles&entity=song&limit=10");
    }

}