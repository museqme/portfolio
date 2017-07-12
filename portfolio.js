'strict';

function Projects(title, image, field, year, timeFrame, link) {
  this.title = title;
  this.image = image;
  this.field = field;
  this.year = year;
  this.timeFrame = timeFrame;
  this.link = link;
  Projects.all.push(this);
}
Projects.all = [];
new Projects('Museq Program','Software Development', 2017, '7 days');
new Projects('Museq Manager','UX', 2015, '3 months');
new Projects('M. Illuminate','Architecture', 2017, '12 hours');
new Projects('Lightbox Recreate','Architecture', 2016, '2 weeks');
new Projects('Codographic Memory','Software Development', 2017, '5 days');
new Projects('PROLivin','UX', 2017, '48 hours');
new Projects('8Flat Frequency Radio','Logo', 2015, '48 hours');
new Projects('Tectus Construction','Logo', 2016, '48 hours');
new Projects('KPSU','Logo', 2016, '48 hours');
