import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entreprise } from '../model/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseServiceService {
  private apiServeUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addEntreprise(organId:number,entreprise:Entreprise): Observable<Entreprise>
  {
    return this.http.post<Entreprise>(`${this.apiServeUrl}/admin/organisations/${organId}/entreprises`,entreprise);
  }
}