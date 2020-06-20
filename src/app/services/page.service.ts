import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tile } from '../model/tile';
import { TileDetail } from '../model/TileDetail';


@Injectable({
    providedIn: 'root',
})
export class PageService {
    constructor(private http: HttpClient) { }

    getTileList(): Observable<Tile> {
        return this.http.get<Tile>('../../assets/json/tiles.json');
    }

    getTileDetail(): Observable<TileDetail[]> {
        return this.http.get<TileDetail[]>('../../assets/json/tiledetail.json');
    }
}
