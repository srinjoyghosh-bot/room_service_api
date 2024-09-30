function optimizeBookings(bookings: number[][]): number[][] {
    if (bookings.length === 0) return [];

    bookings.sort((a, b) => a[0] - b[0]);

    const optimized: number[][] = [];
    let currentBooking = bookings[0];

    for (let i = 1; i < bookings.length; i++) {
        const nextBooking = bookings[i];
        
        if (currentBooking[1] >= nextBooking[0]) {
            currentBooking[1] = Math.max(currentBooking[1], nextBooking[1]);
        } else {
            optimized.push(currentBooking);
            currentBooking = nextBooking;
        }
    }
    optimized.push(currentBooking);

    return optimized;
}

// Example given in assignment
console.log(optimizeBookings([[9, 12], [11, 13], [14, 17], [16, 18]])); 
// Output: [[9, 13], [14, 18]]

//Edge case
console.log(optimizeBookings([])); 
// Output: []

// Big example
let bookings = [
    [1, 4], [5, 6], [7, 8], [9, 11], [10, 13],
    [14, 16], [15, 18], [17, 19], [20, 22], [21, 25],
    [24, 26], [27, 30], [29, 31], [32, 34], [33, 35],
    [36, 39], [38, 40], [41, 43], [42, 44], [45, 47],
    [46, 48], [49, 50], [51, 53], [52, 54], [55, 57],
    [56, 58], [59, 61], [60, 62], [63, 65], [64, 66]
];
console.log(optimizeBookings(bookings));
// Output: [
//   [ 1, 4 ],   [ 5, 6 ],
//   [ 7, 8 ],   [ 9, 13 ],
//   [ 14, 19 ], [ 20, 26 ],
//   [ 27, 31 ], [ 32, 35 ],
//   [ 36, 40 ], [ 41, 44 ],
//   [ 45, 48 ], [ 49, 50 ],
//   [ 51, 54 ], [ 55, 58 ],
//   [ 59, 62 ], [ 63, 66 ]
// ]

// Larger example with around 300 items
bookings = [];
for (let i = 0; i < 300; i++) {
    const start = i * 2;
    const end = start + 3;
    bookings.push([start, end]);
}
console.log(bookings)
console.log(optimizeBookings(bookings));
// Output : [ [ 0, 601 ] ]


