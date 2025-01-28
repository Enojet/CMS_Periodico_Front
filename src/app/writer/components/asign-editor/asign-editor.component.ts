import { Component, inject } from '@angular/core';
import { WriterService } from '../../services/writer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asign-editor',
  standalone: true,
  imports: [],
  templateUrl: './asign-editor.component.html',
  styleUrl: './asign-editor.component.css'
})
export class AsignEditorComponent {
  // TO DO:
  // que al pinchar en el botón de "asignar editor y mandar a revisión" se muestren los usuarios editores
  // al pinchar en un usuario ->
  // asignar editor: aplicar el endpoint con el id del editor y el del artículo
  // cambiar estatus: aplicar el endpoint con el id del artículo y el nuevo estado "revisable"
  // redigir al panel de los artículos del usuario, donde debería aparecer ese artículo como "revisable"


  private writerService: WriterService = inject(WriterService);
  public editors: any = [];
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private id: string = ""; // ID del artículo que se está editando
  private editorId: string = ""; // ID del editor que será asignado
  private status: string = "draft"; 

  ngOnInit(){
    this.writerService.getAllUsers().subscribe((data: any)=>{
      this.editors = data.filter((data: any) => data.role === 'editor');
  }, error => {
    console.error('Error al cargar los editores', error)
  })
  }
  
  // asignandsendtoeditor -> función con dos acciones, al pinchar en el boton del editor deseado:
  // 1. se asigna el id del editor a la propiedad "editorid" del modelo usuario
  // 2. se cambia el status del artículo a "revisable"
  // 3. hacer un alert y redirigir a lista de borradores

  assignAndSendToEditor(){
    this.writerService.assignArticleEditor(this.id, this.editorId).subscribe((params: any) => {
      const articleId = params["id"]; // guardo el id del artículo
      
      this.writerService.modifyArticleStatus(articleId, this.status).subscribe((params: any) => {
        this.status = "revisable";
        this.router.navigate(['/writer/draft-list']);
        alert('Artículo asignado y en revisión');
      
      }, error => {
        console.error('Error al modificar el estado del artículo', error);
        alert('Hubo un error al actualizar el estado del artículo.');
      });
    
    }, error => {
      console.error('Error al asignar editor', error);
      alert('Hubo un error al asignar el editor.');
    });
  }


}
