import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilephoto',
  templateUrl: './profilephoto.component.html',
  styleUrls: ['./profilephoto.component.css']
})
export class ProfilephotoComponent implements OnInit {

  url: string;
  // inputImage:any = "https://www.djelfa.req.body.info/mobi/img/avatar/avatar.png";
  inputImage:any = "../../../../../assets/images/avatar.png";

  constructor() { }

  ngOnInit(): void {
  }
 
  onSelectImage(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.inputImage = event.target.result;
      }
    }
  }

  // processFile(image:any){
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     }
  //   }
    // this.inputImage = URL.createObjectURL(image.target.files[0]);
    // this.inputImage = image.target.files[0];
    // console.log(this.inputImage);
  }
