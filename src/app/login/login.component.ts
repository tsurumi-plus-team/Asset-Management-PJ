import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { repos } from '../common/repos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  repos: repos[];
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  public sendGetRequest(){
    
  }

  onSignin() {
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
            console.log('data nay ' + data.total)
        })
    this.http.get<repos[]>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(
        (response) => {                           
          this.repos = response; 
          console.log(this.repos)
          this.router.navigate(['/asset'], { queryParams: this.repos});
          //this.repos = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          //this.errorMessage = error;
          //this.loading = false;
        })
    //console.log(json. this.http.get('https://jsonplaceholder.typicode.com/todos/1'))
    //console.log('on click')
  }

//Example login
  // this.authenticationService.login(this.f.email.value, this.f.password.value)
  // .pipe(first())
  // .subscribe(
  //   (data: HttpResponse<any>) => {
  //     console.log(data.headers.get('authorization'));
  //   },
  //   error => {
  //     this.loading = false;
  //   });

  //Service side for login
  // return this.http.post<any>(Constants.BASE_URL + 'login', {username: username, password: password},
  // {observe: 'response' as 'body'})
  // .pipe(map(user => {
  //      return user;
  // }));

}
