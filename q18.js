var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Think of at least five places in the world you’d like to visit.
var places = ['Saudi Arabia', 'Maldives', 'London', 'Turkey', 'Dubai'];
//console.log("original order:",places);
console.log("alphabatical order:", __spreadArray([], places, true).sort());
console.log("original order:", places);
console.log("Reverse alphabatical order:", __spreadArray([], places, true).sort().reverse());
console.log("original order:", places);
places.reverse();
console.log("reverse order places:", places); // without alphabatical order
places.reverse();
console.log("Original order places:", places); // without alphabatical order
places.sort();
console.log("alphabatical order:", places);
places.reverse();
console.log("reverse alphabatical order:", places);
