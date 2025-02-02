import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorService } from '../../services/editor.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-revisable-list',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatPaginatorModule, 
    RouterLink
  ],
  templateUrl: './revisable-list.component.html',
  styleUrl: './revisable-list.component.css'
})
export class RevisableListComponent {

   editorService:EditorService=inject(EditorService);
    draftList: any = [];
    dataSource:any=[];
    displayedColumns: string[] = [ 'imagen','titulo', 'autor', 'estado', 'editar'];
    private editorId: any = localStorage.getItem("_id");

    
    ngOnInit(){

      this.editorService.getAllArticles(this.editorId).subscribe((data:any)=>{
    this.draftList=data;
   // console.log("Fecha:"+this.draftList[0].date);
    this.dataSource = new MatTableDataSource(this.draftList);
    console.log(Array.isArray(this.draftList))
      });
    
    
  
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  //formatDate(date:string) {
  //  const fecha=date.split("T");
   // return fecha[0];
  //}
      
    
}
