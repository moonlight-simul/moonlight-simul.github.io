$(document).ready(function () {

  $('#search_term').keyup(function () {

      var searchField = $('#search_term').val();
      var regex = new RegExp(searchField, 'i');
      var output = '';

      $.getJSON('data/blues.json', function (data) {
        $.each(data, function (key, val) {
          if ((val.quiz.search(regex) != -1) || (val.answer.search(regex) != -1)) {
            output += '<div class="result_quiz">' + val.quiz + '</div>';
            output += '<div class="result_answer">' + val.answer + '</div>';
          }
        }
      );
        $('#search_results').html(output);
      });
    });
});
