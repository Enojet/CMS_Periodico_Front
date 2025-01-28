import { Component, ViewChild, inject } from '@angular/core';
import { EditorService } from '../../services/editor.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';


@Component({
  selector: 'app-revisable-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule],
  templateUrl: './revisable-list.component.html',
  styleUrl: './revisable-list.component.css'
})
export class RevisableListComponent {

   editorService:EditorService=inject(EditorService);
    draftList: any = [];
    dataSource:any=[];
    displayedColumns: string[] = ['fecha', 'imagen','titulo', 'autor', 'estado', 'editar'];

    @ViewChild(MatSort) sort: MatSort = <MatSort>{};
    @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
    
    ngOnInit(){

      this.editorService.getAllArticles().subscribe((data:any)=>{
    this.draftList=data.filter((data:any)=>data.status==="revisable" || data.status==="published");
    console.log(this.draftList);
    this.dataSource = new MatTableDataSource(this.draftList);
      });
    

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
  
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
      /*this.editorService.getAllArticles().subscribe((data: any)=>{
          this.draftList = data.filter((data: any) => data.status === 'revisable');
      })*/
    
}
