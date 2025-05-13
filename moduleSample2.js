console.clear()

// built in libraries
//******************************
// IN POWERSHELL, INSTALL upper-case
// cd to the folder where your code is and then in power shell npm install lower-case
/**PS C:\matplotlibcpp_example\NODE JS WORKSPACE> npm install upper-case

added 2 packages, and audited 4 packages in 1s

found 0 vulnerabilities
PS C:\matplotlibcpp_example\NODE JS WORKSPACE> npm install lower-case

added 1 package, and audited 5 packages in 1s

found 0 vulnerabilities
PS C:\matplotlibcpp_example\NODE JS WORKSPACE> */
const upperCase = require('upper-case');

const text = "hello world from my javascript program";
console.log(upperCase.upperCase(text));
/*Here are the steps to add the `upper-case` package to your JavaScript project in the `C:\matplotlibcpp_example\NODE JS WORKSPACE` directory and use it in your code, based on our chat:

Step 1: Open PowerShell  
Press Windows + R, type `powershell`, and press Enter to open PowerShell.

Step 2: Navigate to Your Project Directory  
In PowerShell, type the following command and press Enter to change to your project folder:  
`cd "C:\matplotlibcpp_example\NODE JS WORKSPACE"`

Step 3: Set the Execution Policy  
To allow running scripts like npm commands, run PowerShell as an administrator (right-click PowerShell in the Start menu and select "Run as Administrator"), then type this command and press Enter:  
`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`  
Confirm by typing `Y` and pressing Enter if prompted.

Step 4: Install the upper-case Package  
In PowerShell (still in your project directory), type the following command and press Enter to install the `upper-case` package:  
`npm install upper-case`

Step 5: Add upper-case to Your JavaScript Code  
Open your JavaScript file (e.g., `index.js`) in a text editor, and at the top of the file, add this line to import the `upper-case` package:  
`const upperCase = require('upper-case');`  
Then, wherever you want to convert text to uppercase, use this:  
`upperCase.upperCase(yourText)`  
Replace `yourText` with the string you want to convert (e.g., `"hello world"`).

Step 6: Run Your JavaScript Program  
Back in PowerShell (still in your project directory), type the following command and press Enter to run your program:  
`node index.js`  

This will execute your code, and any text you passed to `upperCase.upperCase()` will be converted to uppercase in the output. */
const lowerCase = require('lower-case');
const text2= "HELLO WORLD FROM MY JAVASCRIPT PROGRAM";
console.log(lowerCase.lowerCase(text));


