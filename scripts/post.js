function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';          
    a.value=a.defaultValue;
}
var likes = 0;
function postLiked() {
document.getElementById('likeBlog').innerHTML='<i class="fa fa-thumbs-up"></i>' +" Liked!";
likes++;
if (likes == 1) {
    document.getElementById('commentCount').innerHTML="1 person likes this!";
} else {
    document.getElementById('commentCount').innerHTML= likes + " people have liked this!";
}
}