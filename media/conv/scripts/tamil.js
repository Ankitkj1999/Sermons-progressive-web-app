/*  Gopi's Unicode Converters Version 3.2
    Copyright (C) 2011 Gopalakrishnan (Gopi) http://www.higopi.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    Further to the terms mentioned you should leave this copyright notice
    intact, stating me as the original author.
*/
var lang = "tamil";
var chnbin = "\u0BCD";
var ugar = "\u0BC1";
var uugar = "\u0BC2";
myimg.src = "images/"+lang+".png"

var tatw = new Array();
tatw['\\!'] = "\u0BB8";
tatw['\\$'] = "\u0B9C";
tatw['\\%'] = "\u0BC1";
tatw['\\^'] = "\u0BC2";
tatw['\\&'] = "\u0BB7";
tatw['_'] = "\u0BB8\u0BCD\u0BB0\u0BC0";
tatw['q'] = "\u0BA3\u0BC1";
tatw['w'] = "\u0BB1";
tatw['e'] = "\u0BA8";
tatw['r'] = "\u0B9A";
tatw['t'] = "\u0BB5";
tatw['y'] = "\u0BB2";
tatw['u'] = "\u0BB0";
tatw['i'] = "\u0BC8";
tatw['o'] = "\u0B9F\u0BBF";
tatw['p'] = "\u0BBF";
tatw['\\['] = "\u0BC1";
tatw['\\]'] = "\u0B94";
tatw["\\\\"] = "\u0B95\u0BCD\u0BB7";
tatw['Q'] = "\u0B9E\u0BC1";
tatw['W'] = "\u0BB1\u0BC1";
tatw['E'] = "\u0BA8\u0BC1";
tatw['R'] = "\u0B9A\u0BC1";
tatw['T'] = "\u0B95\u0BC2";
tatw['Y'] = "\u0BB2\u0BC1";
tatw['U'] = "\u0BB0\u0BC1";
tatw['I'] = "\u0B90";
tatw['O'] = "\u0B9F\u0BC0";
tatw['P'] = "\u0BC0";
tatw['\\{'] = "\u0BC2";
tatw['\\}'] = "\u0BC2";

tatw['a'] = "\u0BAF";
tatw['s'] = "\u0BB3";
tatw['d'] = "\u0BA9";
tatw['f'] = "\u0B95";
tatw['g'] = "\u0BAA";
tatw['h'] = "\u0BBE";
tatw['j'] = "\u0BA4";
tatw['k'] = "\u0BAE";
tatw['l'] = "\u0B9F";
tatw['\\;'] = "\u0BCD";
tatw['\\\''] = "\u0B99";
tatw['A'] = "\u0BB1\u0BBE";
tatw['S'] = "\u0BB3\u0BC1";
tatw['D'] = "\u0BA9\u0BC1";
tatw['F'] = "\u0B95\u0BC1";
tatw['G'] = "\u0BB4\u0BC1";
tatw['H'] = "\u0BB4";
tatw['J'] = "\u0BA4\u0BC1";
tatw['K'] = "\u0BAE\u0BC1";
tatw['L'] = "\u0B9F\u0BC1";
tatw['\\:'] = "\u00B0";
tatw['\\"'] = "\u0B9E";

tatw['z'] = "\u0BA3";
tatw['x'] = "\u0B92";
tatw['c'] = "\u0B89";
tatw['v'] = "\u0B8E";
tatw['b'] = "\u0BC6";
tatw['n'] = "\u0BC7";
tatw['m'] = "\u0B85";
tatw[','] = "\u0B87";
tatw['Z'] = "\u0BB9";
tatw['X'] = "\u0B93";
tatw['C'] = "\u0B8A";
tatw['V'] = "\u0B8F";
tatw['B'] = "\u0B83";
tatw['N'] = "\u0B9A\u0BC2";
tatw['M'] = "\u0B86";
tatw['\\<'] = "\u0B88";

tatw['\\|'] = "!";
tatw['\\`'] = "&";
tatw['\\.'] = ",";
tatw['/'] = ".";
tatw['\\#'] = "%";
tatw['\\~'] = ";";
tatw['-'] = "/";
tatw['\\@'] = "\"";
tatw['\\>'] = "-";
tatw['\u0BC1\u0BC2'] = "\u0BC2";


//Phonetic
var ta = new Array();
ta['f'] = "qp";
ta['B'] = "b";
ta['C'] = "c";
ta['D'] = "d";
ta['F'] = "qp";
ta['G'] = "g";
ta['H'] = "h";
ta['J'] = "j";
ta['K'] = "k";
ta['M'] = "m";
ta['P'] = "p";
ta['Q'] = "q";
ta['T'] = "t";
ta['V'] = "v";
ta['W'] = "w";
ta['X'] = "x";
ta['Y'] = "y";
ta['Z'] = "z";

//Cons
ta['\u0BA8\u0BCDg'] = "\u0B99\u0BCD";
ta['\u0BA9\u0BCDg'] = "\u0B99\u0BCD";
ta['\u0BA8\u0BCDj'] = "\u0B9E\u0BCD";
ta['\u0BA9\u0BCDj'] = "\u0B9E\u0BCD";
ta['\u0B9F\u0BCDh'] = "\u0BA4\u0BCD";
ta['\u0B9A\u0BCDh'] = "\u0BB7\u0BCD";
ta['\u0BA9\u0BCD\u0BA4\u0BCD'] = "\u0BA8\u0BCD\u0BA4\u0BCD";
ta['ng'] = "\u0B99\u0BCD";
ta['nj'] = "\u0B9E\u0BCD";
ta['th'] = "\u0BA4\u0BCD";
ta['sh'] = "\u0BB7\u0BCD";
ta['k'] = "\u0B95\u0BCD";
ta['g'] = "\u0B95\u0BCD";
ta['c'] = "\u0B9A\u0BCD";
ta['s'] = "\u0B9A\u0BCD";
ta['t'] = "\u0B9F\u0BCD";
ta['d'] = "\u0B9F\u0BCD";
ta['N'] = "\u0BA3\u0BCD";
ta[' n'] = " \u0BA8\u0BCD";
ta['^n'] = "\u0BA8\u0BCD";
ta['\nn'] = "\n\u0BA8\u0BCD";
ta['w'] = "\u0BA8\u0BCD";
ta['p'] = "\u0BAA\u0BCD";
ta['b'] = "\u0BAA\u0BCD";
ta['m'] = "\u0BAE\u0BCD";
ta['y'] = "\u0BAF\u0BCD";
ta['r'] = "\u0BB0\u0BCD";
ta['l'] = "\u0BB2\u0BCD";
ta['v'] = "\u0BB5\u0BCD";
ta['R'] = "\u0BB1\u0BCD";
ta['L'] = "\u0BB3\u0BCD";
ta['z'] = "\u0BB4\u0BCD";
ta['n'] = "\u0BA9\u0BCD";
ta['S'] = "\u0BB8\u0BCD";
ta['h'] = "\u0BB9\u0BCD";
ta['j'] = "\u0B9C\u0BCD";
ta['x'] = "\u0B95\u0BCD\u0BB7\u0BCD";
//adjVows Small
ta['\u0BCDa'] = "\u200C";
ta['\u0BCDi'] = "\u0BBF";
ta['\u0BCDu'] = "\u0BC1";
ta['\u0BCDe'] = "\u0BC6";
ta['\u0BCDo'] = "\u0BCA";
ta['\u200Ci'] = "\u0BC8";
ta['\u200Cu'] = "\u0BCC";
//adjVows Big
ta['\u200Ca'] = "\u0BBE";
ta['\u0BBFi'] = "\u0BC0";
ta['\u0BC1u'] = "\u0BC2";
ta['\u0BC6e'] = "\u0BC7";
ta['\u0BCAo'] = "\u0BCB";
ta['\u0BCDA'] = "\u0BBE";
ta['\u0BCDI'] = "\u0BC0";
ta['\u0BCDU'] = "\u0BC2";
ta['\u0BCDE'] = "\u0BC7";
ta['\u0BCDO'] = "\u0BCB";
//Vows
ta['~'] = "\u200D";
ta['\u0B85i'] = "\u0B90";
ta['\u0B85u'] = "\u0B94";
ta['ai'] = "\u0B90";
ta['au'] = "\u0B94";
ta['\u0B85a'] = "\u0B86";
ta['\u0B87i'] = "\u0B88";
ta['\u0B89u'] = "\u0B8A";
ta['\u0B8Ee'] = "\u0B8F";
ta['\u0B92o'] = "\u0B93";
ta['a'] = "\u0B85";
ta['A'] = "\u0B86";
ta['i'] = "\u0B87";
ta['I'] = "\u0B88";
ta['u'] = "\u0B89";
ta['U'] = "\u0B8A";
ta['e'] = "\u0B8E";
ta['E'] = "\u0B8F";
ta['o'] = "\u0B92";
ta['O'] = "\u0B93";
ta['q'] = "\u0B83";
//Nums
ta['\u0BF10'] = "\u0BF2";
ta['\u0BF00'] = "\u0BF1";
ta['\u0BE70'] = "\u0BF0";
ta['1\u200D'] = "\u0BE7";
ta['2\u200D'] = "\u0BE8";
ta['3\u200D'] = "\u0BE9";
ta['4\u200D'] = "\u0BEA";
ta['5\u200D'] = "\u0BEB";
ta['6\u200D'] = "\u0BEC";
ta['7\u200D'] = "\u0BED";
ta['8\u200D'] = "\u0BEE";
ta['9\u200D'] = "\u0BEF";
ta['0\u200D'] = "0";
//Other Adjustments
ta['\u0B9A\u0BCD\u0BB0\u0BBF'] = "\u0BB8\u0BCD\u0BB0\u0BC0";
ta['\u0BB7\u0BCD\u0BB0\u0BBF'] = "\u0BB8\u0BCD\u0BB0\u0BC0";

ta['(.+)\u200C(.+)'] = "$1$2";

// Tamil 99 keys
var ta99 = new Array();
//caret symbol for special purposes
ta99['\\^']="\u200C";

// mellina vallina rule
ta99["\u0B99\u200Ch"]="\u0B99\u0BCD\u0B95\u200C";
ta99["\u0B9E\u200C\\["]="\u0B9E\u0BCD\u0B9A\u200C";
ta99["\u0BA3\u200Co"]="\u0BA3\u0BCD\u0B9F\u200C";
ta99["\u0BA8\u200Cl"]="\u0BA8\u0BCD\u0BA4\u200C";
ta99["\u0BAE\u200Cj"]="\u0BAE\u0BCD\u0BAA\u200C";
ta99["\u0BA9\u200Cu"]="\u0BA9\u0BCD\u0BB1\u200C";

//auto pulli rule for same letter repeat
ta99["\u0BB3\u200Cy"]="\u0BB3\u0BCD\u0BB3\u200D";
ta99["\u0BB3\u0BCD{2}"]="\u0BB3\u0BCD\u0BB3\u200C";
ta99["\u0BB1\u200Cu"]="\u0BB1\u0BCD\u0BB1\u200D";
ta99["\u0BB1\u0BCD{2}"]="\u0BB1\u0BCD\u0BB1\u200C";
ta99["\u0BA9\u200Ci"]="\u0BA9\u0BCD\u0BA9\u200D";
ta99["\u0BA9\u0BCD{2}"]="\u0BA9\u0BCD\u0BA9\u200C";
ta99["\u0B9F\u200Co"]="\u0B9F\u0BCD\u0B9F\u200D";
ta99["\u0B9F\u0BCD{2}"]="\u0B9F\u0BCD\u0B9F\u200C";
ta99["\u0BA3\u200Cp"]="\u0BA3\u0BCD\u0BA3\u200D";
ta99["\u0BA3\u0BCD{2}"]="\u0BA3\u0BCD\u0BA3\u200C";
ta99["\u0B9A\u200C\\["]="\u0B9A\u0BCD\u0B9A\u200D";
ta99["\u0B9A\u0BCD{2}"]="\u0B9A\u0BCD\u0B9A\u200C";
ta99["\u0B9E\u200C\\]"]="\u0B9E\u0BCD\u0B9E\u200D";
ta99["\u0B9E\u0BCD{2}"]="\u0B9E\u0BCD\u0B9E\u200C";

ta99["\u0B95\u200Ch"]="\u0B95\u0BCD\u0B95\u200D";
ta99["\u0B95\u0BCD{2}"]="\u0B95\u0BCD\u0B95\u200C";
ta99["\u0BAA\u200Cj"]="\u0BAA\u0BCD\u0BAA\u200D";
ta99["\u0BAA\u0BCD{2}"]="\u0BAA\u0BCD\u0BAA\u200C";
ta99["\u0BAE\u200Ck"]="\u0BAE\u0BCD\u0BAE\u200D";
ta99["\u0BAE\u0BCD{2}"]="\u0BAE\u0BCD\u0BAE\u200C";
ta99["\u0BA4\u200Cl"]="\u0BA4\u0BCD\u0BA4\u200D";
ta99["\u0BA4\u0BCD{2}"]="\u0BA4\u0BCD\u0BA4\u200C";
ta99["\u0BA8\u200C;"]="\u0BA8\u0BCD\u0BA8\u200D";
ta99["\u0BA8\u0BCD{2}"]="\u0BA8\u0BCD\u0BA8\u200C";
ta99["\u0BAF\u200C\'"]="\u0BAF\u0BCD\u0BAF\u200D";
ta99["\u0BAF\u0BCD{2}"]="\u0BAF\u0BCD\u0BAF\u200C";

ta99["\u0BB5\u200Cv"]="\u0BB5\u0BCD\u0BB5\u200D";
ta99["\u0BB5\u0BCD{2}"]="\u0BB5\u0BCD\u0BB5\u200C";
ta99["\u0B99\u200Cb"]="\u0B99\u0BCD\u0B99\u200D";
ta99["\u0B99\u0BCD{2}"]="\u0B99\u0BCD\u0B99\u200C";
ta99["\u0BB2\u200Cn"]="\u0BB2\u0BCD\u0BB2\u200D";
ta99["\u0BB2\u0BCD{2}"]="\u0BB2\u0BCD\u0BB2\u200C";
ta99["\u0BB0\u200Cm"]="\u0BB0\u0BCD\u0BB0\u200D";
ta99["\u0BB0\u0BCD{2}"]="\u0BB0\u0BCD\u0BB0\u200C";
ta99["\u0BB4\u200C/"]="\u0BB4\u0BCD\u0BB4\u200D";
ta99["\u0BB4\u0BCD{2}"]="\u0BB4\u0BCD\u0BB4\u200C";

//auto pulli rule  for vada mozhi ezuthu
ta99["\u0BB8\u200CQ"]="\u0BB8\u0BCD\u0BB8\u200D";
ta99["\u0BB8\u0BCD{2}"]="\u0BB8\u0BCD\u0BB8\u200C";
ta99["\u0BB7\u200CW"]="\u0BB7\u0BCD\u0BB7\u200D";
ta99["\u0BB7\u0BCD{2}"]="\u0BB7\u0BCD\u0BB7\u200C";
ta99["\u0B9C\u200CE"]="\u0B9C\u0BCD\u0B9C\u200D";
ta99["\u0B9C\u0BCD{2}"]="\u0B9C\u0BCD\u0B9C\u200C";
ta99["\u0BB9\u200CR"]="\u0BB9\u0BCD\u0BB9\u200D";
ta99["\u0BB9\u0BCD{2}"]="\u0BB9\u0BCD\u0BB9\u200C";

//otru
ta99["[\u200D|\u200C]q"]="\u0BBE";
ta99["[\u200D|\u200C]w"]="\u0BC0";
ta99["[\u200D|\u200C]e"]="\u0BC2";
ta99["[\u200D|\u200C]r"]="\u0BC8";
ta99["[\u200D|\u200C]t"]="\u0BC7";
ta99["\u0BCDa"]="\u200C";
ta99["[\u200D|\u200C]a"]= "";
ta99["[\u200D|\u200C]s"]="\u0BBF"
ta99["[\u200D|\u200C]d"]="\u0BC1"
ta99["[\u200D|\u200C]f"]="\u0BCD";
ta99["[\u200D|\u200C]g"]="\u0BC6";
ta99["[\u200D|\u200C]z"]="\u0BCC";
ta99["[\u200D|\u200C]x"]="\u0BCB";
ta99["[\u200D|\u200C]c"]="\u0BCA";

// copyright & spl symbols
ta99["\u200Cc"]="\u00A9";
ta99["\u200C\\."]="\u2022";

// uyir
ta99["q"]="\u0B86";
ta99["w"]="\u0B88";
ta99["e"]="\u0B8A";
ta99["r"]="\u0B90";
ta99["t"]="\u0B8F";

ta99["a"]="\u0B85";
ta99["s"]="\u0B87";
ta99["d"]="\u0B89";
ta99["f"]="\u0B83";
ta99["F"]="\u0B83";
ta99["g"]="\u0B8E";

ta99["z"]="\u0B94";
ta99["x"]="\u0B93";
ta99["c"]="\u0B92";

// vada mozhi ezuthu
ta99["Q"]="\u0BB8\u200C";
ta99["W"]="\u0BB7\u200C";
ta99["E"]="\u0B9C\u200C";
ta99["R"]="\u0BB9\u200C";
ta99["T"]="\u0B95\u0BCD\u0BB7\u200C";
ta99["Y"]="\u0BB8\u0BCD\u0BB0\u0BC0";
ta99["O"]="[";
ta99["P"]="]";

//mei
ta99["y"]="\u0BB3\u200C";
ta99["u"]="\u0BB1\u200C";
ta99["i"]="\u0BA9\u200C";
ta99["p"]="\u0BA3\u200C";
ta99["o"]="\u0B9F\u200C";
ta99["\\["]="\u0B9A\u200C";
ta99["\\]"]="\u0B9E\u200C";

ta99["g"]="\u0B8E";
ta99["h"]="\u0B95\u200C";
ta99["j"]="\u0BAA\u200C";
ta99["k"]="\u0BAE\u200C";
ta99["l"]="\u0BA4\u200C";
ta99[";"]="\u0BA8\u200C";
ta99["\'"]="\u0BAF\u200C";

ta99["v"]="\u0BB5\u200C";
ta99["b"]="\u0B99\u200C";
ta99["n"]="\u0BB2\u200C";
ta99["m"]="\u0BB0\u200C";
ta99["/"]="\u0BB4\u200C";


// spl symbols
ta99["M"]="/";
ta99["A"]="\u0BF9";
ta99["S"]="\u0BFA";
ta99["D"]="\u0BF8";
ta99["K"]="\"";
ta99["L"]=":";
ta99["\\:"]=";";
ta99["\""]="\'";
ta99["Z"]="\u0BF3";
ta99["X"]="\u0BF4";
ta99["C"]="\u0BF5";
ta99["V"]="\u0BF6";
ta99["B"]="\u0BF7";

ta99['(.+)\u200C(.+)'] = "$1$2";

var taba = new Array();
taba['\''] = "\u201C";
taba['q'] = "\u0B99";
taba['w'] = "\u0BB1";
taba['e'] = "\u0BA8";
taba['r'] = "\u0B9A";
taba['t'] = "\u0BB5";
taba['y'] = "\u0BB2";
taba['u'] = "\u0BB0";
taba['o'] = "\u0BB4";
taba['\\['] = "\u0B9C";
taba['\\]'] = "\u0BB8";
taba['a'] = "\u0BAF";
taba['s'] = "\u0BB3";
taba['d'] = "\u0BA9";
taba['f'] = "\u0B95";
taba['g'] = "\u0BAA";
taba['j'] = "\u0BA4";
taba['k'] = "\u0BAE";
taba['l'] = "\u0B9F";
taba['z'] = "\u0BA3";
taba['x'] = "\u0B92";
taba['c'] = "\u0B89";
taba['v'] = "\u0B8E";
taba['b'] = "\u0B9F\u0BBF";
taba['m'] = "\u0B85";
taba[','] = "\u0B87";
taba['/'] = "\u0B83";
taba['\\\\'] = "\u0BB7";
taba['\\`'] = "\u0BB9";
taba['='] = "\u0BB8\u0BCD\u0BB0\u0BC0";

taba['Q'] = "\u0B9E";
taba['W'] = "\u0BB1\u0BC1";
taba['E'] = "\u0BA8\u0BC1";
taba['R'] = "\u0B9A\u0BC1";
taba['T'] = "\u0BB5\u0BC1";
taba['Y'] = "\u0BB2\u0BC1";
taba['U'] = "\u0BB0\u0BC1";
taba['I'] = "\u0B90";
taba['O'] = "\u0BB4\u0BC1";
taba['\\{'] = "\u0BC1";
taba['\\}'] = "\u0BC2";
taba['A'] = "\u0BAF\u0BC1";
taba['S'] = "\u0BB3\u0BC1";
taba['D'] = "\u0BA9\u0BC1";
taba['F'] = "\u0B95\u0BC1";
taba['G'] = "\u0BAA\u0BC1";
taba['H'] = "\u0BB0\u0BCD";
taba['J'] = "\u0BA4\u0BC1";
taba['K'] = "\u0BAE\u0BC1";
taba['L'] = "\u0B9F\u0BC1";
taba['\\"'] = "\u201D";

taba['Z'] = "\u0BA3\u0BC1";
taba['X'] = "\u0B93";
taba['C'] = "\u0B8A";
taba['V'] = "\u0B8F";
taba['B'] = "\u0B9F\u0BC0";
taba['M'] = "\u0B86";
taba['\\<'] = "\u0B88";
taba['\\>'] = ",";
taba['\\|'] = "\u2019";
taba['\\~'] = "\u2018";
taba['@'] = ";";
taba['\\#'] = "\u0B9A\u0BC2";
taba['\\$'] = "\u0B95\u0BC2";
taba['\\%'] = "\u0BAE\u0BC2";
taba['\\^'] = "\u0B9F\u0BC2";
taba['\\&'] = "\u0BB0\u0BC2";
taba['\\*'] = "\u0BB4\u0BC2";
taba['\\;'] = "\u0BCD";

taba['N'] = "\u200C\u0BC7\u200C";
taba['n'] = "\u200C\u0BC6\u200C";
taba['i'] = "\u200C\u0BC8\u200C";
taba['h'] = "\u0BBE";
taba['p'] = "\u0BBF";
taba['P'] = "\u0BC0";
taba['_'] = "\u0BC2";
taba['\\+'] =  "\u0BC2";
taba['\u0BC1\u0BC2'] = "\u0BC2";

var tava = new Array();
tava['\\!'] = "\u0BB8";
tava['\\$'] = "\u0B9C";
tava['\\%'] = "\u0BC1";
tava['\\^'] = "\u0BC2";
tava['\\&'] = "";
tava['_'] = "\u0BB8\u0BCD\u0BB0\u0BC0";
tava['\\+'] = "+";
tava['q'] = "\u0BA3\u0BC1";
tava['w'] = "\u0BB1";
tava['e'] = "\u0BA8";
tava['r'] = "\u0B9A";
tava['t'] = "\u0BB5";
tava['y'] = "\u0BB2";
tava['u'] = "\u0BB0";
tava['i'] = "\u200C\u0BC8\u200C";
tava['o'] = "\u0B9F\u0BBF";
tava['p'] = "\u0BBF";
tava['\\['] = "\u0BC1";
tava['\\]'] = "\u0BB9";
tava["\\\\"] = "\u201B";
tava['Q'] = "";
tava['W'] = "\u0BB1\u0BC1";
tava['E'] = "\u0BA8\u0BC1";
tava['R'] = "\u0B9A\u0BC1";
tava['T'] = "\u0B95\u0BC2";
tava['Y'] = "\u0BB2\u0BC1";
tava['U'] = "\u0BB0\u0BC1";
tava['I'] = "\u0B90";
tava['O'] = "\u0B9F\u0BC0";
tava['P'] = "\u0BC0";
tava['\\{'] = "\u0BC2";
tava['\\}'] = "\u0BC2";

tava['a'] = "\u0BAF";
tava['s'] = "\u0BB3";
tava['d'] = "\u0BA9";
tava['f'] = "\u0B95";
tava['g'] = "\u0BAA";
tava['h'] = "\u0BBE";
tava['j'] = "\u0BA4";
tava['k'] = "\u0BAE";
tava['l'] = "\u0B9F";
tava['\\;'] = "\u0BCD";
tava['\\\''] = "\u0B99";
tava['\\*'] = "'";
tava['S'] = "\u0BB3\u0BC1";
tava['D'] = "\u0BA9\u0BC1";
tava['F'] = "\u0B95\u0BC1";
tava['G'] = "\u0BB4\u0BC1";
tava['H'] = "\u0BB4";
tava['J'] = "\u0BA4\u0BC1";
tava['K'] = "\u0BAE\u0BC1";
tava['L'] = "\u0B9F\u0BC1";
tava['\\:'] = "\u0BC2";
tava['\\"'] = "\u0B9E";

tava['z'] = "\u0BA3";
tava['x'] = "\u0B92";
tava['c'] = "\u0B89";
tava['v'] = "\u0B8E";
tava['b'] = "\u200C\u0BC6\u200C";
tava['n'] = "\u200C\u0BC7\u200C";
tava['m'] = "\u0B85";
tava['\\,'] = "\u0B87";
tava['Z'] = "\u0BB7";
tava['X'] = "\u0B93";
tava['C'] = "\u0B8A";
tava['V'] = "\u0B8F";
tava['B'] = "\u0B95\u0BCD\u0BB7";
tava['N'] = "\u0B9A\u0BC2";
tava['M'] = "\u0B86";
tava['\\<'] = "\u0B88";

tava['\\|'] = "\u2019";
tava['\\`'] = "\u0B83";
tava['\\.'] = ",";
tava['\\/'] = ".";
tava['\\#'] = "%";
tava['\\~'] = "*";
tava['A'] = "~";
tava['\\-'] = "/";
tava['\\@'] = "\u201C";
tava['\\?'] = "-";
tava['\\>'] = "?";
tava['\u0BC1\u0BC2'] = "\u0BC2";

var tamo = new Array();
tamo['\\!'] = "!";
tamo['\\$'] = "\u0BC1";
tamo['\\%'] = "%";
tamo['\\^'] = "\u0BC2";
tamo['\\&'] = "\u0BCB";
tamo['\\*'] = "\u0BCA";
tamo['_'] = "\u0BF8";
tamo['q'] = "\u0BB1\u0BBE";
tamo['w'] = "\u0BB3";
tamo['e'] = "\u0BAE";
tamo['r'] = "\u0B9A";
tamo['t'] = "\u0BBE";
tamo['y'] = "\u0BA4";
tamo['u'] = "\u0BC8";
tamo['i'] = "\u0B9F";
tamo['o'] = "\u0BB5";
tamo['p'] = "\u0BA9";
tamo['\\['] = "\u0B9C";
tamo['\\]'] = "\u0B83";
tamo["\\\\"] = "\u0B95\u0BCD\u0BB7";
tamo['Q'] = "\u0BB8";
tamo['W'] = "\u0BB3\u0BC1";
tamo['E'] = "\u0BAE\u0BC1";
tamo['R'] = "\u0B9A\u0BC1";
tamo['T'] = "\u0B86";
tamo['Y'] = "\u0BA4\u0BC1";
tamo['U'] = "\u0B90";
tamo['I'] = "\u0B9F\u0BC1";
tamo['O'] = "\u0BB5\u0BC1";
tamo['P'] = "\u0BA9\u0BC1";
tamo['\\{'] = "\u0BB7";
tamo['\\}'] = "\u0BB9";

tamo['a'] = "\u0BB0";
tamo['s'] = "\u0BB1";
tamo['d'] = "\u0BA3";
tamo['f'] = "\u0BCD";
tamo['g'] = "\u0B95";
tamo['h'] = "\u0BBF";
tamo['j'] = "\u0BC0";
tamo['k'] = "\u0BAA";
tamo['l'] = "\u0BA8";
tamo['\\;'] = ";";
tamo['\\\''] = "\u0BC2";
tamo['A'] = "\u0BB0\u0BC1";
tamo['S'] = "\u0BB1\u0BC1";
tamo['D'] = "\u0BA3\u0BC1";
tamo['F'] = "\u0B85";
tamo['G'] = "\u0B95\u0BC1";
tamo['H'] = "\u0B87";
tamo['J'] = "\u0B88";
tamo['K'] = "\u0BAA\u0BC1";
tamo['L'] = "\u0BA8\u0BC1";
tamo['\\:'] = ":";
tamo['\\"'] = "\u0B8A";

tamo['z'] = "\u0B92";
tamo['x'] = "\u0BB4";
tamo['c'] = "\u0BAF";
tamo['v'] = "\u0BC6";
tamo['b'] = "\u0BC7";
tamo['n'] = "\u0B99";
tamo['m'] = "\u0BB2";
tamo[','] = ",";
tamo['Z'] = "\u0B93";
tamo['X'] = "\u0BB4\u0BC1";
tamo['C'] = "\u0BAF\u0BC1";
tamo['V'] = "\u0B8E";
tamo['B'] = "\u0B8F";
tamo['N'] = "\u0B9E";
tamo['M'] = "\u0BB2\u0BC1";
tamo['\\<'] = "\u0BA9\u0BBE";
tamo['\\>'] = "\u0B89";

tamo['\\|'] = "\u0BB8\u0BCD\u0BB0\u0BC0";
tamo['\\`'] = "\u0BC8";
tamo['\\#'] = "\u2019";
tamo['\\~'] = "\u0BA3\u0BBE";
tamo['-'] = "-";
tamo['\\@'] = "\u201B";
tamo['\u0BC1\u0BC2'] = "\u0BC2";
