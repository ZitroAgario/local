var dm=document;
dm.qr=document.querySelector;
var cv = dm.qr('#cvs'); 
var c = cv.getContext('2d');
var p=Math.PI;
img=dm.qr('#img2');
var pat=c.createPattern(img,'no-repeat')
c.fillStyle=pat;
c.beginPath();
c.arc(75,75,75,1,5*p,0,5*p);
c.fill();
var idt=c.getImageData(0,0,150,150);
c.putImageData(idt,cv.width/2,cv.height/2)
//dm.innerHTML+=cv.toDataURL();
