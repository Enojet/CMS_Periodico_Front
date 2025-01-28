import { Component, inject } from '@angular/core';
import { WriterService } from '../../services/writer.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-draft-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './draft-list.component.html',
  styleUrl: './draft-list.component.css'
})
export class DraftListComponent {
  
  // TO DO:
  // coger el id del usuario loggeado
  // mostrar los artículos creados por ese usuario
  // agruparlos en el html por borradores, en revisión o publicados
  // los borradores tendrán un botón para editar y los que están en revisión o publicados no

  private writerService: WriterService = inject(WriterService);
  public articleList: any = [];
  private authorId: any = localStorage.getItem("_id");

  
  ngOnInit(){
    this.writerService.getArticlesByAuthorId(this.authorId).subscribe((data: any)=>{
        //this.articleList = data.filter((data: any) => data.status === 'draft');
        this.articleList = data
    })
  }
}
