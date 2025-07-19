What is React Hooks?
• Before React 16.8, when we use to create react app using functional components, then we didn't have access to the state management and life cycle methods.
• To access these feature we have to add class components.
• So, this was the problem with functional component.
• But, after introducing react hooks from version 16.8, we can now use state management and life cycle method without writing class component.
• In other words, Hooks are the functions that make functional components work like class components.
• Hooks made react functional components so easy to use.
• That’s why developers prefer functional components over class components.
• Hooks are special functions, that allows us to use state and other React features in functional components.

Benefits of React Hooks

- React hooks simplifies the code, improves the readability, reusability and overall performance of the application.

Most Commonly used React Hooks
• useState
• useEffect
• useRef
• useMemo
• useContext
• useCallback
• useReducer
• useLayoutEffect
• Custom hook

useState Hook in React
• useState is a react hook, which creates an "state variable" which helps us to track state in components and updates the user interface when state changes.
Why we need state?
• Simplicity: useState makes it easy to add state to function components without needing to convert them to class components.
• Flexibility: You can manage multiple state variables independently.
• Readability: The code is often more readable and easier to understand compared to class components.
Key Points
• Initial State: The argument passed to useState is the initial state.
• State Variable: The first element in the array returned by useState is the current state value.
Updater Function: The second element is a function that updates the state . You call this function with the new state value.
