export function erstelleMatrix(spalten, zeilen) {
    let matrix = []
    for (let i = 0; i < zeilen; i++) {
        let zeile = []
        for (let i = 0; i < spalten; i++) {
            zeile.push(0);
        }
        matrix.push(zeile);
    }
    return matrix;
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function inMatrix(koordinatenPaar) {
    // der überprüft, ob ein Koordinatenpaar [zeile,spalte]
    // in der Matrix ist?
    let zeile = koordinatenPaar[0];
    let spalte = koordinatenPaar[1];

    if (zeile > (matrix.length - 1) || zeile < 0) {
        return false;
    } else if (spalte > (matrix.length - 1) || spalte < 0) {
        return false;
    } else {
        return true;
    }
}

export function istGras(koordinatenPaar) {
    let zeile = koordinatenPaar[0];
    let spalte = koordinatenPaar[1];

    // Ist an der stelle (zeile,spalte) in der Matrix gras (== 1)?
    if (matrix[zeile][spalte] === 0) {
        return true
    }
    if (matrix[zeile][spalte] === 1) {
        return false
    }
}

export function zeichneMatrix() {
    for (let zeile = 0; zeile < matrix.length; zeile++) {
        for (let spalte = 0; spalte < matrix.length; spalte++) {
            if (matrix[zeile][spalte] === 2) {
                fill(200, 0, 0);
            } else if (matrix[zeile][spalte] === 0) {
                fill(244, 164, 96)
            } else if (matrix[zeile][spalte] === 1) {
                fill(0, 100, 0)
            }else (fill (0,0,0))
            let k = 500 / matrix.length;
            rect(spalte * k, zeile * k, k, k)

        }
    }
}

/*
export function spielzug() {
    if (this.energie > 4) {
        this.platziereNeuesGras();
        this.energie = 0;
    } else {
        this.energie++;
    }
};
*/

export function scanFeld(koordinatenPaar, farbcode) {
    let zeile = koordinatenPaar[0];
    let spalte = koordinatenPaar[1];

    // Ist an der stelle (zeile,spalte) in der Matrix gras (== 1)?
    if (matrix[zeile][spalte] === farbcode) {
        return true
    } else return false;
}

export function loeschObjekt(liste,zeile, spalte) {

    let index;
    for (let i = 0; i < liste.length; i++) {
        if (liste[i].zeile === zeile && liste[i].spalte === spalte) {
            index = i;
        };
    }
    return liste.splice(index, 1);
}
