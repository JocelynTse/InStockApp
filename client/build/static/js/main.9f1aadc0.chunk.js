(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"doCreateUserWithEmailAndPassword",function(){return _}),a.d(n,"doSignInWithEmailAndPassword",function(){return H}),a.d(n,"doSignOut",function(){return Z}),a.d(n,"doPasswordReset",function(){return q}),a.d(n,"doPasswordUpdate",function(){return Y});a(50),a(52),a(54);var r=a(1),o=a.n(r),l=a(18),c=a.n(l),s=a(124),i=a(6),m=a(7),u=a(9),d=a(8),h=a(10),p=a(3),g=(a(62),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={collapse:!1,isWideEnough:!1},a.onClickLogout=function(e){console.log(a.props),e.preventDefault(),a.props.setUserLoggedIn(!1)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return console.log(this.props),o.a.createElement("div",{id:"nav"},o.a.createElement("header",null,o.a.createElement(p.Navbar,{color:"transparent",dark:!0,expand:"md",fixed:"top",scrolling:!0},o.a.createElement(p.NavbarBrand,{href:"/"},o.a.createElement("strong",null,"Home")),!this.state.isWideEnough&&o.a.createElement(p.NavbarToggler,{onClick:this.onClick}),o.a.createElement(p.Collapse,{isOpen:this.state.collapse,navbar:!0},o.a.createElement(p.NavbarNav,{left:!0},o.a.createElement(p.NavItem,null,o.a.createElement(p.NavLink,{to:"/about"},"About")),o.a.createElement(p.NavItem,null,this.props.userLoggedIn?o.a.createElement(p.NavLink,{to:"/login",onClick:this.onClickLogout},"Logout"):o.a.createElement(p.NavLink,{to:"/login"},"Vendor Login")),o.a.createElement(p.NavItem,null,o.a.createElement(p.NavLink,{to:"/signup"},"Create Account")))))))}}]),t}(o.a.Component)),E=a(126),f=a(125),v=(a(64),a(16)),b=(a(66),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(v.a)(Object(v.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return o.a.createElement(p.Container,null,o.a.createElement(p.Row,null,o.a.createElement(p.Col,{md:"6"},o.a.createElement(p.Button,{className:"btn btn-deep-purple",color:"info",onClick:this.toggle},"Contact Us"),o.a.createElement(p.Modal,{isOpen:this.state.modal,toggle:this.toggle,className:"cascading-modal"},o.a.createElement("div",{className:"modal-header primary-color white-text"},o.a.createElement("h4",{className:"title"},o.a.createElement(p.Fa,{className:"fa fa-pencil"})," Contact Form"),o.a.createElement("button",{type:"button",className:"close",onClick:this.toggle},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement(p.ModalBody,{className:"grey-text"},o.a.createElement(p.Input,{size:"sm",label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),o.a.createElement(p.Input,{size:"sm",label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right"}),o.a.createElement(p.Input,{size:"sm",label:"Subject",icon:"tag",group:!0,type:"text",validate:!0,error:"wrong",success:"right"}),o.a.createElement(p.Input,{size:"sm",type:"textarea",rows:"2",label:"Your message",icon:"pencil"})),o.a.createElement(p.ModalFooter,null,o.a.createElement(p.Button,{color:"secondary",onClick:this.toggle},"Close")," ",o.a.createElement(p.Button,{color:"primary"},"Save changes"))))))}}]),t}(o.a.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(p.Footer,{color:"unique-color-dark",className:"font-small pt-4 mt-4"},o.a.createElement("div",{className:"footer-container"},o.a.createElement(p.Container,{fluid:!0,className:"text-center text-md-left"},o.a.createElement(p.Row,null,o.a.createElement(p.Col,{sm:"4"},o.a.createElement("div",{className:"col-4"},o.a.createElement(b,null))),o.a.createElement(p.Col,{sm:"4"}),o.a.createElement(p.Col,{sm:"4"},o.a.createElement("br",null),o.a.createElement("a",{href:"#!",className:"fb-ic"},o.a.createElement("i",{className:"fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")),o.a.createElement("a",{href:"#!",className:"tw-ic"},o.a.createElement("i",{className:"fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")),o.a.createElement("a",{href:"#!",className:"ins-ic"},o.a.createElement("i",{className:"fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")))))),o.a.createElement("div",{className:"footer-copyright text-center py-3"},o.a.createElement(p.Container,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",o.a.createElement("a",{href:"https://www.MDBootstrap.com"}," InStock.com "))))}}]),t}(o.a.Component),C=a(15),N=(a(68),a(70),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Search"},o.a.createElement("div",{className:"active-purple-4 mb-3"},o.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",placeholder:"What are you looking for?","aria-label":"Search",value:this.props.value,name:"searchText"})))}}]),t}(r.Component)),I=(a(72),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(p.Button,{className:"SearchButton",onClick:this.props.onClick,color:"deep-purple"},"Search")}}]),t}(r.Component)),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(C.a)({},n,a))},e.handleSubmit=function(t,a){if(t.preventDefault(),e.state.searchText){var n=JSON.stringify(e.state.searchText).slice(1,-1).replace(/ /gi,"+"),r="/search/".concat(n);e.props.history.push(r)}else alert("must enter search word")},e.state={results:[],searchText:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.View,null,o.a.createElement(p.Mask,{overlay:"purple-light",style:{flexDirection:"column"},className:"flex-center  text-white text-center"},o.a.createElement("h2",null,"InStock"),o.a.createElement("h5",null,"Helping you find unique products"),o.a.createElement("div",{className:"input-group",id:"searchHolder"},o.a.createElement(N,{onChange:this.handleInputChange,value:this.state.searchText})," ",o.a.createElement(I,{onClick:this.handleSubmit})))),o.a.createElement(p.Container,{className:"text-center my-5 center-first"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-1"}),o.a.createElement("div",{className:"col-10"},o.a.createElement("h3",{className:"display-4"},"Find products near you in minutes."),o.a.createElement("h3",{className:"h4-responsive bold-content"},"No more searching all over town.")),o.a.createElement("div",{className:"col-1"}))),o.a.createElement("div",{className:"container-fluid-middle"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-1"}),o.a.createElement("div",{className:"col-10"},o.a.createElement("h3",{className:"display-4 color-row"},"InStock lets you find unique pantry products anywhere. ")),o.a.createElement("div",{className:"col-1"}))),o.a.createElement(p.Container,{className:"text-center my-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm"},"col-sm"),o.a.createElement("div",{className:"col-sm"},"col-sm"),o.a.createElement("div",{className:"col-sm"},"col-sm"))))}}]),t}(r.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log(this.props.history),console.log(this.history),o.a.createElement("div",null,o.a.createElement(O,{history:this.props.history}))}}]),t}(r.Component),w=a(43),k=a(17),j=a.n(k),x={getAllItems:function(){return j.a.get("/api/items/")},getItemsBySearch:function(e){return j.a.get("/api/items/search/".concat(e))},getItemsByCategory:function(e){return j.a.get("/api/items/category/".concat(e))},deleteItem:function(e){return j.a.delete("/api/items/deleteitem/".concat(e))},getStoreItems:function(e){return j.a.get("/api/items/store/".concat(e))},saveItem:function(e){return j.a.post("/api/items/additem/",e)},saveStore:function(e){return j.a.post("/api/stores/",e)},getStore:function(e){return j.a.get("/api/stores/login",e)},getStoreData:function(e){return j.a.get("/api/stores/profilepage/".concat(e))}},B={getPhoto:function(e){return j.a.get("https://api.unsplash.com/search/photos/?client_id=".concat("6034a87bbb5cd3811b06c74ca3ad4a0b0318a241b2e22b1626dcb017a13ea977","&query=").concat(e))}},A=(a(92),function(e){var t=e.onClick;return o.a.createElement("div",{className:"add-button"},o.a.createElement(p.Button,{color:"indigo darken-4",style:{marginBottom:"2rem"},onClick:t},"Add Products"))}),T=(a(19),function(e){var t=e.categories;return o.a.createElement(o.a.Fragment,null,t.map(function(e){return o.a.createElement(o.a.Fragment,{key:e},o.a.createElement("option",{value:e},e))}))}),D=a(5),P=["Soup","Condiment","Beverage","Spice","Sauce","Frozen","Dairy","Produce","Herbal","Hollistic medicine","Snacks","Candy"].sort(),L=function(e){return o.a.createElement("div",{className:"active-purple-4 mb-3"},o.a.createElement(D.f,{id:"bla",type:"select",name:"category",defaultValue:"condiments",onChange:e.onChange},o.a.createElement(T,{categories:P})))},U=function(e){var t=e.onClick,a=e.isOpen,n=e.toggle;return o.a.createElement("div",null,o.a.createElement(D.j,{isOpen:a,toggle:n},o.a.createElement(D.l,{toggle:n},"Add item to your store's stock"),o.a.createElement(D.k,null,o.a.createElement(D.d,null,o.a.createElement(D.e,null,o.a.createElement(D.g,{for:"item"},"Item"),o.a.createElement(D.f,{type:"text",name:"itemName",id:"item",placeholder:"Add item",onChange:e.onChange}),o.a.createElement(D.g,{for:"price"},"Price"),o.a.createElement(D.f,{type:"text",name:"price",id:"price",placeholder:"Price",onChange:e.onChange}),o.a.createElement(D.g,{for:"category"},"Category"),o.a.createElement(L,{onChange:e.onChange}),o.a.createElement(D.a,{onClick:t,color:"dark",style:{marginTop:"2rem"},block:!0},"Add Item"))))))},F=(a(95),function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e),"\u2717")}),z=(a(39),function(e){var t,a=e.storeItems,n=a.sort();return a&&(t=n.map(function(t){return o.a.createElement("tr",{key:t._id},o.a.createElement("td",{scope:"row"},t.itemName),o.a.createElement("td",null,t.price),o.a.createElement("td",null,t.category),o.a.createElement("td",null,t.storeName),o.a.createElement("td",null,t.storeAddress),o.a.createElement("td",null,o.a.createElement(F,{onClick:function(){return e.deleteItem(t._id)},key:t._id})))})),o.a.createElement("tbody",null,t)}),R=function(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))},W=function(e){return o.a.createElement(p.Button,{onClick:e.onClick,style:{float:"right",marginBottom:10,color:"deep-purple"},className:"btn btn-success"},"Submit")},J=a(25),M=a.n(J);a(104);M.a.apps.length||M.a.initializeApp({apiKey:"AIzaSyBlofQBTC9coF_rn7FrftX9TYuRJKxJ3-M",authDomain:"instock-3ac1c.firebaseapp.com",databaseURL:"https://instock-3ac1c.firebaseio.com",projectId:"instock-3ac1c",storageBucket:"instock-3ac1c.appspot.com",messagingSenderId:"59231702940"});var G=M.a.auth(),_=function(e,t){return G.createUserWithEmailAndPassword(e,t)},H=function(e,t){return G.signInWithEmailAndPassword(e,t)},Z=function(){return G.signOut()},q=function(e){return G.sendPasswordResetEmail(e)},Y=function(e){return G.currentUser.updatePassword(e)},V=(a(106),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",storeID:"",error:null},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.handleFormSubmit=function(e,t){e.preventDefault(),n.doSignInWithEmailAndPassword(t.email,t.password).then(function(e){x.getStore(t.email).then(function(e){a.setState({userLoggedIn:!0,storeID:e.data._id,email:e.data.email});var t="/profilepage/".concat(a.state.storeID);a.props.history.push(t)}).catch(function(e){return console.log(e)})}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login-form"},o.a.createElement("div",{className:"jumbotron-title"},o.a.createElement(p.Jumbotron,null,o.a.createElement("h1",{className:"h1-responsive display-4"},"Log In to InStock"),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("p",{className:"lead"},"New to InStock? ",o.a.createElement(p.NavLink,{to:"/signup"},"Sign Up")))),o.a.createElement("div",{className:"login"},o.a.createElement("form",null,o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("div",{className:"submit-button"},o.a.createElement(W,{disabled:!(this.state.email&&this.state.password),onClick:function(t){return e.handleFormSubmit(t,e.state)}})))))}}]),t}(r.Component));var K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={storesid:"",storeName:"",storeAddress:"",modal:!1,itemName:"",price:0,category:"",store:"",address:"",photo:"",storeItems:[]},a.getStoreData=function(e){x.getStoreData(e).then(function(e){console.log(e.data);var t=Object(w.a)({},a.state.currentStore,e.data);a.setState(t),console.log(a.state)}).catch(function(e){return console.log(e)})},a.getStoreItems=function(e){x.getStoreItems(e).then(function(e){return a.setState({storeItems:e.data})}).catch(function(e){return console.log(e)}),console.log(a.state.storeItems)},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(C.a)({},e.target.name,e.target.value))},a.getPic=function(e){B.getPhoto(e).then(function(e){if(e.data.results)return e.data.results[0].urls.regular}).catch(function(e){return console.log(e)})},a.onClickSubmit=function(e){e.preventDefault();var t=a.state,n=t.itemName,r=t.price,o=t.category,l=t.storeName,c=t.storesid,s=t.storeAddress,i=t.photo;x.saveItem({itemName:n,price:r,category:o,storeName:l,storesid:c,storeAddress:s,photo:i}).then(function(e){console.log("res: "+e)}).catch(function(e){return console.log(e)}),a.toggle(),console.log(a.state),a.getStoreItems(a.state.storesid)},a.deleteItem=function(e){x.deleteItem(e).then(function(e){console.log(e.data),a.getStoreItems(a.state.storesid)}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.storeID),this.props.setUserLoggedIn(!0),this.getStoreData(this.props.storeID),this.getStoreItems(this.props.storeID)}},{key:"render",value:function(){var e=this.state.storeItems;return o.a.createElement("div",{className:"profile-content",id:"itemModal"},o.a.createElement(A,{onClick:this.toggle}),o.a.createElement(U,{onChange:this.onChange,isOpen:this.state.modal,toggle:this.toggle,onClick:this.onClickSubmit}),o.a.createElement("p",null,"Welcome ",this.state.storeName),o.a.createElement(D.b,{md:{size:8,offset:2}},this.state.storeItems.length?o.a.createElement(D.n,{striped:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Item"),o.a.createElement("th",null,"Price"),o.a.createElement("th",null,"Category"),o.a.createElement("th",null,"Store"),o.a.createElement("th",null,"Address"))),o.a.createElement(z,{storeItems:e,deleteItem:this.deleteItem})):o.a.createElement("h3",null,"No Results to Display")))}}]),t}(r.Component),Q=(a(108),a(45)),X=a.n(Q),$=a(46),ee=a.n($),te=a(47),ae=a.n(te),ne=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.Jumbotron,{className:"jumbotronDiv"},o.a.createElement("h1",{className:"h1-responsive display-3"},"Our Amazing Team!")),o.a.createElement("div",{className:"entire-deck"},o.a.createElement("div",{className:"first-row"},o.a.createElement(p.CardGroup,{deck:!0},o.a.createElement(p.Card,null,o.a.createElement(p.CardImage,{src:X.a,alt:"Card image cap",top:!0,hover:!0,overlay:"white-slight"}),o.a.createElement(p.CardBody,null,o.a.createElement(p.CardTitle,{tag:"h5"},"Sendy Turcios"),o.a.createElement(p.CardText,null,"Front End | UI Design"),o.a.createElement(p.Button,{tag:r.Link,to:"google.com",className:"btn btn-deep-purple",size:"md"},"GitHub"))),o.a.createElement(p.Card,null,o.a.createElement(p.CardImage,{src:ee.a,alt:"Card image cap",top:!0,hover:!0,overlay:"white-slight"}),o.a.createElement(p.CardBody,null,o.a.createElement(p.CardTitle,{tag:"h5"},"Melissa Siddoway"),o.a.createElement(p.CardText,null," Backend | Google Maps API"),o.a.createElement(p.Button,{className:"btn btn-deep-purple",size:"md"},"GitHub"))))),o.a.createElement("div",{className:"second-row"},o.a.createElement(p.CardGroup,{deck:!0},o.a.createElement(p.Card,null,o.a.createElement(p.CardImage,{src:ae.a,alt:"Card image cap",top:!0,hover:!0,overlay:"white-slight"}),o.a.createElement(p.CardBody,null,o.a.createElement(p.CardTitle,{tag:"h5"},"Jocelyn Tse"),o.a.createElement(p.CardText,null," Front End | Forms "),o.a.createElement(p.Button,{className:"btn btn-deep-purple",size:"md"},"GitHub"))),o.a.createElement(p.Card,null,o.a.createElement(p.CardBody,null,o.a.createElement(p.CardTitle,{tag:"h5"},"Raquel Azcue"),o.a.createElement(p.CardText,null," Backend | User Authentication "),o.a.createElement(p.Button,{className:"btn btn-deep-purple",size:"md"},"read more")))))))}}]),t}(o.a.Component),re=(a(110),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={storeName:"",storeAddress:"",storeCity:"",storeState:"",storeZip:"",storePhone:"",username:"",passwordOne:"",passwordTwo:"",email:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.handleFormSubmit=function(e,t){e.preventDefault(),console.log(t),a.state.storeName&&a.state.storeAddress&&a.state.storeCity&&a.state.storeState&&a.state.storeZip&&a.state.storePhone&&a.state.username&&a.state.passwordOne&&a.state.passwordTwo&&a.state.email&&a.state.passwordOne==a.state.passwordTwo?n.doCreateUserWithEmailAndPassword(t.email,t.passwordOne).then(function(e){console.log(e),console.log(t),x.saveStore(t).then(console.log(t)).catch(function(e){return console.log(e)});a.props.history.push("/login")}).catch(function(e){console.log(e)}):console.log("error")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"signup-form"},o.a.createElement("div",{className:"jumbotron-title"},o.a.createElement(p.Jumbotron,null,o.a.createElement("h1",{className:"h1-responsive display-4"},"Sign In to InStock"),o.a.createElement("h5",{className:"h5-responsive"},"Share products from your local business"),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("p",{className:"lead"},"Already on InStock?",o.a.createElement(p.NavLink,{to:"/login"},"Login")))),o.a.createElement("form",null,o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"Store Name",name:"storeName",value:this.state.storeName,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"Address",name:"storeAddress",value:this.state.storeAddress,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"City",name:"storeCity",value:this.state.storeCity,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"State",name:"storeState",value:this.state.storeState,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"ZIP Code",name:"storeZip",value:this.state.storeZip,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"Phone Number",name:"storePhone",value:this.state.storePhone,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"Username",name:"username",value:this.state.username,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"password",placeholder:"Password",name:"passwordOne",value:this.state.passwordOne,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"password",placeholder:"Confirm Password",name:"passwordTwo",value:this.state.passwordTwo,onChange:this.handleInputChange}),o.a.createElement("p",null),o.a.createElement(R,{type:"text",placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("div",{className:"signup-submit"},o.a.createElement(W,{disabled:!(this.state.storeName&&this.state.storeAddress&&this.state.storeCity&&this.state.storeState&&this.state.storeZip&&this.state.storePhone&&this.state.username&&this.state.passwordOne&&this.state.passwordTwo&&this.state.email),onClick:function(t){return e.handleFormSubmit(t,e.state)}},"Sign Up for InStock"))))}}]),t}(r.Component)),oe=a(123),le=(a(112),function(){return o.a.createElement("div",{className:"error"},o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement(oe.a,{to:"/",activeClassName:"active"},o.a.createElement("button",{className:"btn btn-deep-purple"},"Return to InStock")))}),ce=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(p.Card,null,o.a.createElement("img",{className:"card-img-top",alt:"stock",src:this.props.photo}),o.a.createElement(p.CardBody,null,o.a.createElement(p.CardTitle,null,this.props.itemName,o.a.createElement("p",null,"Price:  ",this.props.price)),o.a.createElement(p.CardText,null,this.props.store,o.a.createElement("p",null,this.props.address),o.a.createElement("p",null,this.props.phone),o.a.createElement("p",null,this.props.category))))}}]),t}(r.Component),se=a(21),ie=(a(28),function(e){var t,a=e.items,n=a.filter(function(e,t){return!(t%2)});return a&&(t=n.map(function(e){return o.a.createElement(se.CSSTransition,{key:e._id,timeout:500,classNames:"fade"},o.a.createElement(D.i,{id:"resultItem"},o.a.createElement(ce,{key:e._id,photo:e.photo,itemName:e.itemName,price:e.price,store:e.store,phone:e.phone,category:e.category})))})),o.a.createElement(D.h,null,o.a.createElement(se.TransitionGroup,{className:"itemsList"},t))}),me=function(e){var t,a=e.items,n=a.filter(function(e,t){return t%2});return a&&(t=n.map(function(e){return o.a.createElement(se.CSSTransition,{key:e._id,timeout:500,classNames:"fade"},o.a.createElement(D.i,{id:"resultItem"},o.a.createElement(ce,{key:e._id,photo:e.photo,itemName:e.itemName,price:e.price,store:e.store,phone:e.phone,category:e.category})))})),o.a.createElement(D.h,null,o.a.createElement(se.TransitionGroup,{className:"itemsList"},t))},ue=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:"",items:[],categoryItems:[],selectedCategory:"condiments"},a.getSearchResults=function(e){x.getItemsBySearch(e).then(function(e){console.log(e),a.setState({items:e.data})}).catch(function(e){return console.log(e)})},a.getCategoryResults=function(e){x.getItemsByCategory(e).then(function(e){console.log(e),a.setState({items:e.data})}).catch(function(e){return console.log(e)}),console.log(a.state.items)},a.handleInputChangeOnBar=function(e){a.handleInputChangeOnBar.bind(Object(v.a)(Object(v.a)(a))),a.setState(Object(C.a)({},e.target.name,e.target.value))},a.handleInputChangeOnSelect=function(e){a.handleInputChangeOnSelect.bind(Object(v.a)(Object(v.a)(a)));var t=e.target.value;a.setState({selectedCategory:t})},a.handleSearchBarSubmit=function(e){e.preventDefault(),a.handleSearchBarSubmit.bind(Object(v.a)(Object(v.a)(a)));var t=a.state.searchText;a.state.searchText&&a.getSearchResults(t),console.log(a.state.items)},a.handleCategorySubmit=function(e){e.preventDefault();var t=a.state.selectedCategory;a.state.selectedCategory&&a.getCategoryResults(t)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history.location.pathname.split("/search/")[1].replace(/\+/g," ");console.log(e),this.getSearchResults(e)}},{key:"render",value:function(){var e=this.state.items;return o.a.createElement("div",{className:"results"},o.a.createElement(D.c,{fluid:!0,className:"text-center text-md-left"},o.a.createElement(D.d,null,o.a.createElement(D.m,{form:!0},o.a.createElement(D.b,{md:{size:5,offset:1}},o.a.createElement(D.e,null,o.a.createElement(N,{onChange:this.handleInputChangeOnBar,value:this.state.searchText}))),o.a.createElement(D.b,{md:2},o.a.createElement(D.e,null,o.a.createElement(I,{onClick:this.handleSearchBarSubmit}))),o.a.createElement(D.b,{md:4},o.a.createElement("div",{className:"searchHolder"},o.a.createElement(D.e,null,o.a.createElement(L,{onChange:this.handleInputChangeOnSelect,value:this.state.selectedCategory})),o.a.createElement(D.e,null,o.a.createElement(I,{onClick:this.handleCategorySubmit})))))),o.a.createElement(D.c,{fluid:!0,className:"text-center text-md-left"},o.a.createElement(D.m,null,o.a.createElement(D.b,{size:"sm-4"},o.a.createElement(ie,{items:e})),o.a.createElement(D.b,{size:"sm-4"},o.a.createElement(me,{items:e})),o.a.createElement(D.b,{size:"sm-4"},"Map")))))}}]),t}(r.Component),de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={userLoggedIn:!1,storeID:"",email:""},a.setUserLoggedIn=function(e){a.setState({userLoggedIn:e})},a.setStoreID=function(e){a.setState({storeID:e})},a.setEmail=function(e){a.setState({email:e})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(g,{userLoggedIn:this.state.userLoggedIn,setUserLoggedIn:this.setUserLoggedIn}),o.a.createElement(E.a,null,o.a.createElement(f.a,{exact:!0,path:"/",component:S}),o.a.createElement(f.a,{path:"/search/:searchItem",component:ue}),o.a.createElement(f.a,{path:"/search",component:ue}),o.a.createElement(f.a,{path:"/login",render:function(t){return o.a.createElement(V,{history:t.history,setUserLoggedIn:e.setUserLoggedIn,setStoreID:e.setStoreID,setEmail:e.setEmail})}}),o.a.createElement(f.a,{path:"/signup",component:re}),o.a.createElement(f.a,{path:"/about",component:ne}),o.a.createElement(f.a,{path:"/profilepage/:storeID",render:function(t){return o.a.createElement(K,{history:t.history,setUserLoggedIn:e.setUserLoggedIn,setStoreID:e.setStoreID,setEmail:e.setEmail,storeID:t.match.params.storeID,userLoggedIn:e.state.userLoggedIn})}}),o.a.createElement(f.a,{component:le})),o.a.createElement(y,null))}}]),t}(r.Component),he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(s.a,null,o.a.createElement(de,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");he?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):pe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):pe(e)})}}()},28:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/SendyPic.1e866c06.JPG"},46:function(e,t,a){e.exports=a.p+"static/media/MelissaPic.a50ec3c7.JPG"},47:function(e,t,a){e.exports=a.p+"static/media/JocelynPic.b6f2d042.JPG"},49:function(e,t,a){e.exports=a(122)},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},92:function(e,t,a){},95:function(e,t,a){}},[[49,2,1]]]);
//# sourceMappingURL=main.9f1aadc0.chunk.js.map