import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();
  private productsFromFormSubject = new BehaviorSubject<any[]>([]);
  productsFromForm$ = this.productsFromFormSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchData(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      tap(response => this.productsSubject.next(response))
    ).subscribe();
  }

  addProduct(product: any): void {
    const currentProducts = this.productsSubject.value;
    this.productsSubject.next([...currentProducts, product]);
  }

  addProductFromForm(product: any): void {
    const currentProducts = this.productsFromFormSubject.value;
    this.productsFromFormSubject.next([...currentProducts, product]); 
  }

}
