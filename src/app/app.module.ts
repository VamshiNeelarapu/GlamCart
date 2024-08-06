import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SubfooterComponent } from './footer/subfooter/subfooter.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';

import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    SubfooterComponent,
    CopyrightComponent,
    SectionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
