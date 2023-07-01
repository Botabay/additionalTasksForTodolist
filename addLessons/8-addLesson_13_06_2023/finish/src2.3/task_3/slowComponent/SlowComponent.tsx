import { memo, useMemo } from "react";

// export const SlowComponent = memo(() => {
//   console.log('SlowComponent re-render...');

//   let now = performance.now();

//   while (performance.now() - now < 1000) {
//     // Artificial delay -- do nothing for 100ms
//   }

//   return <p>I am a very slow component tree.</p>;
// });

// export const SlowComponent = () => {
//     console.log('SlowComponent re-render...');

//     let now = performance.now();

//     while (performance.now() - now < 1000) {
//         // Artificial delay -- do nothing for 100ms
//     }

//     return <p>I am a very slow component tree.</p>;
// }

//by useMemo, but rerendering
export const SlowComponent = () => {
    console.log('SlowComponent re-render...');

    const f=()=>{let now = performance.now();

    while (performance.now() - now < 1000) {
        // Artificial delay -- do nothing for 100ms
    }    
}
    const useMemoedF=useMemo(f,[])
    return <p>I am a very slow component tree.</p>;
}





