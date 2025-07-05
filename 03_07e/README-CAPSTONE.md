# Capstone Part 3

## Snowtooth Mountain App 🌄🎿

In this step, we'll create a conditional type with generics.

1. Open the `script.ts` file.
2. Notice the new interfaces for `Activity` and `Guest`.
3. Notice the new types for categories of guests like `Skier`, `SpaEnthusiast`, etc…
4. Create a conditional type called `GuestWithActivity` that extends `Guest` with a new type called `GuestType` . If `GuestType` is assignable to `Guest`, return `GuestType`. If `GuestType` is not assignable to `Guest`, return `never`.
5. Add type annotations to `skiLesson`, `cookingClass`, and `massage` using the generic types.
