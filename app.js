// 'use strict';
$(document).ready(function() {
  // hamburger menu
  $(function() {
    $('.fa-bars').on('click', function(e) {
      e.preventDefault();
      $('.list').slideToggle();
    });

    $('#aboutMe').hide();
    $('.aboutMe').click(function() {
      if ($('#aboutMe').is(":hidden")) {
        $('#aboutMe').slideDown("slow");
      } else {
        $('#aboutMe').hide();
        $('#game').hide();
      }
    });
    // show and hide projects
    $('#articles').hide();
    $('.showpro').click(function() {
      if ($('#articles').is(":hidden")) {
        $('#articles').slideDown("slow");
      } else {
        $('#articles').hide();
      }
    });
  });
  $('#game').hide();
  $('.game').click(function() {
    if ($('#game').is(":hidden")) {
      $('#game').slideDown("slow");
    } else {
      $('#game').hide();
      $('#aboutMe').hide();
    }
  });


  // Constructor function
  Article.fetchAll = function() {
  if (localStorage.rawData) {
    console.log('push');

    Article.loadAll(JSON.parse(localStorage.rawData)); //DONE: What do we pass in to loadAll()?
    //DONE: What method do we call to render the index page?
    articleView.initIndexPage();
  } else {
    $.getJSON("rawData.json")
    .then(
      function(data) {
        localStorage.setItem('rawData', JSON.stringify(data));
        Article.loadAll(data);
        articleView.initIndexPage();
      }, function(error) {
        console.log(err,'errors')
      })
      Article.fetchAll();

  var projects = [];

  function Project(rawDataObj) {
    this.title = rawDataObj.title;
    this.projectUrl = rawDataObj.projectUrl;
    this.image = rawDataObj.image;
    this.catagory = rawDataObj.catagory;
    this.complatedOn = rawDataObj.complatedOn;
  }
  // grab the template  and compile
  Project.prototype.toHtml = function() {
    // var $newProject = $('myprojectsList-template').clone();

    var myprojectsList = $('#myprojectsList-template').html();
    var compiled = Handlebars.compile(myprojectsList);
    // $('#articles').append(compile(this));
    return compiled(this);
  };

  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });

  projects.forEach(function(Project) {
    $('#articles').append(Project.toHtml());
  });
});
//***************************************************************************
