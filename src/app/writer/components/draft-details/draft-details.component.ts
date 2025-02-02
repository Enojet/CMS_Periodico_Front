import { Component, inject } from '@angular/core';
import { WriterService } from '../../services/writer.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-draft-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './draft-details.component.html',
  styleUrl: './draft-details.component.css'
})
export class DraftDetailsComponent {
  
  // TO DO:
  // usar el endpoint para mostrar el artículo por parámetros
  // dependiendo del status -> los borradores tendrán un botón para editar y los que están en revisión o publicados no
  
  
  private writerService: WriterService = inject(WriterService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  public article: any = {};
  
  ngOnInit(){
      this.activatedRoute.params.subscribe( (params) => {
        const id: string = params["id"]  
        this.writerService.getArticleById(id).subscribe( (data: any) => {
          
              this.article = data[0];
             
          } )
      })
  }
}
