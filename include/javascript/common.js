var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}


function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function getQueryVariable(variable) {
  var query = unescape(window.location.search.substring(1));
  var vars = query.split("&");
  var result = "";

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      result = pair[1];
    }
  }

  return result;
}

function trim (s) {
  var whitespace = " \t\n\r";
  var c = '';
  var newstring = '';
  var begin = true;
  var beginFlag = 0;
  var endFlag = 0;

  for (i = 0; i < s.length; i++) {
    c = s.charAt(i);
    if (whitespace.indexOf(c) == -1 && begin) {
      beginFlag = i;
      begin = false;
    }
    if (whitespace.indexOf(c) == -1 && !begin) {
      endFlag = i;
    }
  }

  for (i = 0; i < s.length; i++) {
    c = s.charAt(i);
    if ((i >= beginFlag && i <= endFlag && beginFlag != endFlag) || (beginFlag == endFlag && whitespace.indexOf(c) == -1)) {
      newstring += c;
    }
  }

  return newstring;
}

function checkDate(monthval, dayval, yearval) {
  var monthLength = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
  var x = document.forms[0].elements;
  var day = parseInt(dayval);
  var month = parseInt(monthval);
  var year = parseInt(yearval);

  if (!day || !month || !year)
    return false;

  if (year/4 == parseInt(year/4))
    monthLength[1] = 29;

  if (day > monthLength[month-1])
    return false;

  monthLength[1] = 28;

  var now = new Date();
  now = now.getTime(); //NN3

  var dateToCheck = new Date();
  dateToCheck.setYear(year);
  dateToCheck.setMonth(month-1);
  dateToCheck.setDate(day);

  var checkDate = dateToCheck.getTime();
  var futureDate = (now < checkDate);
  var pastDate = (now > checkDate);

  return checkDate;
}

function isChecked(radio, return_val) {
  var checked = false;

  for (i=0; i < radio.length; i++) {
    if(radio[i].checked == true) {
      if (return_val == 1)
        checked = i;
      else
        checked = true;
      break;
    }
  }

  return checked;
}

function createCookie(name,value,expirydate) {
  if (expirydate) {
    var date = new Date();
    date.setTime(expirydate);
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function popUpWin (url, w, h, name){
	var winopts = "toolbar=no,location=no,directories=no,status=no,";
	winopts = winopts + "menubar=no,scrollbars=yes,resizable=no,";
	winopts = winopts + "width=" + w + ",height=" + h;
	remote = window.open(url,name,winopts);
}

function deleteCookie(name) {
  createCookie(name,"",-1);
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
				func();
		}
	}
}

function shakeBrowser_xy(n) {
	if (self.moveBy) {
		for (i = 8; i > 0; i--) {
			for (j = n; j > 0; j--) {
			self.moveBy(0,i);
			self.moveBy(i,0);
			self.moveBy(0,-i);
			self.moveBy(-i,0);
			}
		}
	}
}
function shakeBrowser_x(n) {
	if (self.moveBy) {
		for (i = 8; i > 0; i--) {
			for (j = n; j > 0; j--) {
			self.moveBy(i,0);
			self.moveBy(-i,0);
			}
		}
	}
}
function shakeBrowser_y(n) {
	if (self.moveBy) {
		for (i = 8; i > 0; i--) {
			for (j = n; j > 0; j--) {
			self.moveBy(0,i);
			self.moveBy(0,-i);
			}
		}
	}
}
function openNewWindow(URLtoOpen, windowName, windowFeatures) {
	newWindow=window.open(URLtoOpen, windowName, windowFeatures);
}
function getBrowserHeight() {
    var intH = 0;
    var intW = 0;
   
    if(typeof self.innerWidth  == 'number' ) {
       intH = self.innerHeight;
       intW = self.innerWidth;
    } 
    else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        intH = document.documentElement.clientHeight;
        intW = document.documentElement.clientWidth;
    }
    else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
        intH = document.body.clientHeight;
        intW = document.body.clientWidth;
    }

    return { width: parseInt(intW), height: parseInt(intH) };
}  

function setLayerPosition() {
    var shadow = document.getElementById("shadow");

    var bws = getBrowserHeight();
    shadow.style.width = bws.width + "px";
    shadow.style.height = bws.height + "px";

    shadow = null;
}

function showLayer() {
    setLayerPosition();

    var shadow = document.getElementById("shadow");

    shadow.style.display = "block"; 

    shadow = null;        
}

function hideLayer() {
    var shadow = document.getElementById("shadow");

    shadow.style.display = "none"; 

    shadow = null;
}

// new set
function setLayerPosition2() {
    var shadow = document.getElementById("shadow");
    var loading = document.getElementById("loading");
    
    shadow.style.width = $(document).width() + "px";
    shadow.style.height = $(document).height() + "px";
    
    loading.style.top = Math.round((document.documentElement.clientHeight/2)-(loading.style.height/2)+document.documentElement.scrollTop)+'px';
    loading.style.left = Math.round((document.documentElement.clientWidth/2)-(loading.style.width/2))+"px";


    shadow = null;
}

function showLayer2() {
    setLayerPosition2();

    var shadow = document.getElementById("shadow");
	var loading = document.getElementById("loading");

    shadow.style.display = "block"; 
    loading.style.display = "block"; 

    shadow = null;        
}

function hideLayer2() {
    var shadow = document.getElementById("shadow");
	var loading = document.getElementById("loading");

    shadow.style.display = "none"; 
    loading.style.display = "none"; 

    shadow = null;
}

var allCountry = [
					{ name: "Anonymous Proxy",value: "A1"},
					{ name: "Satellite Provider",value: "A2"},
					{ name: "Andorra",value: "AD"},
					{ name: "United Arab Emirates",value: "AE"},
					{ name: "Afghanistan",value: "AF"},
					{ name: "Antigua and Barbuda",value: "AG"},
					{ name: "Anguilla",value: "AI"},
					{ name: "Albania",value: "AL"},
					{ name: "Armenia",value: "AM"},
					{ name: "Netherlands Antilles",value: "AN"},
					{ name: "Angola",value: "AO"},
					{ name: "Asia/Pacific Region",value: "AP"},
					{ name: "Antarctica",value: "AQ"},
					{ name: "Argentina",value: "AR"},
					{ name: "American Samoa",value: "AS"},
					{ name: "Austria",value: "AT"},
					{ name: "Australia",value: "AU"},
					{ name: "Aruba",value: "AW"},
					{ name: "Aland Islands",value: "AX"},
					{ name: "Azerbaijan",value: "AZ"},
					{ name: "Bosnia and Herzegovina",value: "BA"},
					{ name: "Barbados",value: "BB"},
					{ name: "Bangladesh",value: "BD"},
					{ name: "Belgium",value: "BE"},
					{ name: "Burkina Faso",value: "BF"},
					{ name: "Bulgaria",value: "BG"},
					{ name: "Bahrain",value: "BH"},
					{ name: "Burundi",value: "BI"},
					{ name: "Benin",value: "BJ"},
					{ name: "Bermuda",value: "BM"},
					{ name: "Brunei Darussalam",value: "BN"},
					{ name: "Bolivia",value: "BO"},
					{ name: "Brazil",value: "BR"},
					{ name: "Bahamas",value: "BS"},
					{ name: "Bhutan",value: "BT"},
					{ name: "Bouvet Island",value: "BV"},
					{ name: "Botswana",value: "BW"},
					{ name: "Belarus",value: "BY"},
					{ name: "Belize",value: "BZ"},
					{ name: "Canada",value: "CA"},
					{ name: "Congo, The Democratic Republic of the",value: "CD"},
					{ name: "Central African Republic",value: "CF"},
					{ name: "Congo",value: "CG"},
					{ name: "Switzerland",value: "CH"},
					{ name: "Cote D'Ivoire",value: "CI"},
					{ name: "Cook Islands",value: "CK"},
					{ name: "Chile",value: "CL"},
					{ name: "Cameroon",value: "CM"},
					{ name: "China",value: "CN"},
					{ name: "Colombia",value: "CO"},
					{ name: "Costa Rica",value: "CR"},
					{ name: "Cuba",value: "CU"},
					{ name: "Cape Verde",value: "CV"},
					{ name: "Cyprus",value: "CY"},
					{ name: "Czech Republic",value: "CZ"},
					{ name: "Germany",value: "DE"},
					{ name: "Djibouti",value: "DJ"},
					{ name: "Denmark",value: "DK"},
					{ name: "Dominica",value: "DM"},
					{ name: "Dominican Republic",value: "DO"},
					{ name: "Algeria",value: "DZ"},
					{ name: "Ecuador",value: "EC"},
					{ name: "Estonia",value: "EE"},
					{ name: "Egypt",value: "EG"},
					{ name: "Eritrea",value: "ER"},
					{ name: "Spain",value: "ES"},
					{ name: "Ethiopia",value: "ET"},
					{ name: "Europe",value: "EU"},
					{ name: "Finland",value: "FI"},
					{ name: "Fiji",value: "FJ"},
					{ name: "Falkland Islands (Malvinas)",value: "FK"},
					{ name: "Micronesia, Federated States of",value: "FM"},
					{ name: "Faroe Islands",value: "FO"},
					{ name: "France",value: "FR"},
					{ name: "Gabon",value: "GA"},
					{ name: "United Kingdom",value: "GB"},
					{ name: "Grenada",value: "GD"},
					{ name: "Georgia",value: "GE"},
					{ name: "French Guiana",value: "GF"},
					{ name: "Guernsey",value: "GG"},
					{ name: "Ghana",value: "GH"},
					{ name: "Gibraltar",value: "GI"},
					{ name: "Greenland",value: "GL"},
					{ name: "Gambia",value: "GM"},
					{ name: "Guinea",value: "GN"},
					{ name: "Guadeloupe",value: "GP"},
					{ name: "Equatorial Guinea",value: "GQ"},
					{ name: "Greece",value: "GR"},
					{ name: "Guatemala",value: "GT"},
					{ name: "Guam",value: "GU"},
					{ name: "Guinea-Bissau",value: "GW"},
					{ name: "Guyana",value: "GY"},
					{ name: "Hong Kong",value: "HK"},
					{ name: "Honduras",value: "HN"},
					{ name: "Croatia",value: "HR"},
					{ name: "Haiti",value: "HT"},
					{ name: "Hungary",value: "HU"},
					{ name: "Indonesia",value: "ID"},
					{ name: "Ireland",value: "IE"},
					{ name: "Israel",value: "IL"},
					{ name: "Isle of Man",value: "IM"},
					{ name: "India",value: "IN"},
					{ name: "British Indian Ocean Territory",value: "IO"},
					{ name: "Iraq",value: "IQ"},
					{ name: "Iran, Islamic Republic of",value: "IR"},
					{ name: "Iceland",value: "IS"},
					{ name: "Italy",value: "IT"},
					{ name: "Jersey",value: "JE"},
					{ name: "Jamaica",value: "JM"},
					{ name: "Jordan",value: "JO"},
					{ name: "Japan",value: "JP"},
					{ name: "Kenya",value: "KE"},
					{ name: "Kyrgyzstan",value: "KG"},
					{ name: "Cambodia",value: "KH"},
					{ name: "Kiribati",value: "KI"},
					{ name: "Comoros",value: "KM"},
					{ name: "Saint Kitts and Nevis",value: "KN"},
					{ name: "Korea, Democratic People's Republic of",value: "KP"},
					{ name: "Korea, Republic of",value: "KR"},
					{ name: "Kuwait",value: "KW"},
					{ name: "Cayman Islands",value: "KY"},
					{ name: "Kazakhstan",value: "KZ"},
					{ name: "Lao People's Democratic Republic",value: "LA"},
					{ name: "Lebanon",value: "LB"},
					{ name: "Saint Lucia",value: "LC"},
					{ name: "Liechtenstein",value: "LI"},
					{ name: "Sri Lanka",value: "LK"},
					{ name: "Liberia",value: "LR"},
					{ name: "Lesotho",value: "LS"},
					{ name: "Lithuania",value: "LT"},
					{ name: "Luxembourg",value: "LU"},
					{ name: "Latvia",value: "LV"},
					{ name: "Libyan Arab Jamahiriya",value: "LY"},
					{ name: "Morocco",value: "MA"},
					{ name: "Monaco",value: "MC"},
					{ name: "Moldova, Republic of",value: "MD"},
					{ name: "Montenegro",value: "ME"},
					{ name: "Saint Martin",value: "MF"},
					{ name: "Madagascar",value: "MG"},
					{ name: "Marshall Islands",value: "MH"},
					{ name: "Macedonia",value: "MK"},
					{ name: "Mali",value: "ML"},
					{ name: "Myanmar",value: "MM"},
					{ name: "Mongolia",value: "MN"},
					{ name: "Macau",value: "MO"},
					{ name: "Northern Mariana Islands",value: "MP"},
					{ name: "Martinique",value: "MQ"},
					{ name: "Mauritania",value: "MR"},
					{ name: "Montserrat",value: "MS"},
					{ name: "Malta",value: "MT"},
					{ name: "Mauritius",value: "MU"},
					{ name: "Maldives",value: "MV"},
					{ name: "Malawi",value: "MW"},
					{ name: "Mexico",value: "MX"},
					{ name: "Malaysia",value: "MY"},
					{ name: "Mozambique",value: "MZ"},
					{ name: "Namibia",value: "NA"},
					{ name: "New Caledonia",value: "NC"},
					{ name: "Niger",value: "NE"},
					{ name: "Norfolk Island",value: "NF"},
					{ name: "Nigeria",value: "NG"},
					{ name: "Nicaragua",value: "NI"},
					{ name: "Netherlands",value: "NL"},
					{ name: "Norway",value: "NO"},
					{ name: "Nepal",value: "NP"},
					{ name: "Nauru",value: "NR"},
					{ name: "Niue",value: "NU"},
					{ name: "New Zealand",value: "NZ"},
					{ name: "Oman",value: "OM"},
					{ name: "Panama",value: "PA"},
					{ name: "Peru",value: "PE"},
					{ name: "French Polynesia",value: "PF"},
					{ name: "Papua New Guinea",value: "PG"},
					{ name: "Philippines",value: "PH"},
					{ name: "Pakistan",value: "PK"},
					{ name: "Poland",value: "PL"},
					{ name: "Saint Pierre and Miquelon",value: "PM"},
					{ name: "Pitcairn Islands",value: "PN"},
					{ name: "Puerto Rico",value: "PR"},
					{ name: "Palestinian Territory, Occupied",value: "PS"},
					{ name: "Portugal",value: "PT"},
					{ name: "Palau",value: "PW"},
					{ name: "Paraguay",value: "PY"},
					{ name: "Qatar",value: "QA"},
					{ name: "Reunion",value: "RE"},
					{ name: "Romania",value: "RO"},
					{ name: "Serbia",value: "RS"},
					{ name: "Russian Federation",value: "RU"},
					{ name: "Rwanda",value: "RW"},
					{ name: "Saudi Arabia",value: "SA"},
					{ name: "Solomon Islands",value: "SB"},
					{ name: "Seychelles",value: "SC"},
					{ name: "Sudan",value: "SD"},
					{ name: "Sweden",value: "SE"},
					{ name: "Singapore",value: "SG"},
					{ name: "Slovenia",value: "SI"},
					{ name: "Slovakia",value: "SK"},
					{ name: "Sierra Leone",value: "SL"},
					{ name: "San Marino",value: "SM"},
					{ name: "Senegal",value: "SN"},
					{ name: "Somalia",value: "SO"},
					{ name: "Suriname",value: "SR"},
					{ name: "Sao Tome and Principe",value: "ST"},
					{ name: "El Salvador",value: "SV"},
					{ name: "Syrian Arab Republic",value: "SY"},
					{ name: "Swaziland",value: "SZ"},
					{ name: "Turks and Caicos Islands",value: "TC"},
					{ name: "Chad",value: "TD"},
					{ name: "Togo",value: "TG"},
					{ name: "Thailand",value: "TH"},
					{ name: "Tajikistan",value: "TJ"},
					{ name: "Tokelau",value: "TK"},
					{ name: "Timor-Leste",value: "TL"},
					{ name: "Turkmenistan",value: "TM"},
					{ name: "Tunisia",value: "TN"},
					{ name: "Tonga",value: "TO"},
					{ name: "Turkey",value: "TR"},
					{ name: "Trinidad and Tobago",value: "TT"},
					{ name: "Tuvalu",value: "TV"},
					{ name: "Taiwan",value: "TW"},
					{ name: "Tanzania, United Republic of",value: "TZ"},
					{ name: "Ukraine",value: "UA"},
					{ name: "Uganda",value: "UG"},
					{ name: "United States Minor Outlying Islands",value: "UM"},
					{ name: "United States",value: "US"},
					{ name: "Uruguay",value: "UY"},
					{ name: "Uzbekistan",value: "UZ"},
					{ name: "Holy See (Vatican City State)",value: "VA"},
					{ name: "Saint Vincent and the Grenadines",value: "VC"},
					{ name: "Venezuela",value: "VE"},
					{ name: "Virgin Islands, British",value: "VG"},
					{ name: "Virgin Islands, U.S.",value: "VI"},
					{ name: "Vietnam",value: "VN"},
					{ name: "Vanuatu",value: "VU"},
					{ name: "Wallis and Futuna",value: "WF"},
					{ name: "Samoa",value: "WS"},
					{ name: "Yemen",value: "YE"},
					{ name: "Mayotte",value: "YT"},
					{ name: "South Africa",value: "ZA"},
					{ name: "Zambia",value: "ZM"},
					{ name: "Zimbabwe",value: "ZW"}
					];
					
function fbShare(cid,url,title){
	var share = "https://web.archive.org/web/20110706000939/http://www.facebook.com/sharer.php?";	
	var urlStr = ( url!="" && url != undefined )?url:location.href;
	var titleStr = ( title!="" && title != undefined )?title:document.title;
	var cidStr = (location.search!="")?"&":"?";
	cidStr += ( cid!="" && cid != undefined )?'cid='+cid:"";		
	var uri = "u="+encodeURIComponent(urlStr+cidStr)+"&t="+encodeURIComponent(titleStr);
	var loc = share + uri;
	window.open(loc);
}

function outFlashObj(swfdiv,id,path,w,h,param,wmode){
	var strWmode = ( wmode!="" && wmode != undefined )?wmode:'transparent';
	var str;
	str = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+w+'" height="'+h+'" id="'+id+'">';
	str += '<param name="movie" value="'+path+'" />';
	str += '<param name="menu" value="false" />';
	str += '<param name="quality" value="high" />';
	str += '<param name="wmode" value="'+strWmode+'" />';
	str += '<param name="allowScriptAccess" value="always" />';
	str += '<param name="flashvars" value="'+param+'" />';
	str += '<embed src="'+path+'" width="'+w+'" height="'+h+'" menu="false" quality="high" wmode="'+strWmode+'" allowScriptAccess="always" name="'+id+'" type="application/x-shockwaveflash" flashvars="'+param+'" />';
	str += '</object>';
	var _div = document.getElementById(swfdiv);	
	_div.style.width=w+'px';
	_div.innerHTML=str;
}
//-->
}
