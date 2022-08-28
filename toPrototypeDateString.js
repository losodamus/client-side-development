/*
    Simple JavaScript example of Date prototyping.
    Output as a [monthAbbr]. [day], [year] format.

    console.log((new Date()).toPrototypeDateString());
    >>> August 19, 2022

    console.log((new Date(2004, 3)).toPrototypeDateString());
    >>> April 1, 2004

    console.log((new Date(2004, 3, 15)).toPrototypeDateString());
    >>> April 15, 2004
*/
Date.prototype.toPrototypeDateString = function() {
    return (
        'Jan.|Feb.|Mar.|Apr.|May|Jun.|Jul.|Aug.|Sep.|Oct.|Nov.|Dec.'.split('|')[this.getMonth()] + ' ' +
        this.getDate().toString() + ', ' +
        this.getFullYear().toString()
    );
};
