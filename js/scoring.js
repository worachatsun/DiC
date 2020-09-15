$(document).ready(function () {
  function score_indicate() {
    let subject_points = [
      Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val()),
    ];

    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];

    $('#sum_indicate').text(sum);
  }

  function get_achievement() {
    // 変数「averageIndicate」に
    // 平均点数をHTML上のid="average_indicate"から取得して代入します。
    let averageIndicate = $('#average_indicate').text();
    console.log(averageIndicate);
    // もし「averageIndicate」が80以上なら"A"を返します。
    if (averageIndicate >= 80) {
      return 'A';
      // もし「averageIndicate」が60以上なら"B"を返します。
    } else if (averageIndicate >= 60) {
      return 'B';
      // もし「averageIndicate」が40以上なら"C"を返します。
      // もし「averageIndicate」がそれ以外の点数なら"D"を返します。
    } else {
      return 'D';
    }
  }
  // 各教科の点数を取得し、取得した点数から合格/不合格の判断を下すロジックを作ります。
  function get_pass_or_failure() {
    let subject_points = [
      Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val()),
    ];
    // 変数「number」に入力した教科の数を代入します。
    let number = subject_points.length;
    // 変数「judge」に"合格"を代入しておきます。
    let judge = '合格';
    // 入力したそれぞれの教科の点数が60点よりも低いと変数「judge」に"不合格"を再代入して「judge」を返します。
    // ヒント! 「javascript 点数 合格 不合格 ロジック」で検索してみてください。
    return pass_or_failure;
  }
  // 最終的なジャッジのロジックを作ります。
  function judgement() {
    // 変数「achievement」に「get_achievement()の戻り値」を代入します。
    let achievement = get_achievement();
    // 変数「pass_or_failure」に「get_pass_or_failure()の戻り値」を代入します。
    let pass_or_failure = get_pass_or_failure();
    // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}で${pass_or_failure}です」が出力される処理です。
    $('#declaration').append(
      `<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`
    );
  }
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(
    function () {
      score_indicate();
    }
  );
  // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function () {
    $('#evaluation').text(get_achievement());
  });
  // 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
  $('#btn-judge').click(function () {
    $('#judge').text(get_pass_or_failure());
  });
  // 「最終ジャッジ」(id="btn-declaration")ボタンを押したら「function judgement()」が出力される処理です。
  $('#btn-declaration').click(function () {});
});
