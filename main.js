//script.google.com/macros/s/AKfycby4vkLvOmWmMxCm2Y4WfWqW79AtZIhuKPnW0EGrjMJ-Y4yyCPwj23ShJ5iAY6bcT36M/exec

//Validating the Form

$("#submit-form").validate({
  rules: {
    name: {
      pattern: /^[a-zA-Z]+$/,
      required: true,
    },
    //phone: {
    //  pattern: /^\+?[1-9][0-9]{9}$/,
    //},
  },
  submitHandler: function (form) {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycby4vkLvOmWmMxCm2Y4WfWqW79AtZIhuKPnW0EGrjMJ-Y4yyCPwj23ShJ5iAY6bcT36M/exec",
      data: $(form).serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        form.reset();
        // window.location.reload();
      },
      error: function (err) {
        alert("Something went wrong");
      },
    });
  },
});
