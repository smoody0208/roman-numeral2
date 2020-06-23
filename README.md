#### By _**Peter Grimm, Spencer Moody, Chris Brauch**, June 11th, 2020_

## Description

The purpose of this project is to convert any inputted number between a value of 1-3999 into a roman numeral.

## Setup/Installation Requirements

* _Clone this repository on https://github.com/cmbrauch/roman-numeral.git
* _Open it in VS Code_
* _Run the command open index.html or go to cmbrauch.github.io/roman-numeral

## Specs

| Behavior                                                                                                            | Input     | Output       |
|---------------------------------------------------------------------------------------------------------------------|-----------|--------------|
| The program does not allow for anything other than numbers to be entered                                            | a         | --           |
| Program only allows less than or equal to 3999                                                                      | 4000      | --           |
| Progam only allows numbers greater than 0                                                                           | 0         | --           |
| Program turns number 1 into I                                                                                       | 1         | I            |
| Program turns number 5 into V                                                                                       | 5         | V            |
| Program turns 10 into X                                                                                             | 10        | X            |
| Program turns 50 into L                                                                                             | 50        | L            |
| Program turns 100 into C                                                                                            | 100       | C            |
| Program turns 500 into D                                                                                            | 500       | D            |
| Program turns 1000 into M                                                                                           | 1000      | M            |
| Allow V, L, D only once consecutively in a numeral                                                                  | 55        | LV           |
| Allow I, X, C, M only three times consecutively in a numeral                                                        | 9, 40, 99 | IX, XL, XCIX |
| For numbers between 1 and 10,  subtract instead of add from multiples of 5 to avoid three consecutive numerals      | 4, 9      | IV, IX       |
| For numbers between 1 and 100, subtract instead of add from multiples of 50 to avoid three consecutive numerals     | 40, 90    | XL, XC       |
| For numbers between 100 and 1000, subtract instead of add from multiples of 500 to avoid three consecutive numerals | 400, 900  | CD, CM       |

## Known Bugs

_No bugs are known at this time_

## Support and contact details

Please contact any author with questions, comments, or concerns!


Peter Grimm <pagrimm@gmail.com>, Spencer Moody spencer.<moody@outlook.com>, Chris Brauch <cmbrauch00@gmail.com>

## Technologies Used

_Made in Windows 10_
_VS-Code_
_Javascript_
_CSS_

### License

This Software is licensed under the MIT license.

Copyright (c) 2020**_Epicodus_**