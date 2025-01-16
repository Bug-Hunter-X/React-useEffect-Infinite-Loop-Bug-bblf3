```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true; // Flag to prevent state updates after unmount

    const intervalId = setInterval(() => {
      if (mounted && count < 10) {
        setCount(prevCount => prevCount + 1); // Functional update
      }
    }, 1000); // Update every 1 second

    return () => {
      mounted = false; // Clear the flag on component unmount
      clearInterval(intervalId); // Cleanup the interval on unmount
    };
  }, [count]);

  return <div>Count: {count}</div>;
}
```