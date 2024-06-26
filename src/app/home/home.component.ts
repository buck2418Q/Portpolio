import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";
import { ServiceComponent } from "../service/service.component";
import { AboutComponent } from "../about/about.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FooterComponent, ContactComponent, ServiceComponent, AboutComponent, PortfolioComponent]
})
export class HomeComponent {

}
