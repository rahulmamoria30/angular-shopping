import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service'; // Adjust the path as necessary

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private fetchDataService: FetchDataService) {
    this.productForm = this.fb.group({
      title: [''],
      description: [''],
      price: [null],
      image: [''],
      rating: this.fb.group({
        rate: [null],
        count: [null]
      })
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          this.imagePreview = e.target.result as string | ArrayBuffer;
        }
      };
      reader.readAsDataURL(file);
      this.productForm.patchValue({ image: file });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log("User added products ",this.productForm.value )
      this.fetchDataService.addProductFromForm(this.productForm.value);
      this.productForm.reset();
      this.imagePreview = null;
    } else {
      console.log("Form is invalid");
    }
  }
}
