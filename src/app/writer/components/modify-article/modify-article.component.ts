import { Component, inject } from '@angular/core';
import { WriterService } from '../../services/writer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-article',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modify-article.component.html',
  styleUrl: './modify-article.component.css'
})
export class ModifyArticleComponent {
private writerService: WriterService = inject(WriterService);
private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private id: string = ""; 
  private image!: File;
  private articleFormData: FormData = new FormData();

  draftForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    subtitle: new FormControl("", Validators.required),
    image: new FormControl(""),
    date: new FormControl("", Validators.required),
    body: new FormControl("", Validators.required),
    section: new FormControl("", Validators.required),
    author: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required)
  })

  ngOnInit(){
    this.activatedRoute.params.subscribe( (params) => {
      this.id = params["id"],
      this.writerService.getArticleById(this.id).subscribe( (data: any) => {
        this.draftForm.setValue({
          title: data.title,
          subtitle: data.subtitle,
          date: data.date,
          image: data.image,
          body: data.body,
          section: data.section,
          author: data.author,
          status: data.status
        })
        } )
    })
}

  
 
// Método que maneja la selección del archivo
onFileSelected(event: any): void {
  const input = event;
  if (input?.files?.length) {
    const file = input.files[0];  // Captura el archivo seleccionado
    this.image = file
  }
}

  handleEditArticleForm(){
 
    if(this.draftForm.valid) {
      // this.articleFormData.append("title", this.draftForm.get("title")?.value);
      // this.articleFormData.append("subtitle", this.draftForm.get("subtitle")?.value);
      // this.articleFormData.append("image", this.image? this.image: this.draftForm.get("image")?.value);
      // this.articleFormData.append("date", this.draftForm.get("date")?.value);
      // this.articleFormData.append("body", this.draftForm.get("body")?.value);
      // this.articleFormData.append("section", this.draftForm.get("section")?.value);
      // this.articleFormData.append("author", this.draftForm.get("author")?.value);
      // this.articleFormData.append("status", this.draftForm.get("status")?.value);

      // cuando tenga los endpoints del back, descomento lo de arriba y sustituyo lo que se envía por articleFormData
      this.writerService.modifyArticle(this.id, this.draftForm).subscribe({
              next: (data: any) => {
                  this.router.navigate(["/writer/draft-list"])
              },
              error: (error: any) => {
                  console.log(error)
              }
          })
    }
  }
}
