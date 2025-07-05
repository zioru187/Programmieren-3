import { randomNumber, inMatrix, scanFeld } from '../utils.js';

class fleischfresser {
    zeile;
    spalte;
    energie = 20;
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
        this.platziereSelbstInMatrix();
    };
    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 3;
    };
    spielzug() {
        if (this.energie > 20) {
            this.platziereNeuenFleischFresser();
            this.energie = 20;
        } else if (this.energie > 0 ) {
            this.machSchritt();
        } else {
            matrix[this.zeile][this.spalte] = 0;
            löschObjekt(FleischfresserArray,this.zeile,this.spalte);
        }
    };
    platziereNeuenFleischFresser() {
        // scan deine umgebung, und schau ob du um dich herum 
        // ein freies Feld findest.
        // wenn du ein freies feld findest, dann platziere auf diesem Feld
        // ein neues Grasobjekt. 
        // 0 -> OBEN
        // 1 -> RECHTS
        // 2 -> LINKS
        // 3 -> UNTEN
        let richtung = randomNumber(0, 4);
        let benachbarteFelder = [
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte],
            [this.zeile, this.spalte + 1],
        ]
        let ausgewähltesFeld = benachbarteFelder[richtung];
        // HIER KOMMT CODE REIN DER ÜBERPRÜFT
        // OB DIE KOORDINATEN INNERHALB DER MATRIX LIEGEN
        if (inMatrix(ausgewähltesFeld)) {
            console.log("yay, feld ist in matrix")
        } else {
            return;
        }

        for (let i = 0; i < 4; i++) {
            let j = (richtung + i) % 4;
            let ausgewähltesFeld = benachbarteFelder[j];
            if (inMatrix(ausgewähltesFeld)) {
                if (scanFeld(ausgewähltesFeld,1)) {
                    let zeile = ausgewähltesFeld[0];
                    let spalte = ausgewähltesFeld[1];

                    FleischfresserArray.push(new FleischFresser(zeile, spalte))
                    return;
                }
            }

        }

    }
    machSchritt() {
        // 0 -> OBEN
        // 1 -> RECHTS
        // 2 -> LINKS
        // 3 -> UNTEN
        let richtung = randomNumber(0, 4);
        let benachbarteFelder = [
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte],
            [this.zeile, this.spalte + 1],
        ]
        for (let i = 0; i < 4; i++) {
            let j = (richtung + i) % 4
            let ausgewähltesFeld = benachbarteFelder[j];
            if (inMatrix(ausgewähltesFeld)) {
                if (scanFeld(ausgewähltesFeld,1)) {
                    matrix[this.zeile][this.spalte] = 0;
                    löschObjekt(RasenDestroyerArray,ausgewähltesFeld[0],ausgewähltesFeld[1])
                    this.zeile = ausgewähltesFeld[0];
                    this.spalte = ausgewähltesFeld[1];
                    matrix[this.zeile][this.spalte] = 3;
                    this.energie++;
                    return;
                }
            }

        }
        this.energie--;
    };
}