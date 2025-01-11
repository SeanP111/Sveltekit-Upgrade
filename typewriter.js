var i = 0;
const secondss = 10;
var intervalID = window.setInterval(updateQuoteRandom, 600 * secondss);

var quotes = ["David was friendly and persisant in teaching all students, making sure everyone was learning.",
"He is really funny and actively helps everyone so no one left behind.",
"David was a really nice, engaging and understanding tutor. Amazing guy and really relatable.",
"Good teaching, easy understanding.",
"He tries his very best to help out in labs and is very dedicated. He always comes on time. He helps until late at night, which is incredible.",
"Davey had been supportive and encouraged me to learn programming even though it is not my strongest subject.",
"He has facilitated my learning by caring about my presence in class and made me feel welcomed even though I was quite behind compared to the other students.",
"Having a tutor that is non-judgemental and genuinely cares about one's learning made me try and get back to striving for my best.",
"David is excellent. He's dedicated, consistently professional even when tired and always present.",
"I've struggled immensely with this class prior, and I genuinely owe it to him for my success this semester.",
"He genuinely feels like the only link between students and staff, like the only one actually paying any attention.",
"He does a great job of teaching a poorly structured class.",
"David was a key reason I always attended the computer labs. Knowledgable and always a friendly face.",
"Good tutor with professional spirit of IT engineer.",
"Very good tutor. He is committed and enthusiastic. Also coming to class very prepared and spending time one on one when required.",
"Extremely relatable, great person to talk to, super good at understanding the subject.",
"Easily approachable, great communicator, I felt confident in his abilities.",
"The most approachable tutor I've ever had.",
"Very friendly, provided various methods to contact him and assisted students whenever and wherever possible.",
"Consistently helpful and very patient.",
"Davey is the best programming tutor, I always end up learning something from the labs or fixing an issue in a lab or assignment.",
"David is personable and good at clarifying concepts. He was always quick to clarify any confusions.",
"No improvements to suggest. Tutor already goes above and beyond.",
"How can you improve an already perfect tutor?",
"Was very involved, gave his own time, happy to talk about industry and application.",
"Pretty nice tutor and also enthusiastic. Hope I see him in all of my other subject.",
"His teaching style was very informative and engaging. Thank you David.",
"He is very friendly and easy to interact with. He comforted and encouraged me multiple times to keep on trying to learn programming when I thought I did not have what it takes.",
"I am truly grateful for all the help he provided and feel very lucky that I took this subject when he was the tutor.",
"The best tutor ever.",
"David is a great, friendly and one of the most enthusiastic tutor. He is an energetic and uplifting mood teacher.",
"I am really happy that he's my tutor and also appreciate his help.",
"Probably one of the best teachers I've had in my time at uni.",
"Davey once again was a present and focused teacher. He provided consistently good advice in all projects and takes genuine interest in the work of everyone.",
"David is an excellent tutor. Helpful and alway willing to try and make things better for the students.",
"A professional tutor but is laid back enough to feel invited into the class.",
"This tutor is the best tutor I have had.",
"David Dyer was a fantastic tutor, and was the main redeeming quality for this subject. He taught well and genuinely seemed to care for my class.",
"David was incredibly helpful on a number of occasions, and his time was invaluable in class when I required help with content.",
"David Dyer was a great tutor. He was easy to talk to and answered questions straight to the point.",
"Very good tutor. Answered all my questions, and often offered helpful suggestions to my assessments. Very friendly as well.",
"I am quite glad I got a wonderful teacher like David. He is an active tutor who walks to each table and checks up on them and is very helpful.",
"David was a great teacher, he made the content interesting and was happy to help. I liked his upfront honesty.",
"David was enthusiastic and encouraging in this class. He made the most of a poor subject in my opinion.",
"David is a really good tutor, I am happy to be in his class.",
"David is an amazing tutor. He had the perfect balance between being able to encourage students but also being able to nicely provide constructive criticism.",
"David did an amazing job at teaching. He was always available to help and had a friendly personality.",
"One of the best teacher I ever had. he made the classes engage with him and he is fun to be around.",
"David has a unique and fun way of explaining Linux commands and I really value his support when I was struggling.",
"David was a really good tutor as he was able to help me with my work and explain why certain things are the way they are.",
"David was professional and very helpful in explaining the content.",
"David is a W tutor.",
"David is a very good tutor. Very engaging, helpful, and knows a lot about the subject.",
"I'm very satisfied with David's ability to teach programming. He speaks clearly, knows what he is doing, and is approachable to students who need help.",
"David is very effective in teaching, ensuring that it is clear of our requirements and expectations throughout the agile process and the semester.",
"David is really good and knows what he is doing, seems confident in how he teaches, and easy to understand.",
"Seriously helped me so much, put the concepts into really helpful analogies which assisted my understanding.",
"David was phenomenal online and in person.",
"David was a very supportive and knowledgeable tutor, and helped me greatly through both my assignments.",
"David is a great tutor and knows how to communicate information to students and answer questions in a timely manner.",
"The GOAT.",
"David was involved, enthusiastic and knowledgeable.",
"It was a pleasure to learn from David. 10/10.",
"David has been an outstanding tutor for Programming 2. His teaching approach is both supportive and engaging.",
"David’s dedication to our learning, along with his patience and encouragement, has made a positive impact on my progress in the course.",
"David's commitment to student success truly makes him an invaluable asset to the program.",
"One of the best tutors / teachers ive had at university his understanding and ability to teach and communicate is amazing.",
"David was a really helpful and fun tutor, he always answered my questions and helped improve my learning and understanding of the subject.",
"The best tutor that I know of in UTS.",
"David was a very hard worker and he always tried his best to help, he was also quite knowledgeable about the source material.",
"David is a fantastic tutor who goes above and beyond to ensure that myself and other students are up to speed with what's happening with the content."];

function setInitialQuote() {
    var quote = document.getElementById("quote");
    quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
}

function updateQuoteIncremental() {
    console.log("running");

    if (i >= quotes.length) {
        i = 0;
    }
    var quote = document.getElementById("quote");
    quote.innerHTML = quotes[i];
    i++;
}

function updateQuoteRandom() {
    $("#whole-quote").fadeOut(1000);
    setTimeout(function() {
        document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }, 1000)
    $("#whole-quote").fadeIn(1000);
}

function typewriter() {

    //Casual Academic
    /*
    Tutor
    Lecturer
    Researcher
    Freelancer
    Game Developer
    Communicator
    Leader

    */

    console.log("dsfdsfds");
    const delay = 2000;
    const seconds = 0.15;
    var txt = document.getElementById("main-text");
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Academic" }, delay + 1000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Academi" }, delay +  2000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Academ" }, delay +  3000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Acade" }, delay +  4000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Acade" }, delay +  5000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Acad" }, delay +  6000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Aca" }, delay +  7000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Ac" }, delay +  8000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual A" }, delay +  9000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual " }, delay +  10000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual" }, delay +  11000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casua" }, delay +  12000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casu" }, delay +  13000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Cas" }, delay +  14000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; C" }, delay +  15000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; " }, delay +  16000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; T" }, delay +  17000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Tu" }, delay +  18000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Tut" }, delay +  19000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Tuto" }, delay +  20000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Tutor" }, delay +  21000 * seconds);

    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Tuto" }, delay +  25000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Tut" }, delay +  26000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Tu" }, delay +  27000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; T" }, delay +  28000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; " }, delay +  29000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; L" }, delay +  30000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Le" }, delay +  31000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lec" }, delay +  32000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lect" }, delay +  33000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lectu" }, delay +  34000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lectur" }, delay +  35000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lecture" }, delay +  36000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lecturer" }, delay +  37000 * seconds);

    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lecture" }, delay +  41000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lectur" }, delay +  42000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lectu" }, delay +  43000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lect" }, delay +  44000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Lec" }, delay +  45000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Le" }, delay +  46000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; L" }, delay +  47000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; " }, delay +  48000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; R" }, delay +  49000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Re" }, delay +  50000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Res" }, delay +  51000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Rese" }, delay +  52000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Resea" }, delay +  53000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Resear" }, delay +  54000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Researc" }, delay +  55000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Research" }, delay +  56000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Researche" }, delay +  57000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Researcher" }, delay +  58000 * seconds);

    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Researche" }, delay + 62000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Research" }, delay +  63000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Researc" }, delay +  64000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Resear" }, delay +  65000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Resea" }, delay +  66000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Rese" }, delay +  67000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Res" }, delay +  68000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Re" }, delay +  69000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; R" }, delay +  70000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; " }, delay +  71000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; F" }, delay +  72000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Fr" }, delay +  73000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Fre" }, delay +  74000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Free" }, delay +  75000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freel" }, delay +  76000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freela" }, delay +  77000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freelan" }, delay +  78000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freelanc" }, delay +  79000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freelance" }, delay +  80000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freelancer" }, delay +  81000 * seconds);

    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freelancer" }, delay +  85000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freelance" }, delay +  86000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freelanc" }, delay +  87000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freelan" }, delay +  88000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freela" }, delay +  89000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Freel" }, delay +  90000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Free" }, delay +  91000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Fre" }, delay +  92000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Fr" }, delay +  93000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; F" }, delay +  94000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; " }, delay +  95000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; G" }, delay +  96000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Ga" }, delay +  97000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Gam" }, delay +  98000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game" }, delay +  99000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game " }, delay +  100000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game D" }, delay +  101000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game De" }, delay +  102000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Dev" }, delay +  103000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Deve" }, delay +  104000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Devel" }, delay +  105000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Develo" }, delay +  106000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Develop" }, delay +  107000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Develope" }, delay +  108000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Developer" }, delay +  109000 * seconds);

    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Developer" }, delay +  110000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Develope" }, delay +  111000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Develop" }, delay +  112000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Develo" }, delay +  113000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Devel" }, delay +  114000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Deve" }, delay +  115000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game Dev" }, delay +  116000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game De" }, delay +  117000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game D" }, delay +  118000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game " }, delay +  119000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Game" }, delay +  120000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Gam" }, delay +  121000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Ga" }, delay +  122000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; G" }, delay +  123000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; " }, delay +  124000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; C" }, delay +  125000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Ca" }, delay +  126000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Cas" }, delay +  127000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casu" }, delay +  128000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casua" }, delay +  129000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual" }, delay +  130000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual " }, delay +  131000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual A" }, delay +  132000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Ac" }, delay +  133000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Aca" }, delay +  134000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casua; Acad" }, delay +  135000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Acade" }, delay +  136000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Academ" }, delay +  137000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Academi" }, delay +  138000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; Casual Academic" }, delay +  139000 * seconds);
}

function qualificationTypewriter() {
    setInitialQuote();
    const delay = 2000;
    const seconds = 0.15;
    var txt = document.getElementById("main-text");
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey;" }, delay + 1000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; h" }, delay + 2000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; he" }, delay + 3000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; her" }, delay + 4000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here" }, delay + 5000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here'" }, delay + 6000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's" }, delay + 7000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's " }, delay + 8000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's m" }, delay + 9000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my" }, delay + 10000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my " }, delay + 11000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my q" }, delay + 12000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qu" }, delay + 13000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qua" }, delay + 14000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qual" }, delay + 15000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my quali" }, delay + 16000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualif" }, delay + 17000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualifi" }, delay + 18000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualific" }, delay + 19000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualifica" }, delay + 20000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualificat" }, delay + 21000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualificati" }, delay + 22000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualificatio" }, delay + 23000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualification" }, delay + 24000 * seconds);
    setTimeout(function() { txt.innerHTML = "Hi, I'm Davey; here's my qualifications" }, delay + 25000 * seconds);
}
