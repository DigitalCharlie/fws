// JavaScript Document 

// Banners should be created at a width of 1000px. DO NOT INCLUDE image sizes in the img src description. This will allow image to resize as needed. //

// Script swaps out banner images randomly when page is refreshed. You can have as many images as you wish. However, make sure you have the SAME NUMBER of imagelinks as you do bannerImages and that the Array numbers are updated to match the total. //

// If device is large enough to display banner image, but may be using mobile instead of wifi, only display a single banner. This should reduce data downloads by (hopefully) allowing device to use cached banner image on revisit instead of downloading a new image. //
  

 // Banners should be created at a width of 1000px. DO NOT INCLUDE image sizes in the img src description. This will allow image to resize as needed. //

 // If device is large enough to display banner image, but may be using mobile instead of wifi, only display a single banner. This should reduce data downloads by (hopefully) allowing device to use cached banner image on revisit instead of downloading a new image. //

 if (document.documentElement.clientWidth < 967) {
	document.write('<a href='+'"'+"http://www.fws.gov/savethemonarch/"+'"'+'><img src="'+"http://www.fws.gov/home/homepage/images/banners/MonarchBannerDone.gif"+'" border="0" alt="Save the Monarch. Click to learn more"></a>') 
 }


// if desktop or laptop device, allow random image download on device refresh 

if (document.documentElement.clientWidth > 967) {
 // Banners should be created at a width of 1000px. DO NOT INCLUDE image sizes in the img src description. This will allow image to resize as needed. 

// Script swaps out banner images randomly when page is refreshed. You can have as many images as you wish. However, make sure you have the SAME NUMBER of imagelinks as you do bannerImages and that the Array numbers are updated to match the total. 
function random_imglink(){
  var bannerImages=new Array(8)
 // specify random images below. 

bannerImages[1]="http://www.fws.gov/le/images/ivory-crush-banner-ny.jpg";
bannerImages[2]="http://www.fws.gov/le/images/ivory-crush-banner-ny.jpg";
bannerImages[3]="http://www.fws.gov/le/images/ivory-crush-banner-ny.jpg";
bannerImages[4]="http://www.fws.gov/le/images/ivory-crush-banner-ny.jpg";
bannerImages[5]="http://www.fws.gov/le/images/ivory-crush-banner-ny.jpg";
bannerImages[6]="http://www.fws.gov/le/images/ivory-crush-banner-ny.jpg";
bannerImages[7]="http://www.fws.gov/le/images/ivory-crush-banner-ny.jpg";
bannerImages[8]="http://www.fws.gov/le/images/ivory-crush-banner-ny.jpg";

//bannerImages[1]="http://www.fws.gov/home/homepage/images/banners/Phi-beta-sigma-MOU.jpg";
//bannerImages[2]="http://www.fws.gov/home/homepage/images/banners/UrbanRefuges2.jpg";;
//bannerImages[3]="http://www.fws.gov/home/homepage/images/banners/Phi-beta-sigma-MOU.jpg";
//bannerImages[4]="http://www.fws.gov/home/homepage/images/banners/Phi-beta-sigma-MOU.jpg";
//bannerImages[5]="http://www.fws.gov/home/homepage/images/banners/PerfectFishing.jpg";
//bannerImages[6]="http://www.fws.gov/home/homepage/images/banners/Trafficking2014.jpg";
//bannerImages[7]="http://www.fws.gov/home/homepage/images/banners/RefugeWeek2014.jpg";
//bannerImages[8]="http://www.fws.gov/home/homepage/images/banners/MonarchBannerDone.gif";
 
  //specify corresponding links below
  var imagelinks=new Array(8)

imagelinks[1]="http://www.fws.gov/ivorycrush"
imagelinks[2]="http://www.fws.gov/ivorycrush"
imagelinks[3]="http://www.fws.gov/ivorycrush"
imagelinks[4]="http://www.fws.gov/ivorycrush"
imagelinks[5]="http://www.fws.gov/ivorycrush"
imagelinks[6]="http://www.fws.gov/ivorycrush"
imagelinks[7]="http://www.fws.gov/ivorycrush"
imagelinks[8]="http://www.fws.gov/ivorycrush"

//imagelinks[1]="http://www.fws.gov/partnerships/ourpartners/sigma.html"
//imagelinks[2]="http://www.fws.gov/refuges/vision/urbanwildliferefugeinitiative.html?ref=banner"
//imagelinks[3]="http://www.fws.gov/partnerships/ourpartners/sigma.html"
//imagelinks[4]="http://www.fws.gov/partnerships/ourpartners/sigma.html"
//imagelinks[5]="http://www.fws.gov/refuges/fishingguide/?ref=banner"
//imagelinks[6]="http://www.fws.gov/international/wildlife-trafficking/?ref=banner"
//imagelinks[7]="http://www.fws.gov/refuges/about/calls_of_the_wild.html?ref=banner"
//imagelinks[8]="http://www.fws.gov/savethemonarch/?ref=banner"
  
  var ry=Math.floor(Math.random(8)*bannerImages.length)

  if (ry==0)
     ry=1
     document.write('<a href='+'"'+imagelinks[ry]+'"'+'><img src="'+bannerImages[ry]+'" border="0" alt="The Open Spaces Blog. A Talk on the Wild Side. Click to Read"></a>')
}

  random_imglink()
  
}
