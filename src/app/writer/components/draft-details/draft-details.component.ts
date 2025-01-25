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
  private writerService: WriterService = inject(WriterService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  public draft: any = {};
  
  ngOnInit(){
      this.activatedRoute.params.subscribe( (params) => {
        const id: string = params["id"]  
        this.writerService.getArticleById(id).subscribe( (data: any) => {
              this.draft = data;
          } )
      })
  }
}
