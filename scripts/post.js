/**
 * Displaying the comments given to the post
 */
function addComments() {
    var ele = document.getElementById('post-comment')
    var postComment = ele.value;
    if (postComment.trim() !== '') {
           document.getElementById('comments').innerHTML += `<p class="post-comments">${postComment}</p>`;
    }
    ele.value = '';
}

/**
 * Function to track the likes people give for the post
 */
var likes = 0;
function postLiked() {
    document.getElementById('likePost-btn').innerHTML='<i class="fa fa-thumbs-up"></i>' +" Liked!";
    likes++;
    if (likes == 1) {
        document.getElementById('commentCount').innerHTML="1 person like this!";
    } else {
        document.getElementById('commentCount').innerHTML= likes + " people have liked this!"; 
    }
}


function createEditBtn() {
    return `<button type="button" class="btn post-btn rounded-0" id="edit-btn" onclick="editPost();">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`;
}

function createSaveBtn() {
    return `<button type="button" class="btn post-btn rounded-0" id="save-btn" onclick="savePost();">Save <i class="fa fa-save" aria-hidden="true"></i></button>`;
}


/**
 * This function will fetch the post details from the session storage
 * Since the post details can occupy more space we use session storage
 * instead of cookies.
 */
window.onload = function () {
    var postdetailsObj = sessionStorage.getItem('postdetails');
    var details = JSON.parse(postdetailsObj);
    var editBtn = createEditBtn();
    document.getElementById('post-owner').innerHTML = details["owner"];
    document.getElementById('action-btn').innerHTML = editBtn;
    document.getElementById('post-title').innerHTML = details["title"];
    document.getElementById('post-content').innerHTML = details["info"];
}


/**
 * This function is triggered when edit button is clicked on the post.
 * We dynamically make the content of the post editable to make changes
 * and save them using the save button
 */
function editPost() {
    var saveBtn = createSaveBtn();
    document.getElementById('post-title').contentEditable = "true";
    document.getElementById('post-title').style.border = "1px solid #e60073";
    document.getElementById('post-content').contentEditable = "true";
    document.getElementById('post-content').style.border = "1px solid #e60073";
    document.getElementById('action-btn').innerHTML = saveBtn;
}


/**
 * This function is triggered when save button is clicked on the post.
 * We saves the content of the post and make the fields readable
 * The save button is repaced with edit button
 */
function savePost() {
    var editBtn = createEditBtn();
    document.getElementById('action-btn').innerHTML = editBtn;
    document.getElementById('post-title').contentEditable = "false";
    document.getElementById('post-title').style.border = "none";
    document.getElementById('post-content').contentEditable = "false";
    document.getElementById('post-content').style.border = "none";
    document.getElementById('post-title').innerHTML = "UPDATED: " + document.getElementById('post-title').innerHTML;
    document.getElementById('post-content').innerHTML = "UPDATED: " + document.getElementById('post-content').innerHTML;    
}
