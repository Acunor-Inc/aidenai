import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { Ui5I18nModule } from '@ui5/webcomponents-ngx/i18n';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents/dist/ListItem';
import '@ui5/webcomponents/dist/Card';
import '@ui5/webcomponents/dist/CardHeader';
import '@ui5/webcomponents/dist/Avatar';
import '@ui5/webcomponents/dist/Title';
import "@ui5/webcomponents-icons/dist/menu2";
import "@ui5/webcomponents-icons/dist/search";
import { CardDetailsComponent } from './card-details/card-details.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, CardComponent, CardDetailsComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ui5WebcomponentsModule,
    Ui5I18nModule.forRoot({
      language: 'en',
      fetchDefaultLanguage: true,
      bundle: {
        name: 'app-root-i18n-bundle',
        translations: {
          // You can add your translations here. For more information please refer to the documentation.
          ['en']: {
            'app-root-title': 'Aidenai',
          },
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
