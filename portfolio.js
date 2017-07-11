var skillSet = ['dev', 'architecture', 'ux']

function Projects(title, skillSet, year, timeFrame) {
  this.title = title;
  this.skillset = skillSet;
  this.year = year;
  this.timeFrame = timeFrame;
  Projects.all.push(this);
}
Projects.all = [];
new Projects('Museq Me','dev', 2017, '2 weeks');
