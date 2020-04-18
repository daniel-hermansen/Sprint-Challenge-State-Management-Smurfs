1. What problem does the context API help solve?
    Context API simplifies state management for our React apps due to complex state management .
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are used to modify state in a redux application.
    Reducers are functions that determine changes to the state. It uses actions to determine the changes.
    The store is what holds state in redux. it is the single source of truth because the original state is never changed.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is global and component state is local. When the application grows and the number of components increases, it is good to use application state as the passing of props with component state can be difficult to track.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    It allows us to write action creators that return a function instead of an action. 
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    As I have learned more about redux I am getting more comfortable with it, but I think that Context API is better right now because the apps that we are doing are smaller.
