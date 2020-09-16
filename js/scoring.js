$(document).ready(function () {
  function score_indicate() {
    let subject_points = [
      Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val()),
    ];
    let sum = 0;
    subject_points.map((point) => {
      sum += point;
    });

    $('#sum_indicate').text(sum);
    $('#average_indicate').text(sum / subject_points.length);
  }

  function get_achievement() {
    let averageIndicate = $('#average_indicate').text();
    if (averageIndicate >= 80) {
      return 'A';
    } else if (averageIndicate >= 60) {
      return 'B';
    } else if (averageIndicate >= 60) {
      return 'C';
    } else {
      return 'D';
    }
  }

  function get_pass_or_failure() {
    let subject_points = [
      Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val()),
    ];
    let isFail = subject_points.some((point) => point < 60);
    return isFail ? 'Fail' : 'Pass';
  }

  function judgement() {
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    if ($('#alert-indicate')) $('#alert-indicate').remove();
    $('#declaration').append(
      `<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`
    );
  }
  $('#national_language, #english, #mathematics, #science, #society').change(
    function () {
      score_indicate();
    }
  );
  $('#btn-evaluation').click(function () {
    $('#evaluation').text(get_achievement());
  });
  $('#btn-judge').click(function () {
    $('#judge').text(get_pass_or_failure());
  });
  $('#btn-declaration').click(function () {
    $('#declaration').text(judgement());
  });
});
