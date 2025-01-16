# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by improperly managing dependencies. The `bug.js` file contains the faulty code.  The `bugSolution.js` file shows the corrected version.

The bug arises from the improper use of the `useEffect` hook's dependency array.  The component sets `count` in the `useEffect` function, which triggers re-rendering, and leads to the effect running again, and again, infinitely. 

**How to reproduce:** Run the code; you'll see the browser console likely freeze or crash.  The solution fixes this by adjusting the condition in the useEffect function.   

This is a common mistake that can be avoided with careful consideration of how state changes affect the dependencies in `useEffect`.