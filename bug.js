```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition causing infinite loop
    if (count < 10) {
      setCount(count + 1);
    }
  }, [count]); // Dependency on count causes infinite loop

  return <div>Count: {count}</div>;
}
```