import { WriterService } from './../../../writer/services/writer.service';
import { Component, inject } from '@angular/core';
import { EditorService } from '../../services/editor.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-revisable-details',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './revisable-details.component.html',
  styleUrl: './revisable-details.component.css'
})
export class RevisableDetailsComponent {

  private editorService: EditorService=inject(EditorService);
  private writerService: WriterService=inject(WriterService);
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private router: Router = inject(Router);
    public article: any = {};
    public guardado:boolean=true

    draftForm!: FormGroup;
    


    
    ngOnInit(){

      this.draftForm = new FormGroup({
        title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        subtitle: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        image: new FormControl('null', { nonNullable: true, validators: [Validators.required] }),
        body: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        highlight: new FormControl('false', { nonNullable: true, validators: [Validators.required] })
      });

        this.activatedRoute.params.subscribe( (params) => {
          const id: string = params["id"]  
          this.editorService.getArticleById(id).subscribe( (data: any) => {
                this.article = data[0];
                this.draftForm.patchValue({
                  title: this.article.title || '',
                  subtitle: this.article.subtitle || '',
                  image: this.article.image || 'null',
                  body: this.article.body || '',
                  highlight: this.article.highlight !== undefined ? this.article.highlight.toString() : 'false'
                });
            } )
        })
        
    }
    

   
  

    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input?.files?.length) {
        const file = input.files[0];  // Captura el archivo seleccionado
        this.draftForm.patchValue({ image: file });  // Actualiza el FormControl con el archivo seleccionado
      }
    }

    handleCreateArticleForm(){
      if(this.draftForm.valid) {
        this.activatedRoute.params.subscribe( (params) => {
          const id:string=params["id"]
          console.log("este es el id"+id);
          this.writerService.modifyArticleContent(id,this.draftForm.value).subscribe({
                   next: (data: any) => {
             alert("Borrador modificado con éxito")
             this.router.navigate(['/editor'])
           },
           error: (error: any) => {
             console.log(error);
             alert("Se produjo un error")
             }
           })
         })
       
      }else{
        console.log(this.draftForm.value);
        alert("No se ha podido guardar el articulo");
      }
  }


  changeStatus(status:string){

    if (!this.guardado){
      alert("Debes guardar primero para realizar esta operación");
    }else{
      this.activatedRoute.params.subscribe( (params) => {
        const id:string=params["id"]
        this.editorService.changeStatus(id,status).subscribe({
            next: (data: any) => {
                this.guardado=true;
                alert("Cambiado el estatus con éxito");
            },
            error: (error: any) => {
                console.log(error)
            }
        })
      })
    }

  }

}
