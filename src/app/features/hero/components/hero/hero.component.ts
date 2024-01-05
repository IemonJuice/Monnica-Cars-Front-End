import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit{
  @ViewChild('videoRef', {static: true}) videoRef!: ElementRef

  ngAfterViewInit(): void {
    const media = this.videoRef.nativeElement
    media.muted = true
    media.play()
  }
}
