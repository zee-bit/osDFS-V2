(function($) {

  $('#team').parent().append('<ul class="list-item" id="newteam" name="team"></ul>');
  $('#team option').each(function(){
      $('#newteam').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#team').remove();
  $('#newteam').attr('id', 'team');
  $('#team li').first().addClass('init');
  $("#team").on("click", ".init", function() {
      $(this).closest("#team").children('li:not(.init)').toggle();
  });
  
  var allOptions = $("#team").children('li:not(.init)');
  $("#team").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#team").children('.init').html($(this).html());
      allOptions.toggle();
  });

  var marginSlider = document.getElementById('slider-margin');
  if (marginSlider != undefined) {
      noUiSlider.create(marginSlider, {
            start: [500],
            step: 10,
            connect: [true, false],
            tooltips: [true],
            range: {
                'min': 0,
                'max': 1000
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: '$ ',
            })
    });
  }
  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  $('#register-form').validate({
    rules : {
        first_name : {
            required: true,
        },
        last_name : {
            required: true,
        },
        company : {
            required: true
        },
        email : {
            required: true,
            email : true
        },
        phone_number : {
            required: true,
        }
    },
    onfocusout: function(element) {
        $(element).valid();
    },
});

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
})(jQuery);