const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns=document.querySelectorAll(".btn-next");
const progress=document.getElementById("progress");
const formSteps=document.querySelectorAll(".form-steps");
const progressSteps = document.querySelectorAll(".progress-step")


let currentStep = 0; 

let formStepsNum =0;
//Next buttonc
nextBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    });
});
//previous buttons
prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum--;
      updateFormSteps();
      updateProgressbar();
    });
});

//Updating progressbar
function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
  
    formSteps[formStepsNum].classList.add("form-step-active");
  }
  function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  
    const progressActive = document.querySelectorAll(".progress-step-active");
  
    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }
  //creating Preview

  function updatePreview(inputId, previewId,label) {
    var inputField = document.getElementById(inputId);
    var previewField = document.getElementById(previewId);
    inputField.addEventListener('input', function() {
        previewField.textContent = label+ " : "+ inputField.value;
    });
}


 function updatePreview2(inputId2, previewId2,label) {
   var inputField2 = document.getElementById(inputId2);
   var previewField2 = document.getElementById(previewId2);
   inputField2.addEventListener('change', function() {
       previewField2.textContent = label+ " : "+inputField2.value;
  });
}


updatePreview('name', 'previewName','name');
updatePreview('sureName', 'previewSureName','Sure Name');
updatePreview('age', 'previewAge','Age');
updatePreview2('gender', 'previewGender','Gender');
updatePreview2('agree', 'previewAgree','Agree with privacy terms');

updatePreview('volunteering', 'previewVolunteering','What Brings you to this Cause');
updatePreview('mode', 'previewMode','Participating Mode');
updatePreview('Goals', 'previewGoals','Goals');
updatePreview('Country', 'previewCountry','Country');
updatePreview('type', 'previewType','Assignment Type');

updatePreview('study', 'previewArea','Study Area');
updatePreview('degree', 'previewDegree','Highest Degree');
updatePreview('uni', 'previewUni','University/Institution');
updatePreview('year', 'previewYear','Completition Year');

updatePreview('hours', 'previewHours','Min Hours per Week');
updatePreview('num', 'previewNumber','Contact Number');
updatePreview('add', 'previewEmail','e-mail');


