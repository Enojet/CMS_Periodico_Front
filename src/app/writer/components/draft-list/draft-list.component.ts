import { Component, inject } from '@angular/core';
import { WriterService } from '../../services/writer.service';

@Component({
  selector: 'app-draft-list',
  standalone: true,
  imports: [],
  templateUrl: './draft-list.component.html',
  styleUrl: './draft-list.component.css'
})
export class DraftListComponent {
  
  writerService: WriterService = inject(WriterService);
  draftList: any = [];
  
  ngOnInit(){
    this.writerService.getAllArticles().subscribe((data: any)=>{
        this.draftList = data.filter((data: any) => data.status === 'draft');
    })
  }
}
