var popup = document.getElementById("myPopup");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  popup.style.display = "block";
};

span.onclick = function () {
  popup.style.display = "none";
};

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};
// ---------------------- //
var tel = document.getElementById("INTG");
var and = document.getElementById("INAP");
var arp = document.getElementById("INAR");
var ass = document.getElementById("INAS");
var bhr = document.getElementById("INBR");
var chg = document.getElementById("INCH");
var cht = document.getElementById("INCT");
var dli = document.getElementById("INDL");
var goa = document.getElementById("INGA");
var gjt = document.getElementById("INGJ");
var hry = document.getElementById("INHR");
var hmp = document.getElementById("INHP");
var jhk = document.getElementById("INJH");
var ktk = document.getElementById("INKA");
var krl = document.getElementById("INKL");
var mdp = document.getElementById("INMP");
var mhr = document.getElementById("INMH");
var mnp = document.getElementById("INMN");
var mgl = document.getElementById("INML");
var mzm = document.getElementById("INMZ");
var ngl = document.getElementById("INNL");
var ors = document.getElementById("INOR");
var pdy = document.getElementById("INPY");
var pjb = document.getElementById("INPB");
var rjs = document.getElementById("INRJ");
var skm = document.getElementById("INSK");
var tml = document.getElementById("INTN");
var trp = document.getElementById("INTR");
var utp = document.getElementById("INUP");
var utc = document.getElementById("INUT");
var wbl = document.getElementById("INWB");
var lkd = document.getElementById("INLD");
var jak = document.getElementById("INJK");
var ldk = document.getElementById("INLA");
var ann = document.getElementById("INAN");
var dnd = document.getElementById("INDH");

tel.onclick = function () {
  const inputValue = "Telangana";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Telangana");
};

and.onclick = function () {
  const inputValue = "Andhra-Pradesh";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Andhra Pradesh");
};
arp.onclick = function () {
  const inputValue = "Arunachal-Pradesh";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Arunachal Pradesh");
};
ass.onclick = function () {
  const inputValue = "Assam";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Assam");
};
bhr.onclick = function () {
  const inputValue = "bihar";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Bihar");
};
chg.onclick = function () {
  const inputValue = "Chandigarh";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Chandigarh");
};
cht.onclick = function () {
  const inputValue = "Chhattisgarh";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Chhattisgarh");
};
dli.onclick = function () {
  const inputValue = "Delhi";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Delhi");
};
goa.onclick = function () {
  const inputValue = "Goa";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Goa");
};
gjt.onclick = function () {
  const inputValue = "Gujarat";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Gujarat");
};
hry.onclick = function () {
  const inputValue = "Haryana";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Haryana");
};
hmp.onclick = function () {
  const inputValue = "Himachal-Pradesh";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Himachal Pradesh");
};
jhk.onclick = function () {
  const inputValue = "Jharkhand";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Jharkhand");
};
ktk.onclick = function () {
  const inputValue = "Karnataka";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Karnataka");
};
krl.onclick = function () {
  const inputValue = "Kerala";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Kerala");
};
mdp.onclick = function () {
  const inputValue = "Madhya-Pradesh";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Madhya Pradesh");
};
mhr.onclick = function () {
  const inputValue = "Maharastra";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Maharashtra");
};
mnp.onclick = function () {
  const inputValue = "Manipur";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Manipur");
};
mgl.onclick = function () {
  const inputValue = "Meghalaya";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Meghalaya");
};
mzm.onclick = function () {
  const inputValue = "Mizoram";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Mizoram");
};
ngl.onclick = function () {
  const inputValue = "Nagaland";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Nagaland");
};
ors.onclick = function () {
  const inputValue = "Orissa";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Orissa");
};
pdy.onclick = function () {
  const inputValue = "Puducherry";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Puducherry");
};
pjb.onclick = function () {
  const inputValue = "Punjab";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Punjab");
};
rjs.onclick = function () {
  const inputValue = "Rajasthan";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Rajasthan");
};
skm.onclick = function () {
  const inputValue = "Sikkim";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Sikkim");
};
tml.onclick = function () {
  const inputValue = "Tamil-Nadu";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Tamil Nadu");
};
trp.onclick = function () {
  const inputValue = "Tripura";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Tripura");
};
utp.onclick = function () {
  const inputValue = "Uttar-Pradesh";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Uttar Pradesh");
};
utc.onclick = function () {
  const inputValue = "Uttaranchal";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Uttaranchal");
};
wbl.onclick = function () {
  const inputValue = "West Bengal";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("West Bengal");
};
lkd.onclick = function () {
  const inputValue = "Lakshadweep";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Lakshadweep");
};
jak.onclick = function () {
  const inputValue = "Jammu-and-Kashmir";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Jammu and Kashmir");
};
ldk.onclick = function () {
  const inputValue = "Ladakh";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Ladakh");
};
ann.onclick = function () {
  const inputValue = "Andaman-and-Nicobar";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Andaman and Nicobar");
};
dnd.onclick = function () {
  const inputValue = "Damān-and-Diu";
  const url = `layout.html?input=${encodeURIComponent(inputValue)}`;
  window.open(url, "_blank");
  console.log("Damān and Diu");
};
