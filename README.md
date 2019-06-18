# react_component_generator
A simple utility tool to create react component files with some boilerplate code.

## Note

This tool only works with the new react hooks (https://reactjs.org/docs/hooks-intro.html) and doesn't work/support class or other function based components. Hooks are the new addition or new avatar of react components and they're much easier and offer cleaner syntax to work with. So I'm restricting this tool only to hooks and I have no plans or interest to make this work with class based components.

However, if you're interested to make this work with class based components please feel free to fork this repo and contribute. 

### What does this tool do?

This small tool helps you in saving time by creating component files for your react applicaton. You simply need to write a small specification in YAML format describing the basic structre of each compnent such as name, state variables and handler functions. The tool, when run, will turn the specification into component files with specified boilerplate code.

### Inspiration

This tools draws it's inspiration from the Open API Specification (https://swagger.io/docs/specification/about/) which helps us to design and develop most the backend REST API. 

When I started learning reactjs, I realized that it's cumbursome and routine to write/create component files by hand everytime we create a new project. I observed some of the common patterns in reactjs programming and decided to convert those patterns into a specification on the lines of Open API specification. Currently the tool is very basic in nature and I believe there is a lot of scope for evolution. 

### Usage
1)  Clone this repo
2)  cd to the directory  
3)  Run the `npm install --save` command to install the dependencies
4)  Run the command followed by the specification file `node generator.js <filename> `

Example:

`node generator.js sample_spec.yaml`

### Specification structure

This tool includes a sample specification file (sample_spec.yaml) to test, understand and write your own specification and below is it's structure.

```
components:
    -
        name: Component1
        state:
            variable_name: count1
            function_name: setcount1
            initial_value: 0
        handlers:
            - clickHandler
            - loginHandler
    
    -
        name: Component2
        state:
            variable_name: count2
            function_name: setcount2
            initial_value: 0
        handlers:
            - clickHandler
            - hoverHandler
```

The specification is very easy and flat to understand. All the components are stored in an array. And each component has name, state and handlers. Please follow the above structure to write your own component specification.