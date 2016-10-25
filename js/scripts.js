$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();

    var warningSignsResponses = [];
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSignsReplies = $(this).val();
      warningSignsResponses.push(warningSignsReplies);
    });
    var healthSymptomResponses = [];
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptomsReplies = $(this).val();
      healthSymptomResponses.push(healthSymptomsReplies);
    });
    var copingMethodsResponses = [];
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethodsReplies = $(this).val();
      copingMethodsResponses.push(copingMethodsReplies);
    });
    if (healthSymptomResponses.length >= 4 && warningSignsResponses.length >= 6 && copingMethodsResponses.length > 3) {
      $("#guidance").show();
      $("#good-job").hide();
      $("#give-up").hide();
    } else if (warningSignsResponses.length <= 4 && copingMethodsResponses.length >= 5) {
      $("#good-job").show();
      $("#guidance").hide();
      $("#give-up").hide();
    } else if (healthSymptomResponses.length >= 6 && warningSignsResponses.length >= 6 && copingMethodsResponses.length <= 3) {
      $("#give-up").show();
      $("#guidance").hide();
      $("#good-job").hide();
    }

  });
});
