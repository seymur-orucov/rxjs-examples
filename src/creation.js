import { from, fromEvent, interval, Observable, of, range, timer } from "rxjs";
import { map, scan } from "rxjs/operators";

// * Of operator
// const stream$ = of(1, 2, 3, 4);
//
// stream$.subscribe((value) => {
//   console.log(value);
// });

// * From operator
// const arr$ = from([1, 2, 3, 4]).pipe(
//   scan((acc, value) => acc.concat(value), [])
// ); // For Array
//
// arr$.subscribe((value) => {
//   console.log(value);
// });

// * Create new Observable
// const stream$ = new Observable((observer) => {
//   observer.next("First value");
//
//   setTimeout(() => observer.error("Second value"), 1000);
//   setTimeout(() => observer.complete(), 1500);
// });
//
// stream$.subscribe({
//   next: (val) => console.log(val),
//   error: (err) => console.log(err),
//   complete: () => console.log("Completed"),
// });

// * fromEvent
// fromEvent(document.querySelector("canvas"), "mousemove")
//   .pipe(
//     map((e) => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext("2d"),
//     }))
//   )
//   .subscribe((pos) => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2);
//   });
//
// const clear$ = fromEvent(document.getElementById("clear"), "click");
//
// clear$.subscribe((event) => {
//   const canvas = document.querySelector("canvas");
//
//   canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
// });

// * Interval
// const sub = interval(1000).subscribe((value) => console.log(value));
//
// setTimeout(() => {
//   sub.unsubscribe();
// }, 4000);

// * Timer
// timer(2500).subscribe((value) => console.log(value));

// * Range
// range(42, 10).subscribe((value) => console.log(value));
