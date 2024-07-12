import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { HousingLocation } from "../housingLocation"

@Component({
    selector: "app-housing-location",
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: "./housing-location.component.html",
    styleUrls: ["./housing-location.component.css"]
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation
    baseUrl = "https://angular.dev/assets/images/tutorials/common"
}
