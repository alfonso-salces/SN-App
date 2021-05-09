import {
    trigger,
    style,
    animate,
    transition,
    // ...
} from '@angular/animations';


export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in'),
    ]),
    transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(50%)' })),
    ]),
]);
