import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-front',
  templateUrl: './body-front.component.html',
  styleUrls: ['./body-front.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => void', [
        animate('500ms', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class BodyFrontComponent implements OnInit{

  pictures: { url: string; alt: string }[] = [
    { url: 'assets/indust.png', alt: 'Image' },
    { url: 'assets/sag1.png', alt: 'Image 2' },
   
    { url: 'assets/sage2.png', alt: 'Image 3' },
    { url: 'assets/sage3.png', alt: 'Image 4' },
    { url: 'assets/sage4.png', alt: 'Image 5' },
    { url: 'assets/sage5.png', alt: 'Image 6' },
    { url: 'assets/sage6.png', alt: 'Image 7' },
    { url: 'assets/sage7.png', alt: 'Image 8' },
    
  ];
  currentIndex = 0;
  translateValue = '0';

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000); // Change slide every 3 seconds (adjust as needed)
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex === this.pictures.length) {
      this.currentIndex = 0; // Loop back to the first image
    }
    this.translateValue = `-${this.currentIndex * 100}%`;
  }
  showList: boolean = false;

  toggleList() {
    this.showList = !this.showList;
  }

}
