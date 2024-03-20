import { Component } from '@angular/core';
import { AppService } from './app.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'htmlpdf';
  public data = {
    title: 'Angular Developer',
    name: 'Karthikeyan',
    logoText: 'SK',
    address1: '50 , Jeth Nagar 3rd Cross Street,',
    address2: 'Mandavali , Chennai',
    mobile: '7708550202',
    email: 'askarthi1611@gmail.com',
    web: 'https://askarthi.onrender.com',
    Profile:
      `2+ years of experience working in a corporate environment as an UI Web Developer.
      Strong technical skills in complex website development including web-based applications.
       Experience developing highly interactive web applications utilizing Angular (8/12/14), Typescript, Bootstrap, JavaScript, HTML5, CSS, jQuery.
       In depth knowledge of web technologies and standards to   deliver the best experiences across web and mobile devices including responsive Web UI.
       Worked in version control systems – GIT, Worked extensively in Agile Development Process,Back End Technology Node.js ,Database Technologies like Mongo DB.`,
    Expertise: [
      'Angular',
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'Boostrap',
      'jQuery',
    ],
    education: ['Bacholer of Engineering (Computer Science)'],
    jobs:[
      {
        jobtitle:"UI Developer",
        company:"iSolve Technlogy",
        joindate:'Apr 2022 - Current',
        projects:["Metroplois","AICapture","Bynature","WeClean"]
      },
      {
        jobtitle:"UI Developer",
        company:"Aarthi Scans",
        joindate:'Sep 2021 - Mar 2022',
        projects:["IFM (Incentive Flow Management)"]
      },
    ]
  };
  PDFGEN:any=false;
  src:any="";
  constructor(private myApiService: AppService,private domSanitizer: DomSanitizer) {
    // Assign the data to the data source for the table to render
  }
  print(data:any){
    this.myApiService.postpdfData(data).subscribe(
      (result: any) => {
        this.src=this.domSanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64,"+result.base64);
        console.log(this.src);
        this.PDFGEN=true;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
