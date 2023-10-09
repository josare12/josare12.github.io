/* 
https://github.com/josare12/Blockly-Project
*/

// Create the Blockly workspace
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: createToolbox()
  });

  // Define the toolbox configuration
  function createToolbox() {
    var toolboxXml = `
      <xml>
        <category name="Motion" colour="#4C97FF">
          <block type="move_forward"></block>
          <block type="move_backwards"></block>
          <block type="rotate"></block>
          </category>
        <category name="Text" colour="#9966FF">
          <block type="say_hello"></block> 
          <block type="say"></block>
          <block type="print"></block>
        </category>
        <category name="Logic" colour="#FF9933">
          <block type="if"></block>
          <block type="if_else"></block>
          <block type="and"></block>
          <block type="or"></block>
          <block type="true_false"></block>
        </category>
        <category name="Loops" colour="#C41150">
          <block type="repeat"></block>
          <block type="repeat_while"></block>
          <block type="repeat_until"></block>
        </category>
        <category name="Math" colour="#009999">
          <block type="number"></block>
          <block type="plus"></block>
          <block type="minus"></block>
          <block type="multiply"></block>
          <block type="divide"></block>
          <block type="equals"></block>
          <block type="greater_than"></block>
          <block type="less_than"></block>
        </category>
        <category name="Variables" colour="#FF66CC" custom="VARIABLE"></category>
        <category name="My Blocks" colour="#FFCC66" custom="PROCEDURE"></category>


      </xml>
    `;
    return toolboxXml;
  }


  // Define the "print" block
  // This block takes a variable as input and prints its value
  Blockly.Blocks['print'] = {
    init: function() {
      this.appendValueInput("VAR")
          .setCheck(null)
          .appendField("print");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#9966FF'); // Set the color for the block
      this.setTooltip("Prints the value of the input variable");
      this.setHelpUrl("");
    }
  };

  // Register the JavaScript code for the "print" block
  // This function generates JavaScript code that calls the printVariable function with the input variable and block id as arguments
  Blockly.JavaScript['print'] = function(block) {
    var variable = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_NONE) || '""';
    var code = 'printVariable(' + variable + ', "' + block.id + '");\n';
    return code;
  };
  
  // Define the "say_hello" block
  Blockly.Blocks['say_hello'] = {
    init: function() {
      this.jsonInit({
        "type": "say_hello",
        "message0": "say hello",
        "previousStatement": null,
        "nextStatement": null,
        "colour": '#9966FF',
        "tooltip": "Prints 'Hello!'"
      });
    }
  };

  // Define the "say" block
  Blockly.Blocks['say'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("say")
          .appendField(new Blockly.FieldTextInput("Hello World!"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#9966FF');
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // Register the JavaScript code for the "say_hello" block
  Blockly.JavaScript['say_hello'] = function(block) {
    var code = console.log("Hello!");
    code = 'displayText("Hello!",100,0);\n';
    return code;
  };

  // Register the java script code for the "say" block
  Blockly.JavaScript['say'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var code = console.log(text_name);
    code = 'displayText("' + text_name + '",100,0);\n';
    return code;
  };
  
  // Define the "move_forward" block
  Blockly.Blocks['move_forward'] = {
    init: function() {
      this.jsonInit({
        "type": "move_forward",
        "message0": "move forward %1 steps",
        "args0": [
          {
            "type": "field_number",
            "name": "STEPS",
            "value": 10
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": '#4C97FF',
        "tooltip": "Moves forward a specified number of steps"
      });
    }
  };

  Blockly.Blocks['move_backwards'] = {
    init: function() {
      this.jsonInit({
        "type": "move_backwards",
        "message0": "move backwards %1 steps",
        "args0": [
          {
            "type": "field_number",
            "name": "STEPS",
            "value": 10
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4C97FF",
        "tooltip": "Moves backwards a specified number of steps"
        }
      );
    }
  };

  //Define the "rotate" block
  Blockly.Blocks['rotate'] = {
    init: function() {
      this.appendStatementInput("NAME")
          .setCheck(null)
          .appendField("rotate")
          .appendField(new Blockly.FieldNumber(0, 0, 360), "NAME")
          .appendField("degrees");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#4C97FF');
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

// Register the JavaScript code for the "rotate" block
Blockly.JavaScript['rotate'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  var code = 'turnRight(' + number_name + ');\n';
  return code;
};
    
 // Register the JavaScript code for the "move_forward" block
Blockly.JavaScript['move_forward'] = function(block) {
  var steps = block.getFieldValue('STEPS');
  var code = 'moveForward(' + steps + ');\n';
  return code;
};

// Register the JavaScript code for the "move_backwards" block
Blockly.JavaScript['move_backwards'] = function(block) {
  var steps = block.getFieldValue('STEPS');
  var code = 'moveBackwards(' + steps + ');\n';
  return code;
};

// Defube the "number" block
Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#009999');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "plus" block
Blockly.Blocks['plus'] = {
  init: function() {
    this.appendValueInput("NUMBER1")
        .setCheck(null);
    this.appendValueInput("NUMBER2")
        .setCheck(null)
        .appendField("+");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#009999');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "minus" block
Blockly.Blocks['minus'] = {
  init: function() {
    this.appendValueInput("NUMBER1")
        .setCheck(null);
    this.appendValueInput("NUMBER2")
        .setCheck(null)
        .appendField("-");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#009999');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "multiply" block
Blockly.Blocks['multiply'] = {
  init: function() {
    this.appendValueInput("NUMBER1")
        .setCheck(null);
    this.appendValueInput("NUMBER2")
        .setCheck(null)
        .appendField("*");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#009999');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "divide" block
Blockly.Blocks['divide'] = {
  init: function() {
    this.appendValueInput("NUMBER1")
        .setCheck(null);
    this.appendValueInput("NUMBER2")
        .setCheck(null)
        .appendField("/");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#009999');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "equals" block
Blockly.Blocks['equals'] = {
  init: function() {
    this.appendValueInput("NUMBER1")
        .setCheck(null);
    this.appendValueInput("NUMBER2")
        .setCheck(null)
        .appendField("=");
        this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#009999');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Define the "greater_than" block
Blockly.Blocks['greater_than'] = {
  init: function() {
    this.appendValueInput("NUMBER1")
        .setCheck(null);
    this.appendValueInput("NUMBER2")
        .setCheck(null)
        .appendField(">");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#009999');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['less_than'] = {
  init: function() {
    this.appendValueInput("NUMBER1")
        .setCheck(null);
    this.appendValueInput("NUMBER2")
        .setCheck(null)
        .appendField("<");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#009999');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Register the JavaScript code for the "less_than" block
Blockly.JavaScript['less_than'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'NUMBER1', Blockly.JavaScript.ORDER_RELATIONAL) || '""';
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'NUMBER2', Blockly.JavaScript.ORDER_RELATIONAL) || '""';
  var code = value_name1 + ' < ' + value_name2;
  return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};

// Register the JavaScript code for the "greater_than" block
Blockly.JavaScript['greater_than'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'NUMBER1', Blockly.JavaScript.ORDER_RELATIONAL) || '""';
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'NUMBER2', Blockly.JavaScript.ORDER_RELATIONAL) || '""';
  var code = value_name1 + ' > ' + value_name2;
  return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};

// Register the JavaScript code for the "equals" block
Blockly.JavaScript['equals'] = function(block) {
  var value_number1 = Blockly.JavaScript.valueToCode(block, 'NUMBER1', Blockly.JavaScript.ORDER_RELATIONAL) || '""';
  var value_number2 = Blockly.JavaScript.valueToCode(block, 'NUMBER2', Blockly.JavaScript.ORDER_RELATIONAL) || '""';
  var code = value_number1 + ' == ' + value_number2;
  return [code, Blockly.JavaScript.ORDER_EQUALITY]; // Use ORDER_EQUALITY here
};

// Register the JavaScript code for the "number" block
Blockly.JavaScript['number'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  var code = number_name;
  console.log(code);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Register the JavaScript code for the "plus" block
Blockly.JavaScript['plus'] = function(block) {
  var value_number1 = Blockly.JavaScript.valueToCode(block, 'NUMBER1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_number2 = Blockly.JavaScript.valueToCode(block, 'NUMBER2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = value_number1 + ' + ' + value_number2;
  var result = eval(code); // Evaluate the expression
  return [
    code + '  // Result: ' + result, 
    Blockly.JavaScript.ORDER_ADDITIVE
  ];
};

// Register the JavaScript code for the "minus" block
Blockly.JavaScript['minus'] = function(block) {
  var value_number1 = Blockly.JavaScript.valueToCode(block, 'NUMBER1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_number2 = Blockly.JavaScript.valueToCode(block, 'NUMBER2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '(' + value_number1 + ' - ' + value_number2 + ')';
  var result = eval(code); // Evaluate the expression
  return [
    code + '  // Result: ' + result, 
    Blockly.JavaScript.ORDER_ADDITIVE
  ];
};

// Register the JavaScript code for the "multiply" block
Blockly.JavaScript['multiply'] = function(block) {
  var value_number1 = Blockly.JavaScript.valueToCode(block, 'NUMBER1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_number2 = Blockly.JavaScript.valueToCode(block, 'NUMBER2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = value_number1 + ' * ' + value_number2;
  var result = eval(code); // Evaluate the expression
  return [
    code + '  // Result: ' + result, 
    Blockly.JavaScript.ORDER_MULTIPLICATIVE
  ];
};

// Register the JavaScript code for the "divide" block
Blockly.JavaScript['divide'] = function(block) {
  var value_number1 = Blockly.JavaScript.valueToCode(block, 'NUMBER1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_number2 = Blockly.JavaScript.valueToCode(block, 'NUMBER2', Blockly.JavaScript.ORDER_ATOMIC) || '1'; // Ensure denominator is not zero
  var code = value_number1 + ' / ' + value_number2;
  var result = eval(code); // Evaluate the expression
  return [
    code + '  // Result: ' + result, 
    Blockly.JavaScript.ORDER_MULTIPLICATIVE
  ];
};


// Define the "repeat" block
Blockly.Blocks['repeat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("repeat"), "")
        .appendField(new Blockly.FieldNumber(5), "NUMBER")
        .appendField("times");
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c41150");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "repeat_while_until" block
Blockly.Blocks['repeat_while'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("repeat while"), "");
    this.appendStatementInput("BODY")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c41150");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "repeat_until" block
Blockly.Blocks['repeat_until'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("repeat until"), "");
    this.appendStatementInput("BODY")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c41150");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Register the JavaScript code for the "repeat_until" block
Blockly.JavaScript['repeat_until'] = function(block) {
  var dropdown_choice = block.getFieldValue('CHOICE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var code = 'while (!' + value_name + ') {\n' + statements_body + '}\n';
  console.log(code);
  return code;
};

// Register the JavaScript code for the "repeat_while_until" block
Blockly.JavaScript['repeat_while'] = function(block) {
  var dropdown_choice = block.getFieldValue('CHOICE');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var code = 'while (' + value_name + ') {\n' + statements_body + '}\n';
  console.log(code);
  return code;
};

// Register the JavaScript code for the "repeat" block
Blockly.JavaScript['repeat'] = function(block) {
  var number_name = block.getFieldValue('NUMBER');
  var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
  var code = 'for (var i = 0; i < ' + number_name + '; i++) {\n' + statements_body + '}\n';
  console.log(number_name);
  return code;
};

// Define the "if" block
Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("if"), "");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF9933");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//Define the "if_else" block
Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("if"), "");
    this.appendStatementInput("NAME1")
        .setCheck(null);
    this.appendStatementInput("NAME2")
        .setCheck(null)
        .appendField("else");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF9933");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "and" block
Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("STATEMENT1")
        .setCheck(null);
    this.appendValueInput("STATEMENT2")
        .setCheck(null)
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#FF9933");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "or" block
Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("STATEMENT1")
        .setCheck(null);
    this.appendValueInput("STATEMENT2")
        .setCheck(null)
        .appendField("or");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#FF9933");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the "true_false" block
Blockly.Blocks['true_false'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "CHOICE");
    this.setOutput(true, null);
    this.setColour("#FF9933");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Register the JavaScript code for the "true_false" block
Blockly.JavaScript['true_false'] = function(block) {
  var dropdown_choice = block.getFieldValue('CHOICE');
  var code = dropdown_choice;
  console.log(code);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Register the JavaScript code for the "or" block
Blockly.JavaScript['or'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'STATEMENT1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'STATEMENT2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_name1 + ' || ' + value_name2;
  console.log(code);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Register the JavaScript code for the "and" block
Blockly.JavaScript['and'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'STATEMENT1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'STATEMENT2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_name1 + ' && ' + value_name2;
  console.log(code);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Register the JavaScript code for the "if_else" block
Blockly.JavaScript['if_else'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name1 = Blockly.JavaScript.statementToCode(block, 'NAME1');
  var statements_name2 = Blockly.JavaScript.statementToCode(block, 'NAME2');
  var code = 'if (' + value_name + ') {\n' + statements_name1 + '} else {\n' + statements_name2 + '}\n';
  console.log(code);
  return code;
};


// Register the JavaScript code for the "if" block
Blockly.JavaScript['if'] = function(block) {
  var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE) || 'false';
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = 'if (' + condition + ') {\n' + statements_do + '}\n';
  return code;
};

// Function to run the generated JavaScript code
function runCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);

  // Evaluate the generated JavaScript code
  var result = eval(code);

  // Display the result in the output Element
  var outputElement = document.getElementById('output');
  if (outputElement) {
    outputElement.textContent = result;
  }
}

// Function to copy the generated JavaScript code to the clipboard
function copyCode() {
  // Generate JavaScript code.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null; // Set infinite loop trap to null
  var code = Blockly.JavaScript.workspaceToCode(workspace);

  // Create a temporary textarea, set its value to the code and copy it.
  var tempElement = document.createElement('textarea');
  tempElement.value = code;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand('copy');
  document.body.removeChild(tempElement);

  // Notify the user that the code has been copied.
  alert('Code copied to clipboard');
}

// Function to show the generated JavaScript code
function showCode() {
  // Generate JavaScript code.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null; // Set infinite loop trap to null
  var code = Blockly.JavaScript.workspaceToCode(workspace);

  // Display the code in an alert box.
  alert(code);
}

// Function to save the generated JavaScript code
function saveCode() {
  // Generate JavaScript code.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null; // Set infinite loop trap to null
  var code = Blockly.JavaScript.workspaceToCode(workspace);

  // Create a blob from the code
  var blob = new Blob([code], {type: "text/javascript;charset=utf-8"});

  // Create a download link for the blob
  var downloadLink = document.createElement('a');
  downloadLink.download = 'code.js';
  downloadLink.href = window.URL.createObjectURL(blob);
  downloadLink.dataset.downloadurl = ['text/javascript', downloadLink.download, downloadLink.href].join(':');
  downloadLink.click();
}

// Helper Function to create a new div element containing the text for say blocks
function displayText(text, left, top) {
  var sprite = document.getElementById('sprite');
  if (sprite) {
    var textElement = document.createElement('p');
    textElement.innerHTML = text;
    textElement.style.position = 'absolute';
    textElement.style.left = left + 'px';
    textElement.style.top = top + 'px';
    sprite.insertBefore(textElement, sprite.firstChild);

    setTimeout(function() {
      textElement.remove();
    }, 1000);
  }
}

// Function to display the generated javascript code
function displayCodeOutput(code) {
  var codeOutput = document.getElementById('codeOutput');
  if (codeOutput) {
    var formattedCode = code;
    // Handle true/false block separately
    if (formattedCode === 'true') {
      formattedCode = 'true';
    } else if (formattedCode === 'false') {
      formattedCode = 'false';
    }
    codeOutput.textContent = formattedCode;
  }
}

// Helper Function to move the sprite forward
function moveForward(steps) {
  var sprite = document.getElementById('sprite');
  var currentPositionLeft = parseInt(sprite.style.left) || 0;
  var currentPositionTop = parseInt(sprite.style.top) || 0;
  var newPositionLeft = Math.min(currentPositionLeft + steps, 1000 - sprite.offsetWidth);
  var newPositionTop = currentPositionTop;
  sprite.style.left = newPositionLeft + 'px';
  sprite.style.top = newPositionTop + 'px';
}

// Function to move the sprite backwards
function moveBackwards(steps) {
  var sprite = document.getElementById('sprite');
  var currentPositionLeft = parseInt(sprite.style.left) || 0;
  var currentPositionTop = parseInt(sprite.style.top) || 0;
  var newPositionLeft = Math.max(currentPositionLeft - steps, 0);
  var newPositionTop = currentPositionTop;
  sprite.style.left = newPositionLeft + 'px';
  sprite.style.top = newPositionTop + 'px';
}

// Function to turn the sprite right
function turnRight(degrees) {
  var sprite = document.getElementById('sprite');
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var spriteWidth = sprite.offsetWidth;
  var spriteHeight = sprite.offsetHeight;
  var originX = (screenWidth - spriteWidth) / 2 + spriteWidth / 2;
  var originY = (screenHeight - spriteHeight) / 2 + spriteHeight / 2;
  sprite.style.transformOrigin = originX + 'px ' + originY + 'px';
  var currentRotation = parseInt(sprite.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
  var newRotation = currentRotation + degrees;
  sprite.style.transform = 'rotate(' + newRotation + 'deg)';
}

// Custom function to handle printing variable values
function printVariable(variable, blockId) {
  var value = eval(variable); // Evaluate the variable to get its current value
  displayText(value, 100, 0);

  // Function to find the first parent loop block
  function findParentLoop(block) {
    if (!block) return null;
    if (
      block.type === 'controls_repeat' ||
      block.type === 'repeat_while' ||
      block.type === 'repeat_until'
    ) {
      return block;
    }
    return findParentLoop(block.getParent());
  }

  // Find the first parent loop block of the current block
  var workspace = Blockly.getMainWorkspace();
  var parentLoopBlock = findParentLoop(workspace.getBlockById(blockId));

  // If the variable is used in a loop, print its value at each iteration
  if (parentLoopBlock) {
    var loopVariable = Blockly.JavaScript.valueToCode(
      parentLoopBlock,
      'VAR',
      Blockly.JavaScript.ORDER_NONE
    );
    if (loopVariable) {
      var loopValue = eval(loopVariable); // Evaluate the loop variable to get its current value
      displayText(loopValue, 100, 0);
    }
  }
}


