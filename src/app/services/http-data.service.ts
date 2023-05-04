import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Room } from "../models/room.model";

@Injectable({
  providedIn: "root",
})
export class HttpDataService {
  base_url = "http://localhost:3000/Marriotelo";
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("An error ocurred: ", error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  getAllRooms(): Observable<Room> {
    return this.http
      .get<Room>(this.base_url)
      .pipe(retry(2), catchError(this.handleError));
  }
}
