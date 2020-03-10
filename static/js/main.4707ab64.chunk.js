(this["webpackJsonphci-t6"]=this["webpackJsonphci-t6"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/info-icon.fee8dffe.svg"},20:function(e,t,a){e.exports=a.p+"static/media/arrow-up.5022aa7e.svg"},21:function(e,t,a){e.exports=a.p+"static/media/arrow-down.7da2026c.svg"},31:function(e,t,a){e.exports=a.p+"static/media/arrow-up-right.cea28d20.svg"},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=(a(37),a(3)),m=a(4),s=a(5),u=a(6),o=a(7),d=a(8),E=a(15),p=(a(38),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-wrapper"},l.a.createElement("h1",null,"Finding Your Way"),l.a.createElement("div",null,l.a.createElement(d.b,{to:{pathname:"/degree",degreeName:"B.S. Computer Science/Media Art"}},l.a.createElement("button",{className:"home-btn"},"View current degree progress")),l.a.createElement(d.b,{to:"/explore"},l.a.createElement("button",{className:"home-btn"},"Explore degree options"))))}}]),t}(n.Component)),h=(a(43),a(17)),g=a(18),f=a.n(g),v=a(20),b=a.n(v),C=a(21),N=a.n(C),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleDropdown=function(){var e,t=document.getElementsByClassName("dropdown-btn");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}))},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"sidenav"},l.a.createElement(d.b,{to:"/"},l.a.createElement("button",{className:"home-btn"},"Home")),l.a.createElement("a",{href:"#summary"},"Summary"),l.a.createElement("a",{href:"#main-requirements"},"Computer Science"),l.a.createElement("a",{href:"#art-requirements"},"Art"),l.a.createElement("a",{href:"#general-requirements"},"NuPath"),l.a.createElement("a",{href:"#transfer"},"Transfer Credit"))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={expandedGPA:!1,degreeName:a.props.location.degreeName},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.location.degreeName),l.a.createElement("div",{className:"degree-wrapper"},l.a.createElement(y,null),l.a.createElement("div",{className:"summary"},l.a.createElement("div",{className:"header1"},l.a.createElement("a",{id:"summary"}),l.a.createElement("h2",null,"Summary")),l.a.createElement("div",{className:"sumText"},l.a.createElement("p",null," ",l.a.createElement("b",null,"Degree:")," ",this.props.location.degreeName?this.props.location.degreeName:"B.S. Computer Science/Media Art"),l.a.createElement("p",null," ",l.a.createElement("b",null,"Credits:")," 30/100 Required"),l.a.createElement("p",null," ",l.a.createElement("b",null," University Credits: ")," 22/100 Required"),l.a.createElement("p",null," ",l.a.createElement("b",null," Completed Requirements:")," 2/8",l.a.createElement("span",null,l.a.createElement("img",{"data-tip":"Each degree is broken down into a series of requirements, including both major requirements and university-wide requirements",src:f.a,className:"info-icon",alt:"info icon"})),l.a.createElement(h.a,{place:"top",type:"dark",effect:"solid",multiline:!0})),l.a.createElement("p",null," ",l.a.createElement("b",null," Semester Hours: ")," 30/64 Required",l.a.createElement("span",null,l.a.createElement("img",{"data-tip":"Only courses taken at Northeastern count towards Semester Hours",src:f.a,className:"info-icon",alt:"info icon"})),l.a.createElement(h.a,{place:"top",type:"dark",effect:"solid"})),l.a.createElement("button",{type:"button",className:"MultipleGPA",onClick:function(){return e.setState({expandedGPA:!e.state.expandedGPA})}},l.a.createElement("p",null," ",l.a.createElement("b",null," Total GPA: ")," 3.11",l.a.createElement("span",null,l.a.createElement("img",{src:this.state.expandedGPA?b.a:N.a,className:"dropDownGPA",alt:"dropDownGPA"})))),this.state.expandedGPA&&l.a.createElement("div",{className:"expandedGPASection"},l.a.createElement("p",null," A minimum total GPA of 2.0 is required to graduate. "),l.a.createElement("p",null," A minimum degree GPA of 2.3 if required to graduate. "),l.a.createElement("p",null," ",l.a.createElement("b",null," Degree GPA:")," 3.0",l.a.createElement("span",null,l.a.createElement("img",{"data-tip":"Degree GPA only includes courses that fulfill the requirements of a student's major",src:f.a,className:"info-icon",alt:"info icon"})),l.a.createElement(h.a,{place:"top",type:"dark",effect:"solid"})),l.a.createElement("p",null," ",l.a.createElement("b",null," University GPA: ")," 3.1",l.a.createElement("span",null,l.a.createElement("img",{"data-tip":"University GPA includes only courses taken at Northeastern",src:f.a,className:"info-icon",alt:"info icon"})),l.a.createElement(h.a,{place:"top",type:"dark",effect:"solid"}))))),l.a.createElement("div",{className:"Computer Science"},l.a.createElement("div",{className:"header1"},l.a.createElement("a",{id:"main-requirements"}),l.a.createElement("h2",null,"Computer Science ")),l.a.createElement("p",null," 1/3 of Computer Science Requirements Satisfied "),l.a.createElement("div",{className:"ReqFormat"},l.a.createElement("h4",null," Overview Requirements "),l.a.createElement("div",{className:"requirementTable"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Course Number"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits")),l.a.createElement("tr",null,l.a.createElement("td",null,"cs1200"),l.a.createElement("td",null,"Leadership Skills"),l.a.createElement("td",null,"Completed"),l.a.createElement("td",null,"P"),l.a.createElement("td",null,"1")),l.a.createElement("tr",null,l.a.createElement("td",null,"cs1210"),l.a.createElement("td",null," Professional Development for Khoury Co-op "),l.a.createElement("td",null,"Completed"),l.a.createElement("td",null,"P"),l.a.createElement("td",null,"1")))),l.a.createElement("h4",null," Fundemental Courses "),l.a.createElement("p",null,' A grade of C- or higher is required in all compute science fundemental courses" '),l.a.createElement("div",{className:"requirementTable"},l.a.createElement("table",null,l.a.createElement("th",null,"Course Number"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits"),l.a.createElement("tr",null,l.a.createElement("td",null,"CS 1800"),l.a.createElement("td",null,"Discrete Structures "),l.a.createElement("td",null," Completed "),l.a.createElement("td",null,"B"),l.a.createElement("td",null,"5")),l.a.createElement("tr",null,l.a.createElement("td",null,"CS 2500"),l.a.createElement("td",null,"Fundamentals of Computer Science 1 "),l.a.createElement("td",null," Completed "),l.a.createElement("td",null,"B-"),l.a.createElement("td",null,"5")),l.a.createElement("tr",null,l.a.createElement("td",null,"CS 2510"),l.a.createElement("td",null,"Fundamentals of Computer Science 2 "),l.a.createElement("td",null," In Progress "),l.a.createElement("td",null," "),l.a.createElement("td",null,"5")))),l.a.createElement("h4",null," Presentation Requirement "),l.a.createElement("div",{className:"requirementTable"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Course Number"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits")),l.a.createElement("tr",null,l.a.createElement("td",null,"THTR 1170"),l.a.createElement("td",null,"The Eloquent Presenter"),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,"1")))))),l.a.createElement("div",{className:"Media Art"},l.a.createElement("div",{className:"header1"},l.a.createElement("a",{id:"art-requirements"}),l.a.createElement("h2",null," Art ")),l.a.createElement("p",null," 0/2 of  Media Art Requirements Satisfied "),l.a.createElement("div",{className:"ReqFormat"},l.a.createElement("h4",null," Required Media Art Courses "),l.a.createElement("div",{className:"requirementTable"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Course Number"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits")),l.a.createElement("tr",null,l.a.createElement("td",null,"ARTF 1120"),l.a.createElement("td",null,"Observational Drawing "),l.a.createElement("td",null,"Completed"),l.a.createElement("td",null,"B"),l.a.createElement("td",null,"4")),l.a.createElement("tr",null,l.a.createElement("td",null," ARTF 1141 - ARTF 1149"),l.a.createElement("td",null,"Complete one course in the range  "),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,"4")),l.a.createElement("tr",null,l.a.createElement("td",null,"ARTF 1122"),l.a.createElement("td",null," 2D Fundamentals: Surface and Drawing (with optional ARTF 1123)  "),l.a.createElement("td",null,"Completed"),l.a.createElement("td",null,"A"),l.a.createElement("td",null,"4")),l.a.createElement("tr",null,l.a.createElement("td",null,"ARTF 1124"),l.a.createElement("td",null," 3D Fundamentals: Structure and Drawing  "),l.a.createElement("td",null,"Completed"),l.a.createElement("td",null,"C+"),l.a.createElement("td",null,"4")),l.a.createElement("tr",null,l.a.createElement("td",null,"ARTF 1125 "),l.a.createElement("td",null," 3D Tools  "),l.a.createElement("td",null,"Completed"),l.a.createElement("td",null,"C+"),l.a.createElement("td",null,"1")))),l.a.createElement("h4",null," Media Arts Electives "),l.a.createElement("div",{className:"requirementTable"},l.a.createElement("table",null,l.a.createElement("th",null,"Course Number"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits"),l.a.createElement("tr",null,l.a.createElement("td",null,"ARTD 2360"),l.a.createElement("td",null,"Photo Basics  "),l.a.createElement("td",null," Completed "),l.a.createElement("td",null,"B"),l.a.createElement("td",null,"4")),l.a.createElement("tr",null,l.a.createElement("td",null,"ARTD 2370"),l.a.createElement("td",null,"Animation Basics  "),l.a.createElement("td",null," In progress "),l.a.createElement("td",null," "),l.a.createElement("td",null," 4 ")),l.a.createElement("tr",null,l.a.createElement("td",null,"ARTD 2380"),l.a.createElement("td",null," Video Basics  "),l.a.createElement("td",null," In progress "),l.a.createElement("td",null," "),l.a.createElement("td",null,"4")))))),l.a.createElement("div",{className:"NUpath"},l.a.createElement("div",{className:"header1"},l.a.createElement("a",{id:"general-requirements"}),l.a.createElement("h2",null," NUPath ")),l.a.createElement("p",null," Multiple courses may fulfill NUpath requirements"),l.a.createElement("div",{className:"ReqFormat"},l.a.createElement("h4",null," Engaging with the Natural and Designed World "),l.a.createElement("h4",null," Exploring Creative Expression and Innovation "),l.a.createElement("div",{className:"requirementTable"},l.a.createElement("table",null,l.a.createElement("th",null,"Course Number"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits"),l.a.createElement("tr",null,l.a.createElement("td",null,"ARTF 1120 "),l.a.createElement("td",null,"Observational Drawing   "),l.a.createElement("td",null," Completed "),l.a.createElement("td",null,"B"),l.a.createElement("td",null,"4")))),l.a.createElement("h4",null," Conducting Formal and Quantitative Reasoning "),l.a.createElement("h4",null," Analyzing and Using Data "),l.a.createElement("h4",null," Writing Intensives "),l.a.createElement("div",{className:"requirementTable"},l.a.createElement("table",null,l.a.createElement("th",null,"Course Number"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits"),l.a.createElement("tr",null,l.a.createElement("td",null,"ENG 1100"),l.a.createElement("td",null,"Writing in the First Year  "),l.a.createElement("td",null," Completed "),l.a.createElement("td",null,"A"),l.a.createElement("td",null,"4")),l.a.createElement("tr",null,l.a.createElement("td",null,"ENG 3010, ENG 3001"),l.a.createElement("td",null," Choose between: Interdisplinary Advanced Writing, Advanced Writing for Technical Fields"),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,"4")))),l.a.createElement("h4",null," Integrating Knowledge and Skills Through Experience "),l.a.createElement("p",null," This requirement may be fulfilled through Co-op, Study Abroad, or Research "))),l.a.createElement("div",{className:"Transfer"},l.a.createElement("a",{id:"transfer"}),l.a.createElement("div",{className:"header1"},l.a.createElement("h2",null," Transfer Credits ")),l.a.createElement("div",{className:"requirementTable"},l.a.createElement("p",null," Only AP credits above 3 are accepted for credit "),l.a.createElement("table",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits"),l.a.createElement("tr",null,l.a.createElement("td",null,"AP Writing"),l.a.createElement("td",null," Accepted "),l.a.createElement("td",null," Completed "),l.a.createElement("td",null,"4")),l.a.createElement("tr",null,l.a.createElement("td",null," AP Biology"),l.a.createElement("td",null," Accepted "),l.a.createElement("td",null," 5 "),l.a.createElement("td",null," 4 ")),l.a.createElement("tr",null,l.a.createElement("td",null," AP French"),l.a.createElement("td",null," Not Accepted  "),l.a.createElement("td",null," 3 "),l.a.createElement("td",null," - "))))))}}]),t}(n.Component),A=a(25),S=a(31),k=a.n(S),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={learnMore:!1},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"degree-listing-wrapper"},l.a.createElement("div",{className:"degree-listing-flex"},l.a.createElement("div",{className:"degree-listing-name"},this.props.degree),l.a.createElement("div",{className:"degree-listing-learn",onClick:function(){return e.setState({learnMore:!e.state.learnMore})}},l.a.createElement("span",{className:"underline-text"},"learn more"),"\xa0",l.a.createElement("span",null,l.a.createElement("img",{src:this.state.learnMore?b.a:N.a,className:"arrow-icon",alt:"arrow"}))),l.a.createElement("div",{className:"degree-listing-link"},l.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},"Catalog page\xa0",l.a.createElement("span",null,l.a.createElement("img",{src:k.a,className:"arrow-icon",alt:"upper right arrow"})))),l.a.createElement(d.b,{to:{pathname:"/degree",degreeName:this.props.degree}},l.a.createElement("div",{className:"degree-listing-view"},"View degree"))),this.state.learnMore&&l.a.createElement("div",{className:"degree-listing-desc"},this.props.description))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.data.map((function(e){return l.a.createElement(T,{key:e.value+1,value:e.value,program:e.program,degree:e.degree,description:e.description,link:e.link})})))}}]),t}(n.Component),q=[{value:"bs-mecheng",college:"coe",program:"Mechanical and Industrial Engineering",degree:"B.S. Mechanical Engineering",description:"Mechanical engineering involves the design, development, and manufacture of machinery and devices to transmit power or to convert energy from thermal to mechanical form in order to power the modern world and its machines. Its current practice has been heavily influenced by recent advances in computer hardware and software.",link:"http://catalog.northeastern.edu/undergraduate/engineering/mechanical-industrial/bsme/"},{value:"bs-induseng",college:"coe",program:"Mechanical and Industrial Engineering",degree:"B.S. Industrial Engineering",description:"Industrial engineering involves the design and analysis of systems that include people, equipment, and materials and their interactions and performance in the workplace. An industrial engineer collects this information and evaluates alternatives to make decisions that best advance the goals of the enterprise.",link:"http://catalog.northeastern.edu/undergraduate/engineering/mechanical-industrial/bsie/"},{value:"ba-gdesign",college:"camd",program:"Art + Design",degree:"B.F.A. Design",description:"Design is the practice-based discipline raising important questions about\u2014and providing significant answers to\u2014how we live. Designers are needed when we don\u2019t know what is needed. Designers propose alternative futures and create new choices using design principles and processes to create, compose, and construct meaning in diverse knowledge fields. Designers seek a broad understanding of principles and systems of perception, communication, and action. Concentrations in design practices are graphic and information design, interaction design, and experience design.",link:"http://catalog.northeastern.edu/undergraduate/arts-media-design/art-design/design-bfa/"},{value:"bs-compsci",college:"khoury",program:"Computer Science",degree:"B.S. Computer Science",description:"The Bachelor of Science in Computer Science focuses on the fundamentals of program design, software development, computer organization, systems and networks, theories of computation, principles of languages, and advanced algorithms and data.",link:"http://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/bscs/"},{value:"ba-compsci",college:"khoury",program:"Computer Science",degree:"B.A. Computer Science",description:"The Bachelor of Arts in Computer Science offers a similar curriculum to the BS, with slightly fewer CS requirements to allow students to study a foreign language and have a wider choice of electives.",link:"http://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/bacs/"}],j=[{value:"2017",label:"2017"},{value:"2018",label:"2018"},{value:"2019",label:"2019"},{value:"2020",label:"2020"}],P=[{value:"camd",label:"College of Arts, Media and Design"},{value:"coe",label:"College of Engineering"},{value:"khoury",label:"Khoury College of Computer Sciences"}],G=[],x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={year:null,college:null},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"handleYear",value:function(e){this.setState({year:e.value})}},{key:"handleCollege",value:function(e){G=q.filter((function(t){return t.college===e.value})),this.setState({college:e.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"explore-wrapper"},l.a.createElement(d.b,{to:"/"},l.a.createElement("button",{className:"home-btn"},"Home")),l.a.createElement("h2",null,"Explore other degree options"),l.a.createElement("div",{className:"select-wrapper"},l.a.createElement("h4",null,"Catalog Year",l.a.createElement("span",null,l.a.createElement("img",{"data-tip":"The Catalog Year is the year a student entered the university.",src:f.a,className:"info-icon",alt:"info icon"})),l.a.createElement(h.a,{place:"top",type:"dark",effect:"solid"})),l.a.createElement(A.a,{className:"select-menu",options:j,onChange:this.handleYear.bind(this)}),l.a.createElement("h4",null,"College"),l.a.createElement(A.a,{className:"select-menu",options:P,onChange:this.handleCollege.bind(this)})),l.a.createElement("div",{className:"degree-list-wrapper"},this.state.year&&this.state.college&&l.a.createElement(O,{data:G})))}}]),t}(n.Component),D=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Page does not exist :("),l.a.createElement("p",null,"Go ",l.a.createElement(d.c,{to:"/home"},"home")))},R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/hci-t6"},l.a.createElement("div",{className:"App"},l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"".concat("/hci-t6","/"),component:p,exact:!0}),l.a.createElement(E.a,{path:"".concat("/hci-t6","/home"),component:p,exact:!0}),l.a.createElement(E.a,{path:"".concat("/hci-t6","/degree"),component:w}),l.a.createElement(E.a,{path:"".concat("/hci-t6","/explore"),component:x}),l.a.createElement(E.a,{component:D}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.4707ab64.chunk.js.map