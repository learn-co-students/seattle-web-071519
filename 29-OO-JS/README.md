## What is Object Oriented Javascript?
1. With Object Orientation, instead of a web, we can think of our code as a collection
of cells.
2. These cells are separated from each other, can contain information, bits of data like variables, as well as behaviors, functions directly related to that data.

#### What are the benefits of OOJS?
- The end result of our code example hasn't changed
- we are still able to perform
the same actions with minor modifications.
- However, by designing
and creating classes like this, we can gain some important benefits:
  1. Easier to change.
  2. Offers better data control.
  3. Easy to replicate
  4. Improves understanding by adding meaning

###### Method types
  1. Standard methods
  2. Static methods
  3. Getter methods
    - The get keyword is used in classes for methods which
    serve the specific purpose of retrieving data from an instance.
    Acts like a 'pseudo-property', that is
    - it allows us to write a method that interacts like a property.
    Benefit of using getters instead of overloading constructors are these:
    - an expensive process can be delayed
    - Our getter runs only when we need it, distributing the workload more evenly.
  4. Setter methods
    - These are used our pseudo-properties crated by our getter
    - To use this style, give properties underscores(_) so suggest to the developer
      that these properties should only be accessed and changed using a setter and getter
      method.
