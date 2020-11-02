(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{20:function(e,a,t){e.exports=t(46)},26:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),i=t(3),s=t.n(i),m=t(15),u=t(16),o=t(17),d=t(19),h=t(18),p=(t(26),function(e){var a=e.value,t=e.change,n=e.submit;return r.a.createElement("form",{onSubmit:n,className:"fadeIn"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement("input",{className:"searchbar",type:"text",name:"city",value:a,onChange:t,placeholder:"Search By City..."}))}),f=r.a.memo((function(){return console.log("header"),r.a.createElement("header",{className:"fadeIn"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://github.com/omkar-28"},r.a.createElement("i",{className:"fa fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/omkar-khatavkar-bb7051117/"},r.a.createElement("i",{className:"fa fa-linkedin"}))))})),E=function(e){return 9*parseInt(e)/5+32},g=function(e){var a=e.weatherInfo,t=e.degreetype,n=a.city,c=a.country,l=a.date,i=a.icon,s=a.description,m=a.highTemp,u=a.lowTemp,o=a.humidity,d=a.temp,h=a.wind,p=a.sunrise,f=a.sunset;return r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-head"},r.a.createElement("h3",null,n,", ",c),r.a.createElement("p",null,l)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"current-city"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(i,"@2x.png"),alt:"icon"}),r.a.createElement("h4",null,r.a.createElement("span",null,s),"celsius"===t?Math.round(d):E(Math.round(d)),"\xb0 ","celsius"===t?"C":"F")),r.a.createElement("ul",null,r.a.createElement("li",null,h," mph",r.a.createElement("br",null)," Wind"),r.a.createElement("li",null,m,r.a.createElement("br",null)," High"),r.a.createElement("li",null,u,r.a.createElement("br",null)," Low"),r.a.createElement("li",null,p,r.a.createElement("br",null)," Sunrise"),r.a.createElement("li",null,f,r.a.createElement("br",null)," Sunset"),r.a.createElement("li",null,o," %",r.a.createElement("br",null)," Rain"))))},y=r.a.memo((function(e){var a=e.forecast,t=e.degreetype,n=a.filter((function(e){return e.dt_txt.includes("18:00:00")}));return r.a.createElement("div",{className:"col-6 forcast"},r.a.createElement("h2",null,"Forecast"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.dt},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:"cloud"}),r.a.createElement("p",null,"celsius"===t?Math.round(e.main.temp):E(Math.round(e.main.temp)),"\xb0 ","celsius"===t?"C":"F"))}))))})),v=function(e){var a=e.degreetype,t=e.updateDegree;return r.a.createElement("div",{className:"degree"},r.a.createElement("div",{className:"custom-radio"},r.a.createElement("input",{type:"radio",name:"degree-type",value:"celsius",id:"celsius",onChange:t,checked:"celsius"===a}),r.a.createElement("label",{className:"form-check-label",htmlFor:"celsius"},"Celsius")),r.a.createElement("div",{className:"custom-radio"},r.a.createElement("input",{type:"radio",name:"degree-type",value:"fahrenheit",id:"fahrenheit",onChange:t,checked:"fahrenheit"===a}),r.a.createElement("label",{className:"form-check-label",htmlFor:"fahrenheit"},"Farenheit")))},w=r.a.memo((function(e){var a=e.weatherInfo,t=e.degreetype,n=e.updateDegree,c=a.forecast,l="";return a&&(l="fadeIn"),r.a.createElement("div",{className:l},r.a.createElement(v,{degreetype:t,updateDegree:n}),r.a.createElement("div",{className:"city-card"},r.a.createElement(g,{weatherInfo:a,degreetype:t}),r.a.createElement(y,{forecast:c,degreetype:t})))})),b=t(4),N=t.n(b);var S=function(e){var a=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:a?"fetching fadeIn":"fetching"},"hold on while we fetch weatherInfo for ",a," city"),r.a.createElement("div",{className:"pulseLoader"}))},I=function(){return r.a.createElement("div",{className:"error fadeIn"},"Sorry, the specified City was not found")};t(43).config(),Object({NODE_ENV:"production",PUBLIC_URL:"/react-weatherApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_WEATHER_API_KEY:"086cf558e7fabc328794bc2aaaedf915"}).WEATHER_API_KEY;var T=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={value:"",weatherInfo:null,error:!1,fetching:!1,degreetype:"celsius"},e.handleInputChange=function(a){e.setState({value:a.target.value})},e.SearchCity=function(){var a=Object(m.a)(s.a.mark((function a(t){var n,r,c,l,i,m,u,o,d,h,p,f,E,g;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n=e.state.value,e.setState({fetching:!0,weatherInfo:null,error:!1}),r="https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&APPID=086cf558e7fabc328794bc2aaaedf915&units=metric"),c="https://api.openweathermap.org/data/2.5/forecast?q=".concat(n,"&APPID=086cf558e7fabc328794bc2aaaedf915&units=metric"),a.prev=5,a.next=8,N.a.get(r);case 8:return l=a.sent,i=l.data,a.next=12,N.a.get(c);case 12:m=a.sent,u=m.data,o=["January","February","March","April","May","June","July","August","September","October","November","December"],d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=new Date,p="".concat(d[h.getDay()],", ").concat(h.getDate()," ").concat(o[h.getMonth()]," "),f=new Date(1e3*i.sys.sunrise).toLocaleTimeString().slice(0,4),E=new Date(1e3*i.sys.sunset).toLocaleTimeString().slice(0,4),g={city:i.name,country:i.sys.country,description:i.weather[0].description,main:i.weather[0].main,temp:i.main.temp,icon:i.weather[0].icon,date:p,sunrise:f,sunset:E,lowTemp:i.main.temp_min,highTemp:i.main.temp_max,humidity:i.main.humidity,wind:i.wind.speed,forecast:u.list},setTimeout((function(){e.setState({weatherInfo:g,fetching:!1})}),5e3),a.next=28;break;case 24:a.prev=24,a.t0=a.catch(5),console.log("city not found"),e.setState({error:!0,fetching:!1});case 28:case"end":return a.stop()}}),a,null,[[5,24]])})));return function(e){return a.apply(this,arguments)}}(),e.updateDegree=function(a){e.setState({degreetype:a.target.value})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.value,t=e.weatherInfo,c=e.error,l=e.fetching,i=e.degreetype;return r.a.createElement(n.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"pt-3 title fadeIn"},"WEATHER FORECAST"),r.a.createElement(p,{submit:this.SearchCity,value:a,change:this.handleInputChange})),r.a.createElement("div",{className:"container"},l&&r.a.createElement(S,{value:a}),t&&r.a.createElement(w,{weatherInfo:t,error:c,degreetype:i,updateDegree:this.updateDegree}),c&&r.a.createElement(I,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.310e62ef.chunk.js.map