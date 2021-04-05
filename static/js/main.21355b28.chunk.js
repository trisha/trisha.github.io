(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(19),i=a.n(r),s=(a(25),a(11)),o=a(12),h=a(14),l=a(13),j=(a(26),a(4)),d=a(2),p=a(8),b=a(0),u=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("nav",{className:"nav-left",children:Object(b.jsx)(p.b,{to:"/",className:"header-url",children:"Patricia Pan"})}),Object(b.jsxs)("nav",{className:"nav-right",children:[Object(b.jsx)(p.b,{to:"/#about",className:"header-url",children:"About"})," | ",Object(b.jsx)(p.b,{to:"/#projects",className:"header-url",children:"Projects"})," | ",Object(b.jsx)(p.b,{to:"/contact",className:"header-url",children:"Contact"})," | ",Object(b.jsx)("a",{target:"_blank",href:"https://drive.google.com/file/d/1chUOF-zbosztG8ohSgw8UOJOxIjLnTk8/view?usp=sharing",className:"header-url",children:"Resume"})]})]})}}]),a}(n.Component),m=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:["Hello this is the Blog page.",this.props.posts.map((function(e,t){return Object(b.jsxs)("div",{children:[e.title," ",e.body]})}))]})}}]),a}(n.Component);var g=function(e){return Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)(j.b,{to:"/about",className:"header-url",children:Object(b.jsx)("h1",{className:"header-url",children:"About"})}),Object(b.jsx)(j.b,{to:"/about",children:Object(b.jsx)("img",{className:"profile-picture",src:"images/gainsight-full-square.jpg"})}),Object(b.jsx)("p",{children:"The daughter of Chinese immigrants, I was born and raised in Los Angeles."}),Object(b.jsxs)("p",{children:["In 2017, I graduated from ",Object(b.jsx)("a",{target:"_blank",href:"https://www.cmu.edu/",children:"Carnegie Mellon"})," with a B.S. in Chemical Engineering, and a double major in Biomedical Engineering."]}),Object(b.jsxs)("p",{children:["I spent 3 years with ",Object(b.jsx)("a",{target:"_blank",href:"https://www.accenture.com/us-en",children:"Accenture"})," doing technology consulting while based in San Francisco."]}),Object(b.jsxs)("p",{children:["I did a coding bootcamp with ",Object(b.jsx)("a",{target:"_blank",href:"https://generalassemb.ly/education/software-engineering-immersive-remote",children:"General Assembly"})," and graduated in March 2021."]}),Object(b.jsx)("p",{children:"Now, I'm seeking my first software engineering role."}),Object(b.jsx)("p",{children:"My dream is to one day become a CTO, but I'm not in a hurry. In my spare time, you can find me painting or hosting paint n' sips, skiing blues, backpacking with a 700 lumen flashlight (because I'm scared of the dark), doing improv with no shame (e.g. yodeling), playing Genshin Impact on my phone, reading webcomics and webnovels, or dressing up (outfits + makeup)."}),Object(b.jsxs)("p",{children:[Object(b.jsx)("em",{children:"Professional"}),": ",Object(b.jsx)("span",{children:" "}),Object(b.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/patricia-pan/",children:"Linkedin"}),Object(b.jsx)("span",{children:" | "}),Object(b.jsx)("a",{target:"_blank",href:"https://github.com/patricia-pan",children:"Github"}),Object(b.jsx)("span",{children:" | "}),Object(b.jsx)("a",{target:"_blank",href:"https://patricia-pan.medium.com/",children:"Medium"})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("em",{children:"Personal"}),": ",Object(b.jsx)("span",{children:" "}),Object(b.jsx)("a",{target:"_blank",href:"https://ppan.substack.com/",children:"Substack"}),Object(b.jsx)("span",{children:" | "}),Object(b.jsx)("a",{target:"_blank",href:"https://www.instagram.com/pat.e.pan/",children:"Instagram"}),Object(b.jsx)("span",{children:" | "}),Object(b.jsx)("a",{target:"_blank",href:"https://twitter.com/pat_e_pan",children:"Twitter"})]})]})};function O(e){return Object(b.jsx)("div",{className:"text",children:Object(b.jsxs)("div",{className:"project",children:[Object(b.jsx)("h2",{children:e.project.name}),Object(b.jsx)("div",{className:"project-left",children:Object(b.jsx)("a",{href:"/images/projects/".concat(e.project.img),target:"_blank",children:Object(b.jsx)("img",{src:"/images/projects/".concat(e.project.img),alt:"Screenshot of ".concat(e.project.name," live site."),width:"500px"})})}),Object(b.jsxs)("div",{className:"project-right",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Tech Stack"}),": ",e.project.techStack]}),Object(b.jsx)("p",{dangerouslySetInnerHTML:{__html:e.project.description}}),Object(b.jsxs)("p",{children:[Object(b.jsx)("a",{target:"_blank",href:e.project.url,children:"Live Site"}),Object(b.jsx)("span",{children:" | "}),Object(b.jsx)("a",{target:"_blank",href:e.project.github,children:"Github"})]})]})]})})}var x=[{name:"Sun Voyage",techStack:"Mongoose, MongoDB Atlas, Node.js, React.js, Passport (authentication), JWT (authentication strategy) JavaScript, HTML, CSS, Bootstrap, Heroku, Le Syst\xe8me Solaire API",description:"A destination for those with wanderlust to explore the planets in the solar system. <p>Features include account creation and authentication, commenting, editing of comments, and editing of profile.</p> I was the Github manager and responsible for the project staying on track, and had some fullstack roles such as the edit profile ability. This feature also required that the client-side JW Token be refreshed, since the Profile page was grabbing information from the token instead of directly from the updated database.",url:"http://sunvoyage.herokuapp.com/",github:"https://github.com/patricia-pan/sun-voyage-client",img:"SunVoyage.png"},{name:"Genshin Impact Character Tracker",techStack:"Express, Node.js, EJS (embedded JS), Sequelize (SQL), Passport (authentication), JavaScript, HTML, SCSS/CSS, Bootstrap, Heroku, fan-made Genshin Impact API",description:"A site for adding your Genshin Impact characters and taking notes or adding goals to each one. Users who aren't logged in can still view all characters. <p>An interesting feature is the ability to multiselect goals and either edit or delete them using the same form. The same form can used for both functionalities because I attached the CRUD method to the buttons instead of the form itself.</p>",url:"https://genshin-impact.herokuapp.com/",github:"https://github.com/patricia-pan/genshin-impact-character-tracker",img:"CharacterTracker.png"},{name:"#1 Dad Joke Generator",techStack:"DOM Manipulation: HTML, CSS, JavaScript",description:'A place where a browser pop-up asks if it can have access to your microphone, and where you can get inspiration for your dad jokes. <p>The website says that if you say "Tell me how to be cool" out loud, the site will generate a random dad joke for you. Users can also click on the button to elicit the same result.</p>',url:"https://patricia-pan.github.io/fetch-dad-jokes-lab/",github:"https://github.com/patricia-pan/fetch-dad-jokes-lab",img:"DadJokes.png"}].map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)(O,{project:e})})}));var f=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(j.b,{to:"/projects",className:"header-url",children:Object(b.jsx)("h1",{className:"header-url",children:"Projects"})}),Object(b.jsx)("p",{children:"My favorite stack to work with is MERN (MongoDB, Express, React, and Node.js)."}),Object(b.jsx)("p",{children:"However, I also have experience with SQL (Sequelize), SCSS, Bootstrap, Material UI, and Python."}),x]})};function k(e){return Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)(j.b,{to:"/contact",className:"header-url",children:Object(b.jsx)("h1",{className:"header-url",children:"Contact"})}),Object(b.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/patricia-pan/",children:"patricia-pan"}),Object(b.jsx)("span",{children:" | "}),Object(b.jsx)("a",{href:"mailto:patricia.emerald.pan@gmail.com?subject=Saw%20Your%20Personal%20Site&body=Hi%20Trisha,",children:"patricia.emerald.pan@gmail.com"})]})}var w=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Hi, I'm Trisha \ud83d\udc4b"}),Object(b.jsxs)("div",{className:"text",children:[Object(b.jsxs)("p",{children:["I\u2019m a ",Object(b.jsx)("b",{children:"software engineer"})," who likes ",Object(b.jsx)("b",{children:"databases"})," and working with ",Object(b.jsx)("b",{children:"product"})," teams."]}),Object(b.jsx)("p",{children:"I love understanding how things work and being able to explain them, and my growth mindset means that I enjoy curating a productive and collaborative work environment."}),Object(b.jsx)("p",{children:"I'm always happy to chat about software engineering opportunities or diversity & inclusion strategies."})]}),Object(b.jsx)("hr",{className:"hr"}),Object(b.jsx)(p.a,{to:"/#about",component:g,id:"about"}),Object(b.jsx)("hr",{className:"hr"}),Object(b.jsx)(p.a,{to:"/#projects",component:f,id:"projects"}),Object(b.jsx)("hr",{className:"hr"}),Object(b.jsx)(p.a,{to:"/#contact",component:k,id:"contact"})]})},v=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={posts:[{title:"How I Met Your Mother",body:"I met her in New York"},{title:"Boku no Academia",body:"Will Izuku prevail?"},{title:"Genshin Impact",body:"Saving my primogems for Hu Tao"}]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{}),Object(b.jsx)(d.a,{exact:!0,path:"/",component:w}),Object(b.jsx)(d.a,{path:"/blog",render:function(){return Object(b.jsx)(m,{posts:e.state.posts})}}),Object(b.jsx)(d.a,{path:"/about",component:g}),Object(b.jsx)(d.a,{path:"/projects",component:f})]})})}}]),a}(n.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.21355b28.chunk.js.map