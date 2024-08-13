import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productsFromApi: any[] = []; // Array to hold fetched data
  public productsFromForm: any[] = []; // Array to hold products from the form

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit(): void {
    // Fetch data from API
    this.fetchDataService.fetchData();

    // Subscribe to the products observable
    this.fetchDataService.products$.subscribe({
      next: (data) => {
        this.productsFromApi = data; // Update products from API
      },
      error: (err) => console.error('Error fetching data:', err)
    });

    // Subscribe to the products from form observable
    this.fetchDataService.productsFromForm$.subscribe({
      next: (data) => {
        console.log("Data of users", this.productsFromForm)
        this.productsFromForm = data; // Update products from form
      },
      error: (err) => console.error('Error fetching products from form:', err)
    });
  }
}
