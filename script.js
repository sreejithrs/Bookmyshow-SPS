$(document).ready(function(){
    $("#submit-form").validate({
        errorElement: "em",
        errorPlacement: function (error, element) {

            $(element.parent("div").addClass("form-animate-error"));
            error.appendTo(element.parent("div"));
        },
        success: function (label) {
            $(label.parent("div").removeClass("form-animate-error"));
        },
        rules:{
            name:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            mob:{
                minlength:10,
                maxlength:10,
                required:true
            },
            address:{
                required:true,
                minlength:2
            },
            district:{
                required:true
            },
            zip:{
                required:true
            },
            message:{
                required:true,
                minlength:5,
                maxlength:400
            }
        },
        messages:{
            name: "Please enter your Name",
            email:{
                required:"Please enter your email",
                email:"Please enter valid Email Address"
            },
            mob:{
                required:"Please enter your Mobile Number",
                minlength: "Should contain atleast 10 Numbers",
                maxlength: "Should not exceed 10 Numbers"
            },
            message:{
                required:"Please type your message",
                minlength:"Please type atleast 5 characters",
                maxlength:"The message should not exceed 400 characters"
            },
            address:"Please enter your Address",
            district:"Please type your District",
        }
    })
})
