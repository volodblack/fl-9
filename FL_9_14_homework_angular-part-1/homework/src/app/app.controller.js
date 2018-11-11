networkWall.controller('AddPost', function($scope) {
    $scope.posts = posts;
    $scope.newPost = newPost;
    
    $scope.addPost = function() {
        $scope.posts.push($scope.newPost);
        $scope.newPost = {
            username: 'Natasha Milostrone',
            userphoto: 'assets/img/photo-4.jpg',
            likes: 0
        };
    };
    
    $scope.likeOrDisLike = function($event) {
        if ($event.target.classList.contains('liked')) {
            $event.target.nextElementSibling.innerText --;
        } else {
            $event.target.nextElementSibling.innerText ++;
        }
    };
});