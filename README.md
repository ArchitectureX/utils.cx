# @architecturex/utils.cx

## cx(...classes: any): string

The cx function is a utility to conditionally concatenate class names into a single string. This is particularly useful when working with CSS in JavaScript frameworks or libraries, such as React, where class names might be dynamic.

### Installation

`npm install @architecturex/utils.cx`

### Usage

```javascript
import cx from '@architecturex/utils.cx'
```

Call the cx function with any number of arguments to concatenate them into a single string of class names:

```javascript
const className = cx('class1', 'class2', condition && 'class3')
```

### Arguments

The `cx` function can accept multiple arguments of various types:

- **String**: The string is directly added to the result.
- **Number**: Numbers are converted to strings and added to the result.
- **Array**: Nested arrays are flattened. Each element in the array is processed based on its type (can be any of the supported types).
- **Object**: Object properties that have truthy values are added to the result. For custom objects with a custom `toString` method that doesn't rely on native code, the `toString` method's output is added.

### Examples

1. Basic strings:

```javascript
cx('class1', 'class2') // "class1 class2"
```

2. Conditional classes:

```javascript
const isActive = true

cx('class1', isActive && 'active') // "class1 active"
```

3. Arrays

```javascript
cx(['class1', 'class2', ['nested1', 'nested2']]) // "class1 class2 nested1 nested2"
```

4. Objects:

```javascript
const buttonStyles = {
  btn: true,
  'btn-primary': true,
  'btn-disabled': false
}

cx(buttonStyles) // "btn btn-primary"
```

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing these utilities. Your feedback and contributions are welcome!
