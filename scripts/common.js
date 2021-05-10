const signin_template = document.createElement('template');
signin_template.innerHTML = '<div class="modal-content rounded-0">' +
                                '<div class="modal-header pb-0 no-border">' +
                                     '<h3 class="modal-title" id="modalLabel">Welcome Back</h3>' + 
                                     '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                         '<span aria-hidden="true">&times;</span>' +
                                     '</button>' +
                                '</div>' +
                                '<div class="modal-body">' +
                                     '<hr class="pt-3 separator">' +
                                     '<form>' +
                                         '<div class="form-group">' +
                                             '<label for="inputUsername">Username</label>' +
                                             '<input type="text" class="form-control" id="inputUsername" placeholder="Enter your username" required>' +
                                         '</div>' +
                                         '<div class="form-group"> ' +
                                            '<label for="inputPassword">Password</label> '+
                                            '<input type="password" class="form-control" id="inputPassword" placeholder="Enter your password" required>' +
                                        '</div>' +
                                        '<div class="form-group"> ' +
                                            '<button type="submit" class="btn btn-success btn-block rounded-0">Sign In</button>' +
                                                '<p class="gosignup"> Not a member? ' +
                                                    '<a data-target="#modalSignUp" data-toggle="modal" href="#modalSignUp" ' +
                                                         "onclick=$('#modalSignin').modal('hide')>Sign Up</a>" +
                                                '</p>' +
                                        '</div>' +
                                     '</form>' +
                                '</div>' +
                            '</div>';


const signup_template = document.createElement('template');
signup_template.innerHTML = '<div class="modal-content rounded-0">' +
                                 '<div class="modal-header pb-0 no-border">' +
                                     '<h3 class="modal-title" id="modalLabel">Get Started</h3>' +
                                     '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                         '<span aria-hidden="true">&times;</span>' +
                                     '</button>' +
                                  '</div>' +
                                '<div class="modal-body">' +
                                    '<hr class="pt-3 separator">' +
                                    '<form>' +
                                        '<div class="form-group">' +
                                            '<label for="inputName">Name</label>' +
                                            '<input type="text" class="form-control" id="inputName" placeholder="Enter your Name" required>' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="inputUsername">Username</label>' +
                                            '<input type="text" class="form-control" id="inputUsername" placeholder="Enter your username" required>' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="inputPassword">Password</label>' +
                                            '<input type="password" class="form-control" id="inputPassword" placeholder="Enter your Password" required>' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="inputConfirmPassword">Confirm Password</label>' +
                                            '<input type="password" class="form-control" id="inputConfirmPassword" placeholder="Re-enter your Password" required>' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<button type="submit" class="btn btn-success btn-block rounded-0">Sign Up</button>' +
                                        '</div>' +
                                    '</form>' +
                                '</div>' +
                            '</div>'; 
                            
                            

window.addEventListener("load",function() {
    var signin = document.getElementById('signin-modal');
    signin.innerHTML = signin_template.innerHTML;
    var signup = document.getElementById('signup-modal');
    signup.innerHTML = signup_template.innerHTML;
},false);                         