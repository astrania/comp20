#Lab - Messages(part 2)

1. Use JSON to parse an associative array, and display the result
on the webpage.

2. Did not collaborate or discuss with anyone in the class. 

3. Spent approximately an hour. 

Instructions, Part 2: Loading the Data From Local Machine
It doesn't work. No, it shouldn't work.

Instructions, Part 3: Loading the Data Given a URI
No, it doesn't work.

is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?
Browsers should disallow this for security reasons. It would be trivial to code a malicious website that executes an XSS attack for example if this is not addressed. 