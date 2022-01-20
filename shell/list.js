// hoe komt, 
// dat automatisch aantal namen worden uitgeprint met hello ervoor
var numArgs = WScript.arguments.length;
// "length" staat voor "aantal keer"
for (var i = 0; i < WScript.arguments.length; i++) {
  WScript.StdOut.Write('Hello ' + WScript.arguments(i) + '\n');
}