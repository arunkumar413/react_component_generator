yaml = require("js-yaml");
fs = require("fs");



const file  = process.argv[2];

try {
    const doc = yaml.safeLoad(fs.readFileSync(file, "utf8"));
    console.log(doc.components[0]);
    extact_parsed_content(doc);
    
} catch (e) {
    console.log(e);
}

function extact_parsed_content(doc) {
    for (let i = 0; i < doc.components.length; i++) {
        const imports = ` import React, { useState } from 'react' `;
        const function_name = ` 
        function ${doc.components[i].name}() {`
        const state_vars = ` 
        const [${doc.components[i].state.variable_name},${doc.components[i].state.function_name} ] = useState(${doc.components[i].state.initial_value}) `;
        const handlers = parse_handlers(i,doc);
        const tempalte = ` 
        return (
        <div>
         <p> This is a ${doc.components[i].name} component </p>
        </div>
      );
    }`


const complete_file = imports+function_name+ state_vars+handlers+tempalte;
generate_file(i,complete_file,doc);
       
    }

}

function parse_handlers(j,doc) {
    var temp = '';
    var handlers = ''
    for (let k = 0; k < doc.components[j].handlers.length; k++) {
        const temp = `
        
        function ${doc.components[j].handlers[k]}() {
      }
      
      `
        handlers = handlers + temp
    }
    return handlers;

}


function generate_file(i,complete_file, doc){
    fs.writeFile(doc.components[i].name + '.js', complete_file, function (err) {
        if (err) 
            throw err;
        console.log('File is created successfully.');
    });
}