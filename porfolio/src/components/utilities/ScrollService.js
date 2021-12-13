import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from "rxjs"

export default class ScrollService {
    static scrollHandler = new ScrollService();
    static currentScreenBroadCaster = new Subject();
    static currentScreenFading = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }
    scrollToHireMe =()=>{
        let contactMe = document.getElementById('Contact Me')
        if (!contactMe) return;
        contactMe.scrollIntoView({behavior:"smooth"})
    }
    scrollToHome =()=>{
        let HomeScreen = document.getElementById('Home')
        if (!HomeScreen) return;
        HomeScreen.scrollIntoView({behavior:"smooth"})
    }
    isElementView = (elem,type)=>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;
        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch(type) {
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default: return false;
        }
    }
    checkCurrentScreenUnderViewport =(event)=>{
        if(!event || object.keys(event).length <1) return;
        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM) continue;

            let fullyVisible = this.isElementView(screenFromDOM,"complete")
            let partialVisible = this.isElementView(screenFromDOM,"partial")

            if (fullyVisible|| partialVisible) {
                if(partialVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    })
                    screen['alreadyRendered'] = true;
                    break;
                }
                if(fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    })
                    break;
                }
            }
        }
    }
}