angular.module("campusApp", ["ngRoute"])
.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      template: "<h2>Welcome to Campus Hub</h2><p>Find useful information for your student life, all in one place.</p><div class='cards'><div class='info-card'><strong>Learn</strong>Explore courses and learning resources.</div><div class='info-card'><strong>Connect</strong>Meet classmates and join activities.</div><div class='info-card'><strong>Participate</strong>Discover events happening on campus.</div></div>"
    })
    .when("/courses", {
      template: "<h2>Our Courses</h2><p>Explore some popular areas of study.</p><ul><li>Computer Science and Web Development</li><li>Data Science and Analytics</li><li>Business and Management</li><li>Design and Digital Media</li></ul>"
    })
    .when("/events", {
      template: "<h2>Campus Events</h2><p>Take part in activities, learn new skills, and meet new people.</p><div class='cards'><div class='info-card'><strong>Tech Day</strong>Student project demonstrations and coding activities.</div><div class='info-card'><strong>Arts Festival</strong>Music, art, dance, and performances.</div><div class='info-card'><strong>Sports Meet</strong>Friendly competitions and team games.</div></div>"
    })
    .when("/contact", {
      template: "<h2>Contact Us</h2><p>Send a message to the Campus Hub team.</p><form class='contact-form' ng-submit='sendMessage()'><label>Your name</label><input ng-model='contactName' required placeholder='Enter your name'><label>Message</label><textarea ng-model='contactMessage' required rows='3' placeholder='Write your message'></textarea><button type='submit'>Send message</button><p class='notice' ng-if='sent'>Thanks! Your message has been noted.</p></form>"
    })
    .otherwise({ redirectTo: "/home" });
})
.controller("SiteController", function ($scope) {
  $scope.sendMessage = function () {
    $scope.sent = true;
  };
});
