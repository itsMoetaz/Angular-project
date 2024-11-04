import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
l=new FormControl('',Validators.required);
pwd=new FormControl();
fg=new FormGroup({
  login:new FormControl('',[Validators.required,Validators.minLength(3)]),
  password:new FormControl(),

})
constructor(private fb:FormBuilder){}
fgb=this.fb.group({
  loginfg:['',[Validators.required,]],
  passwordfg:['',Validators.minLength(3)],
skills:this.fb.array(
[new FormControl('angular'),
  new FormControl('react'),
]
  

)
});
showL(){
  console.log(this.l)
}
showfg(){
  console.log(this.fg)
}
showfgb(){
  console.log(this.fgb)
}
get Skillstwin2(){
  return (this.fgb.get('skills') as FormArray);
}
addElementToSkills(){
  this.Skillstwin2.push(new FormControl())
}
removeElementFromFormArray(index:any){
  this.Skillstwin2.removeAt(index)
}
}
