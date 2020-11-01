    // define model
    var modal = document.getElementById('id01');
    // Close login box when click the blank page
    window.onclick = function (event) {
        if (event.target == modal) {
            // hide this element
            modal.style.display = "none";
        }
    } 

    $().ready(function () {  
        $('#login').click(function () {  
            if ($('#username').val() == "" || $('#password').val() == "") {  
                alert("Username and password cannot be blank！");  
            }  
            else {  
                $.ajax({  
                    type: "POST",  
                    url: "Ajax/LoginHandler.ashx",  
                    data: "username=" + escape($('#username').val()) + "&password=" + escape($('#password').val()),  
                    beforeSend: function () {  
                        $("#loading").css("display", "block"); //Display loading and hide input box  
                        $("#login").css("display", "none");  
                    },  
                    success: function (msg) {  
                        $("#loading").hide(); //hide loading  
                        if (msg == "success") {  
                            //parent.tb_remove();  
                            parent.document.location.href = "index.html"; //Jump to index.html if login successfully
                            parent.tb_remove();  
                        }  
                        if (msg == "fail") {  
                            alert("We cannot find the username or password!");  
                        }  
                    },  
                    complete: function (data) {  
                        $("#loading").css("display", "none"); //Display loading and hide input box  
                        $("#login").css("display", "block");  
                    },  
                    error: function (XMLHttpRequest, textStatus, thrownError) {  
                    }  
                });  
            }  
        });  
    });  

    //Connect to the databse to check if the "admin" user exists
    if (username == "admin" && password == "1")  
    {  
        context.Response.Write("success");  
        //store session  
    }  
    else  
    {  
        context.Response.Write("fail");  
    } 