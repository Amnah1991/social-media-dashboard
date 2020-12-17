import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-media-dashboard';

  toggleTheme() {
    var top = document.querySelector('.top-dark');
    var bottom = document.querySelector('.bottom-dark');
    var subTitle = document.querySelector('.sub-title-dark');
    var h3Title = document.querySelector('.h3-title-dark-theame');
    var h4Title = document.querySelector('.h4-title-dark-theame');
    var card = document.querySelectorAll('.dark');
    var number = document.querySelectorAll('.dark-theame');
    if (top) {
      top.className = "top-light";
      bottom.className ="bottom-light";
      subTitle.className ="sub-title-light";
      h3Title.className ="h3-title-light-theame";
      h4Title.className ="h4-title-light-theame";
      card.forEach(element => {
        element.classList.remove("dark");
        element.classList.add("light");
      });
      number.forEach(element => {
        element.classList.remove("dark-theame");
        element.classList.add("light-theame");
      });
    } else {
      top = document.querySelector('.top-light');
      bottom = document.querySelector('.bottom-light');
      subTitle = document.querySelector('.sub-title-light');
      h3Title = document.querySelector('.h3-title-light-theame');
      h4Title = document.querySelector('.h4-title-light-theame');
      card = document.querySelectorAll('.light');
      number = document.querySelectorAll('.light-theame');
      top.className = "top-dark";
      bottom.className = "bottom-dark";
      subTitle.className ="sub-title-dark";
      h3Title.className ="h3-title-dark-theame";
      h4Title.className ="h4-title-dark-theame";
      card.forEach(element => {
        element.classList.remove("light");
        element.classList.add("dark");
      });
      number.forEach(element => {
        element.classList.remove("light-theame");
        element.classList.add("dark-theame");
      });
    }

  }
}
