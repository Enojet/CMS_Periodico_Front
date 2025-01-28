import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WriterService } from '../../services/writer.service';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
  // TO DO:
  // crear botón de "crear artículo" en el draft-list que redidirija a este componente
  // modificar la lógica para que se asigne el id del usuario que lo está creando
  // que el campo author sea el fullname del usuario que lo está creando
  
  
  private writerService: WriterService = inject(WriterService);
  private router: Router = inject(Router);
  
  draftForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    subtitle: new FormControl("", Validators.required),
    image: new FormControl(null, Validators.required),
    date: new FormControl("", Validators.required),
    body: new FormControl("", Validators.required),
    section: new FormControl("", Validators.required),
    author: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required)
  })
  
// Método que maneja la selección del archivo
onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input?.files?.length) {
    const file = input.files[0];  // Captura el archivo seleccionado
    this.draftForm.patchValue({ image: file });  // Actualiza el FormControl con el archivo seleccionado
  }
}

  handleCreateArticleForm(){
      if(this.draftForm.valid) {
          this.writerService.createNewArticle(this.draftForm.value).subscribe({
              next: (data: any) => {
                  console.log(data);
                  this.router.navigate(["/writer/draft-list"])
              },
              error: (error: any) => {
                  console.log(error)
              }
          })
      }
  }
}
