# React useEffect Runs on Every Render

This example demonstrates a common mistake in using React's `useEffect` hook.  The provided code incorrectly places logic within `useEffect` without considering the dependency array, causing unexpected behavior and potential performance problems. The solution showcases the proper way to use dependency arrays to control the hook's execution.