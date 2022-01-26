import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-mobilenet',
  templateUrl: './mobilenet.component.html'
})
export class MobilenetComponent implements OnInit {

  imageTag!: ElementRef;
  video!: ElementRef;
  
  @ViewChild('imageTag', { static: true }) set content(content: ElementRef) {
    this.imageTag = content;
  }

  @ViewChild('video') set videoContent(videoContent: ElementRef){
    this.video = videoContent;
  }

  model: any;
  imgSrc: any;
  img: any;
  loading: boolean = true;
  predictions: any;

  constructor() {}

  async ngOnInit() {
    this.loading = true;
    this.model = await mobilenet.load();
    console.log(this.model)
    this.loading = false;
  }

  async fileChange( event:any ) {
    const file = event.target.files[0];
    if ( file ) {
      const reader = new FileReader();
      reader.readAsDataURL( file );
      reader.onload = ( res:any ) => {
        this.imgSrc = res.target.result;
        console.log(this.imageTag);
        const imgEl = this.imageTag.nativeElement;
        setTimeout(async () => {
          this.predictions = await this.model.classify(imgEl);
        });
      }
    }
  }

  async ngAfterViewInit() {
    const vid = this.video.nativeElement;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          vid.srcObject = stream;
          setInterval(async () => {
            this.predictions = await this.model.classify(this.video.nativeElement);
         }, 1000);
        })
        .catch((err0r) => {
          console.log('Something went wrong!');
        });
    }
  }

}
