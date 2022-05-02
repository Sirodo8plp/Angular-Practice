import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { FormWithTwoWayBindingComponent } from './form-with-two-way-binding/form-with-two-way-binding.component';

@NgModule({
  declarations: [AppComponent, DemoFormSkuComponent, DemoFormSkuWithBuilderComponent, FormWithTwoWayBindingComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
