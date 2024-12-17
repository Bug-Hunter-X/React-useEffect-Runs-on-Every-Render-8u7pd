```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted!');
    // Cleanup function runs when component unmounts or on subsequent renders if dependencies change
    return () => {
      console.log('Component unmounted!');
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    //This effect only runs when 'count' changes
    console.log('count updated:', count)
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```