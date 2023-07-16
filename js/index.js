function rundomQuote() {
  var quote = [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“Be the change that you wish to see in the world.”",
    "“كيف نضجر وللسماء هذه الزرقة ، وللأرض هذه الخضرة ، وللورد هذا الشذا ، وللقلب هذه القدرة العجيبة على الحب ، وللروح هذه الطاقة اللانهائية على الإيمان. كيف نضجر وفي الدنيا من نحبهم ، ومن نعجب بهم ، ومن يحبوننا ، ومن يعجبون بنا.”",
    `“ولرُبٌّ نازلةٍ يضيق بها الفتى * ذرعاً وعند الله منها المخرجُ
                ضاقت فلما استحكمت حلقاتها * فُرجت وكان يظنها لا تُفرجُ`,
  ];

  var author = [
    "Oscar Wilde",
    "Marilyn Monroe",
    "Albert Einstein",
    "Mahatma Gandhi",
    "نجيب محفوظ",
    "محمد بن إدريس الشافعي",
  ];
  var num = Math.floor(Math.random() * quote.length);
  document.getElementById("text").innerHTML = quote[num];
  document.getElementById("writer").innerHTML = author[num];
}
