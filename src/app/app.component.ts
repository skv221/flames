import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _snackBar: MatSnackBar) {}
  title = 'flames';
  name1: String="";
  name2: String="";
  relationship:number=0;
  submit()
  {
    if(this.name1!==""&&this.name2!=="")
    {const newName1=this.name1.toLowerCase();
    const newName2=this.name2.toLowerCase();
    const altName1=newName1.replace(/ /g,"");
    const altName2=newName2.replace(/ /g,"");
    const arrName1=altName1.split('');
    const arrName2=altName2.split('');
    let i!:any;
    let j!:any;
    let n=arrName1.length+arrName2.length;
    for(i=0;i<arrName1.length;i++)
    {
      for(j=0;j<arrName2.length;j++)
      {
        if(arrName1[i]===arrName2[j])
        {
          n-=2;
          arrName2[j]='0';
          break;
        }
      }
    }
    console.log(n);
    let l=1;
    let fc=5;
    let f=['f','l','a','m','e','s'];
    let k!:any;
    for(i=0;;i++)
    {
      if(l===n)
      {
        for(k=i;k<f.length;k++)
        {
          
          f[k]=f[k+1];
        }
        f[k+1]='\0';
        fc-=1;
        i-=1;
        l=0;
      }
      if(i===fc)
      {
        i=-1;
      }
      if(fc===0)
      {
        break;
      }
      l++;
    }
    if (f[0] === 'f')
      this.relationship=1;
    else if (f[0] == 'l')
      this.relationship=2;
    else if (f[0] == 'a')
      this.relationship=3;
    else if (f[0] == 'm')
      this.relationship=4;
    else if (f[0] == 'e')
      this.relationship=5;
    else
      this.relationship=6;
    console.log(this.relationship);}
    else{
      this.openSnackBar("Please enter names","")
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
