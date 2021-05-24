import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import {MdbTableDirective} from 'PATH-TO-MDB-ANGULAR';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  //@ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ['ID', 'First', 'Last', 'Handle'];
  searchText: string = '';
  previous: string;
  tableHeaders = ['Header 1', 'Header 2', 'Header 3'];
  tableRows = [
    ['Cell', 'Cell', 'Cell'],
    ['Cell', 'Cell', 'Cell'],
    ['Cell', 'Cell', 'Cell']
  ];
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
        console.log('hehe anh xin ', params);
      });
  }    
  editField: string;
  personList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  searchItems() {
    // const prev = this.mdbTable.getDataSource();
    // if (!this.searchText) {
    //     this.mdbTable.setDataSource(this.previous);
    //     this.elements = this.mdbTable.getDataSource();
    // }
    // if (this.searchText) {
    //     this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
    //     this.mdbTable.setDataSource(prev);
    // }
}

}
