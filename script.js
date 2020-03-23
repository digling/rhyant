var POEM = {
  'poem': {},
  'meta': {},
  'rhymestyle': [
    ["#a6cee3", "1", "solid"],
    ["#1f78b4", "1", "solid"], 
    ["#b2df8a", "1", "solid"], 
    ["#33a02c", "1", "solid"], 
    ["#fb9a99", "1", "solid"], 
    ["#e31a1c", "1", "solid"], 
    ["#fdbf6f", "1", "solid"], 
    ["#ff7f00", "1", "solid"], 
    ["#cab2d6", "1", "solid"], 
    ["#6a3d9a", "1", "solid"], 
    ["#ffff99", "1", "solid"], 
    ["#b15928", "1", "solid"],
    ["#a6cee3", "1", "dotted"],
    ["#1f78b4", "1", "dotted"], 
    ["#b2df8a", "1", "dotted"], 
    ["#33a02c", "1", "dotted"], 
    ["#fb9a99", "1", "dotted"], 
    ["#e31a1c", "1", "dotted"], 
    ["#fdbf6f", "1", "dotted"], 
    ["#ff7f00", "1", "dotted"], 
    ["#cab2d6", "1", "dotted"], 
    ["#6a3d9a", "1", "dotted"], 
    ["#ffff99", "1", "dotted"], 
    ["#b15928", "1", "dotted"],
    ["#a6cee3", "1", "dashed"],
    ["#1f78b4", "1", "dashed"], 
    ["#b2df8a", "1", "dashed"], 
    ["#33a02c", "1", "dashed"], 
    ["#fb9a99", "1", "dashed"], 
    ["#e31a1c", "1", "dashed"], 
    ["#fdbf6f", "1", "dashed"], 
    ["#ff7f00", "1", "dashed"], 
    ["#cab2d6", "1", "dashed"], 
    ["#6a3d9a", "1", "dashed"], 
    ["#ffff99", "1", "dashed"], 
    ["#b15928", "1", "dashed"],
    ["#a6cee3", "0", "solid"],
    ["#1f78b4", "0", "solid"], 
    ["#b2df8a", "0", "solid"], 
    ["#33a02c", "0", "solid"], 
    ["#fb9a99", "0", "solid"], 
    ["#e31a1c", "0", "solid"], 
    ["#fdbf6f", "0", "solid"], 
    ["#ff7f00", "0", "solid"], 
    ["#cab2d6", "0", "solid"], 
    ["#6a3d9a", "0", "solid"], 
    ["#ffff99", "0", "solid"], 
    ["#b15928", "0", "solid"],
    ["#a6cee3", "0", "dotted"],
    ["#1f78b4", "0", "dotted"], 
    ["#b2df8a", "0", "dotted"], 
    ["#33a02c", "0", "dotted"], 
    ["#fb9a99", "0", "dotted"], 
    ["#e31a1c", "0", "dotted"], 
    ["#fdbf6f", "0", "dotted"], 
    ["#ff7f00", "0", "dotted"], 
    ["#cab2d6", "0", "dotted"], 
    ["#6a3d9a", "0", "dotted"], 
    ["#ffff99", "0", "dotted"], 
    ["#b15928", "0", "dotted"],
    ["#a6cee3", "0", "dashed"],
    ["#1f78b4", "0", "dashed"], 
    ["#b2df8a", "0", "dashed"], 
    ["#33a02c", "0", "dashed"], 
    ["#fb9a99", "0", "dashed"], 
    ["#e31a1c", "0", "dashed"], 
    ["#fdbf6f", "0", "dashed"], 
    ["#ff7f00", "0", "dashed"], 
    ["#cab2d6", "0", "dashed"], 
    ["#6a3d9a", "0", "dashed"], 
    ["#ffff99", "0", "dashed"], 
    ["#b15928", "0", "dashed"],
  ],
  "rhymes": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C",
    "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "aa", "bb", "cc", "dd", "ee", "ff",
    "gg", "hh", "ii", "jj", "kk", "ll", "nn", "oo", "pp", "qq", "rr", "ss",
    "tt", "uu", "vv", "ww", "xx", "yy", "zz", "AA", "BB", "CC", "DD", "EE",
    "FF", "GG", "HH", "II", "JJ", "KK", "LL", "NN", "OO", "PP", "QQ", "RR",
    "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ", "aaa", "bbb", "ccc", "ddd",
    "eee", "fff", "ggg", "hhh", "iii", "jjj", "kkk", "lll", "nnn", "ooo",
    "ppp", "qqq", "rrr", "sss", "ttt", "uuu", "vvv", "www", "xxx", "yyy",
    "zzz", "AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG", "HHH", "III",
    "JJJ", "KKK", "LLL", "NNN", "OOO", "PPP", "QQQ", "RRR", "SSS", "TTT",
    "UUU", "VVV", "WWW", "XXX", "YYY", "ZZZ"
  ],
  "stopmarks": ",;.\"。，、'",
  "activerhymes": [],
  "currentrhyme": '',
  "text" : ""
};

/* function loads the text and displays it */
function loadText(event){
  if (event.keyCode == 27) {
    var text, poem, display, i, j, k, word, rhyme, refrain, rhymes, colors, rhymet, classes;
    text = document.getElementById('input').value;
    poem = processText(text);
    POEM['poem'] = poem['poem'];
    POEM['meta'] = poem['meta'];
    POEM['text'] = text;
    displayPoem();
    displaySettings();
    styleRhymes();
  }
  else {
    return;
  }
}

/* set a rhyme */
function currentRhyme(node){
  var classes;
  POEM['currentrhyme'] = node.dataset['rhyme'];
  node.style.fontWeight = "bold";
  node.style.paddingRight = "20px";
  node.style.paddingLeft = "20px";
  styleRhymes();
}

/* function to toggle between rhyming words */
function toggleRhyme(node, idx, jdx, kdx) {
  if (POEM['currentrhyme'] == '') {
    return;
  }
  if (node.dataset.rhyme == POEM['currentrhyme']) {
    node.className = 'word';
    node.dataset.rhyme = '';
    POEM['poem'][idx][jdx]['rhymes'][kdx] = '';
    node.innerHTML = POEM['poem'][idx][jdx]['oline'][kdx];
  }
  else {
    POEM['poem'][idx][jdx]['rhymes'][kdx] = POEM['currentrhyme'];
    node.className = 'word rhyming rhyme-'+POEM['currentrhyme'];
    node.innerHTML = POEM['poem'][idx][jdx]['line'][kdx];
  }
  displayPoem();
  displaySettings();
  styleRhymes();
  document.getElementById('input').value = POEM['text'];
}

/* display the settings and show active rhymes */
function displaySettings(){
  var display, i, j, rhyme;
  display = '<h2>Settings</h2><h3>Active Rhymes</h3>';
  display += '<div class="settings"><div class="sline">';
  for (i=0; i<POEM['activerhymes'].length; i++){
    rhyme=POEM['activerhymes'][i];
    display += '<span style="padding-left: 10px; padding-right: 10px;" data-rhyme="'+rhyme+'" onclick="currentRhyme(this);" class="word rhyming rhyme-'+rhyme+'"> '+
      rhyme+' </span>';
  }
  display += '</div></div>';
  display += '<h3>New Rhyme</h3>';
  display += '<div class="stanza"><div class="line">';
  for (i=0; i<POEM['rhymes'].length; i++) {
    if (POEM['activerhymes'].indexOf(POEM['rhymes'][i]) == -1) {
      rhyme = POEM['rhymes'][i];
      display += '<span style="padding-left: 10px; padding-right: 10px;" data-rhyme="'+rhyme+'" onclick="currentRhyme(this);" class="word rhyming rhyme-'+rhyme+'">'+rhyme+'</span>';
      break;
    }
  }
  display += '</div></div>';
  document.getElementById('settings').innerHTML = display;
}

/* function serves to display the poem */
function displayPoem(){
  var display, key, i, j, k, refrain, word, rhyme, rhymet, rymes, classes;
  var color, border, borderstyle;
  var text, refrain_prefix, text_line, slashed;
  text = '';
  display = '<h2>Inspect and annotate your poem</h2><h3>Metadata</h3><table class="meta">';
  for (key in POEM['meta']) {
    display += '<tr><th>'+key+'</th><td>'+POEM['meta'][key]+'</td></th></tr>';
    text += '@'+key+':'+POEM['meta'][key]+'\n';
  }
  display += '</table><h3>Poem</h3>';

  for (i=1; i<=Object.keys(POEM['poem']).length; i++){
    text += '\n';
    if (POEM['poem'][i][1]['refrain'] == 1) {
      refrain = ' refrain';
      refrain_prefix = '  ';
    }
    else {
      refrain = '';
      refrain_prefix = '';
    }
    display += '<div id="stanza_'+i+'" title="Stanza '+i+'" class="stanza'+refrain+'">';
    for (j=1; j<=Object.keys(POEM['poem'][i]).length; j++) {
      text_line = '';
      display += '<div class="line" id="line_'+j+'" data-text="'+POEM['poem'][i][j]['text']+'">';
      for (k=0; k<POEM['poem'][i][j]['line'].length; k++) {
        word = POEM['poem'][i][j]['line'][k];
        rhyme = POEM['poem'][i][j]['rhymes'][k];

        if (rhyme) {
          if (POEM['activerhymes'].indexOf(rhyme) == -1) {
            POEM['activerhymes'].push(rhyme);
          }
          rhymet = ' rhyming rhyme-'+rhyme;
          rhymes = '<sup>'+rhyme+'</sup>';
          if (POEM['poem'][i][j]['pline'][k]) {
            slashed = '/'+POEM['poem'][i][j]['pline'][k];
          }
          else {
            slashed = '';
          }
          if (word.startsWith('-')){
            text_line += '['+rhyme+slashed+']'+POEM['poem'][i][j]['oline'][k];
          }
          else {
            text_line += ' ['+rhyme+slashed+']'+POEM['poem'][i][j]['oline'][k];
          }
          if (POEM['poem'][i][j]['pline'][k]) {
            word = POEM['poem'][i][j]['pline'][k];
          }
        }
        else {
          rhymet = '';
          rhymes = '';
          word = POEM['poem'][i][j]['oline'][k];
          if (POEM['poem'][i][j]['line'][k].startsWith('-')) {
            text_line += word;
          }
          else {
            text_line += ' '+word;
          }
        }
        display += '<span id="word-'+i+'-'+j+'-'+k+'" onclick="toggleRhyme(this,'+i+','+j+','+k+')"'+
          ' class="word '+rhymet+'" data-rhyme="'+rhyme+'">' +
          word+rhymes+'</span>';
      }
      display += '</div>';
      text += refrain_prefix+text_line.trim()+'\n';
    }
    display += '</div>';
  }
  document.getElementById('poem').innerHTML = display;
  POEM['text'] = text;
}

/* style the rhymes according to the schema */
function styleRhymes(){
  var i, classes;
  for (i=0; i<POEM['activerhymes'].length; i++) {
    classes = document.getElementsByClassName('rhyme-'+POEM['activerhymes'][i]);
    for (j=0; j<classes.length; j++) {
      /* first case, border is 1 */
      if (POEM['rhymestyle'][i][1] == "1") {
        classes[j].style.backgroundColor = POEM['rhymestyle'][i][0];
        classes[j].style.border = '2px '+POEM['rhymestyle'][i][2]+' black';
      }
      else {
        classes[j].style.backgroundColor = POEM['rhymestyle'][i][0];
        classes[j].style.border = '2px '+POEM['rhymestyle'][i][2]+' '+
          POEM['rhymestyle'][i][0];
      }
    }
  }
  classes = document.getElementsByClassName('rhyming');
  for (i=0; i<classes.length; i++) {
    if (classes[i].dataset['rhyme'] != POEM['currentrhyme']){
      classes[i].style.fontWeight="normal";
    }
  }
}

/* parse the brackets inside a word */
function getBrackets(word){
  var i, letter;
  var new_word;
  var inbracket = false, inslash = false;
  new_word = [['', '', '', '']];
  for (i=0; i<word.length; i++) {
    letter = word[i];
    if (letter == '[') {
      inbracket = true;
      if (i != 0) {
        new_word.push(['-', '', '', ''])
      }
    }
    else if (letter == ']') {
      inbracket = false;
      inslash = false;
    }
    else if (!inbracket) {
      if (POEM['stopmarks'].indexOf(letter) == -1){
        new_word[(new_word.length-1)][0] += letter;
      }
      new_word[(new_word.length-1)][2] += letter;
    }
    else {
      if (letter == '/') {
        inslash = true;
      }
      else {
        if (inslash) {
          new_word[(new_word.length-1)][3] += letter;
        }
        else {
          new_word[(new_word.length-1)][1] += letter;
        }
      }
    }
  }
  return new_word;
}

/* retrieve the rhymes of a given word */
function getRhymes(line){
  var i, j, word, letter, rhyme;
  var words;
  words = [];
  for (i=0; i<line.length; i++) {
    word = line[i];
    rhyme = getBrackets(word);
    for (j=0; j<rhyme.length; j++) {
      words.push(rhyme[j]);
    }
  }
  return words
}

/* initial function to read the text and parse it */
function processText(text){
  var lines, i;
  var meta, poem;
  var stanza;
  var keyval, keys;
  var refrain;
  var number;
  var rhymes, rhymeid, rhymelines;

  lines = text.split('\n');
  meta = {};
  poem = {};
  rhymes = {}, rhymeid = 1;
  refrain = 0;
  stanza = 0, number = 1;
  for (i=0; i<lines.length; i++) {
    line = lines[i];

    /* keyvalue pairs in format */
    if (line[0] == '@' && line.indexOf(':') != -1) {
      keyval = line.slice(1, line.length).split(':');
      meta[keyval[0]] = keyval[1];
    }
    /* new stanza */
    else if (line.trim() == '') {
      refrain = 0;
      if (stanza == 0) {
        stanza = 1;
      }
      else {
        stanza += 1;
        number = 1;
      }
    }
    /* new poem */
    else {
      if (stanza == 0) {
        stanza = 1;
        number = 1;
      }
      if (line.startsWith('  ')) {
        refrain = 1;
      }

      if (!(stanza in poem)) {
        poem[stanza] = {};
      }
      poem[stanza][number] = {
        "refrain": refrain, 
        "text": line.trim(), 
        "rhymes": [], 
        "line": [],
        "oline": [],
        "pline": []
      };

      rhymelines = getRhymes(line.trim().split(' '));
      for (j=0; j<rhymelines.length; j++) {
        poem[stanza][number]["line"].push(rhymelines[j][0]);
        poem[stanza][number]["rhymes"].push(rhymelines[j][1]);
        poem[stanza][number]["oline"].push(rhymelines[j][2]);
        poem[stanza][number]["pline"].push(rhymelines[j][3]);
      }
      number += 1;
    }
  }
  return {'poem': poem, 'meta': meta};
}


