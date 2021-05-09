var postId;

/**
 * This function will keep track of which post is asked for delete
 * @param {*} id 
 * @returns 
 */
function markForDelete(id) {
    postId = id; 
    return id;
}

/**
 * delete the selected post from all the posts available
 * @param postid 
 */
function deletePost(postid) {
    for (var index = 1; index <= 5; index++) {
        if (index == postId) {
            index = "post-" + index;
            document.getElementById(index).style.display = 'none';
        }
    }
}

/**
 * Function to view the entire post of the user.
 * The post information 
 * @param postid 
 */
function viewPost(id) {
    var owner= document.getElementById(`postowner-${id}`).textContent;
    var title = document.getElementById(`posttitle-${id}`).textContent;
    var info = document.getElementById(`postbody-${id}`).textContent;
    var postdetails = {
        "owner": owner,
        "title": title,
        "info": info
    };
    sessionStorage.setItem("postdetails", JSON.stringify(postdetails));
    window.location.href = "post.html";
}