import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

// * Subject
// document.addEventListener("click", () => {
//   const stream$ = new Subject();
//
//   stream$.subscribe((value) => console.log(value));
//
//   stream$.next("Seymur");
// });

// * BehaviorSubject - has default value
// document.addEventListener("click", () => {
//   const stream$ = new BehaviorSubject("Hello");
//
//   stream$.subscribe((value) => console.log(value));
//
//   stream$.next("Seymur");
// });

// * ReplaySubject - has buffer size
// document.addEventListener("click", () => {
//   const stream$ = new ReplaySubject(1);
//
//   stream$.next("Salam");
//   stream$.next("Seymur");
//
//   stream$.subscribe((value) => {
//     console.log(value);
//   });
// });
