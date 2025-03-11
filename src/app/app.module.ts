import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';


@NgModule({
  declarations: [
    
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
    
  ],
  imports: [
    PublicModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
