import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { StateModel } from '../../../store/models/state.model'

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = 'http://localhost:3000/file'


  constructor(private http: HttpClient,private store:Store<{user:StateModel}>) {}

  uploadImage(file: File): Observable<any> {
    const url = `${this.baseUrl}/upload-photo`
    const formData = new FormData()
    this.store.select('user').subscribe(user => {
      formData.append('file', file)
      formData.append('userId', user.user!.id.toString());
    })

    return this.http.post<any>(url, formData)
  }

  getImage(imageName: string): Observable<Blob> {
    const url = `${this.baseUrl}/${imageName}`
    return this.http.get(url, { responseType: 'blob' })
  }

}
