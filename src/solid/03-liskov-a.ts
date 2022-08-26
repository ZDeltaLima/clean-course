import { A319, A320, A321Neo, A330 } from './03-liskov-b';

(() => {
    
    const printAircraftsSeats = ( cars: (A319 | A320 | A321Neo | A330)[] ) => {
        
        for (const car of cars) {
         
            if( car instanceof A319 ) {
                console.log( 'Airbus A319', car.getNumberOfA319Seats() )
                continue;
            }
            if( car instanceof A320 ) {
                console.log( 'Airbus A320', car.getNumberOfA320Seats() )
                continue;
            }
            if( car instanceof A321Neo ) {
                console.log( 'Airbus A321 Neo', car.getNumberOfA321NeoSeats() )
                continue;
            }
            if( car instanceof A330 ) {
                console.log( 'Airbus A330', car.getNumberOfA330Seats() )
                continue;
            }         

        }
    }
    
    const aircrafts = [
        new A319(120),
        new A320(180),
        new A321Neo(244),
        new A330(268),
    ];


    printAircraftsSeats( aircrafts );

})();