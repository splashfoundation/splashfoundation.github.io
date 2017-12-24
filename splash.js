$(function(){
  $('#format-selector').change(function(){
    console.log($(this)[0].value);
  });

  $('#weeks button').click(function(){
    $('body').attr('data-week', $(this).attr('data-week'));
  });

  $('#groups button').click(function(){
    $('body').attr('data-group', $(this).attr('data-group'));
  });

});
