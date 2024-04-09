import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArrayDataComponentComponent } from './array-data-component/array-data-component.component';
import { JsonDataComponent } from './json-data/json-data.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { AttributeComponent } from './attribute/attribute.component';
import { HightlightDirectiveDirective } from './hightlight-directive.directive';
import { HighlightComponent } from './highlight/highlight.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './news.service';
import { PipeComponent } from './pipe/pipe.component';
import { DoublePipe } from './double.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ArrayDataComponentComponent,
    JsonDataComponent,
    TwoWayBindingComponent,
    AttributeDirectiveComponent,
    AttributeComponent,
    HightlightDirectiveDirective,
    HighlightComponent,
    MainComponent,
    PipeComponent,
    DoublePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
